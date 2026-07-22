"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";
import Timecode from "./Timecode";
import styles from "./Nav.module.css";

const LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Studio", href: "/#studio" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hide the bar on scroll-down, reveal on scroll-up.
  useEffect(() => {
    let last = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      setHidden(y > last && y > 220 && !open);
      setScrolled(y > 30);
      last = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // Lock scroll while the overlay menu is open.
  useEffect(() => {
    const lenis = (
      window as unknown as { lenis?: { stop(): void; start(): void } }
    ).lenis;
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`${styles.nav} ${hidden ? styles.up : ""} ${
          scrolled ? styles.solid : ""
        }`}
      >
        <div className={styles.row}>
          <Link href="/" className={styles.brand} aria-label="The Virtuose home">
            <span className={styles.mark}>The Virtuose</span>
            <span className={`${styles.meta} label`}>Andorra · 42.5°N</span>
          </Link>

          <nav className={styles.links} aria-label="Primary">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className={styles.right}>
            <Timecode className={`${styles.tc} mono tnum`} />
            <span className={styles.rec} aria-hidden="true" />
            <button
              className={styles.toggle}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-overlay"
            >
              <span className="label">{open ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-overlay"
            className={styles.overlay}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className={styles.menuInner}>
              <ul className={styles.menuList}>
                {LINKS.map((l, i) => (
                  <li key={l.href}>
                    <motion.span
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.7,
                        ease: EASE,
                        delay: 0.12 + i * 0.06,
                      }}
                      className={styles.menuLineWrap}
                    >
                      <Link
                        href={l.href}
                        className={styles.menuLink}
                        onClick={() => setOpen(false)}
                        data-cursor="link"
                      >
                        <span className={`${styles.menuIndex} mono`}>
                          0{i + 1}
                        </span>
                        {l.label}
                      </Link>
                    </motion.span>
                  </li>
                ))}
              </ul>
              <div className={styles.menuFoot}>
                <a href="mailto:contact@the-virtuose.com" className={styles.footLink}>
                  contact@the-virtuose.com
                </a>
                <div className={styles.footSocials}>
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
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
