import { competencies, profile } from "@/lib/site";
import { Counter, FadeUp, VelocityMarquee } from "../motion";
import { SectionHeading, accent } from "../ui";

const stats = [
  { value: "3+", label: "Years of professional experience" },
  { value: "15", label: "Core HR competencies" },
  { value: "6", label: "Lifecycle stages handled" },
  { value: "2", label: "Languages — English & Urdu" },
];

export function Marquee() {
  return (
    <div className="border-y border-line bg-bg-2/70 py-7" aria-label="Core HR competencies">
      <VelocityMarquee baseVelocity={1.6}>
        {competencies.map((c) => (
          <span key={c} className="flex items-center gap-8 pr-8 font-display text-3xl text-ink/85 italic sm:text-4xl">
            {c}
            <span className="size-1.5 rounded-full bg-rose not-italic" aria-hidden />
          </span>
        ))}
      </VelocityMarquee>
    </div>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            id="about-title"
            index="01"
            eyebrow="Professional summary"
            title={["People-first HR,", accent("built on precision.")]}
            className="mb-10"
          />
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line [&>*]:min-w-0">
            {stats.map((s, i) => (
              <FadeUp as="li" key={s.label} delay={i * 0.08} className="spotlight group bg-bg p-6 sm:p-7">
                <Counter
                  value={s.value}
                  className="block font-display text-5xl text-ink transition-colors group-hover:text-rose-2 sm:text-6xl"
                />
                <p className="mt-3 text-sm leading-snug text-muted">{s.label}</p>
              </FadeUp>
            ))}
          </ul>
        </div>

        <FadeUp className="lg:pt-24">
          <p className="font-display text-2xl leading-snug text-ink sm:text-[1.75rem]">
            &ldquo;Good HR is invisible when it works — the right hire, a smooth first day, and a salary that&apos;s
            exactly right.&rdquo;
          </p>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m <strong className="font-semibold text-ink">Rafia Eman</strong>, an HR &amp; Recruitment professional
              based in {profile.city}. {profile.summary.replace("HR professional with", "I bring")}
            </p>
            <p>{profile.summaryLong}</p>
            <p>
              My background in high-volume customer communication and classroom coordination shaped how I work: calm
              with candidates, structured with documentation, and relentless about numbers adding up.
            </p>
          </div>
          <p className="mt-8 font-display text-3xl text-rose-2 italic">Rafia Eman</p>
        </FadeUp>
      </div>
    </section>
  );
}
