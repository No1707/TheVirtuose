"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import Image from "next/image";
import Reveal from "./Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./About.module.css";

export default function About({
  stats,
}: {
  stats: { label: string; value: string }[];
}) {
  const { dict } = useI18n();
  const STATS = stats.map((s) => ({ k: s.label, v: s.value }));
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
                priority={false}
              />
            </motion.div>
            <span className={`${styles.plate} mono`}>{dict.about.plate}</span>
          </div>

          <div className={styles.copy}>
            <span className="label">{dict.about.eyebrow}</span>
            <Reveal>
              <h2 className={`${styles.title} display`}>{dict.about.title}</h2>
            </Reveal>
            <Reveal delay={1}>
              <p className={styles.body}>{dict.about.body1}</p>
            </Reveal>
            <Reveal delay={2}>
              <p className={styles.body}>{dict.about.body2}</p>
            </Reveal>

            <dl className={styles.stats}>
              {STATS.map((s, i) => (
                <Reveal as="div" key={s.k} delay={i} className={styles.stat}>
                  <dt className="label">{s.k}</dt>
                  <dd className={`${styles.statV} serif`}>{s.v}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
