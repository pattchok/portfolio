import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import HeroWorkBg from "@/components/HeroWorkBg";
import SectionNav, { type SectionNavItem } from "@/components/SectionNav";
import { PLAYFAIR, LATO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Typhoon - Patt",
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
        fontFamily: LATO,
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
  { id: "research", label: "Research" },
  { id: "solution", label: "Solution" },
  { id: "impact", label: "Impact" },
  { id: "beyond", label: "Beyond the Product" },
  { id: "learnings", label: "Learnings" },
];

/* ── page ─────────────────────────────────────────────────────── */
export default function OpenTyphoonPage() {
  return (
    <main style={{ backgroundColor: "#F3F5F0", overflowX: "clip" }} className="min-h-screen">
      {/* ── Hero image band ─────────────────────────────────────── */}
      <HeroWorkBg image="/work/typhoon/typhoon-cover.png" alt="Typhoon" height={780} objectPosition="top" />

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
          <SectionNav items={sections} title="Typhoon" offset={100} />

          <div className="space-y-20 min-w-0">
            {/* TL;DR */}
            <FadeIn>
              <section id="tldr" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>TL;DR</SectionLabel>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold tracking-tight uppercase text-pink-dark">
                    SCB 10X
                  </span>
                  <span className="text-muted text-xs">&middot;</span>
                  <span className="text-muted text-xs">2022 &ndash; 2025</span>
                </div>

                <h2
                  className="text-text leading-[1.15] mb-5"
                  style={{
                    fontFamily: LATO,
                    fontWeight: 700,
                    fontSize: "1.15rem",
                  }}
                >
                  Overview
                </h2>

                <p
                  className="text-muted leading-relaxed mb-8"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
                >
                  {/* COPY-TODO: Overview — 2-3 sentences with key impact metrics. */}
                  Drove program management, data collection and annotation, GTM,
                  partnerships, and operations as a founding member and the only
                  non-technical person on a team of 4 at Thailand&apos;s frontier AI
                  research lab, from zero to{" "}
                  <strong style={{ color: accent }}>320k+ downloads</strong> on
                  Hugging Face and{" "}
                  <strong style={{ color: accent }}>23M+ API calls</strong>.
                </p>

                <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted">
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Role
                    </span>
                    Technical Program Manager
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Tech Stack
                    </span>
                    PyTorch &middot; Hugging Face &middot; vLLM
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Team Size
                    </span>
                    {/* COPY-TODO: confirm team size progression */}
                    4 founding &rarr; 12
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Skills
                    </span>
                    {/* COPY-TODO: skills line */}
                    Program management &middot; GTM &middot; Partnerships &middot; Community
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-6">
                  <a
                    href="https://opentyphoon.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-muted hover:text-brown hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    opentyphoon.ai &rarr;
                  </a>
                  <a
                    href="https://arxiv.org/abs/2312.13951"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-muted hover:text-brown hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    arxiv 2312.13951 (70+ citations) &rarr;
                  </a>
                </div>
              </section>
            </FadeIn>

            {/* Problem */}
            <FadeIn>
              <section id="problem" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>Problem</SectionLabel>
                <div className="space-y-5 leading-relaxed text-muted">
                  {/* COPY-TODO: Problem — 2-3 sentences max. */}
                  <p>
                    Thai is one of the world&apos;s most underrepresented languages
                    in AI. Most large language models are built for English first,
                    and when they do support Thai, they often miss context, culture,
                    and how people actually communicate.
                  </p>
                  <p>
                    Typhoon was built to make AI accessible for all Thai people. We
                    wanted to build models that actually understand Thai. We built it
                    locally to instill the cultural context from the start, and made
                    it open-source so anyone can build on it.
                  </p>
                </div>

                {/* Grilled chicken callout — the "one strong visual / before-state" anchor */}
                <div
                  className="rounded-xl px-6 py-5 mt-8"
                  style={{
                    background: "rgba(253,250,247,0.85)",
                    boxShadow: "0 12px 40px rgba(140, 96, 80, 0.12), 0 2px 8px rgba(140, 96, 80, 0.06)",
                  }}
                >
                  <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-3">
                    A funny use case we found
                  </p>
                  <p className="text-muted leading-relaxed mb-3">
                    Ask ChatGPT in Thai how to cook grilled chicken (ไก่ย่าง) and
                    it&apos;ll give you a fluent Thai recipe that tells you to put
                    the chicken in the oven. In Thailand, ไก่ย่าง means chicken
                    skewers over charcoal. Most Thai kitchens don&apos;t even have
                    ovens.
                  </p>
                  <p className="text-muted leading-relaxed">
                    The language was right. The context was wrong. That&apos;s the
                    gap Typhoon was built to close.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Research */}
            <FadeIn>
              <section id="research" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>Research</SectionLabel>
                <div className="space-y-5 leading-relaxed text-muted">
                  {/* COPY-TODO: competitor landscape, user insights, technical constraints; 2-3 sentences per visual. */}
                  <p>
                    Typhoon is Thailand&apos;s #1 open-source Thai large language
                    model initiative, positioned as the country&apos;s frontier AI
                    research lab. Built under SCB 10X, Typhoon develops and releases
                    open-source LLMs and multimodal AI technologies purpose-built
                    for the Thai language.
                  </p>
                  <p>
                    The model family has grown to include text generation, reasoning,
                    automatic speech recognition (ASR), optical character recognition
                    (OCR), vision, and translation models, including specialized
                    models for the Isan dialect and medical AI applications.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Solution — hero section */}
            <FadeIn>
              <section id="solution" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>Solution</SectionLabel>
                <div className="space-y-5 leading-relaxed text-muted mb-8">
                  {/* COPY-TODO: Solution lead — biggest, most visually rich section. Short captions under each visual. */}
                  <p>
                    Typhoon offers models on Hugging Face, APIs through the developer
                    platform, a playground for testing, demo applications,
                    documentation, and an active open-source community.
                  </p>
                </div>
                {/* COPY-TODO: insert animated mockups / real product screenshots full-width here. */}
              </section>
            </FadeIn>

            {/* Impact */}
            <FadeIn>
              <section id="impact" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>Impact</SectionLabel>
                <p className="text-muted leading-relaxed mb-8">
                  As of September 2024 (during my tenure):
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <StatCard value="320k+" label="model downloads on Hugging Face" bg="rgba(240,200,186,0.2)" />
                  <StatCard value="23M+" label="API calls" bg="rgba(184,212,191,0.2)" />
                  <StatCard value="6k+" label="developers on the platform" bg="rgba(201,169,110,0.15)" />
                  <StatCard value="2k+" label="community members on Discord" bg="rgba(240,200,186,0.15)" />
                  <StatCard value="30" label="teams at the Typhoon Hackathon" bg="rgba(184,212,191,0.15)" />
                  <StatCard value="4 → 12" label="team scaled before I transitioned out" bg="rgba(201,169,110,0.12)" />
                </div>
              </section>
            </FadeIn>

            {/* Beyond the Product — Typhoon-only */}
            <FadeIn>
              <section id="beyond" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>Beyond the Product</SectionLabel>

                {/* Research Partner Collaboration */}
                <div className="mb-12">
                  <h3
                    className="text-text mb-4"
                    style={{ fontFamily: LATO, fontWeight: 600, fontSize: "1.15rem" }}
                  >
                    Research Partner Collaboration
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                      {
                        name: "Stanford HAI",
                        desc: "Collaborated with Professor Percy Liang's lab to build Thai language evaluation datasets and leaderboards on Stanford HELM, benchmarking Typhoon against 42 multilingual models for summarization and QA tasks.",
                        bg: "rgba(240,200,186,0.15)",
                      },
                      {
                        name: "AI Singapore",
                        desc: "Joined the SEACrowd collaboration for Southeast Asian language data, positioning Typhoon within a broader regional AI research network.",
                        bg: "rgba(184,212,191,0.15)",
                      },
                      {
                        name: "VISTEC",
                        desc: "Built ongoing research collaboration with one of Thailand's leading science and technology institutes, bridging industry application and academic research in Thai NLP.",
                        bg: "rgba(201,169,110,0.12)",
                      },
                    ].map((p) => (
                      <div
                        key={p.name}
                        className="rounded-xl px-6 py-5"
                        style={{ background: p.bg, border: "1px solid rgba(0,0,0,0.03)" }}
                      >
                        <h4
                          className="text-text mb-2"
                          style={{ fontFamily: LATO, fontWeight: 600, fontSize: "1.05rem" }}
                        >
                          {p.name}
                        </h4>
                        <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted leading-relaxed text-sm mt-5">
                    Other partners and collaborators: SambaNova, TogetherAI, Mahidol
                    University, Thammasat University, KMITL, InnovestX, and others.
                  </p>
                </div>

                {/* Community Events */}
                <div className="mb-12">
                  <h3
                    className="text-text mb-4"
                    style={{ fontFamily: LATO, fontWeight: 600, fontSize: "1.15rem" }}
                  >
                    Community Events
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <p className="text-muted leading-relaxed mb-3">
                        {/* COPY-TODO: 1-2 sentences per visual. */}
                        ACL 2024 — Bangkok. The premier global NLP conference.
                        We organized a booth to demo Typhoon&apos;s models and
                        connect with the international research community.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative rounded-xl overflow-hidden border border-border/30" style={{ aspectRatio: "4 / 3" }}>
                          <Image src="/work/typhoon/typhoon-acl1.png" alt="Typhoon booth at ACL 2024" fill className="object-cover" sizes="(max-width: 768px) 50vw, 400px" />
                        </div>
                        <div className="relative rounded-xl overflow-hidden border border-border/30" style={{ aspectRatio: "4 / 3" }}>
                          <Image src="/work/typhoon/typhoon-acl2.jpeg" alt="Typhoon at ACL 2024" fill className="object-cover" sizes="(max-width: 768px) 50vw, 400px" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-muted leading-relaxed mb-3">
                        Techsauce Global Summit 2024 — Southeast Asia&apos;s
                        largest tech conference. Represented Typhoon to an
                        audience of founders, developers, and enterprise
                        leaders across the region.
                      </p>
                      <div className="relative rounded-xl overflow-hidden border border-border/30" style={{ aspectRatio: "16 / 9" }}>
                        <Image src="/work/typhoon/typhoon-techsauce2024.png" alt="Typhoon at Techsauce 2024" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
                      </div>
                    </div>

                    <div>
                      <p className="text-muted leading-relaxed mb-3">
                        Typhoon Hackathon — hosted with 30 teams building real
                        applications on Typhoon. A hands-on way to stress-test
                        the models and grow the developer community at the
                        same time.
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="relative rounded-xl overflow-hidden border border-border/30" style={{ aspectRatio: "4 / 3" }}>
                          <Image src="/work/typhoon/typhoon-hackathon-1.jpg" alt="Typhoon Hackathon" fill className="object-cover" sizes="(max-width: 768px) 33vw, 300px" />
                        </div>
                        <div className="relative rounded-xl overflow-hidden border border-border/30" style={{ aspectRatio: "4 / 3" }}>
                          <Image src="/work/typhoon/typhoon-hackathon-2.jpg" alt="Typhoon Hackathon teams" fill className="object-cover" sizes="(max-width: 768px) 33vw, 300px" />
                        </div>
                        <div className="relative rounded-xl overflow-hidden border border-border/30" style={{ aspectRatio: "4 / 3" }}>
                          <Image src="/work/typhoon/typhoon-hackathon-3.jpg" alt="Typhoon Hackathon event" fill className="object-cover" sizes="(max-width: 768px) 33vw, 300px" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Publications */}
                <div>
                  <h3
                    className="text-text mb-4"
                    style={{ fontFamily: LATO, fontWeight: 600, fontSize: "1.15rem" }}
                  >
                    Publications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Technical report */}
                    <div
                      className="rounded-xl px-6 py-6 flex flex-col"
                      style={{
                        background: "rgba(240,200,186,0.15)",
                        border: "1px solid rgba(0,0,0,0.03)",
                      }}
                    >
                      <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-2">
                        Technical Report &middot; 70+ citations
                      </p>
                      <h4
                        className="text-text mb-3 leading-snug"
                        style={{ fontFamily: LATO, fontWeight: 600, fontSize: "1.1rem" }}
                      >
                        Typhoon: Thai Large Language Models
                      </h4>
                      <p className="text-muted text-sm leading-relaxed mb-3">
                        Co-authored technical report on the development of Thailand&apos;s
                        first open-source Thai LLM, covering data preparation,
                        pretraining, instruction-tuning, and evaluation. Typhoon
                        achieved performance on par with GPT-3.5 in Thai while being
                        2.62x more efficient at tokenizing Thai text.
                      </p>
                      <p className="text-muted text-xs leading-relaxed mb-4">
                        Kunat Pipatanakul, Phatrasek Jirabovonvisut, Potsawee Manakul,
                        Sittipong Sripaisarnmongkol, Ruangsak Patomwong,{" "}
                        <strong className="text-text">Pathomporn Chokchainant</strong>,
                        Kasima Tharnpipitchai
                      </p>
                      <a
                        href="https://arxiv.org/abs/2312.13951"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-muted hover:text-brown hover:underline underline-offset-4 transition-colors duration-200 mt-auto"
                      >
                        arxiv.org/abs/2312.13951 &rarr;
                      </a>
                    </div>

                    {/* YouTube feature */}
                    <a
                      href="https://www.youtube.com/watch?v=fkYhx9nOkmE&t=2080s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl overflow-hidden flex flex-col group"
                      style={{
                        background: "rgba(184,212,191,0.15)",
                        border: "1px solid rgba(0,0,0,0.03)",
                      }}
                    >
                      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
                        <Image
                          src="/work/typhoon/the-rise-of-intelligence-2.png"
                          alt="The Rise of Intelligence YouTube feature"
                          fill
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 500px"
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center pointer-events-none"
                          style={{ background: "rgba(0,0,0,0.15)" }}
                        >
                          <div
                            className="rounded-full flex items-center justify-center"
                            style={{
                              width: "56px",
                              height: "56px",
                              background: "rgba(255,255,255,0.92)",
                              boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                            }}
                          >
                            <span style={{ color: accent, fontSize: "22px", marginLeft: "3px" }}>&#9654;</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-6 py-5">
                        <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-2">
                          YouTube Feature
                        </p>
                        <h4
                          className="text-text mb-2 leading-snug"
                          style={{ fontFamily: LATO, fontWeight: 600, fontSize: "1.1rem" }}
                        >
                          The Rise of Intelligence
                        </h4>
                        <p className="text-muted text-sm leading-relaxed">
                          Featured segment where I presented real-world industry use
                          cases for Thai LLMs, including the customer support copilot
                          project.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Learnings */}
            <FadeIn>
              <section id="learnings" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>Learnings</SectionLabel>
                <div className="space-y-5 leading-relaxed text-muted">
                  {/* COPY-TODO: 2-3 takeaways as short paragraphs, not bullets. Human and reflective. */}
                  <p className="italic">Coming — we&apos;ll write these in the copy pass.</p>
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
