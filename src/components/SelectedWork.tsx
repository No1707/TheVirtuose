"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { works } from "@/lib/works";
import Screen from "./Screen";
import styles from "./SelectedWork.module.css";

export default function SelectedWork() {
  const [active, setActive] = useState<number | null>(null);
  const preview = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    if (!preview.current) return;
    // Position the floating preview near the cursor (desktop only).
    preview.current.style.setProperty("--mx", `${e.clientX}px`);
    preview.current.style.setProperty("--my", `${e.clientY}px`);
  }

  return (
    <section
      className={`${styles.wrap} section hair-top`}
      id="work"
      onMouseMove={onMove}
    >
      <div className="shell">
        <header className={styles.head}>
          <span className="label">Selected work · The reel</span>
          <div className={styles.headRow}>
            <h2 className={`${styles.title} display`}>Recent cuts.</h2>
            <span className={`${styles.count} mono`}>
              {works.length.toString().padStart(2, "0")} projects
            </span>
          </div>
        </header>

        <ul className={styles.list}>
          {works.map((w, i) => (
            <li key={w.slug}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.6, ease: EASE, delay: (i % 3) * 0.05 }}
              >
                <Link
                  href={`/work/${w.slug}`}
                  className={`${styles.row} ${
                    active !== null && active !== i ? styles.dim : ""
                  }`}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  data-cursor="play"
                >
                  <span className={`${styles.index} mono`}>{w.index}</span>
                  <span className={`${styles.name} serif`}>{w.title}</span>

                  {/* Inline thumbnail for touch / small screens */}
                  <span className={styles.thumb} aria-hidden="true">
                    <Screen tone={w.tone} label={w.length} />
                  </span>

                  <span className={styles.client}>{w.client}</span>
                  <span className={`${styles.cat} label`}>{w.category}</span>
                  <span className={`${styles.length} mono tnum`}>{w.length}</span>
                  <span className={`${styles.year} mono`}>{w.year}</span>
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>

        <Link href="/#contact" className={styles.allLink}>
          <span className="label">Have a project in mind?</span>
          <span className={styles.allArrow} aria-hidden="true">
            ↗
          </span>
        </Link>
      </div>

      {/* Cursor-following preview (fine pointer only) */}
      <div
        ref={preview}
        className={`${styles.floating} ${active !== null ? styles.showing : ""}`}
        aria-hidden="true"
      >
        {active !== null && (
          <Screen tone={works[active].tone} label={works[active].length} />
        )}
      </div>
    </section>
  );
}
