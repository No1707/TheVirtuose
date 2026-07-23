"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Cursor.module.css";

/**
 * Minimal follower cursor. On fine-pointer devices only. Expands into a
 * "PLAY" disc when hovering elements marked [data-cursor="play"], and a
 * dot when over links. Falls back to the native cursor everywhere else.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"idle" | "link" | "play">("idle");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine) return;

    // Hide the native cursor only while the custom one is driving.
    document.documentElement.classList.add("cursor-hidden");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const cur = { ...pos };
    let raf = 0;

    function render() {
      const speed = reduce ? 1 : 0.45;
      cur.x += (pos.x - cur.x) * speed;
      cur.y += (pos.y - cur.y) * speed;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
      }
      raf = requestAnimationFrame(render);
    }
    raf = requestAnimationFrame(render);

    function onMove(e: MouseEvent) {
      pos.x = e.clientX;
      pos.y = e.clientY;
      setVisible(true);
      const el = (e.target as HTMLElement)?.closest?.(
        "[data-cursor], a, button"
      ) as HTMLElement | null;
      if (!el) return setMode("idle");
      const c = el.getAttribute("data-cursor");
      if (c === "play") setMode("play");
      else setMode("link");
    }
    function onLeave() {
      setVisible(false);
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("cursor-hidden");
    };
  }, []);

  return (
    <div
      ref={dot}
      className={`${styles.cursor} ${styles[mode]} ${
        visible ? styles.on : ""
      }`}
      aria-hidden="true"
    >
      <span className={styles.play}>PLAY</span>
    </div>
  );
}
