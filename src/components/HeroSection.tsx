"use client";

import Image from "next/image";
import * as motion from "motion/react-client";

const heroParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const heroChild = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const heroImage = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: 0.38,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-bg pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32"
    >
      <motion.div
        className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:px-10"
        variants={heroParent}
        initial="hidden"
        animate="show"
      >
        <div>
          <motion.p
            variants={heroChild}
            className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent"
          >
            York, handbound since morning light
          </motion.p>
          <motion.h1
            variants={heroChild}
            className="mt-5 font-display text-[3.25rem] leading-[0.95] tracking-[-0.04em] text-text sm:text-[4.5rem] md:text-[5.75rem] md:leading-[0.9]"
          >
            Books repaired, bound, and boxed by hand.
          </motion.h1>
          <motion.p
            variants={heroChild}
            className="mt-7 max-w-2xl font-body text-lg leading-8 text-muted md:text-xl md:leading-9"
          >
            Design Contract Smoke Test is a fictional independent bindery
            tucked just inside York&apos;s old city walls. The workshop restores
            worn family volumes, binds new journals in cloth and paper, and
            makes protective boxes with the measured patience of letterpress
            work.
          </motion.p>
          <motion.div
            variants={heroChild}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-accent px-6 py-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bg transition-colors duration-200 ease-out hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              View services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-text px-6 py-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-text transition-colors duration-200 ease-out hover:bg-text hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Contact the workshop
            </a>
          </motion.div>
        </div>

        <motion.figure
          variants={heroImage}
          className="relative border border-text bg-secondary p-2"
        >
          <Image
            src="/images/hero-workbench-bone-folder.jpg"
            alt="Bone folder, awl, linen thread, and deckled paper on a bookbinder workbench."
            width={800}
            height={1000}
            priority
            className="aspect-[4/5] w-full object-cover rounded-none"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <figcaption className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
            Bone folder, awl, linen thread, and deckled paper on the bench.
          </figcaption>
        </motion.figure>
      </motion.div>
    </section>
  );
}
