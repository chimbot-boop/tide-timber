"use client";

import { motion, useReducedMotion } from "motion/react";

const items = [
  { label: "Paper", text: "Warm parchment surfaces, cream panels, and thin rules echo deckled edges without using decorative textures everywhere." },
  { label: "Tools", text: "Bone folder, awl, press, and linen thread guide the measured proportions and sharp, unrounded edges." },
  { label: "Ink", text: "Ink black carries the architecture. Burgundy appears as a printer's mark, never a decorative flood." },
];

export function MaterialBand() {
  const reduce = useReducedMotion();
  return (
    <motion.section className="border-t border-rule bg-bg py-12 sm:py-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: reduce ? 0.01 : 0.6 }}>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-5 sm:px-8 md:grid-cols-3 lg:px-10">
        {items.map((item, index) => (
          <motion.div key={item.label} className="border-l border-rule pl-5" initial={{ opacity: 0, y: reduce ? 0 : 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduce ? 0.01 : 0.45, delay: reduce ? 0 : index * 0.06 }}>
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">{item.label}</p>
            <p className="mt-3 font-body text-sm leading-6 text-muted">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
