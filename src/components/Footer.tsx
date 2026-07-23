"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./Footer.module.css";

export default function Footer() {
  const { dict, locale } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <span className={`${styles.brand} serif`}>The Virtuose</span>
            <span className="label">{dict.footer.tagline}</span>
          </div>

          <nav className={styles.cols} aria-label={dict.footer.nav}>
            <div className={styles.col}>
              <span className={`${styles.colHead} label`}>
                {dict.footer.index}
              </span>
              <Link href={`/${locale}/work`}>{dict.nav.work}</Link>
              <Link href={`/${locale}#services`}>{dict.nav.services}</Link>
              <Link href={`/${locale}#studio`}>{dict.nav.studio}</Link>
              <Link href={`/${locale}#contact`}>{dict.nav.contact}</Link>
            </div>
            <div className={styles.col}>
              <span className={`${styles.colHead} label`}>
                {dict.footer.elsewhere}
              </span>
              <a
                href="https://www.instagram.com/the_virtu0se"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/alec-zigic/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:contact@the-virtuose.com">{dict.footer.email}</a>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <span className={`${styles.legal} mono`}>
            © {year} The Virtuose — {dict.footer.legal}
          </span>
          <span className={`${styles.coords} mono`}>42.5063° N, 1.5218° E</span>
        </div>
      </div>
    </footer>
  );
}
