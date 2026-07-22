"use client";

import { motion } from "framer-motion";
import { lineMask, EASE } from "@/lib/motion";
import Timecode from "./Timecode";
import styles from "./ContactCTA.module.css";

const LINES = ["Let's", "roll."];

export default function ContactCTA() {
  return (
    <section className={`${styles.wrap} section`} id="contact">
      <div className="shell">
        <div className={styles.top}>
          <span className="label">Get in touch</span>
          <span className={`${styles.tc} mono tnum`}>
            <Timecode />
          </span>
        </div>

        <h2 className={`${styles.title} display`}>
          {LINES.map((line, i) => (
            <span key={line} className={styles.lineWrap}>
              <motion.span
                className={styles.line}
                variants={lineMask}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>

        <div className={styles.grid}>
          <motion.p
            className={styles.lede}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          >
            Tell us what you&rsquo;re making and when it needs to land. We reply
            to every serious brief within one working day.
          </motion.p>

          <div className={styles.actions}>
            <a
              href="mailto:contact@the-virtuose.com?subject=New%20project%20—%20The%20Virtuose"
              className={styles.emailBtn}
              data-cursor="link"
            >
              <span className={styles.emailLabel}>Start a project</span>
              <span className={styles.email}>contact@the-virtuose.com</span>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </a>

            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/the_virtu0se"
                target="_blank"
                rel="noreferrer"
                className={styles.social}
              >
                Instagram
                <span className={styles.handle}>@the_virtu0se</span>
              </a>
              <a
                href="https://www.linkedin.com/in/alec-žiga"
                target="_blank"
                rel="noreferrer"
                className={styles.social}
              >
                LinkedIn
                <span className={styles.handle}>Alec Žigić</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
