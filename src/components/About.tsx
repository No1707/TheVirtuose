"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import Reveal from "./Reveal";
import Screen from "./Screen";
import styles from "./About.module.css";

const STATS = [
  { k: "Since", v: "2021" },
  { k: "Based", v: "Andorra" },
  { k: "Films shipped", v: "120+" },
  { k: "Avg. turnaround", v: "10 days" },
];

export default function About() {
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
              {/* Swap for a real portrait: <img src="/studio/alec.jpg" ... /> */}
              <Screen tone={20} label="Alec Žigić · Founder" bars={false} />
            </motion.div>
            <span className={`${styles.plate} mono`}>
              A. ŽIGIĆ — DIRECTOR / EDITOR
            </span>
          </div>

          <div className={styles.copy}>
            <span className="label">The studio</span>
            <Reveal>
              <h2 className={`${styles.title} display`}>
                One editor&rsquo;s obsession, scaled into a studio.
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className={styles.body}>
                The Virtuose is a boutique video production partner founded by
                Alec Žigić — French made, based in Andorra, working with brands
                across Europe and beyond. We keep the team small on purpose: the
                person who directs your film is the person who cuts it.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className={styles.body}>
                No account layers, no handoffs, no house style forced onto your
                brand. Just a tight creative loop and an editor&rsquo;s eye for
                the two frames that make a film land.
              </p>
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
