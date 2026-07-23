"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EASE } from "@/lib/motion";
import Reveal from "./Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./About.module.css";

export default function About() {
  const { dict } = useI18n();

  return (
    <section className={`${styles.wrap} section hair-top`} id="studio">
      <div className="shell">
        <div className={styles.grid}>
          <div className={styles.portraitCol}>
            <motion.div
              className={styles.portrait}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 1, ease: EASE }}
            >
              <Image
                src="/studio/alec.png"
                alt={dict.about.portraitLabel}
                fill
                sizes="(max-width: 860px) 100vw, 40vw"
                className={styles.portraitImg}
              />
            </motion.div>
            <span className={`${styles.plate} mono`}>{dict.about.plate}</span>

            <dl className={styles.stats}>
              {dict.about.stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <dd className={`${styles.statValue} serif tnum`}>{s.value}</dd>
                  <dt className={`${styles.statLabel} label`}>{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.copy}>
            <span className="label">{dict.about.eyebrow}</span>
            <Reveal>
              <h2 className={`${styles.title} display`}>{dict.about.title}</h2>
            </Reveal>
            <Reveal delay={1}>
              <p className={`${styles.intro} serif`}>{dict.about.intro}</p>
            </Reveal>
            {dict.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i + 2}>
                <p className={styles.body}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
