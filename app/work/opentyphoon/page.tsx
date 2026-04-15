import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
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

/* ── page ─────────────────────────────────────────────────────── */
export default function OpenTyphoonPage() {
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
              <span className="text-muted text-xs">2022 &ndash; 2025</span>
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
              Typhoon
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p
              className="text-muted leading-relaxed mb-8"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
            >
              Drove program management, data collection and annotation, GTM,
              partnerships, and operations as a founding member and the only
              non-technical person on a team of 4 at Thailand&apos;s frontier AI
              research lab, from zero to{" "}
              <strong style={{ color: accent }}>320k+ downloads</strong> on
              Hugging Face and{" "}
              <strong style={{ color: accent }}>23M+ API calls</strong>.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
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
                  Industry
                </span>
                AI Infrastructure, Multimodal AI (LLMs, VLMs, Voice)
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
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
          </FadeIn>
        </div>
      </section>

      {/* ── Impact strip ──────────────────────────────────────── */}
      <FadeIn>
        <section className="px-6 md:px-10 lg:px-16 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4">
            <StatCard value="320k+" label="model downloads" bg="rgba(240,200,186,0.2)" />
            <StatCard value="23M+" label="API calls" bg="rgba(184,212,191,0.2)" />
            <StatCard value="6k+" label="developers" bg="rgba(201,169,110,0.15)" />
          </div>
        </section>
      </FadeIn>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pb-24 space-y-20 relative text-lg">
        {/* decorative blobs scattered throughout */}
        <div className="absolute pointer-events-none" style={{ top: "8%", right: "-60px", width: "160px", height: "160px", background: gold, opacity: 0.12, borderRadius: "50% 40% 60% 40% / 40% 50% 40% 60%" }} />
        <div className="absolute pointer-events-none" style={{ top: "25%", left: "-80px", width: "180px", height: "180px", background: pink, opacity: 0.14, borderRadius: "45% 55% 40% 60% / 55% 45% 55% 45%" }} />
        <div className="absolute pointer-events-none" style={{ top: "45%", right: "-50px", width: "120px", height: "120px", background: sage, opacity: 0.15, borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%" }} />
        <div className="absolute pointer-events-none" style={{ top: "62%", left: "-70px", width: "140px", height: "140px", background: gold, opacity: 0.1, borderRadius: "40% 60% 55% 45% / 60% 40% 50% 50%" }} />
        <div className="absolute pointer-events-none" style={{ top: "80%", right: "-40px", width: "100px", height: "100px", background: pink, opacity: 0.13, borderRadius: "50% 50% 40% 60% / 40% 60% 50% 50%" }} />

        {/* Vision & Goal */}
        <FadeIn>
          <section>
            <SectionLabel>Vision & Goal</SectionLabel>
            <div className="space-y-5 leading-relaxed text-muted">
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
          </section>
        </FadeIn>

        {/* Grilled chicken problem */}
        <FadeIn>
          <div
            className="rounded-xl px-6 py-5"
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
        </FadeIn>

        {/* What is Typhoon */}
        <FadeIn>
          <section>
            <SectionLabel>What Is Typhoon</SectionLabel>
            <div className="space-y-5 leading-relaxed text-muted">
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
              <p>
                Typhoon offers models on Hugging Face, APIs through the developer
                platform, a playground for testing, demo applications,
                documentation, and an active open-source community.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* My Role */}
        <FadeIn>
          <section>
            <SectionLabel>My Role</SectionLabel>
            <div className="space-y-5 leading-relaxed text-muted mb-10">
              <p>
                I was a founding member of Typhoon alongside a researcher, an
                engineer, and a tech lead. As the only non-technical person on
                the team, I owned everything that wasn&apos;t model research:
                program management, data collection, go-to-market, partnerships,
                community, and operations.
              </p>
            </div>

          </section>
        </FadeIn>

        {/* Program Management */}
        <FadeIn>
          <section>
            <SectionLabel>Program Management</SectionLabel>
            <div className="space-y-5 leading-relaxed text-muted mb-10">
              <p>
                We ran several projects in parallel. My job was to keep them all
                moving, align timelines and milestones, and make sure nothing was
                blocking anyone else.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Data collection",
                  body: "Collaborated with researchers on data strategy and the pipeline for 3TB+ of public Thai language corpora, including data approaches for supervised fine-tuning.",
                },
                {
                  title: "Data annotation",
                  body: "Managed third-party annotation services for instruction-following datasets. Sampled data points for quality assurance review (inter-annotator agreement checks and spot audits) to maintain labeling consistency.",
                },
                {
                  title: "Model training coordination",
                  body: "Set up processes for planning timelines, resources, and dependencies across training runs. While researchers handled the technical training, I kept the moving pieces from stepping on each other.",
                },
                {
                  title: "Partnership portfolio",
                  body: "Tracked and managed relationships across research collaborations, academic partnerships, and API integration partners simultaneously.",
                },
                {
                  title: "Operations",
                  body: "Team logistics, budgeting, tooling, hiring coordination, and all the administration work that keeps a fast-growing research team running.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3
                    className="text-text mb-2"
                    style={{ fontFamily: LATO, fontWeight: 600, fontSize: "1.15rem" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Go-to-Market */}
        <FadeIn>
          <section>
            <SectionLabel>GTM (Go-to-Market)</SectionLabel>
            <div className="space-y-5 leading-relaxed text-muted mb-10">
              <p>
                Building a great model means nothing if no one uses it. I treated
                Typhoon&apos;s open-source models the way a product team treats a
                freemium product: model-led growth, where the model is the product
                and developers are the users.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Community",
                  body: "Grew a Discord community from zero to 2,000+ members where developers shared use cases, reported issues, and built on Typhoon together. Organized the Typhoon Hackathon with 30 teams building real applications on the platform.",
                },
                {
                  title: "Events",
                  body: "Organized and represented Typhoon at ACL 2024 in Bangkok (the premier global NLP conference), Techsauce Global Summit (Southeast Asia's largest tech conference), and multiple developer events across Thailand.",
                },
                {
                  title: "Technical content",
                  body: "Produced content showing real-world applications of the models, including a featured segment on \"The Rise of Intelligence\" (YouTube) where I presented industry use cases like the customer support copilot built on Typhoon.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3
                    className="text-text mb-2"
                    style={{ fontFamily: LATO, fontWeight: 600, fontSize: "1.15rem" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Partnerships */}
        <FadeIn>
          <section>
            <SectionLabel>Partnerships</SectionLabel>
            <div className="space-y-5 leading-relaxed text-muted mb-8">
              <p>
                Built research collaborations that gave Typhoon credibility on
                the global stage:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
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
                  <h3
                    className="text-text mb-2"
                    style={{ fontFamily: LATO, fontWeight: 600, fontSize: "1.05rem" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed text-sm">
              Other partners and collaborators: SambaNova, TogetherAI, Mahidol
              University, Thammasat University, KMITL, InnovestX, and others.
            </p>
          </section>
        </FadeIn>

        {/* Impact */}
        <FadeIn>
          <section>
            <SectionLabel>Impact</SectionLabel>
            <p className="text-muted leading-relaxed mb-8">
              As of September 2024 (during my tenure):
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <StatCard value="320k+" label="model downloads on Hugging Face" bg="rgba(240,200,186,0.2)" />
              <StatCard value="6k+" label="developers on the platform" bg="rgba(184,212,191,0.2)" />
              <StatCard value="2k+" label="community members on Discord" bg="rgba(201,169,110,0.15)" />
              <StatCard value="30" label="teams at the Typhoon Hackathon" bg="rgba(240,200,186,0.15)" />
              <StatCard value="42" label="multilingual models benchmarked on Stanford HELM" bg="rgba(184,212,191,0.15)" />
              <StatCard value="4 → 12" label="team scaled before I transitioned out" bg="rgba(201,169,110,0.12)" />
            </div>
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
