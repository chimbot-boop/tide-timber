"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ImageProof } from "./ImageProof";
import { SectionIntro } from "./SectionIntro";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  projectType: z.string().min(2, "Enter the project type"),
  message: z.string().min(20, "Tell us a little more about the book"),
});

type FormValues = z.infer<typeof schema>;

const details = [
  ["Address", "14 Stonegate, York, YO1 8AS"],
  ["Phone", "01904 555 012"],
  ["Email", "hello@designcontractbindery.co.uk"],
  ["Hours", "Tuesday to Friday, 9:30 to 17:00. Saturday by appointment. Closed Sunday and Monday."],
];

const inputClass = "w-full rounded-none border border-rule bg-surface px-4 py-3 font-body text-base text-text transition-colors duration-200 placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

export function ContactSection() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setSent(false);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: values.name, email: values.email, message: `${values.projectType}\n\n${values.message}` }),
    });
    if (response.ok) {
      setSent(true);
      reset();
    }
  }

  return (
    <section id="contact" className="border-t border-rule bg-bg py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <SectionIntro eyebrow="Contact" title="Bring a book to the bench." body="Send a note with the condition of the book, the kind of binding you have in mind, or the object that needs a box. The fictional workshop replies with clear next steps and no unnecessary fuss." />
          <motion.div className="mt-8 border border-rule bg-surface p-6 lg:p-8" initial={{ opacity: 0, y: reduce ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: reduce ? 0.01 : 0.55 }}>
            {details.map(([label, text]) => (
              <div key={label} className="border-t border-rule py-4 first:border-t-0 first:pt-0 last:pb-0">
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">{label}</p>
                <p className="mt-2 font-body text-base leading-7 text-text">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div className="border border-text bg-surface p-6 lg:p-8" initial={{ opacity: 0, y: reduce ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: reduce ? 0.01 : 0.55, delay: reduce ? 0 : 0.12 }}>
          <ImageProof src="/images/workshop-window-paper-dust.jpg" alt="Warm daylight falling across a paper cutting bench in a quiet bindery." caption="Window light across the cutting bench." aspect="landscape" />
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="mb-2 block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">Name</label>
              <input id="name" className={inputClass} {...register("name")} />
              {errors.name && <p className="mt-2 text-sm text-accent">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">Email</label>
              <input id="email" type="email" className={inputClass} {...register("email")} />
              {errors.email && <p className="mt-2 text-sm text-accent">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="projectType" className="mb-2 block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">Project type</label>
              <input id="projectType" className={inputClass} {...register("projectType")} />
              {errors.projectType && <p className="mt-2 text-sm text-accent">{errors.projectType.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">Message</label>
              <textarea id="message" className={`${inputClass} min-h-32 resize-y`} {...register("message")} />
              {errors.message && <p className="mt-2 text-sm text-accent">{errors.message.message}</p>}
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center border border-accent bg-accent px-5 py-3 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-bg transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg" disabled={isSubmitting}>
              {isSubmitting ? "Sending" : "Send enquiry"}
            </button>
            {sent && <p className="border border-rule bg-bg p-4 font-body text-sm leading-6 text-text">Enquiry received. The fictional workshop will reply with clear next steps.</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
