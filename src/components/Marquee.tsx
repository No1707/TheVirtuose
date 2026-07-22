import styles from "./Marquee.module.css";

const CLIENTS = [
  "Maison Lumière",
  "Atelier V728",
  "Kösk Studios",
  "Vireo",
  "Béton Brut",
  "Halden",
  "Studio Norr",
  "Édition Neuf",
];

export default function Marquee() {
  return (
    <section className={styles.wrap} aria-label="Selected clients">
      <div className={styles.labelRow}>
        <span className="label">Trusted by brands who sweat the details</span>
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
