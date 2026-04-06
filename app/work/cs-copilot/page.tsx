import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { PLAYFAIR, DM_SANS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Customer Support Copilot - Patt",
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
export default function RagCopilotPage() {
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
                SCB 10X
              </span>
              <span className="text-muted text-xs">&middot;</span>
              <span className="text-muted text-xs">2024</span>
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
              Customer Support Copilot
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p
              className="text-muted leading-relaxed mb-8"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
            >
              An AI copilot that helped CS agents resolve tickets in under
              5 minutes, down from 42. Built for Thailand&apos;s largest bank
              in financial services.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted">
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  role
                </span>
                product manager (0&rarr;1)
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  team
                </span>
                cross-functional &middot; ~8 people
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  stack
                </span>
                LangChain &middot; Pinecone &middot; LangFuse &middot; Salesforce
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  industry
                </span>
                financial services
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Impact strip ──────────────────────────────────────── */}
      <FadeIn>
        <section className="px-6 md:px-10 lg:px-16 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value="88%" label="faster resolution" bg="rgba(240,200,186,0.2)" />
            <StatCard value="< 5 min" label="avg. ticket time" bg="rgba(184,212,191,0.2)" />
            <StatCard value="87%" label="agent satisfaction" bg="rgba(201,169,110,0.15)" />
            <StatCard value="150" label="agents deployed" bg="rgba(240,200,186,0.15)" />
          </div>
        </section>
      </FadeIn>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pb-24 space-y-20 relative">
        {/* decorative blobs scattered throughout */}
        <div className="absolute pointer-events-none" style={{ top: "5%", right: "-55px", width: "140px", height: "140px", background: gold, opacity: 0.12, borderRadius: "50% 40% 60% 40% / 40% 50% 40% 60%" }} />
        <div className="absolute pointer-events-none" style={{ top: "20%", left: "-75px", width: "170px", height: "170px", background: pink, opacity: 0.14, borderRadius: "45% 55% 40% 60% / 55% 45% 55% 45%" }} />
        <div className="absolute pointer-events-none" style={{ top: "40%", right: "-45px", width: "110px", height: "110px", background: sage, opacity: 0.15, borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%" }} />
        <div className="absolute pointer-events-none" style={{ top: "58%", left: "-65px", width: "150px", height: "150px", background: gold, opacity: 0.1, borderRadius: "40% 60% 55% 45% / 60% 40% 50% 50%" }} />
        <div className="absolute pointer-events-none" style={{ top: "75%", right: "-35px", width: "120px", height: "120px", background: pink, opacity: 0.13, borderRadius: "50% 50% 40% 60% / 40% 60% 50% 50%" }} />
        <div className="absolute pointer-events-none" style={{ top: "90%", left: "-50px", width: "90px", height: "90px", background: sage, opacity: 0.11, borderRadius: "45% 55% 50% 50% / 55% 45% 50% 50%" }} />
        {/* The problem */}
        <FadeIn>
          <section>
            <SectionLabel>The Problem Was Human-Shaped</SectionLabel>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                SCB 10X is the innovation arm of Siam Commercial Bank,
                Thailand&apos;s largest financial institution. Their customer
                support team handled thousands of inquiries daily. Forgotten
                passwords, cross-bank transfer disputes, policy questions. All
                manually.
              </p>
              <p>The pain was everywhere:</p>
              <ul className="space-y-3 pl-1">
                <li className="flex gap-3">
                  <span className="text-brown shrink-0 mt-1">&bull;</span>
                  <span>
                    <strong>42-minute average resolution time</strong>,
                    and that&apos;s not counting tickets that needed days of
                    follow-up across departments.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brown shrink-0 mt-1">&bull;</span>
                  <span>
                    Conversations weren&apos;t recorded or summarized.
                    Agents had to write up tickets by hand after each chat,
                    and sometimes they just didn&apos;t. Information got lost.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brown shrink-0 mt-1">&bull;</span>
                  <span>
                    Agents kept switching between the chat interface
                    and the bank&apos;s knowledge base in Salesforce, trying to
                    find the right policy while customers sat there waiting.
                  </span>
                </li>
              </ul>
              <CalloutBox emoji="🕰️">
                This was late 2023, about a year after GPT launched.
                RAG was brand new. There were no best practices, no playbooks
                for building this stuff in production, and definitely not in
                Thai.
              </CalloutBox>
            </div>
          </section>
        </FadeIn>

        {/* What we built — merged with mockups and user flow */}
        <FadeIn>
          <section>
            <SectionLabel>What We Actually Built</SectionLabel>
            <div className="space-y-5 text-base leading-relaxed text-muted mb-10">
              <p>
                Not a chatbot, a <strong>copilot</strong>. That distinction
                matters. We were in banking, under heavy regulation. AI
                couldn&apos;t talk to customers directly. So instead of
                replacing agents, we made them faster.
              </p>
            </div>

            {/* Chat mockup */}
            <div className="mb-10">
              <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-3">
                copilot chat interface
              </p>
              <div
                className="rounded-2xl overflow-hidden border border-border/30"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
              >
                <iframe
                  src="/work/cs-copilot/copilot-mockup-chat.html"
                  className="w-full"
                  style={{ height: "720px", border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Summary mockup */}
            <div className="mb-6">
              <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-3">
                auto-generated ticket summary
              </p>
              <div
                className="rounded-2xl overflow-hidden border border-border/30"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
              >
                <iframe
                  src="/work/cs-copilot/copilot-mockup-summary.html"
                  className="w-full"
                  style={{ height: "962px", border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-muted text-sm text-center italic mb-14">
              Due to enterprise confidentiality, actual product screens
              can&apos;t be shared. These interactive mockups were built to
              demonstrate the experience. Conversations are in Thai (the
              product&apos;s native language) with English translations.
            </p>

            {/* How it works — numbered steps */}
            <h3
              className="text-text mb-6"
              style={{ fontFamily: DM_SANS, fontWeight: 700, fontSize: "1.1rem" }}
            >
              How It Works
            </h3>
            <div className="space-y-0">
              {[
                {
                  n: "1",
                  title: "Customer Contacts Support",
                  desc: "Through the bank's chat channel. Business as usual.",
                },
                {
                  n: "2",
                  title: "Agent Opens the Copilot",
                  desc: "Starts the conversation in our interface alongside the bank's existing tools.",
                },
                {
                  n: "3",
                  title: "AI Suggests 3 Replies in Real Time",
                  desc: "Pulled from the bank's Salesforce knowledge base through a RAG pipeline. Policies, troubleshooting guides, regulatory docs.",
                },
                {
                  n: "4",
                  title: "Human Reviews & Edits",
                  desc: "The agent picks a suggestion, tweaks it if needed, and sends. Human-in-the-loop, always.",
                },
                {
                  n: "5",
                  title: "Auto-Generated Summary & To-Dos",
                  desc: "After the conversation, the system creates a ticket summary and next-step list, stored in Salesforce. No more forgotten tickets.",
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

        {/* Under the hood — with PII callout */}
        <FadeIn>
          <section>
            <SectionLabel>Under the Hood</SectionLabel>
            <div className="space-y-5 text-base leading-relaxed text-muted mb-8">
              <p>
                The RAG pipeline searched across the bank&apos;s entire
                knowledge base. Everything from password reset guides to
                cross-bank transfer policies to Thai-specific regulatory edge
                cases.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { name: "LangChain", desc: "orchestration & prompt routing" },
                { name: "Pinecone", desc: "vector DB for semantic search" },
                { name: "LangFuse", desc: "observability & tracing" },
                { name: "Salesforce", desc: "knowledge source & output" },
              ].map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl px-4 py-4 text-center"
                  style={{
                    background: "rgba(253,250,247,0.6)",
                    border: "1px solid rgba(234,216,204,0.4)",
                  }}
                >
                  <p className="text-text text-sm font-semibold mb-1" style={{ fontFamily: DM_SANS }}>
                    {t.name}
                  </p>
                  <p className="text-muted text-xs leading-snug">{t.desc}</p>
                </div>
              ))}
            </div>

            {/* System architecture SVG */}
            <div
              className="rounded-2xl overflow-hidden border border-border/30 p-4 mb-8"
              style={{ background: "#fff" }}
            >
              <Image
                src="/work/cs-copilot/rag_copilot_system_architecture.svg"
                alt="System architecture diagram"
                width={900}
                height={500}
                className="w-full h-auto"
              />
            </div>

            <CalloutBox emoji="🔒">
              PII was handled through a redaction layer. Sensitive customer
              data was masked before anything hit the LLM, then re-injected
              after. Non-negotiable when you&apos;re dealing with
              people&apos;s money.
            </CalloutBox>
          </section>
        </FadeIn>

        {/* My role */}
        <FadeIn>
          <section>
            <SectionLabel>What I Actually Did</SectionLabel>
            <div className="space-y-8">
              {[
                {
                  title: "Went to the CS Office",
                  body: "I didn't just take requirements from the project owner. I went to the CS office and sat with the agents, watched how they juggled tools, where they got stuck, how they handled weird edge cases. Then I mapped all of that out so the engineering team had something real to build from.",
                },
                {
                  title: "Shaped the Product Strategy",
                  body: "The decision to build a copilot instead of a chatbot came from regulation, trust, and common sense. AI in banking needs a human in the loop. I worked with engineers on when to show suggestions, how to route queries, and when the model should just stay quiet.",
                },
                {
                  title: "Built the Eval Framework from Scratch",
                  body: "There was no off-the-shelf way to evaluate RAG in late 2023. So we built our own. Automated retrieval tests, LLM evaluation against a golden dataset I put together with the CS leads, and a feedback survey from the agents themselves.",
                },
                {
                  title: "Navigated a Dual Trust Problem",
                  body: "Corporate leadership wanted AI but didn't trust AI. I had to build the case for investment while being honest about limitations. The CS team was skeptical about a tool that might replace them. I had to show them it was there to help, not take their jobs.",
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

        {/* Challenges */}
        <FadeIn>
          <section>
            <SectionLabel>Challenges</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "No Playbook Existed",
                  desc: "RAG was brand new. Chunking strategies, embedding approaches, retrieval tuning, all figured out through trial and error. Things that are standard practice now were genuinely unknown territory.",
                  bg: "rgba(240,200,186,0.15)",
                },
                {
                  title: "The Data Wasn't Ready",
                  desc: "The bank's knowledge base wasn't clean or structured for RAG. We spent a lot of time just cleaning and restructuring the data before the system could find anything useful.",
                  bg: "rgba(184,212,191,0.15)",
                },
                {
                  title: "Thai Is Brutal for LLMs",
                  desc: "Most models in late 2023 were optimized for English. Thai is non-whitespace-delimited with complex morphology. Getting accurate retrieval and natural-sounding Thai out of the model was way harder than an equivalent English system.",
                  bg: "rgba(201,169,110,0.12)",
                },
                {
                  title: "High-Stakes Regulated Environment",
                  desc: "Every design choice had to factor in financial regulations, data privacy, and the fact that a bad answer could mess with someone's actual money.",
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
              Many internal AI tools never make it past pilot.
            </p>
            <p className="text-text text-base leading-relaxed font-medium">
              This one deployed to 150 agents, cut resolution time by 88%, and
              eliminated forgotten tickets entirely.
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
