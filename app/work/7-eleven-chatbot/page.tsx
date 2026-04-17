import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionNav, { type SectionNavItem } from "@/components/SectionNav";
import { LATO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "7-Eleven Conversational AI - Patt",
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
export default function SevenElevenChatbotPage() {
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
          <SectionNav items={sections} title="7-Eleven Chatbot" offset={100} />

          <div className="space-y-20 min-w-0">
            {/* TL;DR */}
            <FadeIn>
              <section id="tldr" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>TL;DR</SectionLabel>

                <p
                  className="text-muted leading-relaxed mb-8"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
                >
                  Built a conversational AI chatbot inside the 7-Eleven
                  Thailand app, powering both customer support and chat
                  commerce for{" "}
                  <strong style={{ color: accent }}>16M+</strong> monthly
                  active users across{" "}
                  <strong style={{ color: accent }}>15,000+</strong> stores
                  nationwide. Users could browse products, check real-time
                  stock at nearby stores, get personalized recommendations,
                  and complete purchases, all without leaving the chat.
                </p>

                <div className="flex flex-wrap gap-x-10 gap-y-3 text-base text-muted">
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Role
                    </span>
                    Product Manager
                    <span className="block text-muted/80 text-sm mt-0.5">
                      Sertis &middot; Client: CP All (7-Eleven Thailand) &middot; 2019&ndash;2021
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Tech Stack
                    </span>
                    Google DialogFlow &middot; Python &middot; RegEx
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Industry
                    </span>
                    Retail E-Commerce
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Skills
                    </span>
                    Product Management &middot; Conversational Design &middot; NLP
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
                    7-Eleven Thailand isn&apos;t like 7-Eleven anywhere else.
                    With over{" "}
                    <strong className="text-text">15,000 branches</strong>{" "}
                    blanketing the country, it&apos;s less a convenience
                    store chain and more a piece of national infrastructure.
                    The mobile app had 16M+ monthly active users, and the
                    company wanted to unlock new digital sales channels as
                    part of a larger digital transformation.
                  </p>
                  <p>
                    The goal was to build a conversational layer inside the
                    app that could serve across three distribution channels:
                    answering customer inquiries, driving product sales
                    through chat, and supporting the app&apos;s real-time
                    delivery service. All of it had to work across 15,000+
                    stores with live inventory, local promotions, and a
                    nationwide user base.
                  </p>
                </div>

                {/* Fun callout — 7-Eleven vibes */}
                <div
                  className="rounded-xl px-6 py-5 mt-8"
                  style={{
                    background: "rgba(253,250,247,0.85)",
                    boxShadow: "0 12px 40px rgba(140, 96, 80, 0.12), 0 2px 8px rgba(140, 96, 80, 0.06)",
                  }}
                >
                  <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-3">
                    Fun fact
                  </p>
                  <p className="text-muted leading-relaxed mb-5">
                    7-Eleven in Thailand is genuinely amazing. We have over
                    15,000 branches. Seriously, look it up!
                  </p>
                  {/* 7-Eleven photo placeholders */}
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="relative rounded-xl border border-border/30 flex items-center justify-center text-muted text-xs italic overflow-hidden"
                        style={{ aspectRatio: "4 / 3", background: "rgba(253,250,247,0.6)" }}
                      >
                        photo {i}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pre-LLM era callout */}
                <div
                  className="rounded-xl px-6 py-5 mt-5"
                  style={{
                    background: "rgba(184,212,191,0.15)",
                    borderLeft: `3px solid ${sage}`,
                  }}
                >
                  <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-3">
                    Context
                  </p>
                  <p className="text-muted leading-relaxed">
                    This was before the ChatGPT era. Every intent was mapped
                    by hand, every fallback designed deliberately, every
                    response tree built from scratch. No LLM safety net,
                    just NLP, pattern matching, and a lot of conversational
                    design.
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
                  A chat commerce experience inside the 7-Eleven app, where
                  users could discover, decide, and check out without ever
                  leaving the conversation. The same chatbot also handled
                  customer support (store locator, hours, promos, delivery
                  order status), but the ambitious part was turning a chat
                  thread into a full shopping flow.
                </p>

                {/* 3 features */}
                <div className="space-y-14">
                  {/* Feature 1 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      Real-time stock at your nearest store
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      The chatbot detected the user&apos;s location, mapped
                      them to their closest 7-Eleven stores, and queried
                      live inventory across 15,000+ stores to show only
                      what was actually on the shelf. No dead ends, no
                      out-of-stock disappointments.
                    </p>
                    <div
                      className="rounded-2xl w-full border border-border/30 flex items-center justify-center text-muted text-sm italic"
                      style={{ height: "320px", background: "rgba(253,250,247,0.6)" }}
                    >
                      visual: location + live stock lookup in chat
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      Personalized product recommendations
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      Product carousels surfaced inside the chat thread,
                      tailored to each user&apos;s purchase history and
                      profile, with current promotions applied
                      automatically. Every conversation felt relevant
                      rather than generic.
                    </p>
                    <div
                      className="rounded-2xl w-full border border-border/30 flex items-center justify-center text-muted text-sm italic"
                      style={{ height: "320px", background: "rgba(253,250,247,0.6)" }}
                    >
                      visual: personalized product carousel in chat
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      Complete purchase in chat
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      The entire shopping flow, from discovery to checkout,
                      happened inside the conversation. No app switching,
                      no separate cart screens, just one thread from the
                      first question to the confirmation message.
                    </p>
                    <div
                      className="rounded-2xl w-full border border-border/30 flex items-center justify-center text-muted text-sm italic"
                      style={{ height: "320px", background: "rgba(253,250,247,0.6)" }}
                    >
                      visual: in-chat checkout flow
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Impact */}
            <FadeIn>
              <section id="impact" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>The Impact</SectionLabel>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard value="16M+" label="monthly active users" bg="rgba(240,200,186,0.2)" />
                  <StatCard value="15k+" label="stores nationwide" bg="rgba(184,212,191,0.2)" />
                  <StatCard value="3" label="distribution channels" bg="rgba(201,169,110,0.15)" />
                  <StatCard value="+15%" label="customer satisfaction" bg="rgba(240,200,186,0.15)" />
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
