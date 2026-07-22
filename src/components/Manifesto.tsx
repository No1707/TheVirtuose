"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import styles from "./Manifesto.module.css";

/** A word-by-word revealed statement. Order carries no meaning, so no numbers. */
const WORDS =
  "We don't make content. We direct attention — building films that hold a room, earn a second watch, and make a brand impossible to scroll past."
    .split(" ");

const EMPHASIS = new Set(["direct", "attention", "impossible", "scroll"]);

export default function Manifesto() {
  return (
    <section className={`${styles.wrap} section`} aria-label="Studio statement">
      <div className="shell">
        <span className={`${styles.eyebrow} label`}>The premise</span>
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
