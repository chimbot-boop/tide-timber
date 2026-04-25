"use client";

import * as motion from "motion/react-client";

const ITEMS = [
  {
    label: "Paper",
    text: "Warm parchment surfaces, cream panels, and thin rules echo deckled edges without using decorative textures everywhere.",
  },
  {
    label: "Tools",
    text: "Bone folder, awl, press, and linen thread guide the measured proportions and sharp, unrounded edges.",
  },
  {
    label: "Ink",
    text: "Ink black carries the architecture. Burgundy appears as a printer\u2019s mark, never a decorative flood.",
  },
];

export function MaterialBand() {
  return (
    <section className="border-t border-rule bg-bg py-12 sm:py-16">
      <motion.div
        className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-5 sm:px-8 md:grid-cols-3 lg:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        {ITEMS.map((item, index) => (
          <motion.div
            key={item.label}
            className="border-l border-rule pl-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
              {item.label}
            </p>
            <p className="mt-3 font-body text-sm leading-6 text-muted">
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
