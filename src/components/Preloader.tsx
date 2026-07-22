"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";
import styles from "./Preloader.module.css";

/**
 * Opening title card. Counts frames 000 → 100 while the record "spins up",
 * then wipes away to reveal the page. Skipped instantly for reduced motion.
 */
export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setCount(100);
      setDone(true);
      return;
    }

    const lenis = (window as unknown as { lenis?: { stop(): void; start(): void } })
      .lenis;
    lenis?.stop();
    document.body.style.cursor = "wait";

    const total = 1800;
    const t0 = performance.now();
    let raf = 0;
    function tick(now: number) {
      const p = Math.min(1, (now - t0) / total);
      // ease-out so the last frames slow, like a reel settling
      const eased = 1 - Math.pow(1 - p, 2.2);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setDone(true), 260);
      }
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      lenis?.start();
      document.body.style.cursor = "";
    };
  }, []);

  useEffect(() => {
    if (!done) return;
    const lenis = (window as unknown as { lenis?: { start(): void } }).lenis;
    lenis?.start();
    document.body.style.cursor = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className={styles.pre}
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: EASE } }}
        >
          <div className={styles.inner}>
            <span className={`${styles.brand} label`}>The Virtuose</span>
            <span className={styles.tag}>Your Video Production Partner</span>
          </div>
          <div className={styles.counter}>
            <span className="mono tnum">{count.toString().padStart(3, "0")}</span>
            <span className={styles.pct}>%</span>
          </div>
          <div className={styles.bar}>
            <span
              className={styles.fill}
              style={{ transform: `scaleX(${count / 100})` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
