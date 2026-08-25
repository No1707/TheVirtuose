import type { Variants } from "framer-motion";

/** Film-smooth deceleration, shared across the site. */
export const EASE = [0.16, 1, 0.3, 1] as const;

/** A line of text that masks up from below its own baseline. */
export const lineMask: Variants = {
  hidden: { y: "110%" },
  show: (i: number = 0) => ({
    y: "0%",
    transition: { duration: 0.9, ease: EASE, delay: 0.05 * i },
  }),
};

/** Generic fade-and-rise for blocks. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay: 0.06 * i },
  }),
};
