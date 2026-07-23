"use client";

import { motion } from "framer-motion";
import { lineMask, EASE } from "@/lib/motion";
import Timecode from "./Timecode";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  const { dict } = useI18n();
  const LINES = dict.contact.lines;
  return (
    <section className={`${styles.wrap} section`} id="contact">
      <div className="shell">
        <div className={styles.top}>
          <span className="label">{dict.contact.eyebrow}</span>
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
            {dict.contact.lede}
          </motion.p>

          <div className={styles.actions}>
            <a
              href={`mailto:contact@the-virtuose.com?subject=${encodeURIComponent(
                dict.contact.subject
              )}`}
              className={styles.emailBtn}
              data-cursor="link"
            >
              <span className={styles.emailLabel}>{dict.contact.cta}</span>
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
                href="https://www.linkedin.com/in/alec-zigic/"
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
