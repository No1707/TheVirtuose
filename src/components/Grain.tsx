"use client";

import styles from "./Grain.module.css";

/**
 * Film grain + vignette overlay. Purely atmospheric, non-interactive, and
 * fixed above content. The grain is a tiled SVG turbulence so it costs
 * nothing at runtime beyond a single composited layer.
 */
export default function Grain() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.vignette} />
      <div className={styles.grain} />
    </div>
  );
}
