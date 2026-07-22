"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A running timecode in HH:MM:SS:FF at 24fps, counting up from mount — the
 * studio's signature "record is rolling" readout. Freezes at a static frame
 * when the visitor prefers reduced motion.
 */
export default function Timecode({
  className,
  fps = 24,
}: {
  className?: string;
  fps?: number;
}) {
  const [tc, setTc] = useState("00:00:00:00");
  const start = useRef<number>(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setTc("00:00:24:00");
      return;
    }

    start.current = performance.now();
    let raf = 0;
    let last = 0;

    function tick(now: number) {
      // Throttle DOM writes to the frame cadence to avoid churn.
      if (now - last >= 1000 / fps) {
        const elapsed = (now - start.current) / 1000;
        const h = Math.floor(elapsed / 3600) % 24;
        const m = Math.floor(elapsed / 60) % 60;
        const s = Math.floor(elapsed) % 60;
        const f = Math.floor((elapsed % 1) * fps);
        setTc(
          `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`
        );
        last = now;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [fps]);

  return (
    <span className={className} aria-hidden="true">
      {tc}
    </span>
  );
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}
