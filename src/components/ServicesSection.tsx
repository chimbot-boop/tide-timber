"use client";

import * as motion from "motion/react-client";
import { SectionIntro } from "./SectionIntro";

const SERVICES = [
  {
    number: "01",
    title: "Case binding",
    body: "Hardcover books built with cloth or paper-covered boards, sewn sections, clean endpapers, and a spine that opens with dignity rather than drama.",
  },
  {
    number: "02",
    title: "Coptic stitch journals",
    body: "Exposed-spine notebooks that lie flat on the bench, made for artists, recipe keepers, field notes, and everyday records.",
  },
  {
    number: "03",
    title: "Family book repair",
    body: "Careful stabilisation for torn hinges, loose boards, tired corners, and treasured books that should stay in use rather than sit in a drawer.",
  },
  {
    number: "04",
    title: "Clamshell boxes",
    body: "Protective boxes made to measure for albums, letters, editions, and fragile objects that need a safe paper-lined home.",
  },
  {
    number: "05",
    title: "Edition binding",
    body: "Short runs for artists, writers, and small presses, planned with clear materials, repeatable processes, and quiet finish quality.",
  },
  {
    number: "06",
    title: "Workshop advice",
    body: "Plain-spoken guidance on paper, cloth, thread, repair limits, and the choices that make a binding last.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-t border-rule bg-surface py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionIntro
          eyebrow="Services"
          title="Binding, repair, and protective boxes."
          body="The offer is deliberately small. Each service reads as workshop craft rather than a catalogue of generic features. The cards should feel like labels pinned beside finished work."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.number}
              className={
                index === 0
                  ? "border border-text bg-bg p-6 sm:col-span-2 lg:col-span-1 lg:p-8"
                  : "border border-rule bg-bg p-6 lg:p-8"
              }
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -2 }}
            >
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
                {service.number}
              </p>
              <h3 className="mt-6 font-display text-2xl leading-tight tracking-[-0.02em] text-text md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 font-body text-sm leading-6 text-muted md:text-base md:leading-7">
                {service.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
