"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./Process.module.css";

export default function Process() {
  const { dict } = useI18n();
  /** A genuine sequence — so numbered steps encode real order. */
  const STEPS = dict.process.steps.map((s, i) => ({
    n: String(i + 1).padStart(2, "0"),
    ...s,
  }));

  return (
    <section
      className={`${styles.wrap} section hair-top`}
      aria-label={dict.process.aria}
    >
      <div className="shell">
        <header className={styles.head}>
          <span className="label">{dict.process.eyebrow}</span>
          <h2 className={`${styles.title} display`}>{dict.process.title}</h2>
        </header>

        <ol className={styles.grid}>
          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              className={styles.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
            >
              <span className={`${styles.n} mono`}>{s.n}</span>
              <h3 className={`${styles.stepTitle} serif`}>{s.t}</h3>
              <p className={styles.stepBody}>{s.d}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
