"use client";

import { motion } from "framer-motion";
import { lineMask, EASE } from "@/lib/motion";
import Screen from "./Screen";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./Hero.module.css";

export default function Hero({
  showreel,
}: {
  showreel?: { url?: string; posterUrl?: string };
}) {
  const { dict, locale } = useI18n();
  const LINES = dict.hero.lines;
  return (
    <section className={styles.hero} id="top">
      <div className={styles.bg} aria-hidden="true">
        <span className={styles.ruler} />
      </div>

      <div className={styles.content}>
        <div className={styles.copy}>
          <motion.div
            className={styles.eyebrow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          >
            <span className="label">{dict.hero.eyebrow}</span>
          </motion.div>

          <h1 className={`${styles.title} display`}>
            {LINES.map((line, i) => (
              <span key={line} className={styles.lineWrap}>
                <motion.span
                  className={styles.line}
                  variants={lineMask}
                  custom={i}
                  initial="hidden"
                  animate="show"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
          >
            <a href={`/${locale}/work`} className={styles.cta} data-cursor="play">
              <span className={styles.ctaGlyph} aria-hidden="true">
                ▸
              </span>
              {dict.hero.cta}
            </a>
          </motion.div>
        </div>

        <motion.div
          className={styles.media}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.55 }}
        >
          <Screen
            tone={18}
            bars={false}
            transparent
            src={showreel?.url}
            poster={showreel?.posterUrl}
          />
        </motion.div>
      </div>

      <motion.a
        href="#services"
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        aria-label={dict.hero.scroll}
      >
        <span className="label">{dict.hero.scroll}</span>
        <span className={styles.scrollLine} aria-hidden="true" />
      </motion.a>
    </section>
  );
}
