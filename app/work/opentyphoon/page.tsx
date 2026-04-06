import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { CALISTOGA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "OpenTyphoon - Patt",
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
        fontFamily: CALISTOGA,
        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
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
      style={{ fontFamily: CALISTOGA, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: accent }}
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
              <span className="text-muted text-xs">2023 &ndash; 2025</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="text-text leading-[1.08] mb-5"
              style={{
                fontFamily: CALISTOGA,
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              }}
            >
              OpenTyphoon.ai
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p
              className="text-muted leading-relaxed mb-8"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
            >
              Co-founded Thailand&apos;s open-source AI initiative as the only
              non-technical person on a team of 4. Led program management, GTM,
              partnerships, and operations from zero to 320k+ downloads.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted">
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  role
                </span>
                program manager &amp; co-founder
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  team
                </span>
                4 &rarr; 12 people
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  stack
                </span>
                PyTorch &middot; Hugging Face &middot; vLLM
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  industry
                </span>
                AI infrastructure
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  publication
                </span>
                <a
                  href="https://arxiv.org/abs/2312.13951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brown hover:underline transition-colors duration-200"
                >
                  arxiv (70+ citations) &rarr;
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Impact strip ──────────────────────────────────────── */}
      <FadeIn>
        <section className="px-6 md:px-10 lg:px-16 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value="320k+" label="model downloads" bg="rgba(240,200,186,0.2)" />
            <StatCard value="23M+" label="API calls" bg="rgba(184,212,191,0.2)" />
            <StatCard value="6k+" label="registered users" bg="rgba(201,169,110,0.15)" />
            <StatCard value="2k+" label="community members" bg="rgba(240,200,186,0.15)" />
          </div>
        </section>
      </FadeIn>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pb-24 space-y-20 relative">
        {/* decorative blobs scattered throughout */}
        <div className="absolute pointer-events-none" style={{ top: "8%", right: "-60px", width: "160px", height: "160px", background: gold, opacity: 0.12, borderRadius: "50% 40% 60% 40% / 40% 50% 40% 60%" }} />
        <div className="absolute pointer-events-none" style={{ top: "25%", left: "-80px", width: "180px", height: "180px", background: pink, opacity: 0.14, borderRadius: "45% 55% 40% 60% / 55% 45% 55% 45%" }} />
        <div className="absolute pointer-events-none" style={{ top: "45%", right: "-50px", width: "120px", height: "120px", background: sage, opacity: 0.15, borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%" }} />
        <div className="absolute pointer-events-none" style={{ top: "62%", left: "-70px", width: "140px", height: "140px", background: gold, opacity: 0.1, borderRadius: "40% 60% 55% 45% / 60% 40% 50% 50%" }} />
        <div className="absolute pointer-events-none" style={{ top: "80%", right: "-40px", width: "100px", height: "100px", background: pink, opacity: 0.13, borderRadius: "50% 50% 40% 60% / 40% 60% 50% 50%" }} />
        {/* Context */}
        <FadeIn>
          <section>
            <SectionLabel>what is typhoon</SectionLabel>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Typhoon is an open-source Thai large language model initiative,
                built under SCB 10X and positioned as Thailand&apos;s frontier AI
                research lab. The mission: advance open-source LLMs and multimodal
                technologies for the Thai language, with global-level research and
                local community engagement.
              </p>
              <p>
                I co-founded this with a team of 4, three researchers and me. As
                the only non-technical person, I owned everything that wasn&apos;t
                model research: program management, go-to-market, partnerships,
                community, and operations. When I transitioned out, the team had
                scaled to 12.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Program management */}
        <FadeIn>
          <section>
            <SectionLabel>program management</SectionLabel>
            <div className="space-y-5 text-lg leading-relaxed text-muted mb-10">
              <p>
                Typhoon wasn&apos;t one project. It was several running in
                parallel, and keeping them all moving without collisions was a big
                part of my job.
              </p>
            </div>

            <div className="space-y-0">
              {[
                {
                  n: "1",
                  title: "Data collection & annotation",
                  desc: "Managed the pipeline for 3TB+ of public Thai language corpora and coordinated a data annotation team for instruction-following datasets. Collaborated with researchers on data approaches for supervised fine-tuning.",
                },
                {
                  n: "2",
                  title: "Model training coordination",
                  desc: "While researchers handled the technical training, I managed timelines, resources, and dependencies across training runs, ensuring the team could move fast without stepping on each other.",
                },
                {
                  n: "3",
                  title: "Partnership portfolio",
                  desc: "Tracked and managed relationships across research collaborations, academic partnerships, and API integration partners simultaneously.",
                },
                {
                  n: "4",
                  title: "Operations & admin",
                  desc: "The unglamorous but essential work: team logistics, budgeting, tooling, and keeping a fast-growing research team running smoothly.",
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-5 py-5 border-b border-border/30 last:border-0">
                  <span
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm"
                    style={{
                      background: `linear-gradient(135deg, ${pink}, ${gold})`,
                      color: "#fff",
                      fontFamily: CALISTOGA,
                    }}
                  >
                    {step.n}
                  </span>
                  <div>
                    <p className="text-text font-medium mb-1" style={{ fontFamily: CALISTOGA }}>
                      {step.title}
                    </p>
                    <p className="text-muted text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* GTM */}
        <FadeIn>
          <section>
            <SectionLabel>go-to-market</SectionLabel>
            <div className="space-y-5 text-lg leading-relaxed text-muted mb-10">
              <p>
                This is the part I&apos;m most proud of. Building a great model
                means nothing if no one uses it. I treated Typhoon&apos;s
                open-source models the way a product team treats a freemium
                product: model-led growth, where the model <em>is</em> the product
                and developers are the users.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "developer platform",
                  body: "Launched opentyphoon.ai with model access, API endpoints, and documentation, reducing the barrier from \"clone a repo\" to \"hit an API.\"",
                },
                {
                  title: "community",
                  body: "Grew a Discord community from zero to 2,000+ members where developers shared use cases, reported issues, and built on Typhoon together.",
                },
                {
                  title: "technical content",
                  body: "Produced content showing real-world applications, including a YouTube feature on \"The Rise of Intelligence\" where I presented industry use cases like the customer support copilot built on Typhoon.",
                },
                {
                  title: "events",
                  body: "Organized and represented Typhoon at ACL 2024 in Bangkok (the premier NLP conference), Techsauce Global Summit (Southeast Asia's largest tech conference), and hosted a Typhoon Hackathon with 30 teams.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3
                    className="text-text mb-2"
                    style={{ fontFamily: CALISTOGA, fontSize: "1.15rem" }}
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

        {/* Partnerships */}
        <FadeIn>
          <section>
            <SectionLabel>partnerships</SectionLabel>
            <div className="space-y-5 text-lg leading-relaxed text-muted mb-8">
              <p>
                Credibility in open-source AI comes from the company you keep. I
                built partnerships that gave Typhoon independent validation at a
                global level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  name: "Stanford HAI",
                  desc: "Collaborated with Professor Percy Liang's lab to build Thai language evaluation datasets and leaderboards on Stanford HELM, benchmarking Typhoon against 42 multilingual models for summarization and QA tasks.",
                  bg: "rgba(240,200,186,0.15)",
                },
                {
                  name: "AI Singapore (SEACrowd)",
                  desc: "Joined the SEACrowd collaboration for Southeast Asian language data, positioning Typhoon within a broader regional research network.",
                  bg: "rgba(184,212,191,0.15)",
                },
                {
                  name: "Thai academia",
                  desc: "Built collaborations with VISTEC, KMITL, and other Thai research and academic institutions, bridging industry application and academic research.",
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
                    style={{ fontFamily: CALISTOGA, fontSize: "1.05rem" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <CalloutBox emoji="🎓">
              The Stanford HELM benchmark gave us independent, globally respected
              evaluation. It wasn&apos;t just about the score. It was proof that a
              Thai-first model could compete on a world stage.
            </CalloutBox>
          </section>
        </FadeIn>

        {/* Additional impact */}
        <FadeIn>
          <section>
            <SectionLabel>the numbers, in context</SectionLabel>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <StatCard value="320k+" label="model downloads on Hugging Face" bg="rgba(240,200,186,0.2)" />
              <StatCard value="23M+" label="API calls through the platform" bg="rgba(184,212,191,0.2)" />
              <StatCard value="6k+" label="registered users" bg="rgba(201,169,110,0.15)" />
              <StatCard value="2k+" label="Discord community members" bg="rgba(240,200,186,0.15)" />
              <StatCard value="30" label="teams at the Typhoon Hackathon" bg="rgba(184,212,191,0.15)" />
              <StatCard value="4 → 12" label="team growth" bg="rgba(201,169,110,0.12)" />
            </div>
          </section>
        </FadeIn>

        {/* Honest note */}
        <FadeIn>
          <section
            className="rounded-2xl px-8 py-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(240,200,186,0.18) 0%, rgba(253,250,247,0.5) 50%, rgba(184,212,191,0.15) 100%)",
              border: "1px solid rgba(234,216,204,0.3)",
            }}
          >
            <h3
              className="text-text mb-4"
              style={{ fontFamily: CALISTOGA, fontSize: "1.15rem" }}
            >
              a note on my role
            </h3>
            <div className="space-y-4 text-muted text-lg leading-relaxed">
              <p>
                I want to be upfront: I&apos;m not a researcher. I didn&apos;t
                train the model or write the papers. My contribution was
                everything that turned Typhoon from a research project into
                something people actually used: the GTM, the partnerships, the
                community, the operations, the program management that kept
                multiple workstreams moving at once.
              </p>
              <p>
                In a team of 4, there&apos;s no job description. You just do what
                needs doing. I&apos;m proud that when I transitioned out, the
                foundation was strong enough for the team to keep growing.
              </p>
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
