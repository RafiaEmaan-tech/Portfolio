"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { CalendarCheck, Check, ClipboardList, FileSignature, Scale, UserSearch, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeading, accent } from "../ui";

const ease = [0.22, 1, 0.36, 1] as const;
const DURATION = 5000;

const stages = [
  {
    icon: UserSearch,
    short: "Screen",
    title: "Source & Screen",
    body: "Every hire starts with the right shortlist. I run initial interviews and structured screening, and keep follow-ups moving so no good candidate goes cold.",
    tasks: ["Initial interviews & candidate screening", "Recruitment follow-ups", "Recruitment tracker updates"],
    output: "Qualified shortlist",
    check: "CV screened",
    status: "Screening",
  },
  {
    icon: Users,
    short: "Interview",
    title: "Interview & Select",
    body: "I coordinate final interviews with Team Leads and management, and bring the notes together so hiring decisions are quick and well-informed.",
    tasks: ["Final interview coordination", "Liaising with Team Leads", "Supporting hiring decisions"],
    output: "Hiring decision",
    check: "Interview completed",
    status: "Interviewing",
  },
  {
    icon: FileSignature,
    short: "Onboard",
    title: "Onboard",
    body: "New joiners get a smooth start: appointment letters drafted accurately and onboarding documentation complete before day one.",
    tasks: ["Appointment letters", "Onboarding documentation", "Joining formalities"],
    output: "Signed appointment letter",
    check: "Appointment letter issued",
    status: "Onboarding",
  },
  {
    icon: ClipboardList,
    short: "Records",
    title: "Manage Records",
    body: "Clean data makes everything downstream work. I maintain employee records and HR data in Google Sheets, so they stay accurate and confidential.",
    tasks: ["Employee records & HR data", "Google Sheets trackers", "Confidential documentation"],
    output: "Up-to-date employee file",
    check: "Employee record created",
    status: "Active",
  },
  {
    icon: CalendarCheck,
    short: "Payroll",
    title: "Attendance → Payroll",
    body: "Attendance and leave flow straight into salary: working-day calculations, leave-based deductions and regularity/punctuality adjustments.",
    tasks: ["Attendance & leave records", "Working-day calculations", "Deductions & adjustments"],
    output: "Payroll-ready salary sheet",
    check: "Attendance synced to payroll",
    status: "Payroll",
  },
  {
    icon: Scale,
    short: "Reconcile",
    title: "Reconcile & Report",
    body: "The final check: salaries reconciled against Finance and appointment letters, bank discrepancies resolved, and weekly reports sent to management.",
    tasks: ["Salary & bank reconciliation", "Finance coordination", "Weekly HR management reports"],
    output: "Verified payroll + HR report",
    check: "Salary reconciled with Finance",
    status: "Verified",
  },
];

export function Lifecycle() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const reduce = useReducedMotion();
  const playing = inView && !paused && !reduce;

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setActive((v) => (v + 1) % stages.length), DURATION);
    return () => clearTimeout(t);
  }, [active, playing]);

  const stage = stages[active];
  const Icon = stage.icon;

  return (
    <section
      ref={ref}
      id="lifecycle"
      aria-labelledby="lifecycle-title"
      className="relative overflow-hidden border-y border-line bg-bg-2/50 py-28 lg:py-36"
    >
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="absolute -bottom-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-rose-deep/15 blur-[140px]" aria-hidden />

      <div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <SectionHeading
          id="lifecycle-title"
          index="02"
          eyebrow="The employee lifecycle"
          title={["From first interview", accent("to final payslip.")]}
          intro="My work spans the whole employee journey, so nothing falls between recruitment, records and payroll. Pick a stage to see what I handle."
          className="mb-14"
        />

        {/* Journey rail */}
        <div className="relative mb-10">
          <div className="absolute top-6 right-[8.33%] left-[8.33%] h-px bg-line-2" aria-hidden />
          <motion.div
            className="absolute top-6 left-[8.33%] h-px origin-left bg-gradient-to-r from-rose-2 via-rose to-gold"
            style={{ width: "83.34%" }}
            animate={{ scaleX: active / (stages.length - 1) }}
            transition={{ duration: 0.7, ease }}
            aria-hidden
          />
          <ol className="relative grid grid-cols-6" role="tablist" aria-label="Lifecycle stages">
            {stages.map((s, i) => {
              const S = s.icon;
              const done = i < active;
              const isActive = i === active;
              return (
                <li key={s.title} className="flex justify-center">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="lifecycle-panel"
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-center gap-3 outline-none"
                  >
                    <span
                      className={`relative grid size-12 place-items-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? "scale-110 border-rose bg-rose text-[#1a0f13] shadow-[0_0_0_8px_rgba(238,143,163,0.15)]"
                          : done
                            ? "border-rose/60 bg-bg text-rose"
                            : "border-line-2 bg-bg text-muted group-hover:border-rose/50 group-hover:text-ink"
                      } group-focus-visible:ring-2 group-focus-visible:ring-rose`}
                    >
                      {done ? <Check className="size-4" strokeWidth={2.5} aria-hidden /> : <S className="size-5" strokeWidth={1.7} aria-hidden />}
                      {isActive && playing && (
                        <svg className="absolute -inset-1.5 size-[calc(100%+12px)] -rotate-90" viewBox="0 0 60 60" aria-hidden>
                          <motion.circle
                            key={active}
                            cx="30"
                            cy="30"
                            r="28"
                            fill="none"
                            stroke="var(--gold)"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: DURATION / 1000, ease: "linear" }}
                          />
                        </svg>
                      )}
                    </span>
                    <span
                      className={`hidden text-sm font-semibold transition-colors sm:block ${isActive ? "text-ink" : "text-muted group-hover:text-ink"}`}
                    >
                      {s.short}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Detail + employee file */}
        <div id="lifecycle-panel" role="tabpanel" className="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <div className="card relative min-h-[380px] overflow-hidden rounded-[2rem] bg-bg/70 p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-rose/25 to-gold/10 text-rose-2 ring-1 ring-rose/25">
                    <Icon className="size-6" strokeWidth={1.6} aria-hidden />
                  </span>
                  <span className="font-display text-6xl leading-none text-rose/30 italic sm:text-7xl">
                    {String(active + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl sm:text-4xl">{stage.title}</h3>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{stage.body}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                  {stage.tasks.map((t, i) => (
                    <motion.li
                      key={t}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.08, ease }}
                      className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm leading-snug text-ink/90"
                    >
                      {t}
                    </motion.li>
                  ))}
                </ul>
                <p className="mt-7 inline-flex items-center gap-2 text-sm text-muted">
                  <span className="eyebrow !text-[10px]">Outcome</span>
                  <span className="font-medium text-ink">{stage.output}</span>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Illustrative employee file that progresses with each stage */}
          <div className="card relative overflow-hidden rounded-[2rem] bg-bg/70 p-7 sm:p-8">
            <div className="flex items-center gap-4 border-b border-line pb-6">
              <span className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-rose-2 to-rose-deep font-display text-lg text-[#1a0f13] italic">
                NJ
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-xl">New Joiner</p>
                <p className="text-xs text-muted">Employee file · illustrative</p>
              </div>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={stage.status}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    active === stages.length - 1 ? "bg-mint/15 text-mint" : "bg-rose/15 text-rose-2"
                  }`}
                >
                  {stage.status}
                </motion.span>
              </AnimatePresence>
            </div>

            <ul className="mt-6 space-y-3.5">
              {stages.map((s, i) => {
                const done = i <= active;
                return (
                  <li key={s.check} className="flex items-center gap-3 text-sm">
                    <motion.span
                      animate={{
                        backgroundColor: done ? "rgba(143,227,196,0.15)" : "rgba(255,255,255,0.04)",
                        borderColor: done ? "rgba(143,227,196,0.5)" : "rgba(255,255,255,0.14)",
                      }}
                      className="grid size-6 shrink-0 place-items-center rounded-full border"
                    >
                      <AnimatePresence>
                        {done && (
                          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-mint">
                            <Check className="size-3.5" strokeWidth={3} aria-hidden />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.span>
                    <span className={`transition-colors duration-500 ${done ? "text-ink" : "text-dim"}`}>{s.check}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-7">
              <div className="flex justify-between text-xs text-muted">
                <span>File completion</span>
                <span className="font-semibold text-ink">{Math.round(((active + 1) / stages.length) * 100)}%</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-rose to-gold"
                  animate={{ width: `${((active + 1) / stages.length) * 100}%` }}
                  transition={{ duration: 0.7, ease }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
