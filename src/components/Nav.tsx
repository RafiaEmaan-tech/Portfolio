"use client";

import { useEffect, useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { profile } from "@/lib/site";

const links = [
  { href: "#about", label: "Summary" },
  { href: "#lifecycle", label: "Lifecycle" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled || open ? "glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]" : "border border-transparent"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5" aria-label={`${profile.name} — home`}>
          <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-rose-2 to-rose-deep font-display text-base text-[#1a0f13] italic">
            R
          </span>
          <span className="font-display text-lg whitespace-nowrap text-ink">
            Rafia <span className="text-gradient italic">Eman</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.cv}
            download
            className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold whitespace-nowrap text-bg transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <ArrowDownToLine className="size-4" aria-hidden />
            Download CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full border border-line-2 text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-7xl rounded-3xl p-3 lg:hidden">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-ink hover:bg-surface-2"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.cv}
                download
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-ink px-4 py-3 font-medium text-bg"
              >
                <ArrowDownToLine className="size-4" aria-hidden /> Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
