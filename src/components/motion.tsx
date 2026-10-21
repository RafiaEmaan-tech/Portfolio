"use client";

import {
  animate,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Part = string | { text: string; className?: string };

/** Word-by-word slide-up reveal. Text stays real DOM text, so it's still indexed. */
export function SplitText({
  parts,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.06,
  onMount = false,
  id,
}: {
  id?: string;
  parts: Part[];
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  onMount?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const show = onMount || inView;

  const words = parts.flatMap((p) => {
    const { text, className: cls = "" } = typeof p === "string" ? { text: p } : p;
    return text.split(" ").filter(Boolean).map((w) => ({ w, cls }));
  });

  return (
    <Tag ref={ref} id={id} className={className}>
      {words.map(({ w, cls }, i) => (
        <span key={i} className="inline-block overflow-hidden pr-[0.08em] -mr-[0.08em] pb-[0.14em] -mb-[0.14em] align-bottom">
          <motion.span
            className={`inline-block ${cls}`}
            initial={reduce ? false : { y: "110%", rotate: 4 }}
            animate={show ? { y: "0%", rotate: 0 } : undefined}
            transition={{ duration: 0.9, ease, delay: delay + i * stagger }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}

/** Fade + lift on scroll into view. */
export function FadeUp({
  children,
  className = "",
  delay = 0,
  y = 40,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "article" | "section";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </Comp>
  );
}

/** Pulls its child toward the pointer. */
export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className="inline-block"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-rose-2 via-rose to-gold"
    />
  );
}

/** Soft ring that trails the mouse and grows over interactive elements; also feeds card spotlights. */
export function PointerEffects() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "mouse") setEnabled(true);
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHover(!!target?.closest("a, button, summary"));
      const card = target?.closest<HTMLElement>(".spotlight");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[80] rounded-full border border-rose/70 mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: hover ? 56 : 22, height: hover ? 56 : 22, backgroundColor: hover ? "rgba(238,143,163,0.9)" : "rgba(238,143,163,0)" }}
      transition={{ duration: 0.25, ease }}
    />
  );
}

/** Counts up from 0 once visible; non-numeric values render as-is. */
export function Counter({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!inView || !match || !ref.current) return;
    const el = ref.current;
    const target = Number(match[1]);
    const controls = animate(0, target, {
      duration: 1.6,
      ease,
      onUpdate: (v) => (el.textContent = `${Math.round(v)}${match[2]}`),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

/** Marquee whose speed and skew react to scroll velocity. */
export function VelocityMarquee({
  children,
  baseVelocity = 3,
  className = "",
}: {
  children: ReactNode;
  baseVelocity?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [-1500, 0, 1500], [-4, 0, 4], { clamp: false });
  const skewX = useTransform(velocity, [-2000, 0, 2000], [8, 0, -8]);
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    const move = dir.current * baseVelocity * (delta / 1000) * (1 + Math.abs(f));
    baseX.set(baseX.get() - move);
  });

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div className="flex w-max" style={{ x, skewX }}>
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

/** Moves children vertically as the element scrolls through the viewport. */
export function Parallax({ children, offset = 60, className = "" }: { children: ReactNode; offset?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export function useScrollLine(target: React.RefObject<HTMLElement | null>): MotionValue<number> {
  const { scrollYProgress } = useScroll({ target, offset: ["start 70%", "end 60%"] });
  return useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
}

/** Horizontal bar that grows to `value`% when scrolled into view. */
export function GrowBar({ value, className = "" }: { value: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ width: 0 }}
      whileInView={{ width: `${value}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease, delay: 0.2 }}
    />
  );
}
