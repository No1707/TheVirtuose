import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <span className={`${styles.brand} serif`}>The Virtuose</span>
            <span className="label">Your Video Production Partner</span>
          </div>

          <nav className={styles.cols} aria-label="Footer">
            <div className={styles.col}>
              <span className={`${styles.colHead} label`}>Index</span>
              <Link href="/work">Work</Link>
              <Link href="/#services">Services</Link>
              <Link href="/#studio">Studio</Link>
              <Link href="/#contact">Contact</Link>
            </div>
            <div className={styles.col}>
              <span className={`${styles.colHead} label`}>Elsewhere</span>
              <a
                href="https://www.instagram.com/the_virtu0se"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/alec-žiga"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:contact@the-virtuose.com">Email</a>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <span className={`${styles.legal} mono`}>
            © {year} The Virtuose — French Made, based in Andorra
          </span>
          <span className={`${styles.coords} mono`}>42.5063° N, 1.5218° E</span>
        </div>
      </div>
    </footer>
  );
}
