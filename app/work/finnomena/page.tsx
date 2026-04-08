import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { PLAYFAIR, DM_SANS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Finnomena - Patt",
};

/* ── tiny helpers ─────────────────────────────────────────────── */
const accent = "#8C6050";
const sage = "#B8D4BF";
const pink = "#F0C8BA";
const gold = "#C9A96E";

const SectionLabel = ({ children }: { children: string }) => (
  <div className="mb-6">
    <h2
      style={{
        fontFamily: DM_SANS,
        fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
        fontWeight: 700,
        color: accent,
        lineHeight: 1.15,
      }}
    >
      {children}
    </h2>
    <div
      style={{
        height: "2px",
        background: `linear-gradient(to right, ${pink}, ${gold}, ${sage}, transparent)`,
        marginTop: "8px",
        opacity: 0.6,
      }}
    />
  </div>
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
    className="rounded-2xl px-6 py-7 text-center"
    style={{
      background: bg,
      border: "1px solid rgba(0,0,0,0.04)",
    }}
  >
    <p
      className="leading-none mb-2"
      style={{ fontFamily: DM_SANS, fontWeight: 700, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: accent }}
    >
      {value}
    </p>
    <p className="text-muted text-sm leading-snug">{label}</p>
  </div>
);

const CalloutBox = ({
  children,
  emoji,
}: {
  children: React.ReactNode;
  emoji?: string;
}) => (
  <div
    className="rounded-xl px-6 py-5 my-8"
    style={{
      background: "rgba(184,212,191,0.15)",
      borderLeft: `3px solid ${sage}`,
    }}
  >
    <p className="text-muted text-base leading-relaxed">
      {emoji && <span className="mr-2">{emoji}</span>}
      {children}
    </p>
  </div>
);

/* ── page ─────────────────────────────────────────────────────── */
export default function FinnomenaPage() {
  return (
    <main style={{ backgroundColor: "#F3F5F0" }} className="min-h-screen overflow-hidden">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-16 px-6 md:px-10 lg:px-16">
        {/* decorative blobs */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-40px",
            right: "-30px",
            width: "220px",
            height: "220px",
            background: pink,
            opacity: 0.25,
            borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "10%",
            left: "-40px",
            width: "140px",
            height: "140px",
            background: sage,
            opacity: 0.2,
            borderRadius: "40% 60% 45% 55% / 60% 40% 60% 40%",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn>
            <Link
              href="/work"
              className="text-muted text-sm hover:text-brown transition-colors duration-200 mb-10 inline-block"
            >
              &larr; work
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-tight uppercase text-pink-dark">
                Finnomena
              </span>
              <span className="text-muted text-xs">&middot;</span>
              <span className="text-muted text-xs">2022</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="text-text leading-[1.08] mb-5"
              style={{
                fontFamily: PLAYFAIR,
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              }}
            >
              Wealth Management Platform
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p
              className="text-muted leading-relaxed mb-8"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
            >
              Designed and launched an AI-powered portfolio planning tool for
              3,000+ financial advisors, built in partnership with Franklin
              Templeton.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted">
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  Role
                </span>
                Product Manager
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  Team
                </span>
                Cross-functional &middot; Finnomena + Franklin Templeton
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  Stack
                </span>
                Figma &middot; Jira &middot; Miro
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  Industry
                </span>
                Fintech / Wealth Management
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Impact strip ──────────────────────────────────────── */}
      <FadeIn>
        <section className="px-6 md:px-10 lg:px-16 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value="60%" label="advisor adoption in 2 weeks" bg="rgba(240,200,186,0.2)" />
            <StatCard value="3k+" label="financial advisors" bg="rgba(184,212,191,0.2)" />
            <StatCard value="30+" label="user interviews" bg="rgba(201,169,110,0.15)" />
            <StatCard value="500+" label="surveys collected" bg="rgba(240,200,186,0.15)" />
          </div>
        </section>
      </FadeIn>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pb-24 space-y-20 relative">
        {/* decorative blobs */}
        <div className="absolute pointer-events-none" style={{ top: "5%", right: "-55px", width: "140px", height: "140px", background: gold, opacity: 0.12, borderRadius: "50% 40% 60% 40% / 40% 50% 40% 60%" }} />
        <div className="absolute pointer-events-none" style={{ top: "20%", left: "-75px", width: "170px", height: "170px", background: pink, opacity: 0.14, borderRadius: "45% 55% 40% 60% / 55% 45% 55% 45%" }} />
        <div className="absolute pointer-events-none" style={{ top: "40%", right: "-45px", width: "110px", height: "110px", background: sage, opacity: 0.15, borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%" }} />
        <div className="absolute pointer-events-none" style={{ top: "58%", left: "-65px", width: "150px", height: "150px", background: gold, opacity: 0.1, borderRadius: "40% 60% 55% 45% / 60% 40% 50% 50%" }} />
        <div className="absolute pointer-events-none" style={{ top: "75%", right: "-35px", width: "120px", height: "120px", background: pink, opacity: 0.13, borderRadius: "50% 50% 40% 60% / 40% 60% 50% 50%" }} />

        {/* Context */}
        <FadeIn>
          <section>
            <SectionLabel>Context</SectionLabel>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                Finnomena is one of Thailand&apos;s leading wealth management
                platforms. I joined as a product manager to work on a tool for
                financial advisors, specifically a portfolio planning and
                management tool that would help advisors create, optimize, and
                manage investment portfolios for their clients.
              </p>
              <p>
                The big partnership here was with Franklin Templeton, one of the
                largest global asset management firms. We integrated their
                Investment Optimization Engine, an algorithmic recommendation
                system that suggests high-performance mutual funds and stocks
                based on each customer&apos;s risk profile.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* What we built */}
        <FadeIn>
          <section>
            <SectionLabel>What We Built</SectionLabel>
            <div className="space-y-5 text-base leading-relaxed text-muted mb-10">
              <p>
                A portfolio management tool for financial advisors that combined
                AI-driven recommendations with manual control:
              </p>
            </div>

            <div className="space-y-0">
              {[
                {
                  n: "1",
                  title: "Portfolio Creation",
                  desc: "Advisors could create new investment plans for their clients, inputting the client's risk profile, investment horizon, and goals. The tool would then generate an optimized portfolio recommendation via Franklin Templeton's Investment Optimization Engine.",
                },
                {
                  n: "2",
                  title: "AI + Manual Editing",
                  desc: "Advisors weren't locked into the AI's recommendation. They could review the suggested allocation, adjust individual fund selections, rebalance weightings, and make manual edits, giving them the flexibility to apply their own expertise on top of the algorithmic output.",
                },
                {
                  n: "3",
                  title: "Full Portfolio Lifecycle",
                  desc: "Create, edit, and delete plans. Advisors managed their entire client book through the tool, with each portfolio tied to the client's risk profile and updated as conditions changed.",
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-5 py-5 border-b border-border/30 last:border-0">
                  <span
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm"
                    style={{
                      background: `linear-gradient(135deg, ${pink}, ${gold})`,
                      color: "#fff",
                      fontFamily: DM_SANS,
                      fontWeight: 700,
                    }}
                  >
                    {step.n}
                  </span>
                  <div>
                    <p className="text-text mb-1" style={{ fontFamily: DM_SANS, fontWeight: 600 }}>
                      {step.title}
                    </p>
                    <p className="text-muted text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* My role */}
        <FadeIn>
          <section>
            <SectionLabel>What I Actually Did</SectionLabel>
            <div className="space-y-8">
              {[
                {
                  title: "Requirements & PRDs",
                  body: "Gathered requirements from stakeholders and translated them into detailed product specifications, defining the advisor workflow, portfolio management features, API integration points, and edge cases.",
                },
                {
                  title: "UX Design & User Research",
                  body: "Designed the end-to-end user experience and conducted user interviews to validate wireframes and solutions before engineering began. This meant sitting with actual financial advisors to understand how they think about portfolio construction, not just what buttons to put where.",
                },
                {
                  title: "API Integration",
                  body: "Worked closely with Franklin Templeton's team on integrating their Investment Optimization Engine API. This was the core intelligence of the tool, translating a client's risk profile into a recommended set of funds and allocations.",
                },
                {
                  title: "Engineering Coordination",
                  body: "Ran the engineering team through the build, managing sprints, resolving blockers, and ensuring the product shipped on time.",
                },
                {
                  title: "Regulatory Compliance",
                  body: "Worked closely with legal and compliance teams to ensure the tool met requirements across multiple regulatory bodies: the Bank of Thailand (BOT) for financial institution oversight, the Securities and Exchange Commission of Thailand (SEC) for investment advisory licensing, and PDPA (Thailand's data privacy law, similar to GDPR) for handling sensitive client financial data.",
                },
                {
                  title: "Launch & Adoption",
                  body: "Drove adoption by writing onboarding documentation and hosting training sessions for advisors. Validated the product through 30+ user interviews and 500+ surveys across the advisor base.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3
                    className="text-text mb-2"
                    style={{ fontFamily: DM_SANS, fontWeight: 600, fontSize: "1.15rem" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted text-base leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* What made this interesting */}
        <FadeIn>
          <section>
            <SectionLabel>What Made This Interesting</SectionLabel>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                This was a product where getting the user experience wrong had
                real consequences, advisors are managing other people&apos;s
                money. The AI recommendation had to feel trustworthy but not
                prescriptive. Advisors needed to feel in control while still
                benefiting from algorithmic optimization.
              </p>
              <p>
                That balance between automation and human judgment was the core
                design challenge, and it&apos;s a tension I&apos;ve come back to
                in every AI product I&apos;ve built since.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Closing */}
        <FadeIn>
          <section
            className="rounded-2xl px-8 py-10 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(240,200,186,0.18) 0%, rgba(253,250,247,0.5) 50%, rgba(184,212,191,0.15) 100%)",
              border: "1px solid rgba(234,216,204,0.3)",
            }}
          >
            <p
              className="text-muted text-base leading-relaxed mb-2"
              style={{ fontStyle: "italic" }}
            >
              AI-powered wealth management for 3,000+ advisors.
            </p>
            <p className="text-text text-base leading-relaxed font-medium">
              60% adoption in 2 weeks, built in partnership with Franklin
              Templeton, and shipped across three regulatory frameworks.
            </p>
          </section>
        </FadeIn>

        {/* Nav */}
        <FadeIn>
          <div className="flex justify-between items-center pt-8 border-t border-border/40">
            <Link
              href="/work"
              className="text-muted hover:text-brown transition-colors text-sm"
            >
              &larr; all work
            </Link>
            <Link
              href="mailto:ch.pathomporn@gmail.com"
              className="text-muted hover:text-brown transition-colors text-sm"
            >
              want to hear more? let&apos;s chat &rarr;
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
