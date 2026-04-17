import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionNav, { type SectionNavItem } from "@/components/SectionNav";
import { LATO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Customer Support Copilot - Patt",
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
  { id: "tech", label: "Tech Stack" },
  { id: "impact", label: "Impact" },
];

/* ── page ─────────────────────────────────────────────────────── */
export default function RagCopilotPage() {
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
          <SectionNav items={sections} title="AI Copilot for Customer Support" offset={100} />

          <div className="space-y-20 min-w-0">
            {/* TL;DR */}
            <FadeIn>
              <section id="tldr" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>TL;DR</SectionLabel>

                <p
                  className="text-muted leading-relaxed mb-8"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
                >
                  A RAG-based AI copilot for customer support at Thailand&apos;s
                  largest bank, helping{" "}
                  <strong style={{ color: accent }}>150+ agents</strong> cut
                  ticket resolution time from{" "}
                  <strong style={{ color: accent }}>42 minutes to under 5</strong>.
                  It retrieves customer info in real time, cross-checks internal
                  bank policies, drafts suggested replies for agents to review,
                  and auto-generates a ticket summary at the end of every
                  conversation.
                </p>

                <div className="flex flex-wrap gap-x-10 gap-y-3 text-base text-muted">
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Role
                    </span>
                    Senior PM (0&rarr;1)
                    <span className="block text-muted/80 text-sm mt-0.5">
                      SCB 10X &middot; 2022&ndash;2025
                    </span>
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
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Skills
                    </span>
                    Product Management &middot; User Research &middot; Evaluation
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Mockups — between TL;DR and Problem */}
            <FadeIn>
              <div>
                {/* Chat mockup */}
                <div className="mb-8">
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
                <div className="mb-4">
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

                <p className="text-muted text-sm italic leading-snug text-center">
                  Due to enterprise confidentiality, actual product screens
                  can&apos;t be shared. These interactive mockups were built to
                  demonstrate the experience. Conversations are in Thai with
                  English translations.
                </p>
              </div>
            </FadeIn>

            {/* Problem */}
            <FadeIn>
              <section id="problem" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>The Problem</SectionLabel>
                <div className="space-y-5 leading-relaxed" style={{ color: "#5C4033" }}>
                  <p>
                    SCB 10X is the innovation arm of Siam Commercial Bank,
                    Thailand&apos;s largest financial institution. Their
                    customer support team handled thousands of inquiries daily,
                    and most of the process was still manual.
                  </p>
                  <ul className="list-disc pl-6 space-y-3 marker:text-brown">
                    <li>
                      <strong className="text-text">Scattered data and information</strong>:
                      Resolving a single ticket averaged 42 minutes, excluding
                      tickets that needed days of follow-up across departments
                      and knowledge sources (bank policies, user databases, and
                      more).
                    </li>
                    <li>
                      <strong className="text-text">Unstructured knowledge base</strong>:
                      Internal documentation wasn&apos;t clean or organized for
                      retrieval. Policies lived in PDFs, wikis, and shared drives
                      with inconsistent formats, making it hard for agents to
                      find the right answer fast.
                    </li>
                    <li>
                      <strong className="text-text">No automatic conversation capture</strong>:
                      Tickets had to be written up by hand after each chat, and
                      sometimes there just wasn&apos;t time. Information got
                      lost, inaccurate, or incomplete.
                    </li>
                    <li>
                      <strong className="text-text">Too many tools, too much switching</strong>:
                      A single question could mean agents juggling the customer
                      chat window, Salesforce, data dashboards, and internal
                      chat channels all at once.
                    </li>
                    <li>
                      <strong className="text-text">Strict regulation and personal data protection</strong>:
                      Financial services sit under heavy regulation. Every
                      design choice had to factor in compliance and PDPA-level
                      data privacy, not to mention the sensitivity of anything
                      that touches a customer&apos;s account.
                    </li>
                  </ul>
                </div>

                {/* Callout: no playbook */}
                <div
                  className="rounded-xl px-6 py-5 mt-8"
                  style={{
                    background: "rgba(253,250,247,0.85)",
                    boxShadow: "0 12px 40px rgba(140, 96, 80, 0.12), 0 2px 8px rgba(140, 96, 80, 0.06)",
                  }}
                >
                  <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-3">
                    Context
                  </p>
                  <p className="text-muted leading-relaxed">
                    This was late 2023, about a year after ChatGPT launched.
                    RAG was a brand-new concept. No best practices, no
                    playbooks for building it in production, and definitely
                    not in Thai.
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
                  A RAG-based copilot that retrieves bank knowledge in real
                  time, drafts suggested replies for agents to review, and
                  auto-generates ticket summaries, so agents spend less time
                  hunting for answers and more time talking to customers. We
                  built it as a copilot, not a chatbot, because financial
                  services regulation requires a human in the loop at every
                  step.
                </p>

                {/* 3 features */}
                <div className="space-y-14">
                  {/* Feature 1 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      Real-time knowledge retrieval
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      Semantic search across the bank&apos;s Salesforce
                      knowledge base (policies, troubleshooting guides,
                      regulatory docs) surfaces in context as the agent chats.
                      Sources populate in the bottom-right of the screen so
                      agents see exactly where each answer came from.
                    </p>
                    <div
                      className="rounded-2xl w-full border border-border/30 flex items-center justify-center text-muted text-sm italic"
                      style={{ height: "320px", background: "rgba(253,250,247,0.6)" }}
                    >
                      visual: knowledge sources populating in bottom-right (GIF)
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      AI-generated reply suggestions
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      The copilot drafts three reply options per message, each
                      grounded in retrieved sources. Agents pick one, edit, and
                      send. Human in the loop at every step, as required in
                      regulated financial services.
                    </p>
                    <div
                      className="rounded-2xl w-full border border-border/30 flex items-center justify-center text-muted text-sm italic"
                      style={{ height: "320px", background: "rgba(253,250,247,0.6)" }}
                    >
                      visual: AI-generated reply options (GIF)
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      Auto-generated ticket summary
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      At the end of each conversation, the system writes a
                      summary and next-step list back to Salesforce. No more
                      forgotten or incomplete tickets.
                    </p>
                    <div
                      className="rounded-2xl w-full border border-border/30 flex items-center justify-center text-muted text-sm italic"
                      style={{ height: "320px", background: "rgba(253,250,247,0.6)" }}
                    >
                      visual: ticket summary written back to Salesforce (GIF)
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Tech Stack */}
            <FadeIn>
              <section id="tech" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>Tech Stack</SectionLabel>

                <p className="leading-relaxed mb-8 text-lg" style={{ color: "#5C4033" }}>
                  The RAG pipeline searched across the bank&apos;s entire
                  knowledge base, everything from password reset guides to
                  cross-bank transfer policies to Thai-specific regulatory
                  edge cases.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
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
                      <p className="text-text text-sm font-semibold mb-1" style={{ fontFamily: LATO }}>
                        {t.name}
                      </p>
                      <p className="text-muted text-xs leading-snug">{t.desc}</p>
                    </div>
                  ))}
                </div>

                {/* System architecture diagram */}
                <div className="mb-12">
                  <Image
                    src="/work/cs-copilot/rag_copilot_system_architecture.svg"
                    alt="System architecture diagram"
                    width={900}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>

                {/* PDPA / PII Redaction */}
                <div className="mb-10">
                  <h3
                    className="text-text mb-3"
                    style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.2rem, 2vw, 1.4rem)", lineHeight: 1.2 }}
                  >
                    PDPA-compliant PII redaction
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Sensitive customer data was masked before anything hit the
                    LLM, then re-injected into the final output. Compliant by
                    design, with no raw PII ever leaving the bank&apos;s
                    infrastructure.
                  </p>
                </div>

                {/* Evaluation */}
                <div>
                  <h3
                    className="text-text mb-3"
                    style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.2rem, 2vw, 1.4rem)", lineHeight: 1.2 }}
                  >
                    Evaluation in a world with no playbook
                  </h3>
                  <p className="text-muted leading-relaxed">
                    There was no off-the-shelf way to evaluate RAG in late
                    2023, so we built our own: automated retrieval tests,
                    LLM-based evaluation against a golden dataset put together
                    with CS leads, LangFuse tracing for observability, and a
                    structured feedback loop from the agents themselves.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Impact */}
            <FadeIn>
              <section id="impact" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>The Impact</SectionLabel>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <StatCard value="42min → <5min" label="average ticket resolution time" bg="rgba(240,200,186,0.2)" />
                  <StatCard value="150+" label="agents using the copilot" bg="rgba(184,212,191,0.2)" />
                  <StatCard value="TBD" label="[add metric]" bg="rgba(201,169,110,0.15)" />
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
