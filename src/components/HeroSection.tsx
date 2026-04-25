"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "./Button";
import { ImageProof } from "./ImageProof";

export function HeroSection() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const heroParent = { hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: reduce ? 0 : 0.08 } } };
  const heroChild = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0.01 : 0.55, ease } },
  };

  return (
    <section id="home" className="relative overflow-hidden bg-bg pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 paper-grain opacity-35" aria-hidden="true" />
      <motion.div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:px-10" variants={heroParent} initial="hidden" animate="show">
        <div>
          <motion.p variants={heroChild} className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">York, handbound since morning light</motion.p>
          <motion.h1 variants={heroChild} className="mt-5 font-display text-[3.25rem] leading-[0.95] tracking-[-0.04em] text-text sm:text-[4.5rem] md:text-[5.75rem] md:leading-[0.9]">Books repaired, bound, and boxed by hand.</motion.h1>
          <motion.p variants={heroChild} className="mt-7 max-w-2xl font-body text-lg leading-8 text-muted md:text-xl md:leading-9">Design Contract Smoke Test is a fictional independent bindery tucked just inside York&apos;s old city walls. The workshop restores worn family volumes, binds new journals in cloth and paper, and makes protective boxes with the measured patience of letterpress work.</motion.p>
          <motion.div variants={heroChild} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#services">View services</Button>
            <Button href="#contact" variant="secondary">Contact the workshop</Button>
          </motion.div>
        </div>
        <motion.div variants={heroChild} transition={{ duration: reduce ? 0.01 : 0.55, delay: reduce ? 0 : 0.38, ease }}>
          <ImageProof src="/images/hero-workbench-bone-folder.jpg" alt="Bone folder, awl, linen thread, and deckled paper on a bookbinder workbench." caption="Bone folder, awl, linen thread, and deckled paper on the bench." priority aspect="portrait" />
        </motion.div>
      </motion.div>
    </section>
  );
}
