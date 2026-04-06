import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { PLAYFAIR, DM_SANS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "7-Eleven Conversational AI - Patt",
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
export default function ConversationalAIPage() {
  return (
    <main style={{ backgroundColor: "#F3F5F0" }} className="min-h-screen overflow-hidden">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-16 px-6 md:px-10 lg:px-16">
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
                Sertis &middot; Client: CP All (7-Eleven Thailand)
              </span>
              <span className="text-muted text-xs">&middot;</span>
              <span className="text-muted text-xs">2019 &ndash; 2021</span>
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
              7-Eleven Conversational AI Chatbot
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p
              className="text-muted leading-relaxed mb-8"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
            >
              Built the chat commerce experience inside Thailand&apos;s 7-Eleven
              app, serving 16M+ monthly active users across 15,000+ stores
              nationwide.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted">
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  role
                </span>
                product manager (first PM role)
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  team
                </span>
                cross-functional &middot; Sertis + 7-Eleven
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  stack
                </span>
                Google Dialogflow &middot; Python &middot; RegEx
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  industry
                </span>
                retail / commerce
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Impact strip ──────────────────────────────────────── */}
      <FadeIn>
        <section className="px-6 md:px-10 lg:px-16 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value="16M+" label="monthly active users" bg="rgba(240,200,186,0.2)" />
            <StatCard value="15k+" label="stores nationwide" bg="rgba(184,212,191,0.2)" />
            <StatCard value="3" label="distribution channels" bg="rgba(201,169,110,0.15)" />
            <StatCard value="+15%" label="customer satisfaction" bg="rgba(240,200,186,0.15)" />
          </div>
        </section>
      </FadeIn>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pb-24 space-y-20 relative">
        {/* decorative blobs scattered throughout */}
        <div className="absolute pointer-events-none" style={{ top: "6%", right: "-50px", width: "150px", height: "150px", background: gold, opacity: 0.12, borderRadius: "50% 40% 60% 40% / 40% 50% 40% 60%" }} />
        <div className="absolute pointer-events-none" style={{ top: "22%", left: "-70px", width: "160px", height: "160px", background: pink, opacity: 0.14, borderRadius: "45% 55% 40% 60% / 55% 45% 55% 45%" }} />
        <div className="absolute pointer-events-none" style={{ top: "42%", right: "-40px", width: "110px", height: "110px", background: sage, opacity: 0.15, borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%" }} />
        <div className="absolute pointer-events-none" style={{ top: "60%", left: "-60px", width: "130px", height: "130px", background: gold, opacity: 0.1, borderRadius: "40% 60% 55% 45% / 60% 40% 50% 50%" }} />
        <div className="absolute pointer-events-none" style={{ top: "78%", right: "-35px", width: "100px", height: "100px", background: pink, opacity: 0.13, borderRadius: "50% 50% 40% 60% / 40% 60% 50% 50%" }} />
        {/* Context */}
        <FadeIn>
          <section>
            <SectionLabel>Context</SectionLabel>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                7-Eleven Thailand isn&apos;t like 7-Eleven anywhere else. With
                over 15,000 branches blanketing the entire country, it&apos;s less
                of a convenience store chain and more of a national infrastructure.
                The mobile app had 16 million+ monthly active users, and the
                company was looking to unlock new digital sales channels as part of
                a larger digital transformation initiative.
              </p>
              <p>
                The goal was to build a conversational layer that could serve
                across 3 distribution channels: answering customer inquiries,
                driving product sales through chat, and supporting the app&apos;s
                real-time delivery service. All powered by NLP, before the LLM era.
              </p>
              <p>
                This was my first PM role. I joined as a junior product manager at
                Sertis (a data and AI consulting firm) and owned this project
                end-to-end.
              </p>
              <CalloutBox emoji="🏪">
                7-Eleven in Thailand is amazing. We have over 15,000 branches.
                Seriously, look it up!
              </CalloutBox>
            </div>
          </section>
        </FadeIn>

        {/* What we built */}
        <FadeIn>
          <section>
            <SectionLabel>What We Built</SectionLabel>
            <div className="space-y-5 text-base leading-relaxed text-muted mb-10">
              <p>
                A conversational AI chatbot embedded in the 7-Eleven mobile app,
                powered by NLP using Google Dialogflow for intent recognition and
                RegEx-based pattern matching for structured flows. The chatbot
                served two distinct roles:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              <div
                className="rounded-xl px-6 py-5"
                style={{ background: "rgba(240,200,186,0.15)", border: "1px solid rgba(0,0,0,0.03)" }}
              >
                <h3
                  className="text-text mb-3"
                  style={{ fontFamily: DM_SANS, fontWeight: 600, fontSize: "1.05rem" }}
                >
                  Customer Support Agent
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Handled general inquiries like store locations, operating hours,
                  promotions, and order status for 7-Delivery (the app&apos;s
                  real-time delivery feature).
                </p>
              </div>
              <div
                className="rounded-xl px-6 py-5"
                style={{ background: "rgba(184,212,191,0.15)", border: "1px solid rgba(0,0,0,0.03)" }}
              >
                <h3
                  className="text-text mb-3"
                  style={{ fontFamily: DM_SANS, fontWeight: 600, fontSize: "1.05rem" }}
                >
                  Chat Commerce Assistant
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  The more ambitious part. Users could browse products, see
                  real-time stock at nearby stores, get personalized
                  recommendations, and complete purchases, all without leaving the
                  chat.
                </p>
              </div>
            </div>

            {/* How the commerce flow worked */}
            <h3
              className="text-text mb-6"
              style={{ fontFamily: DM_SANS, fontWeight: 700, fontSize: "1.1rem" }}
            >
              chat commerce flow
            </h3>
            <div className="space-y-0">
              {[
                {
                  n: "1",
                  title: "Detect User Location",
                  desc: "Map the user to their closest 7-Eleven stores automatically.",
                },
                {
                  n: "2",
                  title: "Check Real-Time Stock",
                  desc: "Query live inventory across 15,000+ stores to show what's actually available.",
                },
                {
                  n: "3",
                  title: "Surface Products in Chat",
                  desc: "Display product carousels with promotions and discounts applied automatically.",
                },
                {
                  n: "4",
                  title: "Personalized Recommendations",
                  desc: "Suggest products based on purchase history and user profile, making each conversation feel relevant.",
                },
                {
                  n: "5",
                  title: "Complete Purchase in Chat",
                  desc: "The entire shopping flow, from discovery to checkout, happened inside the conversation. No app switching needed.",
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
                  title: "Requirements & PRD",
                  body: "Gathered requirements from the 7-Eleven business team and translated them into detailed product requirements documents, defining user flows, edge cases, fallback behaviors, and success metrics.",
                },
                {
                  title: "Conversational Design",
                  body: "Designed the conversational flows, mapping out intents, utterances, entities, and response trees. This is where the real product thinking lived: how should the bot respond when it doesn't understand? When should it escalate to a human? How do you make a carousel of snacks feel natural inside a chat thread?",
                },
                {
                  title: "Engineering Coordination",
                  body: "Ran the engineering team at Sertis while integrating closely with 7-Eleven's internal dev team. Two separate engineering orgs building one product, so alignment was constant work.",
                },
                {
                  title: "Testing & Iteration",
                  body: "Ran testing cycles and continuously gathered feedback from users to refine conversational flows, improve intent recognition accuracy, and reduce fallback rates.",
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "Scale",
                  desc: "16 million monthly active users across a nationwide app. Even small improvements in conversion or deflection rates translated to significant business impact.",
                  bg: "rgba(240,200,186,0.15)",
                },
                {
                  title: "Chat Commerce Was Still New",
                  desc: "This was before the ChatGPT era. Building a commerce experience inside a chat interface required creative conversational design without the benefit of large language models. Every flow was hand-crafted.",
                  bg: "rgba(184,212,191,0.15)",
                },
                {
                  title: "Real-Time Inventory Integration",
                  desc: "The chatbot checked live stock across 15,000+ stores, matched products to the user's nearest location, and applied dynamic promotions. The technical integration was non-trivial.",
                  bg: "rgba(201,169,110,0.12)",
                },
                {
                  title: "Personalization at Scale",
                  desc: "Product recommendations were tailored to individual users based on purchase history and profile data, making each conversation feel relevant rather than generic.",
                  bg: "rgba(240,200,186,0.12)",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl px-6 py-5"
                  style={{ background: c.bg, border: "1px solid rgba(0,0,0,0.03)" }}
                >
                  <h3
                    className="text-text mb-2"
                    style={{ fontFamily: DM_SANS, fontWeight: 600, fontSize: "1.05rem" }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Why this matters */}
        <FadeIn>
          <section>
            <SectionLabel>Why This Matters</SectionLabel>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                This was my entry point into AI product management, and it shaped
                how I think about building AI products to this day. Working with
                NLP before the LLM era taught me that good conversational design
                isn&apos;t about the model, it&apos;s about understanding what
                users actually need at each moment in a conversation.
              </p>
              <p>
                The patterns I learned here, intent mapping, fallback design,
                human escalation logic, conversational UX, carried directly into
                the RAG Copilot I built years later.
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
              Chat commerce before the LLM era.
            </p>
            <p className="text-text text-base leading-relaxed font-medium">
              Every flow hand-crafted, every intent mapped, serving 16M+ users
              across 15,000+ stores in Thailand&apos;s largest retail app.
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
