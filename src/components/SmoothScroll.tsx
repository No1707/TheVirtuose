"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Wraps the app in Lenis smooth scrolling. Disabled automatically when the
 * visitor prefers reduced motion so the page falls back to native scroll.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    // Expose for components that need to scroll programmatically.
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    function loop(time: number) {
      lenis.raf(time);
      raf.current = requestAnimationFrame(loop);
    }
    raf.current = requestAnimationFrame(loop);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      lenis.destroy();
      (window as unknown as { lenis?: Lenis }).lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
