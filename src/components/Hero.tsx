"use client";

import { motion } from "framer-motion";
import { lineMask, EASE } from "@/lib/motion";
import Screen from "./Screen";
import styles from "./Hero.module.css";

const LINES = ["Video that makes", "brands look", "inevitable."];

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.bg}>
        {/* Swap for real footage: <Screen src="/reels/showreel.mp4" ... /> */}
        <Screen tone={18} bars={false} className={styles.screen} />
        <div className={styles.veil} />
      </div>

      <div className={styles.content}>
        <motion.div
          className={styles.eyebrow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        >
          <span className="label">French Made · Andorra</span>
          <span className={styles.dot} aria-hidden="true" />
          <span className="label">Est. Reel 2021</span>
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
          <a href="/work" className={styles.cta} data-cursor="play">
            <span className={styles.ctaGlyph} aria-hidden="true">
              ▸
            </span>
            Watch the reel
          </a>
          <p className={styles.lede}>
            An external video production partner for brands that would rather be
            felt than scrolled past.
          </p>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        aria-label="Scroll to explore"
      >
        <span className="label">Scroll</span>
        <span className={styles.scrollLine} aria-hidden="true" />
      </motion.a>
    </section>
  );
}
