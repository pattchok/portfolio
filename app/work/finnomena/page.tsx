import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import HeroWorkBg from "@/components/HeroWorkBg";
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
      {/* ── Hero image band ─────────────────────────────────────── */}
      <HeroWorkBg image="/work/finnomena/finnomena-cover.png" alt="Finnomena" height={780} objectPosition="top" />

      {/* ── Back link ───────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-10">
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
                    Financial advisors at Finnomena were building client
                    portfolios manually, selecting funds and allocations based
                    on their own research. No personalized recommendation
                    system to help optimize portfolio performance at scale.
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
                  Partnered with Franklin Templeton to integrate their
                  Investment Optimization Engine via API, adding personalized
                  algorithmic recommendations into Finnomena&apos;s existing
                  platform.
                </p>

                {/* 3 features */}
                <div className="space-y-14">
                  {/* Feature 1 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      Full portfolio lifecycle
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      Beyond integration, the tool supported the full lifecycle:
                      create, edit, and manage plans. Each portfolio tied
                      to the client&apos;s risk profile and updated as
                      conditions changed.
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      Personalized portfolio recommendations
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      Advisors entered a client&apos;s risk profile,
                      investment horizon, and goals. The engine returned an
                      optimized fund and allocation recommendation tailored
                      to that client.
                    </p>
                  </div>

                  {/* Feature 3 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      Multi-scenario comparison
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      Advisors could generate and compare multiple portfolio
                      options side-by-side (e.g., aggressive vs. balanced)
                      before recommending one to a client.
                    </p>
                  </div>

                  {/* Feature 4 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      Pre-built plan templates
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      Templates for common goals (retirement, education,
                      growth) so advisors could start from a tested baseline
                      and tweak per client instead of building from scratch.
                    </p>
                  </div>
                </div>

                {/* Human-in-the-loop callout */}
                <div
                  className="rounded-xl px-6 py-5 mt-12"
                  style={{
                    background: "rgba(253,250,247,0.85)",
                    boxShadow: "0 12px 40px rgba(140, 96, 80, 0.12), 0 2px 8px rgba(140, 96, 80, 0.06)",
                  }}
                >
                  <p className="text-muted leading-relaxed">
                    Across every feature, financial advisors still made the
                    final judgment. The algorithm surfaced recommendations,
                    but every portfolio decision stayed in their hands.
                  </p>
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
