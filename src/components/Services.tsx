"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import Screen from "./Screen";
import styles from "./Services.module.css";

interface Service {
  title: string;
  runtime: string;
  line: string;
  body: string;
  tone: number;
}

const SERVICES: Service[] = [
  {
    title: "Advertising",
    runtime: "00:06 – 00:60",
    line: "Spots that earn a second watch.",
    body: "Broadcast and online films built on a single idea and a tight cut — engineered to perform in the feed and hold up on a big screen.",
    tone: 12,
  },
  {
    title: "Social & Reels",
    runtime: "00:07 – 00:30",
    line: "Vertical-native, hook-first.",
    body: "Thumb-stopping short form designed for the platform, not squeezed into it. Delivered as repeatable systems, not one-offs.",
    tone: 210,
  },
  {
    title: "Brand Films",
    runtime: "01:00 – 03:00",
    line: "The film that becomes the brand.",
    body: "Cinematic pieces that give a company a face and a feeling — the anchor asset everything else references.",
    tone: 26,
  },
  {
    title: "Long Form & Podcast",
    runtime: "20:00 +",
    line: "Depth, cut for reach.",
    body: "Multicam series and founder conversations, edited for pace and sliced into a month of short-form pulls from a single shoot.",
    tone: 200,
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className={`${styles.wrap} section hair-top`} id="services">
      <div className="shell">
        <header className={styles.head}>
          <span className="label">What we shoot · 04 channels</span>
          <h2 className={`${styles.title} display`}>Built for every runtime.</h2>
        </header>

        <div className={styles.grid}>
          <ul className={styles.list}>
            {SERVICES.map((s, i) => (
              <li key={s.title}>
                <motion.button
                  className={`${styles.row} ${active === i ? styles.on : ""}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
                  aria-expanded={active === i}
                >
                  <span className={`${styles.runtime} mono tnum`}>
                    {s.runtime}
                  </span>
                  <span className={`${styles.name} serif`}>{s.title}</span>
                  <span className={styles.line}>{s.line}</span>
                  <span className={styles.plus} aria-hidden="true" />

                  <div className={styles.detail}>
                    <p className={styles.body}>{s.body}</p>
                  </div>
                </motion.button>
              </li>
            ))}
          </ul>

          <div className={styles.previewCol} aria-hidden="true">
            <div className={styles.previewSticky}>
              {SERVICES.map((s, i) => (
                <div
                  key={s.title}
                  className={`${styles.preview} ${
                    active === i ? styles.previewOn : ""
                  }`}
                >
                  <Screen tone={s.tone} label={s.runtime} />
                </div>
              ))}
              <span className={`${styles.previewTag} mono`}>
                {SERVICES[active].title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
