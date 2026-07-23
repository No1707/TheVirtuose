"use client";

import { motion } from "framer-motion";
import { lineMask, EASE } from "@/lib/motion";
import Timecode from "./Timecode";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./ContactCTA.module.css";

const WhatsAppIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.89 6.99c0 5.45-4.44 9.88-9.89 9.88M20.52 3.45A11.82 11.82 0 0012.05 0C5.46 0 .1 5.34.1 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.34-1.65a12.06 12.06 0 005.7 1.45h.01c6.58 0 11.94-5.34 11.94-11.9a11.82 11.82 0 00-3.48-8.45" />
  </svg>
);

const MailIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M2 5.5A2.5 2.5 0 014.5 3h15A2.5 2.5 0 0122 5.5v13a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 18.5v-13Zm2.2.5 7.8 5.2L19.8 6H4.2Zm15.8 1.3-8 5.34-8-5.34V18.5c0 .28.22.5.5.5h15a.5.5 0 00.5-.5V7.3Z" />
  </svg>
);

const LinkedInIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 11 0-4.13 2.06 2.06 0 010 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const CONTACTS = [
  {
    label: "WhatsApp",
    value: "+33 7 60 98 33 47",
    href: "https://wa.me/33760983347",
    external: true,
    icon: WhatsAppIcon,
  },
  {
    label: "Email",
    value: "contact@the-virtuose.com",
    href: "mailto:contact@the-virtuose.com",
    external: false,
    icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: "Alec Žigić",
    href: "https://www.linkedin.com/in/alec-zigic/",
    external: true,
    icon: LinkedInIcon,
  },
];

export default function ContactCTA() {
  const { dict } = useI18n();
  const LINES = dict.contact.lines;
  return (
    <section className={`${styles.wrap} section`} id="contact">
      <div className="shell">
        <div className={styles.top}>
          <span className="label">{dict.contact.eyebrow}</span>
          <span className={`${styles.tc} mono tnum`}>
            <Timecode />
          </span>
        </div>

        <h2 className={`${styles.title} display`}>
          {LINES.map((line, i) => (
            <span key={line} className={styles.lineWrap}>
              <motion.span
                className={styles.line}
                variants={lineMask}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>

        <div className={styles.grid}>
          <motion.p
            className={styles.lede}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          >
            {dict.contact.lede}
          </motion.p>

          <div className={styles.actions}>
            {CONTACTS.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                className={styles.contactBtn}
                data-cursor="link"
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.4 + i * 0.08 }}
              >
                <span className={styles.btnIcon} aria-hidden="true">
                  {c.icon}
                </span>
                <span className={styles.btnText}>
                  <span className={`${styles.btnLabel} label`}>{c.label}</span>
                  <span className={`${styles.btnValue} serif`}>{c.value}</span>
                </span>
                <span className={styles.btnArrow} aria-hidden="true">
                  ↗
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
