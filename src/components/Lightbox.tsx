"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Work } from "@/lib/works";
import Screen from "./Screen";
import styles from "./Lightbox.module.css";

/**
 * A minimal video lightbox. Enlarges the selected project's video over a dark,
 * blurred backdrop. Closes on backdrop click, the close button, or Escape.
 * Locks scroll and manages focus while open.
 *
 * Open/close is driven by internal state + CSS transitions (not
 * AnimatePresence) so the node is reliably added and removed.
 */
export default function Lightbox({
  work,
  onClose,
}: {
  work: Work | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false); // present in the DOM
  const [shown, setShown] = useState(false); // triggers the enter transition
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreTo = useRef<HTMLElement | null>(null);
  const keep = useRef<Work | null>(null); // last work, kept through exit anim

  // Enter: mount, then flip `shown` on the next frame to animate in.
  useEffect(() => {
    if (!work) return;
    keep.current = work;
    restoreTo.current = document.activeElement as HTMLElement | null;
    setMounted(true);
    const r = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(r);
  }, [work]);

  // Animate out, then notify the parent and unmount.
  const requestClose = useCallback(() => {
    setShown(false);
    window.setTimeout(() => {
      setMounted(false);
      onClose();
    }, 340);
  }, [onClose]);

  // Scroll lock, Escape handling, and focus while mounted.
  useEffect(() => {
    if (!mounted) return;

    const lenis = (
      window as unknown as { lenis?: { stop(): void; start(): void } }
    ).lenis;
    lenis?.stop();
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") requestClose();
    }
    window.addEventListener("keydown", onKey);
    const id = window.setTimeout(() => closeRef.current?.focus(), 20);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(id);
      lenis?.start();
      document.body.style.overflow = "";
      restoreTo.current?.focus?.();
    };
  }, [mounted, requestClose]);

  if (!mounted) return null;
  const current = work ?? keep.current;
  if (!current) return null;

  return (
    <div
      className={`${styles.overlay} ${shown ? styles.shown : ""}`}
      onClick={requestClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${current.title} — video`}
    >
      <div className={styles.stage} onClick={(e) => e.stopPropagation()}>
        <div className={styles.bar}>
          <div className={styles.titleWrap}>
            <span className={`${styles.title} serif`}>{current.title}</span>
            <span className={`${styles.meta} mono`}>
              {current.client} · {current.category} · {current.length}
            </span>
          </div>
          <button
            ref={closeRef}
            className={styles.close}
            onClick={requestClose}
            data-cursor="link"
          >
            <span className="label">Close</span>
            <span className={styles.x} aria-hidden="true">
              ✕
            </span>
          </button>
        </div>

        <div className={styles.player}>
          {/* Swap for footage: <Screen src={`/reels/${current.slug}.mp4`} /> */}
          <Screen tone={current.tone} />
        </div>
      </div>
    </div>
  );
}
