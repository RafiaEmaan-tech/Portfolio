"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { experience } from "@/lib/site";
import { FadeUp, useScrollLine } from "../motion";
import { SectionHeading, accent } from "../ui";

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const line = useScrollLine(listRef);

  return (
    <section id="experience" aria-labelledby="experience-title" className="relative border-y border-line bg-bg-2/50 py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="experience-title"
          index="04"
          eyebrow="Professional experience"
          title={["Where I've", accent("made an impact.")]}
        />

        <ol ref={listRef} className="relative space-y-10">
          {/* Track + scroll-drawn progress line */}
          <span className="absolute top-2 bottom-2 left-[7px] w-px bg-line-2 md:left-[247px]" aria-hidden />
          <motion.span
            style={{ scaleY: line }}
            className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-rose-2 via-rose to-gold md:left-[247px]"
            aria-hidden
          />

          {experience.map((role, i) => (
            <li key={role.title} className="relative grid gap-5 pl-10 md:grid-cols-[240px_1fr] md:gap-12 md:pl-0">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -30% 0px" }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className={`absolute top-1.5 left-0 size-[15px] rounded-full border-2 md:left-[240px] ${
                  i === 0 ? "border-rose bg-rose shadow-[0_0_0_6px_rgba(238,143,163,0.15)]" : "border-rose/60 bg-bg"
                }`}
                aria-hidden
              />

              <FadeUp y={20} className="md:pr-6 md:text-right">
                <p className="font-display text-lg text-ink">
                  <time dateTime={role.startISO}>{role.start}</time> — <time dateTime={role.endISO}>{role.end}</time>
                </p>
                <p className="mt-1.5 text-sm text-muted">
                  {role.place}
                  {role.type ? ` · ${role.type}` : ""}
                </p>
              </FadeUp>

              <FadeUp as="article" delay={0.1} className="card spotlight rounded-[2rem] p-7 sm:p-9">
                <header>
                  <h3 className="font-display text-[1.75rem] leading-tight sm:text-[2rem]">{role.title}</h3>
                  {role.companyUrl ? (
                    <a
                      href={role.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-3 inline-flex items-center gap-1.5 rounded-full border border-rose/30 bg-rose/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.12em] text-rose-2 uppercase transition-colors hover:border-rose hover:bg-rose/20"
                    >
                      {role.company}
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:rotate-45" aria-hidden />
                    </a>
                  ) : (
                    <p className="mt-3 text-xs font-semibold tracking-[0.12em] text-rose-2 uppercase">{role.company}</p>
                  )}
                </header>
                <ul className="mt-6 space-y-3">
                  {role.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed text-muted">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-rose/70" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <ul className="mt-7 flex flex-wrap gap-2" aria-label="Focus areas">
                  {role.tags.map((t) => (
                    <li key={t} className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-ink/80">
                      {t}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
