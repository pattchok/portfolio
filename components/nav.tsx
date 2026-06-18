"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/life", label: "life" },
  { href: "/about", label: "about" },
];

// Per-project nav tint for the transparent header that floats over each hero.
// Each tone picks text colors readable against that project's hero.
type Tone = { idle: string; active: string; line: string };
const tones: Record<string, Tone> = {
  light: {
    idle: "text-white/80 hover:text-white",
    active: "text-white",
    line: "bg-white",
  },
  medium: {
    idle: "text-neutral-500 hover:text-neutral-900",
    active: "text-neutral-900",
    line: "bg-neutral-900",
  },
  dark: {
    idle: "text-neutral-700 hover:text-black",
    active: "text-black",
    line: "bg-black",
  },
};

// slug → tone, tuned to each hero's brightness.
const projectTone: Record<string, keyof typeof tones> = {
  typhoon: "light",
  "cs-ai-copilot": "medium",
  finnomena: "medium",
  "7-eleven-chatbot": "dark",
};

export function Nav() {
  const pathname = usePathname();

  // Transparent at the top; becomes a distinct bar once the page scrolls.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Project detail pages (/projects/<slug>) get a transparent header that
  // floats over the full-bleed hero, with a per-project text tint.
  const onProjectDetail =
    pathname.startsWith("/projects/") && pathname !== "/projects";
  const slug = onProjectDetail ? pathname.split("/")[2] : undefined;
  const tone = tones[(slug && projectTone[slug]) || "light"];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-hairline/60 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="flex h-18 w-full items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-12 sm:gap-16">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            // Over a detail-page hero (top, not scrolled) use the per-project
            // light tone; once scrolled (or on standard pages) use the normal
            // muted/accent scheme that reads on the light bar.
            const linkColor =
              onProjectDetail && !scrolled
                ? active
                  ? tone.active
                  : tone.idle
                : active
                  ? "text-accent"
                  : "text-muted hover:text-accent";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-base tracking-wide transition-colors duration-200 ${linkColor}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px transition-all duration-200 ${
                    onProjectDetail && !scrolled ? tone.line : "bg-accent"
                  } ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
