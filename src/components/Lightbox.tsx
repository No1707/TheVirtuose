"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Work } from "@/lib/works";
import Screen from "./Screen";
import { useI18n } from "@/i18n/I18nProvider";
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
  const { dict } = useI18n();
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

    // Freeze background scroll WITHOUT changing overflow (which would remove the
    // scrollbar and shift the layout, including the fixed nav). Stop Lenis so it
    // doesn't drive scroll, and guard wheel/touch so native scroll can't either.
    lenis?.stop();
    const prevent = (e: Event) => e.preventDefault();
    window.addEventListener("wheel", prevent, { passive: false });
    window.addEventListener("touchmove", prevent, { passive: false });

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") requestClose();
    }
    window.addEventListener("keydown", onKey);
    const id = window.setTimeout(() => closeRef.current?.focus(), 20);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", prevent);
      window.removeEventListener("touchmove", prevent);
      window.clearTimeout(id);
      lenis?.start();
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
      <div
        className={`${styles.stage} ${
          current.vertical ? styles.stageVertical : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
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
            <span className="label">{dict.nav.close}</span>
            <span className={styles.x} aria-hidden="true">
              ✕
            </span>
          </button>
        </div>

        <div
          className={`${styles.player} ${
            current.vertical ? styles.playerVertical : ""
          }`}
        >
          {current.videoUrl ? (
            <video
              className={styles.video}
              src={current.videoUrl}
              poster={current.posterUrl}
              controls
              autoPlay
              playsInline
              preload="metadata"
            />
          ) : (
            <Screen
              tone={current.tone}
              bars={!current.vertical}
              vertical={current.vertical}
            />
          )}
        </div>
      </div>
    </div>
  );
}
