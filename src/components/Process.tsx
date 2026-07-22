"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import styles from "./Process.module.css";

/** A genuine sequence — so numbered steps encode real order. */
const STEPS = [
  {
    n: "01",
    t: "Brief & direction",
    d: "We start with the idea and the outcome, not the gear. One conversation to agree what the film has to do.",
  },
  {
    n: "02",
    t: "Shoot",
    d: "A small, fast crew. Lit for contrast, framed with intent — we capture less footage and more moments.",
  },
  {
    n: "03",
    t: "Edit & color",
    d: "Where the film is actually made. Pace, sound, and a warm grade, refined over a tight round of notes.",
  },
  {
    n: "04",
    t: "Deliver",
    d: "Every cut and every aspect ratio your channels need, mastered and handed over on schedule.",
  },
];

export default function Process() {
  return (
    <section className={`${styles.wrap} section hair-top`} aria-label="Process">
      <div className="shell">
        <header className={styles.head}>
          <span className="label">How it runs · 04 steps</span>
          <h2 className={`${styles.title} display`}>
            From brief to master, without the agency drag.
          </h2>
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
