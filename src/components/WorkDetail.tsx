"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Work } from "@/lib/works";
import { lineMask, EASE } from "@/lib/motion";
import Screen from "./Screen";
import Reveal from "./Reveal";
import Footer from "./Footer";
import styles from "./WorkDetail.module.css";

export default function WorkDetail({
  work,
  next,
}: {
  work: Work;
  next: Work;
}) {
  return (
    <>
      <main id="main" className={styles.page}>
        <header className={styles.hero}>
          <div className="shell">
            <Link href="/#work" className={styles.back} data-cursor="link">
              <span aria-hidden="true">←</span> Index
            </Link>

            <div className={styles.metaTop}>
              <span className={`${styles.idx} mono`}>
                Reel {work.index} / {work.category}
              </span>
              <span className={`${styles.len} mono tnum`}>{work.length}</span>
            </div>

            <h1 className={`${styles.title} display`}>
              <span className={styles.lineWrap}>
                <motion.span
                  className={styles.line}
                  variants={lineMask}
                  initial="hidden"
                  animate="show"
                >
                  {work.title}
                </motion.span>
              </span>
            </h1>

            <motion.p
              className={styles.tagline}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            >
              {work.tagline}
            </motion.p>
          </div>
        </header>

        <motion.div
          className={styles.feature}
          initial={{ clipPath: "inset(6% 6% 6% 6%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
        >
          {/* Swap for footage: <Screen src={`/reels/${work.slug}.mp4`} ... /> */}
          <Screen tone={work.tone} label={`${work.client} — ${work.length}`} />
        </motion.div>

        <section className={`${styles.info} shell`}>
          <div className={styles.infoGrid}>
            <dl className={styles.specs}>
              <div className={styles.spec}>
                <dt className="label">Client</dt>
                <dd className="serif">{work.client}</dd>
              </div>
              <div className={styles.spec}>
                <dt className="label">Year</dt>
                <dd className="serif">{work.year}</dd>
              </div>
              <div className={styles.spec}>
                <dt className="label">Format</dt>
                <dd className="serif">{work.category}</dd>
              </div>
              <div className={styles.spec}>
                <dt className="label">Runtime</dt>
                <dd className="serif tnum">{work.length}</dd>
              </div>
            </dl>

            <div className={styles.narrative}>
              {work.narrative.map((p, i) => (
                <Reveal as="div" key={i} delay={i}>
                  <p className={styles.para}>{p}</p>
                </Reveal>
              ))}

              <div className={styles.tags}>
                <div className={styles.tagGroup}>
                  <span className="label">Role</span>
                  <ul>
                    {work.role.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.tagGroup}>
                  <span className="label">Deliverables</span>
                  <ul>
                    {work.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.gallery} shell`} aria-label="Frames">
          {Array.from({ length: work.frames }).map((_, i) => (
            <Reveal
              as="div"
              key={i}
              delay={i % 2}
              className={`${styles.frame} ${
                i % 3 === 0 ? styles.frameWide : ""
              }`}
            >
              <Screen
                tone={work.tone + i * 6}
                label={`FRAME ${(i + 1).toString().padStart(3, "0")}`}
                bars={false}
              />
            </Reveal>
          ))}
        </section>

        <section className={styles.nextWrap}>
          <Link href={`/work/${next.slug}`} className={styles.next} data-cursor="play">
            <div className="shell">
              <span className="label">Next project</span>
              <div className={styles.nextRow}>
                <span className={`${styles.nextTitle} display`}>
                  {next.title}
                </span>
                <span className={styles.nextArrow} aria-hidden="true">
                  →
                </span>
              </div>
              <span className={`${styles.nextMeta} mono`}>
                {next.client} · {next.category} · {next.length}
              </span>
            </div>
            <div className={styles.nextBg} aria-hidden="true">
              <Screen tone={next.tone} bars={false} />
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
