import type { ReactNode, SVGProps } from "react";
import { FadeUp, SplitText } from "./motion";

type Part = string | { text: string; className?: string };

export const accent = (text: string): Part => ({ text, className: "text-gradient italic" });

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  id,
  className = "mb-16",
}: {
  index: string;
  eyebrow: string;
  title: Part[];
  intro?: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-4xl ${className}`}>
      <FadeUp y={16}>
        <p className="eyebrow mb-5 flex items-center gap-4">
          <span className="font-display text-base tracking-normal text-rose-2 normal-case italic">{index}</span>
          <span className="h-px w-10 bg-rose/50" aria-hidden />
          {eyebrow}
        </p>
      </FadeUp>
      <SplitText
        as="h2"
        parts={title}
        className="font-display text-[clamp(2.4rem,5.2vw,4.25rem)] leading-[1.05] font-medium tracking-[-0.02em] text-balance"
        id={id}
      />
      {intro && (
        <FadeUp delay={0.2} y={20}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
        </FadeUp>
      )}
    </div>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
