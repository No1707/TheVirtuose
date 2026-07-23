"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./Manifesto.module.css";

export default function Manifesto() {
  const { dict } = useI18n();
  /** A word-by-word revealed statement. */
  const WORDS = dict.manifesto.statement.split(" ");
  const EMPHASIS = new Set<string>(dict.manifesto.emphasis);
  return (
    <section className={`${styles.wrap} section`} aria-label="Studio statement">
      <div className="shell">
        <span className={`${styles.eyebrow} label`}>
          {dict.manifesto.eyebrow}
        </span>
        <p className={`${styles.statement} display`}>
          {WORDS.map((word, i) => (
            <span key={`${word}-${i}`} className={styles.wordWrap}>
              <motion.span
                className={`${styles.word} ${
                  EMPHASIS.has(word.replace(/[—.,]/g, "")) ? styles.em : ""
                }`}
                initial={{ opacity: 0.12 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.03 }}
              >
                {word}
              </motion.span>{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
