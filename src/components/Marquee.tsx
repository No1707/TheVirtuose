"use client";

import { useI18n } from "@/i18n/I18nProvider";
import styles from "./Marquee.module.css";

export default function Marquee({ clients }: { clients: string[] }) {
  const { dict } = useI18n();
  const CLIENTS = clients;
  if (!CLIENTS.length) return null;
  return (
    <section className={styles.wrap} aria-label={dict.marquee.aria}>
      <div className={styles.labelRow}>
        <span className="label">{dict.marquee.label}</span>
      </div>
      <div className={styles.track} aria-hidden="true">
        <div className={styles.run}>
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <span key={i} className={styles.item}>
              <span className={`${styles.name} serif`}>{c}</span>
              <span className={styles.sep}>✦</span>
            </span>
          ))}
        </div>
      </div>
      <ul className="sr-only">
        {CLIENTS.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}
