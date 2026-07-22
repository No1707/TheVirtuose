"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { rise } from "@/lib/motion";

/**
 * Scroll-triggered reveal. Fades and rises its children once, when they enter
 * the viewport. Respects reduced motion via Framer's global reducer.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={rise}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </MotionTag>
  );
}
