import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionNav, { type SectionNavItem } from "@/components/SectionNav";
import { LATO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Finnomena",
};

/* ── tiny helpers ─────────────────────────────────────────────── */
const accent = "#8C6050";
const sage = "#B8D4BF";
const pink = "#F0C8BA";
const gold = "#C9A96E";

const SectionLabel = ({ children }: { children: string }) => (
  <h2
    className="mb-3 uppercase"
    style={{
      fontFamily: LATO,
      fontSize: "1rem",
      fontWeight: 700,
      color: "#8C6050",
      letterSpacing: "0.08em",
      lineHeight: 1.2,
    }}
  >
    {children}
  </h2>
);

const StatCard = ({
  value,
  label,
  bg,
}: {
  value: string;
  label: string;
  bg: string;
}) => (
  <div
    className="rounded-2xl px-6 py-7 text-center flex flex-col items-center justify-center h-full"
    style={{
      background: bg,
      border: "1px solid rgba(0,0,0,0.04)",
    }}
  >
    <p
      className="leading-none mb-2"
      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: accent }}
    >
      {value}
    </p>
    <p className="text-muted text-sm leading-snug">{label}</p>
  </div>
);

const sections: SectionNavItem[] = [
  { id: "tldr", label: "TL;DR" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "impact", label: "Impact" },
];

/* ── page ─────────────────────────────────────────────────────── */
export default function FinnomenaPage() {
  return (
    <main style={{ backgroundColor: "#F3F5F0", overflowX: "clip" }} className="min-h-screen">
      {/* ── Back link ───────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-28">
        <FadeIn>
          <Link
            href="/work"
            className="text-muted text-sm hover:text-brown transition-colors duration-200 inline-block"
          >
            &larr; work
          </Link>
        </FadeIn>
      </div>

      {/* ── Content with sticky section nav ─────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-10 pb-24 relative text-lg">
        {/* decorative blobs */}
        <div className="absolute pointer-events-none" style={{ top: "8%", right: "-60px", width: "160px", height: "160px", background: gold, opacity: 0.12, borderRadius: "50% 40% 60% 40% / 40% 50% 40% 60%" }} />
        <div className="absolute pointer-events-none" style={{ top: "25%", left: "-80px", width: "180px", height: "180px", background: pink, opacity: 0.14, borderRadius: "45% 55% 40% 60% / 55% 45% 55% 45%" }} />
        <div className="absolute pointer-events-none" style={{ top: "45%", right: "-50px", width: "120px", height: "120px", background: sage, opacity: 0.15, borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%" }} />
        <div className="absolute pointer-events-none" style={{ top: "62%", left: "-70px", width: "140px", height: "140px", background: gold, opacity: 0.1, borderRadius: "40% 60% 55% 45% / 60% 40% 50% 50%" }} />
        <div className="absolute pointer-events-none" style={{ top: "80%", right: "-40px", width: "100px", height: "100px", background: pink, opacity: 0.13, borderRadius: "50% 50% 40% 60% / 40% 60% 50% 50%" }} />

        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 relative">
          <SectionNav items={sections} title="Investment Platform" offset={100} />

          <div className="space-y-20 min-w-0">
            {/* TL;DR */}
            <FadeIn>
              <section id="tldr" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>TL;DR</SectionLabel>

                <p
                  className="text-muted leading-relaxed mb-5"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
                >
                  Designed and launched an AI-powered portfolio planning tool
                  for{" "}
                  <strong style={{ color: accent }}>3,000+</strong>&nbsp;financial
                  advisors at Finnomena, one of Thailand&apos;s leading wealth
                  management platforms, built in partnership with{" "}
                  <strong style={{ color: accent }}>Franklin Templeton</strong>.
                </p>

                <p
                  className="text-muted leading-relaxed mb-8"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
                >
                  The tool integrated Franklin Templeton&apos;s algorithmic
                  recommendation engine via API. Financial advisors could
                  apply their own judgment on top of AI-suggested portfolios.
                </p>

                <div className="flex flex-wrap gap-x-10 gap-y-3 text-base text-muted">
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Role
                    </span>
                    Product Manager
                    <span className="block text-muted/80 text-sm mt-0.5">
                      Finnomena &middot; 2022
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Tech Stack
                    </span>
                    Figma &middot; Jira &middot; Miro
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Industry
                    </span>
                    Fintech / Wealth Management
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Skills
                    </span>
                    Product Management &middot; UX Design &middot; User Research &middot; API Integration
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Problem */}
            <FadeIn>
              <section id="problem" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>The Problem</SectionLabel>
                <div className="space-y-5 leading-relaxed" style={{ color: "#5C4033" }}>
                  <p>
                    Financial advisors at Finnomena were managing client
                    portfolios manually, piecing together fund selections,
                    risk profiles, and allocations across spreadsheets and
                    scattered tools. There was no single platform to help
                    them create, optimize, and manage investment portfolios
                    at scale, and every portfolio decision had{" "}
                    <strong className="text-text">
                      real consequences because advisors are managing other
                      people&apos;s money
                    </strong>.
                  </p>
                  <p>
                    Finnomena had a big partnership opportunity with Franklin
                    Templeton, one of the largest global asset management
                    firms, to integrate their Investment Optimization Engine:
                    an algorithmic recommendation system that suggests
                    high-performance mutual funds and stocks based on each
                    customer&apos;s risk profile. The challenge was wrapping
                    that engine in a product that advisors would actually
                    trust and use, while meeting Thai financial regulations
                    (Bank of Thailand, SEC Thailand, PDPA).
                  </p>
                </div>

                {/* Callout: the core tension */}
                <div
                  className="rounded-xl px-6 py-5 mt-8"
                  style={{
                    background: "rgba(253,250,247,0.85)",
                    boxShadow: "0 12px 40px rgba(140, 96, 80, 0.12), 0 2px 8px rgba(140, 96, 80, 0.06)",
                  }}
                >
                  <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-3">
                    Core tension
                  </p>
                  <p className="text-muted leading-relaxed">
                    The AI recommendation had to feel trustworthy but not
                    prescriptive. Advisors needed to feel in control while
                    still benefiting from algorithmic optimization.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Solution */}
            <FadeIn>
              <section id="solution" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>The Solution</SectionLabel>

                {/* Core statement */}
                <p
                  className="leading-relaxed mb-12 text-lg"
                  style={{ fontFamily: LATO, color: "#5C4033" }}
                >
                  A portfolio management tool that combined Franklin
                  Templeton&apos;s AI-driven recommendations with manual
                  control, so advisors could run their entire client book
                  through one product, keep their own judgment in the loop,
                  and stay compliant with Thai financial regulations.
                </p>

                {/* 3 features */}
                <div className="space-y-14">
                  {/* Feature 1 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      Portfolio creation powered by Franklin Templeton
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      Advisors created new investment plans for each client
                      by entering risk profile, investment horizon, and
                      goals. The tool then returned an optimized portfolio
                      recommendation via Franklin Templeton&apos;s
                      Investment Optimization Engine.
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      AI + manual editing
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      Advisors weren&apos;t locked into the AI&apos;s
                      recommendation. They could review the suggested
                      allocation, adjust individual fund selections,
                      rebalance weightings, and apply their own expertise
                      on top of the algorithmic output.
                    </p>
                  </div>

                  {/* Feature 3 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      Full portfolio lifecycle
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      Create, edit, and delete plans. Advisors managed
                      their entire client book through the tool, with each
                      portfolio tied to the client&apos;s risk profile and
                      updated as conditions changed.
                    </p>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Impact */}
            <FadeIn>
              <section id="impact" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>The Impact</SectionLabel>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard value="60%" label="advisor adoption in 2 weeks" bg="rgba(240,200,186,0.2)" />
                  <StatCard value="3k+" label="financial advisors" bg="rgba(184,212,191,0.2)" />
                  <StatCard value="30+" label="user interviews" bg="rgba(201,169,110,0.15)" />
                  <StatCard value="500+" label="surveys collected" bg="rgba(240,200,186,0.15)" />
                </div>
              </section>
            </FadeIn>

            {/* Bottom-right back nav */}
            <FadeIn>
              <div className="flex justify-end items-center pt-8 border-t border-border/40">
                <Link
                  href="/work"
                  className="text-muted hover:text-brown transition-colors text-sm"
                >
                  &larr; back to projects
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}
