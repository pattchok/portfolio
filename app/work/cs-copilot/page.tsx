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
      background: "rgba(253,250,247,0.85)",
      boxShadow: "0 12px 40px rgba(140, 96, 80, 0.12), 0 2px 8px rgba(140, 96, 80, 0.06)",
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
              <span className="text-muted text-xs">2022&ndash;2025</span>
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
              AI Copilot for Customer Support
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p
              className="text-muted leading-relaxed mb-8"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
            >
              A RAG-based AI copilot for customer support at Thailand&apos;s
              largest bank,{" "}
              <em>
                <strong style={{ color: accent }}>
                  helping 150+ agents cut ticket resolution time from 42
                  minutes to under 5
                </strong>
              </em>
              . It retrieves customer info in real time, cross-checks internal
              bank policies, drafts suggested replies for agents to review,
              and auto-generates a ticket summary at the end of every
              conversation.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted">
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  Role
                </span>
                Senior Product Manager (0&rarr;1)
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  Tech Stack
                </span>
                LangChain &middot; Pinecone &middot; LangFuse &middot; Salesforce
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  Industry
                </span>
                Financial Services
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="pb-8" />

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pb-24 space-y-20 relative">
        {/* decorative blobs scattered throughout */}
        <div className="absolute pointer-events-none" style={{ top: "5%", right: "-55px", width: "140px", height: "140px", background: gold, opacity: 0.12, borderRadius: "50% 40% 60% 40% / 40% 50% 40% 60%" }} />
        <div className="absolute pointer-events-none" style={{ top: "20%", left: "-75px", width: "170px", height: "170px", background: pink, opacity: 0.14, borderRadius: "45% 55% 40% 60% / 55% 45% 55% 45%" }} />
        <div className="absolute pointer-events-none" style={{ top: "40%", right: "-45px", width: "110px", height: "110px", background: sage, opacity: 0.15, borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%" }} />
        <div className="absolute pointer-events-none" style={{ top: "58%", left: "-65px", width: "150px", height: "150px", background: gold, opacity: 0.1, borderRadius: "40% 60% 55% 45% / 60% 40% 50% 50%" }} />
        <div className="absolute pointer-events-none" style={{ top: "75%", right: "-35px", width: "120px", height: "120px", background: pink, opacity: 0.13, borderRadius: "50% 50% 40% 60% / 40% 60% 50% 50%" }} />
        <div className="absolute pointer-events-none" style={{ top: "90%", left: "-50px", width: "90px", height: "90px", background: sage, opacity: 0.11, borderRadius: "45% 55% 50% 50% / 55% 45% 50% 50%" }} />
        {/* Mockups */}
        <FadeIn>
          <section>
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
            <p className="text-muted text-sm text-center italic">
              Due to enterprise confidentiality, actual product screens
              can&apos;t be shared. These interactive mockups were built to
              demonstrate the experience. Conversations are in Thai (the
              product&apos;s native language) with English translations.
            </p>
          </section>
        </FadeIn>

        {/* Context & Problem */}
        <FadeIn>
          <section>
            <SectionLabel>Context & Problem</SectionLabel>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                SCB 10X is the innovation arm of Siam Commercial Bank,
                Thailand&apos;s largest financial institution. Their customer
                support team handled thousands of inquiries daily, and most of
                the process was still manual.
              </p>
              <ul className="list-disc pl-6 space-y-3 marker:text-brown">
                <li>
                  <strong>Scattered data and information</strong>: Resolving
                  a single ticket averaged 42 minutes, excluding tickets
                  that needed days of follow-up across
                  departments and knowledge sources (bank policies, user
                  databases, and more).
                </li>
                <li>
                  <strong>No automatic conversation capture</strong>: Tickets
                  had to be written up by hand after each chat, and sometimes
                  there just wasn&apos;t time. Information got lost,
                  inaccurate, or incomplete.
                </li>
                <li>
                  <strong>Too many tools, too much switching</strong>: A
                  single question could mean CS agents juggling the customer
                  chat window, Salesforce, data dashboards, and internal chat
                  channels all at once.
                </li>
              </ul>
              <CalloutBox>
                This was late 2023, about a year after ChatGPT launched. RAG
                was a brand-new concept. There were no best practices or
                playbooks for building this in production, and definitely not
                in Thai.
              </CalloutBox>
            </div>
          </section>
        </FadeIn>

        {/* Solution */}
        <FadeIn>
          <section>
            <SectionLabel>Solution</SectionLabel>
            <div className="space-y-5 text-base leading-relaxed text-muted mb-8">
              <p>
                We were in financial services under heavy regulation. AI
                couldn&apos;t talk to customers directly, so instead of
                replacing agents, we built a copilot that made them faster.
              </p>
            </div>

            <ul className="list-disc pl-6 space-y-4 text-base leading-relaxed text-muted mb-8 marker:text-brown">
              <li>
                <strong>RAG pipeline</strong>: Retrieved relevant documents
                and customer information in real time, across the bank&apos;s
                full knowledge base.
              </li>
              <li>
                <strong>AI-generated reply suggestions</strong>: Agents could
                review and edit before sending, keeping a human in the loop
                at every step, as required in regulated financial services.
              </li>
              <li>
                <strong>PDPA-compliant PII redaction</strong>: Sensitive
                customer data was masked before anything hit the LLM, then
                re-injected after.
              </li>
              <li>
                <strong>Auto-generated ticket summaries</strong>: Written back
                to Salesforce at the end of every conversation.
              </li>
            </ul>
          </section>
        </FadeIn>

        {/* My role */}
        <FadeIn>
          <section>
            <SectionLabel>My Role</SectionLabel>
            <div className="space-y-8">
              {[
                {
                  title: "User research & workflow mapping",
                  body: "I embedded with the CS team directly, observing how they worked across tools, where they hit bottlenecks, and how they handled edge cases. I documented the end-to-end workflow and translated it into clear requirements for engineering.",
                },
                {
                  title: "Product strategy & system design",
                  body: "The decision to build a copilot instead of a chatbot came from regulation, trust, and practicality. AI in banking needs a human in the loop. I defined when to surface suggestions, how to route different query types, and when the model should stay quiet.",
                },
                {
                  title: "Evaluation framework",
                  body: "There was no off-the-shelf way to evaluate RAG in late 2023, so we built our own: automated retrieval tests, LLM-based evaluation against a golden dataset I put together with CS leads, and a structured feedback loop from the agents themselves.",
                },
                {
                  title: "Stakeholder alignment",
                  body: "I managed two trust gaps at the same time. Leadership wanted AI but needed confidence in its limitations. The CS team was worried about being replaced. I built the case for investment with honest scoping, and brought agents into the process early so they could see the tool was built to support them.",
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
                  title: "No established patterns for production RAG",
                  desc: "This was late 2023, just a year after ChatGPT launched. RAG was brand new. Chunking strategies, embedding approaches, retrieval tuning. All figured out through trial and error.",
                  bg: "rgba(240,200,186,0.15)",
                },
                {
                  title: "Unstructured knowledge base",
                  desc: "The bank's knowledge base wasn't clean or structured for RAG. We spent a lot of time cleaning and restructuring the data before the system could find anything useful.",
                  bg: "rgba(184,212,191,0.15)",
                },
                {
                  title: "Low-resource language support",
                  desc: "Most models at the time were optimized for English. Thai is a low-resource language in the LLM space, so getting accurate retrieval and natural-sounding Thai responses was a lot harder than an equivalent English system.",
                  bg: "rgba(201,169,110,0.12)",
                },
                {
                  title: "Regulatory & data privacy constraints",
                  desc: "Every design choice had to factor in financial regulations, data privacy, and the sensitivity of touching anyone's actual money.",
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

        {/* Tech stack / under the hood */}
        <FadeIn>
          <section>
            <SectionLabel>Tech Stack</SectionLabel>
            <div className="space-y-5 text-base leading-relaxed text-muted mb-8">
              <p>
                The RAG pipeline searched across the bank&apos;s entire
                knowledge base, everything from password reset guides to
                cross-bank transfer policies to Thai-specific regulatory edge
                cases.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { name: "LangChain", desc: "Orchestration & prompt routing" },
                { name: "Pinecone", desc: "Vector DB for semantic search" },
                { name: "LangFuse", desc: "Observability & monitoring" },
                { name: "Salesforce", desc: "Knowledge base, CRM & output" },
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

            <p className="text-muted text-base leading-relaxed">
              PII was handled through a redaction layer. Sensitive customer
              data was masked before anything hit the LLM, then re-injected
              after.
            </p>
          </section>
        </FadeIn>

        {/* Key Features */}
        <FadeIn>
          <section>
            <SectionLabel>Key Features</SectionLabel>
            <div className="space-y-0">
              {[
                {
                  title: "Real-time knowledge retrieval",
                  desc: "Semantic search across the bank's Salesforce knowledge base (policies, troubleshooting guides, regulatory docs) surfaced in context as the agent chats.",
                },
                {
                  title: "Suggested replies with human review",
                  desc: "AI drafts three reply options per message, each grounded in retrieved sources. Agents pick one, edit, and send. Human in the loop at every step.",
                },
                {
                  title: "Auto-generated ticket summaries",
                  desc: "At the end of each conversation, the system writes a summary and next-step list back to Salesforce. No more forgotten or incomplete tickets.",
                },
                {
                  title: "PII redaction layer",
                  desc: "Sensitive customer data masked before it reaches the LLM, then re-injected into the final output. PDPA-compliant by design.",
                },
                {
                  title: "Evaluation & observability",
                  desc: "Custom-built eval framework using LangFuse tracing, automated retrieval tests, and a golden dataset co-created with CS leads.",
                },
              ].map((f) => (
                <div key={f.title} className="py-5 border-b border-border/30 last:border-0">
                  <p className="text-text mb-1" style={{ fontFamily: DM_SANS, fontWeight: 600 }}>
                    {f.title}
                  </p>
                  <p className="text-muted text-base leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Closing */}
        <FadeIn>
          <section
            className="rounded-2xl px-8 py-8 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(240,200,186,0.18) 0%, rgba(253,250,247,0.5) 50%, rgba(184,212,191,0.15) 100%)",
              border: "1px solid rgba(234,216,204,0.3)",
            }}
          >
            <p
              className="text-muted text-base leading-relaxed"
              style={{ fontStyle: "italic" }}
            >
              Most internal AI tools never make it past pilot. This one
              shipped.
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
