import { ArrowDownToLine, ArrowUp, ArrowUpRight, Mail, MapPin, Plus } from "lucide-react";
import { experience, faqs, profile } from "@/lib/site";
import { FadeUp, Magnetic, SplitText, VelocityMarquee } from "../motion";
import { LinkedInIcon, SectionHeading, accent } from "../ui";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8 lg:pb-36">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading id="faq-title" index="06" eyebrow="FAQ" title={["Good to", accent("know.")]} className="" />
        </div>
        <ul className="border-t border-line">
          {faqs.map((f, i) => (
            <FadeUp as="li" key={f.q} delay={i * 0.08} y={24} className="border-b border-line">
              <details className="group py-7 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <h3 className="font-display text-xl transition-colors group-hover:text-rose-2 sm:text-2xl">{f.q}</h3>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line-2 text-rose transition-all duration-300 group-open:rotate-45 group-open:border-rose group-open:bg-rose group-open:text-bg">
                    <Plus className="size-5" aria-hidden />
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">{f.a}</p>
              </details>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  const channels = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: LinkedInIcon, label: "LinkedIn", value: "Rafia Eman", href: profile.linkedin, external: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-24">
      <div className="mb-16 border-y border-line py-8" aria-hidden>
        <VelocityMarquee baseVelocity={2.5}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12 pr-12 font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-none">
              <span className={i % 2 ? "text-ink" : "text-gradient italic"}>Let&apos;s work together</span>
              <span className="size-3 rounded-full bg-rose" />
            </span>
          ))}
        </VelocityMarquee>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <FadeUp className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-line-2 bg-gradient-to-br from-[#2a1520] via-bg-2 to-[#1d1712] px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
          <div className="absolute -top-32 -left-20 size-96 rounded-full bg-rose/25 blur-[120px]" aria-hidden />
          <div className="absolute -right-20 -bottom-32 size-96 rounded-full bg-gold/15 blur-[120px]" aria-hidden />

          <div className="relative grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow mb-5 flex items-center gap-4">
                <span className="font-display text-base tracking-normal text-rose-2 normal-case italic">07</span>
                <span className="h-px w-10 bg-rose/50" aria-hidden />
                Contact
              </p>
              <SplitText
                as="h2"
                id="contact-title"
                parts={["Let's build a team", accent("that works.")]}
                className="font-display text-[clamp(2.6rem,5.5vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.02em] text-balance"
              />
              <p className="mt-6 max-w-lg text-lg text-muted">
                Hiring for an HR Executive, HR Officer, Recruiter or HR Operations role? I&apos;d love to hear about it.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Magnetic>
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent("HR opportunity")}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-bg"
                  >
                    Send an email
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href={profile.cv}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-line-2 px-7 py-3.5 font-semibold transition-colors hover:border-rose/60"
                  >
                    <ArrowDownToLine className="size-4" aria-hidden /> Download CV
                  </a>
                </Magnetic>
              </div>
            </div>

            <address className="grid gap-3 not-italic">
              {channels.map(({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener me" } : {})}
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:translate-x-1 hover:border-rose/40"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-rose/15 text-rose-2 transition-colors group-hover:bg-rose group-hover:text-bg">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold tracking-[0.18em] text-dim uppercase">{label}</span>
                    <span className="block truncate font-medium text-ink">{value}</span>
                  </span>
                  <ArrowUpRight className="size-4 text-dim transition-all duration-300 group-hover:rotate-45 group-hover:text-rose" aria-hidden />
                </a>
              ))}
              <p className="flex items-center gap-2 px-1 pt-2 text-sm text-muted">
                <MapPin className="size-4 text-rose" aria-hidden /> {profile.location} · open to remote
              </p>
            </address>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

const footerNav = [
  { href: "#about", label: "Summary" },
  { href: "#lifecycle", label: "Employee lifecycle" },
  { href: "#expertise", label: "Core competencies" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills & education" },
  { href: "#faq", label: "FAQ" },
];

const footerFocus = ["Recruitment & talent acquisition", "Onboarding & documentation", "Payroll & salary administration", "Salary & bank reconciliation", "HR reporting"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-2/60">
      <div className="absolute -top-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-rose-deep/10 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-rose-2 to-rose-deep font-display text-lg text-[#1a0f13] italic">
                R
              </span>
              <span className="font-display text-2xl">
                Rafia <span className="text-gradient italic">Eman</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs leading-relaxed text-muted">
              HR &amp; Recruitment professional in {profile.city}, handling the full employee lifecycle, from first
              interview to reconciled payroll.
            </p>
            <a
              href={profile.cv}
              download
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-line-2 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-rose/60"
            >
              <ArrowDownToLine className="size-4" aria-hidden /> Download CV
            </a>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow">Explore</h2>
            <ul className="mt-5 space-y-3">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted transition-colors hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">Expertise</h2>
            <ul className="mt-5 space-y-3 text-muted">
              {footerFocus.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow">Get in touch</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-muted transition-colors hover:text-ink">
                  <Mail className="size-4 shrink-0 text-rose" aria-hidden />
                  <span className="break-all">{profile.email}</span>
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener me" className="flex items-center gap-2 text-muted transition-colors hover:text-ink">
                  <LinkedInIcon className="size-4 shrink-0 text-rose" /> LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted">
                <MapPin className="size-4 shrink-0 text-rose" aria-hidden /> {profile.location}
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-dim">
              Currently / recently: {experience[0].title},{" "}
              <a href={experience[0].companyUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-ink hover:underline">
                {experience[0].company}
              </a>
            </p>
          </div>
        </div>

        <p
          className="pointer-events-none mt-16 text-center font-display text-[clamp(4rem,17vw,15rem)] leading-[0.8] text-ink/[0.04] italic select-none"
          aria-hidden
        >
          Rafia Eman
        </p>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-7 text-sm text-dim sm:flex-row">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p className="hidden md:block">HR &amp; Recruitment Professional · {profile.location}</p>
          <a href="#top" className="group inline-flex items-center gap-2 transition-colors hover:text-ink">
            Back to top
            <span className="grid size-8 place-items-center rounded-full border border-line-2 transition-colors group-hover:border-rose group-hover:text-rose">
              <ArrowUp className="size-4" aria-hidden />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
