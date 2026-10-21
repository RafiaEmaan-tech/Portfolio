"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDownToLine, ArrowUpRight, BadgeCheck, Mail, MapPin, UsersRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { education, profile } from "@/lib/site";
import { Magnetic, SplitText } from "../motion";
import { LinkedInIcon } from "../ui";

const ease = [0.22, 1, 0.36, 1] as const;
const focusAreas = ["recruitment", "onboarding", "payroll", "reconciliation", "HR reporting"];

const facts = [
  { label: "Experience", value: "3+ years" },
  { label: "Based in", value: "Islamabad" },
  { label: "Education", value: "BBA" },
  { label: "Languages", value: "English, Urdu" },
];

function RotatingWord() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % focusAreas.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <span className="relative inline-block h-[1.35em] overflow-hidden pr-1 align-top">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={focusAreas[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-gradient inline-block font-display leading-[1.35] italic"
        >
          {focusAreas[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20 lg:pt-28"
    >
      <div className="bg-grid absolute inset-0 -z-10 opacity-70" aria-hidden />
      <motion.div
        className="absolute -top-40 left-1/3 -z-10 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-rose-deep/25 blur-[140px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <div className="absolute top-1/3 -right-40 -z-10 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[120px]" aria-hidden />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line-2 bg-surface px-4 py-1.5 text-xs font-medium text-muted"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-mint" />
            </span>
            Available for HR &amp; Recruitment roles
          </motion.p>

          <h1 id="hero-title" className="font-display leading-[0.95] font-medium tracking-[-0.025em]">
            <SplitText onMount delay={0.1} parts={["Rafia"]} className="block text-[clamp(4rem,10vw,8.5rem)]" />
            <SplitText
              onMount
              delay={0.25}
              parts={[{ text: "Eman", className: "text-gradient italic" }]}
              className="block text-[clamp(4rem,10vw,8.5rem)]"
            />
            <span className="sr-only"> — HR Executive &amp; Recruitment Specialist in Islamabad, Pakistan</span>
          </h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.55 }}>
            <p className="eyebrow mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-rose/60" aria-hidden />
              {profile.currentTitle}
            </p>
            <p className="mt-5 text-2xl leading-[1.35] font-medium text-ink sm:text-[1.75rem]">
              Bringing care and precision to <RotatingWord />
            </p>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-muted">{profile.summary}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-2 to-rose px-7 py-3.5 font-semibold text-[#1a0f13] shadow-[0_10px_40px_-10px_rgba(238,143,163,0.7)]"
                >
                  Get in touch
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={profile.cv}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-line-2 px-7 py-3.5 font-semibold text-ink transition-colors hover:border-rose/60 hover:bg-surface"
                >
                  <ArrowDownToLine className="size-4" aria-hidden /> Download CV
                </a>
              </Magnetic>
            </div>

            {/* CV header strip */}
            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-y-5 border-t border-line pt-6 sm:grid-cols-4">
              {facts.map((f, i) => (
                <div key={f.label} className={`pr-4 ${i > 0 ? "sm:border-l sm:border-line sm:pl-5" : ""}`}>
                  <dt className="text-[11px] font-semibold tracking-[0.18em] text-dim uppercase">{f.label}</dt>
                  <dd className="mt-1.5 font-display text-lg whitespace-nowrap text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-rose" aria-hidden /> {profile.location}
              </li>
              <li>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition-colors hover:text-ink">
                  <Mail className="size-4 text-rose" aria-hidden /> {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener me" className="flex items-center gap-2 transition-colors hover:text-ink">
                  <LinkedInIcon className="size-4 text-rose" /> LinkedIn
                </a>
              </li>
            </ul>
            <p className="sr-only">Education: {education.degree}, {education.school}</p>
          </motion.div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-[400px] lg:mr-0">
          <motion.div
            className="absolute -inset-4 rounded-t-full rounded-b-[3rem] border border-rose/20"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.5 }}
            aria-hidden
          />
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0% round 200px 200px 40px 40px)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0% round 200px 200px 40px 40px)" }}
            transition={{ duration: 1.3, ease, delay: 0.15 }}
            className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem] border border-line-2 bg-bg-2 shadow-[0_40px_120px_-30px_rgba(196,86,111,0.55)]"
          >
            <motion.div className="absolute inset-0" style={{ y: photoY, scale: photoScale }}>
              <Image
                src={profile.photo}
                alt="Rafia Eman, HR & Recruitment Professional based in Islamabad, Pakistan"
                fill
                priority
                sizes="(min-width: 1024px) 400px, 90vw"
                className="object-cover object-[50%_28%]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 p-6 text-center">
              <p className="font-display text-xl text-ink italic">Rafia Eman</p>
              <p className="mt-0.5 text-[11px] font-semibold tracking-[0.2em] text-rose-2 uppercase">HR &amp; Recruitment</p>
            </div>
          </motion.div>

          {/* Compact chips: sit in the arch's empty corner and on the outer edge, clear of the face */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 16, delay: 1.1 }}
            className="glass absolute top-6 -right-3 flex items-center gap-2.5 rounded-full py-2 pr-4 pl-2 shadow-xl sm:-right-8"
          >
            <span className="grid size-7 place-items-center rounded-full bg-mint/15 text-mint">
              <BadgeCheck className="size-3.5" aria-hidden />
            </span>
            <span className="text-xs leading-tight">
              <span className="block font-semibold text-ink">Payroll reconciled</span>
              <span className="block text-[10px] text-muted">Finance-verified</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 16, delay: 1.3 }}
            className="glass absolute bottom-24 -left-3 flex items-center gap-2.5 rounded-full py-2 pr-4 pl-2 shadow-xl sm:-left-10"
          >
            <span className="grid size-7 place-items-center rounded-full bg-rose/20 text-rose-2">
              <UsersRound className="size-3.5" aria-hidden />
            </span>
            <span className="text-xs leading-tight">
              <span className="block font-semibold text-ink">Full-cycle recruitment</span>
              <span className="block text-[10px] text-muted">Screen → hire → onboard</span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
