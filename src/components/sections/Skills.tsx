import { GraduationCap, Languages, Sheet } from "lucide-react";
import { education, languages, toolkit } from "@/lib/site";
import { FadeUp, GrowBar } from "../motion";
import { SectionHeading, accent } from "../ui";

// Illustrative rows only — shows the reconciliation workflow, not real employee data.
const rows = [
  { id: "EMP-0142", days: "26/26", approved: "85,000", credited: "85,000", ok: true },
  { id: "EMP-0157", days: "24/26", approved: "72,500", credited: "70,000", ok: false },
  { id: "EMP-0163", days: "26/26", approved: "64,000", credited: "64,000", ok: true },
  { id: "EMP-0171", days: "25/26", approved: "58,200", credited: "58,200", ok: true },
  { id: "EMP-0188", days: "26/26", approved: "91,000", credited: "91,000", ok: true },
];

function ReconciliationSheet() {
  return (
    <figure className="overflow-hidden rounded-[2rem] border border-line-2 bg-[#100d12] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="flex items-center gap-2 font-mono text-xs text-muted">
          <Sheet className="size-3.5 text-mint" aria-hidden /> salary_reconciliation.gsheet
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[460px] font-mono text-xs">
          <thead>
            <tr className="border-b border-line text-left text-dim">
              <th scope="col" className="w-8 py-2.5 pl-4 font-normal">#</th>
              <th scope="col" className="py-2.5 font-normal">Employee</th>
              <th scope="col" className="py-2.5 font-normal">Days</th>
              <th scope="col" className="py-2.5 text-right font-normal">Approved</th>
              <th scope="col" className="py-2.5 text-right font-normal">Credited</th>
              <th scope="col" className="py-2.5 pr-4 text-right font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.id} className={`border-b border-line/60 ${r.ok ? "" : "bg-gold/[0.07]"}`}>
                <td className="py-2.5 pl-4 text-dim">{i + 2}</td>
                <td className="py-2.5 text-ink">{r.id}</td>
                <td className="py-2.5 text-muted">{r.days}</td>
                <td className="py-2.5 text-right text-muted">{r.approved}</td>
                <td className={`py-2.5 text-right ${r.ok ? "text-muted" : "text-gold"}`}>{r.credited}</td>
                <td className="py-2.5 pr-4 text-right">
                  {r.ok ? (
                    <span className="rounded-full bg-mint/10 px-2 py-0.5 text-mint">✓ matched</span>
                  ) : (
                    <span className="rounded-full bg-gold/15 px-2 py-0.5 text-gold">Δ 2,500 → finance</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="flex items-center justify-between px-4 py-3 font-mono text-[10px] tracking-wider text-dim uppercase">
        <span>=IF(approved=credited,&quot;✓&quot;,&quot;flag&quot;)</span>
        <span>Illustrative sample</span>
      </figcaption>
    </figure>
  );
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
      <SectionHeading
        id="skills-title"
        index="05"
        eyebrow="Skills, education & languages"
        title={["Where people skills", accent("meet spreadsheets.")]}
        intro="Every salary checked against the appointment letter, every credited amount matched against what was approved — and every discrepancy chased down with Finance."
      />

      <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] [&>*]:min-w-0">
        <FadeUp>
          <ReconciliationSheet />
        </FadeUp>

        <FadeUp delay={0.1} className="card spotlight rounded-[2rem] p-8">
          <h3 className="eyebrow">Technical &amp; professional skills</h3>
          <ul className="mt-5 space-y-3">
            {toolkit.map((t) => (
              <li key={t} className="flex gap-3 text-ink/90">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-rose" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp className="card spotlight rounded-[2rem] p-8">
          <h3 className="eyebrow flex items-center gap-2">
            <Languages className="size-4" aria-hidden /> Languages
          </h3>
          <ul className="mt-6 space-y-6">
            {languages.map((l) => (
              <li key={l.name}>
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-2xl">{l.name}</span>
                  <span className="text-sm text-muted">{l.level}</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
                  <GrowBar value={l.value} className="h-full rounded-full bg-gradient-to-r from-rose to-gold" />
                </div>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={0.1} className="card spotlight relative overflow-hidden rounded-[2rem] p-8">
          <div className="absolute -right-10 -bottom-10 size-48 rounded-full bg-gold/10 blur-3xl" aria-hidden />
          <h3 className="eyebrow flex items-center gap-2">
            <GraduationCap className="size-4" aria-hidden /> Education
          </h3>
          <p className="mt-6 font-display text-2xl leading-tight sm:text-3xl">{education.degree}</p>
          <p className="mt-2 text-muted">{education.school}</p>
        </FadeUp>
      </div>
    </section>
  );
}
