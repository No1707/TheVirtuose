"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Category, Work } from "@/lib/works";
import { EASE } from "@/lib/motion";
import Screen from "./Screen";
import Lightbox from "./Lightbox";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./WorkIndex.module.css";

export default function WorkIndex({ works }: { works: Work[] }) {
  const { dict, locale } = useI18n();
  const [filter, setFilter] = useState<Category | null>(null);
  const [active, setActive] = useState<Work | null>(null);

  /** Labels are translated; the values stay the CMS category strings. */
  const FILTERS: { label: string; value: Category | null }[] = [
    { label: dict.work.filters.all, value: null },
    { label: dict.work.filters.advertising, value: "Advertising" },
    { label: dict.work.filters.social, value: "Social & Reels" },
    { label: dict.work.filters.brand, value: "Brand Film" },
    { label: dict.work.filters.longform, value: "Long Form" },
  ];

  const shown = useMemo(
    () => (filter ? works.filter((w) => w.category === filter) : works),
    [filter, works]
  );

  return (
    <main id="main" className={styles.page}>
      <header className={`${styles.head} shell`}>
        <span className="label">{dict.work.eyebrow}</span>
        <h1 className={`${styles.title} display`}>{dict.work.title}</h1>
        <p className={styles.lede}>{dict.work.lede}</p>
      </header>

      <div className={`${styles.controls} shell`}>
        <div
          className={styles.filters}
          role="group"
          aria-label={dict.work.filterAria}
        >
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: (i % 3) * 0.05 }}
            className={styles.card}
            /* --a is the tile's aspect ratio: it drives flex-grow, flex-basis
               and the thumbnail box, which is what makes every row justify. */
            style={{ ["--a" as string]: `${w.vertical ? 9 / 16 : 16 / 10}` }}
          >
            <button
              type="button"
              className={styles.cardLink}
              onClick={() => setActive(w)}
              aria-label={`${dict.work.play} — ${w.title}, ${w.client}`}
            >
              <div className={styles.thumb}>
                <Screen
                  tone={w.tone}
                  label={w.length}
                  bars={false}
                  vertical={w.vertical}
                  poster={w.posterUrl}
                />
              </div>
              <div className={styles.meta}>
                <h2 className={`${styles.name} serif`}>{w.title}</h2>
                <span className={styles.client}>{w.client}</span>
                <div className={styles.tags}>
                  <span className="label">
                    {dict.work.categories[w.category] ?? w.category}
                  </span>
                  <span className={`${styles.year} mono`}>{w.year}</span>
                </div>
              </div>
            </button>
          </motion.article>
        ))}
      </section>

      <section className={`${styles.cta} shell`}>
        <span className="label">{dict.work.ctaLabel}</span>
        {/* The whole row is the link, so hover and click share one hit area. */}
        <Link
          href={`/${locale}#contact`}
          className={styles.ctaRow}
          data-cursor="link"
        >
          <span className={`${styles.ctaTitle} display`}>
            {dict.work.ctaTitle}
          </span>
          <span className={styles.ctaArrow} aria-hidden="true">
            ↗
          </span>
        </Link>
      </section>

      <Lightbox work={active} onClose={() => setActive(null)} />
    </main>
  );
}
