  import { BarChart3, Briefcase, FileText, HandCoins, Landmark, UserSearch } from "lucide-react";
import { FadeUp } from "../motion";
import { SectionHeading, accent } from "../ui";

const areas = [
  {
    icon: UserSearch,
    title: "Recruitment & Talent Acquisition",
    body: "Candidate screening, initial interviews, follow-ups and final-interview coordination that keep hiring moving.",
    items: ["Screening", "Interviewing", "Follow-ups", "Hiring support"],
    className: "lg:col-span-2",
    highlight: true,
  },
  {
    icon: FileText,
    title: "Onboarding & Documentation",
    body: "Appointment letters, onboarding files and HR records prepared accurately and on time.",
    items: ["Appointment letters", "HR records"],
  },
  {
    icon: HandCoins,
    title: "Payroll & Salary Administration",
    body: "Working-day calculations, leave-based deductions and regularity/punctuality adjustments.",
    items: ["Working days", "Deductions", "Leave"],
  },
  {
    icon: Landmark,
    title: "Reconciliation & Finance",
    body: "Salary records matched against Finance sheets and appointment letters; bank discrepancies investigated and corrected.",
    items: ["Salary reconciliation", "Bank / payment checks", "Expense tracking", "Finance coordination"],
    className: "lg:col-span-2",
  },
  {
    icon: BarChart3,
    title: "HR Data & Reporting",
    body: "Weekly recruitment and HR management reports covering interviews, hiring and departmental activity.",
    items: ["Google Sheets", "Trackers", "Weekly reports"],
    className: "lg:col-span-2",
  },
  {
    icon: Briefcase,
    title: "HR & Office Administration",
    body: "Candidate and employee queries, reception coordination and confidential office administration.",
    items: ["Confidentiality", "Queries", "Admin"],
  },
];

export function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
      <SectionHeading
        id="expertise-title"
        index="03"
        eyebrow="Core competencies"
        title={["What I bring", accent("to your HR team.")]}
        intro="Fifteen competencies across the employee lifecycle, grouped into the six areas I work in every day."
      />

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {areas.map(({ icon: Icon, title, body, items, className = "", highlight }, i) => (
          <FadeUp
            as="li"
            key={title}
            delay={(i % 3) * 0.1}
            className={`card spotlight group relative overflow-hidden rounded-[2rem] p-8 ${className}`}
          >
            {highlight && (
              <div className="absolute -top-24 -right-24 size-64 rounded-full bg-rose/20 blur-3xl" aria-hidden />
            )}
            <div className="relative">
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-rose/20 to-gold/10 text-rose-2 ring-1 ring-rose/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-8deg]">
                <Icon className="size-5" strokeWidth={1.7} aria-hidden />
              </span>
              <h3 className="mt-7 font-display text-[1.65rem] leading-tight">{title}</h3>
              <p className="mt-2 max-w-lg leading-relaxed text-muted">{body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {items.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line-2 px-3 py-1 text-xs font-medium text-muted transition-colors group-hover:border-rose/30 group-hover:text-ink"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        ))}
      </ul>
    </section>
  );
}
