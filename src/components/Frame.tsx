"use client";

import styles from "./Frame.module.css";

/**
 * Viewfinder frame: a hairline border inset from the edges with corner ticks,
 * echoing camera safe-area markers. Fixed and non-interactive.
 */
export default function Frame() {
  return (
    <div className={styles.frame} aria-hidden="true">
      <span className={`${styles.tick} ${styles.tl}`} />
      <span className={`${styles.tick} ${styles.tr}`} />
      <span className={`${styles.tick} ${styles.bl}`} />
      <span className={`${styles.tick} ${styles.br}`} />
    </div>
  );
}
