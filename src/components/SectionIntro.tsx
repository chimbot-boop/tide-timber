"use client";

import { motion, useReducedMotion } from "motion/react";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
};

export function SectionIntro({ eyebrow, title, body, align = "left" }: SectionIntroProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-2xl space-y-5 text-center" : "max-w-2xl space-y-5"}
      initial={{ opacity: 0, y: reduce ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduce ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-[1.02] tracking-[-0.035em] text-text md:text-6xl">{title}</h2>
      <p className="font-body text-base leading-7 text-muted md:text-lg md:leading-8">{body}</p>
    </motion.div>
  );
}
