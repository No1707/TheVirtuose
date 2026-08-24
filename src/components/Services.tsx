"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import Screen from "./Screen";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./Services.module.css";

/** Tones are visual, not editorial, so they stay out of the dictionary. */
const TONES = [12, 210, 26, 200];

interface Preview {
  url?: string;
  posterUrl?: string;
  width?: number;
  height?: number;
}

export default function Services({
  previews = [],
}: {
  previews?: Preview[][];
}) {
  const { dict } = useI18n();
  const SERVICES = dict.services.items.map((s, i) => ({
    ...s,
    tone: TONES[i] ?? 0,
  }));

  // `active` drives the row highlight and clears on mouse-out.
  const [active, setActive] = useState<number | null>(null);
  // `preview` keeps the last-hovered channel on screen so the preview column
  // never goes blank.
  const [preview, setPreview] = useState(0);

  return (
    <section className={`${styles.wrap} section hair-top`} id="services">
      <div className="shell">
        <header className={styles.head}>
          <span className="label">{dict.services.eyebrow}</span>
        </header>

        <div className={styles.grid}>
          <ul className={styles.list}>
            {SERVICES.map((s, i) => (
              <li key={s.title}>
                <motion.button
                  className={`${styles.row} ${active === i ? styles.on : ""}`}
                  onMouseEnter={() => {
                    setActive(i);
                    setPreview(i);
                  }}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => {
                    setActive(i);
                    setPreview(i);
                  }}
                  onBlur={() => setActive(null)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
                >
                  <span className={`${styles.name} serif`}>{s.title}</span>
                </motion.button>
              </li>
            ))}
          </ul>

          <div className={styles.previewCol} aria-hidden="true">
            <div className={styles.previewSticky}>
              <span className={styles.previewTagRow}>
                <AnimatePresence initial={false}>
                  <motion.span
                    key={SERVICES[preview].title}
                    className={`${styles.previewTag} mono`}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.6, ease: EASE },
                      scale: { duration: 1.1, ease: EASE },
                    }}
                  >
                    {SERVICES[preview].title}
                  </motion.span>
                </AnimatePresence>
              </span>
              <div className={styles.previewFrame}>
                {SERVICES.map((s, i) => (
                  <div
                    key={s.title}
                    className={`${styles.preview} ${
                      preview === i ? styles.previewOn : ""
                    }`}
                  >
                    {previews[i]?.length ? (
                      <div className={styles.clips}>
                        {previews[i].map((c) => (
                          <div
                            key={c.url}
                            className={styles.clip}
                            style={{
                              ["--ar" as string]:
                                c.width && c.height ? c.width / c.height : 16 / 9,
                            }}
                          >
                            <Screen
                              tone={s.tone}
                              src={c.url}
                              poster={c.posterUrl}
                              fit="contain"
                              bars={false}
                              transparent
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <Screen tone={s.tone} bars={false} transparent />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
