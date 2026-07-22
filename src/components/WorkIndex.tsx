"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { works, type Category, type Work } from "@/lib/works";
import { EASE } from "@/lib/motion";
import Screen from "./Screen";
import Lightbox from "./Lightbox";
import styles from "./WorkIndex.module.css";

/** Filters mirror the categories on Alec's existing site nav. */
const FILTERS: { label: string; value: Category | null }[] = [
  { label: "All", value: null },
  { label: "Advertising", value: "Advertising" },
  { label: "Social & Reels", value: "Social & Reels" },
  { label: "Brand Films", value: "Brand Film" },
  { label: "Long Form", value: "Long Form" },
];

export default function WorkIndex() {
  const [filter, setFilter] = useState<Category | null>(null);
  const [active, setActive] = useState<Work | null>(null);

  const shown = useMemo(
    () => (filter ? works.filter((w) => w.category === filter) : works),
    [filter]
  );

  return (
    <main id="main" className={styles.page}>
      <header className={`${styles.head} shell`}>
        <span className="label">Selected work · The reel</span>
        <h1 className={`${styles.title} display`}>The work, in full.</h1>
        <p className={styles.lede}>
          Ads, social, brand films and long-form — a cross-section of what we
          shoot, cut and colour for brands across Europe and beyond.
        </p>
      </header>

      <div className={`${styles.controls} shell`}>
        <div className={styles.filters} role="group" aria-label="Filter by format">
          {FILTERS.map((f) => {
            const on = filter === f.value;
            return (
              <button
                key={f.label}
                className={`${styles.filter} ${on ? styles.filterOn : ""}`}
                onClick={() => setFilter(f.value)}
                aria-pressed={on}
              >
                {f.label}
              </button>
            );
          })}
        </div>
        <span className={`${styles.count} mono tnum`}>
          {shown.length.toString().padStart(2, "0")} /{" "}
          {works.length.toString().padStart(2, "0")}
        </span>
      </div>

      <section className={`${styles.grid} shell`} aria-live="polite">
        {shown.map((w, i) => (
          <motion.article
            key={w.slug}
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: (i % 3) * 0.05 }}
            className={styles.card}
          >
            <button
              type="button"
              className={styles.cardLink}
              data-cursor="play"
              onClick={() => setActive(w)}
              aria-label={`Play ${w.title} — ${w.client}`}
            >
              <div className={styles.thumb}>
                <Screen tone={w.tone} label={w.length} />
                <span className={`${styles.idx} mono`}>{w.index}</span>
              </div>
              <div className={styles.meta}>
                <h2 className={`${styles.name} serif`}>{w.title}</h2>
                <span className={styles.client}>{w.client}</span>
                <div className={styles.tags}>
                  <span className="label">{w.category}</span>
                  <span className={`${styles.year} mono`}>{w.year}</span>
                </div>
              </div>
            </button>
          </motion.article>
        ))}
      </section>

      <section className={`${styles.cta} shell`}>
        <span className="label">Have a project in mind?</span>
        <div className={styles.ctaRow}>
          <Link href="/#contact" className={`${styles.ctaTitle} display`}>
            Let&rsquo;s roll.
          </Link>
          <span className={styles.ctaArrow} aria-hidden="true">
            ↗
          </span>
        </div>
      </section>

      <Lightbox work={active} onClose={() => setActive(null)} />
    </main>
  );
}
