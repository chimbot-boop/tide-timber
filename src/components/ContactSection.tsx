"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SectionIntro } from "./SectionIntro";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  projectType: z.string().min(1, "Please select a project type."),
  message: z.string().min(20, "Message must be at least 20 characters."),
});

type ContactForm = z.infer<typeof contactSchema>;

const DETAILS = [
  { label: "Address", text: "14 Stonegate, York, YO1 8AS" },
  { label: "Phone", text: "01904 555 012" },
  { label: "Email", text: "hello@designcontractbindery.co.uk" },
  {
    label: "Hours",
    text: "Tuesday to Friday, 9:30 to 17:00. Saturday by appointment. Closed Sunday and Monday.",
  },
];

const inputClass =
  "w-full rounded-none border border-rule bg-surface px-4 py-3 font-body text-base text-text placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="border-t border-rule bg-bg py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionIntro
          eyebrow="Contact"
          title="Bring a book to the bench."
          body="Send a note with the condition of the book, the kind of binding you have in mind, or the object that needs a box. The fictional workshop replies with clear next steps and no unnecessary fuss."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="border border-rule bg-surface p-6 lg:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {DETAILS.map((detail, index) => (
              <div
                key={detail.label}
                className={`py-4 ${index > 0 ? "border-t border-rule" : ""} ${index === 0 ? "pt-0" : ""} ${index === DETAILS.length - 1 ? "pb-0" : ""}`}
              >
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
                  {detail.label}
                </p>
                <p className="mt-2 font-body text-base leading-7 text-text">
                  {detail.text}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="border border-text bg-surface p-6 lg:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.55,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {submitted ? (
              <div className="flex h-full items-center justify-center">
                <p className="font-body text-base leading-7 text-text">
                  Thank you. Your enquiry has been received. The workshop will
                  reply with clear next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className={inputClass}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-accent">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.co.uk"
                    className={inputClass}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-accent">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent"
                  >
                    Project type
                  </label>
                  <select
                    id="projectType"
                    className={inputClass}
                    {...register("projectType")}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    <option value="case-binding">Case binding</option>
                    <option value="coptic-journal">Coptic stitch journal</option>
                    <option value="repair">Family book repair</option>
                    <option value="clamshell-box">Clamshell box</option>
                    <option value="edition-binding">Edition binding</option>
                    <option value="advice">Workshop advice</option>
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-sm text-accent">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Describe your project or question"
                    className={`${inputClass} min-h-32`}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-accent">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-accent px-6 py-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bg transition-colors duration-200 ease-out hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Send enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
