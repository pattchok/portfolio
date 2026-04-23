import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import HeroWorkBg from "@/components/HeroWorkBg";
import PhotoCarousel from "@/components/PhotoCarousel";
import SectionNav, { type SectionNavItem } from "@/components/SectionNav";
import { PLAYFAIR, LATO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Typhoon",
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
  { id: "solution", label: "Solution" },
  { id: "research", label: "Research & Partnership" },
  { id: "community", label: "Community Events" },
  { id: "impact", label: "Impact" },
];

/* ── page ─────────────────────────────────────────────────────── */
export default function OpenTyphoonPage() {
  return (
    <main style={{ backgroundColor: "#F3F5F0", overflowX: "clip" }} className="min-h-screen">
      {/* ── Hero image band ─────────────────────────────────────── */}
      <HeroWorkBg image="/work/hero/hero-typhoon.png" alt="Typhoon" />

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

                <p
                  className="text-muted leading-relaxed mb-8"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
                >
                  Typhoon is Thailand&apos;s first open-source multimodal AI
                  initiative, covering LLMs, vision, and voice models built for
                  the Thai language. As a{" "}
                  <strong style={{ color: accent }}>founding member</strong> on a
                  team of four, I led program management, GTM, partnerships, and
                  community, scaling from zero to{" "}
                  <strong style={{ color: accent }}>320k+</strong> model
                  downloads,{" "}
                  <strong style={{ color: accent }}>23M+</strong> API calls, and{" "}
                  <strong style={{ color: accent }}>6k+</strong> developers on
                  the platform.
                </p>

                <div className="flex flex-wrap gap-x-10 gap-y-3 text-base text-muted">
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Role
                    </span>
                    Founding PM
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
                    Founding team of 4, scaled to 12
                    <span className="block text-muted/80 text-sm mt-0.5">
                      SCB 10X &middot; 2022&ndash;2025
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      Skills
                    </span>
                    Technical Program Management &middot; GTM &middot; Partnerships &middot; Community
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-6">
                  <a
                    href="https://opentyphoon.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-base font-bold text-text hover:text-brown transition-colors duration-200 w-fit"
                  >
                    <span className="underline underline-offset-4 decoration-1">
                      opentyphoon.ai
                    </span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                  <a
                    href="https://arxiv.org/abs/2312.13951"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-base font-bold text-text hover:text-brown transition-colors duration-200 w-fit"
                  >
                    <span className="underline underline-offset-4 decoration-1">
                      arxiv 2312.13951
                    </span>
                    <span className="font-normal text-muted text-xs">(70+ citations)</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                </div>

              </section>
            </FadeIn>

            {/* Fun fact: ACL 2024 — carousel spanning the content column */}
            <FadeIn>
              <div className="-mt-10">
                <PhotoCarousel
                  photos={[
                    "/work/typhoon/typhoon-techsauce2024.jpg",
                    "/work/typhoon/typhoon-acl1.jpg",
                    "/work/typhoon/typhoon-acl2.jpeg",
                    "/work/typhoon/typhoon-hackathon-1.jpg",
                  ]}
                  alt="Typhoon at a few events"
                  aspectRatio="4 / 3"
                  noCard
                />
                <p className="text-muted text-sm italic leading-snug mt-4 text-center">
                  Typhoon was at a few major conferences and events: <strong>ACL 2024</strong> in Bangkok, <strong>Techsauce Global Summit</strong>, <strong>Super AI Singapore</strong>, and hosting <strong>hackathons</strong>!
                </p>
              </div>
            </FadeIn>

            {/* Problem */}
            <FadeIn>
              <section id="problem" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>The Problem</SectionLabel>
                <div className="space-y-5 leading-relaxed" style={{ color: "#5C4033" }}>
                  <p>
                    Thai is one of the world&apos;s most{" "}
                    <strong className="text-text">underrepresented languages</strong>{" "}
                    in AI. Most large language models are built for English first,
                    and when they do support Thai, they often miss context, culture,
                    and how people actually communicate.
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
                    Funny use case we found
                  </p>
                  <p className="text-muted leading-relaxed mb-3">
                    Ask ChatGPT in Thai how to cook grilled chicken (ไก่ย่าง) and
                    it&apos;ll give you a fluent Thai recipe that tells you to put
                    the chicken in the oven. In Thailand, ไก่ย่าง means chicken
                    skewers over charcoal. Most Thai kitchens don&apos;t even have
                    ovens.
                  </p>
                  <p className="text-muted leading-relaxed">
                    The language was right. The context was wrong. We built
                    Typhoon to narrow this gap.
                  </p>
                </div>
              </section>
            </FadeIn>

            {/* Solution — hero section */}
            <FadeIn>
              <section id="solution" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>The Solution</SectionLabel>

                {/* Core statement */}
                <p
                  className="leading-relaxed mb-12 text-lg"
                  style={{ fontFamily: LATO, color: "#5C4033" }}
                >
                  Building open-source multimodal AI models for Thai language
                  and culture, so anyone can start using them for
                  Thai-specific use cases.
                </p>

                {/* 3 features */}
                <div className="space-y-14">
                  {/* Feature 1 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      User picks the right model
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      Typhoon is a family of models across every modality:
                      text, speech, vision, and translation. Users browse the
                      collection, pick the model that fits, and can deploy it
                      locally.
                    </p>
                    <div className="relative rounded-2xl w-full overflow-hidden border border-border/30" style={{ aspectRatio: "16 / 9" }}>
                      <Image
                        src="/work/typhoon/typhoon-solution-1.png"
                        alt="Typhoon model collection on Hugging Face"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      User tries the model directly in the browser
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      Before committing to anything, anyone can test any
                      Typhoon model at playground.opentyphoon.ai. No extra
                      setup needed.
                    </p>
                    <div className="relative rounded-2xl w-full overflow-hidden border border-border/30" style={{ aspectRatio: "16 / 9" }}>
                      <Image
                        src="/work/typhoon/typhoon-solution-2.png"
                        alt="Typhoon playground screenshot"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div>
                    <h3
                      className="text-text mb-2"
                      style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                    >
                      User builds production-grade applications with API
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 text-lg">
                      Full API access with documentation and demo apps. Same
                      models as the playground, ready for production.
                    </p>
                    <div className="relative rounded-2xl w-full overflow-hidden border border-border/30" style={{ aspectRatio: "16 / 9" }}>
                      <Image
                        src="/work/typhoon/typhoon-solution-3.png"
                        alt="Typhoon API docs and code snippet"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Research & Partnership */}
            <FadeIn>
              <section id="research" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>Research & Partnership</SectionLabel>

                {/* Publication subheader */}
                <h3
                  className="text-text mt-8 mb-6"
                  style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                >
                  Publication
                </h3>

                {/* arxiv technical report */}
                <div>
                  <h4
                    className="text-text mb-1 leading-snug"
                    style={{ fontFamily: LATO, fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    Typhoon: Thai Large Language Models
                  </h4>
                  <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-3">
                    Dec 2023
                  </p>
                  <p className="text-muted text-base leading-relaxed mb-3">
                    Co-authored technical report on the development of Thailand&apos;s
                    first open-source Thai LLM, covering data preparation,
                    pretraining, instruction-tuning, and evaluation. Typhoon
                    achieved performance on par with GPT-3.5 in Thai while being
                    2.62x more efficient at tokenizing Thai text.
                  </p>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    Kunat Pipatanakul, Phatrasek Jirabovonvisut, Potsawee Manakul,
                    Sittipong Sripaisarnmongkol, Ruangsak Patomwong,{" "}
                    <strong className="text-text">Pathomporn Chokchainant</strong>,
                    Kasima Tharnpipitchai
                  </p>
                  <a
                    href="https://arxiv.org/abs/2312.13951"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-base font-bold text-text hover:text-brown transition-colors duration-200"
                  >
                    <span className="underline underline-offset-4 decoration-1">
                      arxiv.org/abs/2312.13951
                    </span>
                    <span className="font-normal text-muted text-xs">(70+ citations)</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                </div>

                {/* Partnership subheader */}
                <h3
                  className="text-text mt-8 mb-6"
                  style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.6rem)", lineHeight: 1.2 }}
                >
                  Partnership
                </h3>

                {/* Research Partner Collaboration */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      logo: "/work/typhoon/stanford-hai-logo.png",
                      project: "Stanford HAI",
                      projectLogo: "/work/typhoon/stanford-helm-logo.png",
                      href: "https://crfm.stanford.edu/helm/thaiexam/latest/",
                      desc: "Worked with Professor Percy Liang's lab at Stanford HAI to add Thai to the HELM leaderboard, benchmarking Typhoon against 42 multilingual models.",
                    },
                    {
                      logo: "/work/typhoon/seacrowd-logo.png",
                      project: "SEACrowd",
                      href: "https://seacrowd.org/",
                      desc: "Joined AI Singapore's SEACrowd collaboration to pool Southeast Asian language data, placing Typhoon inside a broader regional research network.",
                    },
                    {
                      logo: "/work/typhoon/vistec-logo.png",
                      project: "VISTEC",
                      href: "https://www.vistec.ac.th/",
                      desc: "Ongoing research partnership with one of Thailand's leading science and technology institutes, spanning multiple projects across Thai NLP.",
                    },
                  ].map((p) => (
                    <div key={p.project} className="text-center">
                      <div className="flex flex-col items-center justify-end gap-0 mb-2" style={{ height: "130px" }}>
                        {p.projectLogo ? (
                          <>
                            <div className="relative flex-shrink-0" style={{ width: "180px", height: "80px" }}>
                              <Image src={p.logo} alt={`${p.project} logo`} fill className="object-contain" sizes="180px" />
                            </div>
                            <div className="relative flex-shrink-0" style={{ width: "110px", height: "50px" }}>
                              <Image src={p.projectLogo} alt={`${p.project} project logo`} fill className="object-contain" sizes="110px" />
                            </div>
                          </>
                        ) : (
                          <div className="relative flex-shrink-0" style={{ width: "130px", height: "130px" }}>
                            <Image src={p.logo} alt={`${p.project} logo`} fill className="object-contain" sizes="130px" />
                          </div>
                        )}
                      </div>
                      <h4
                        className="text-text mb-2"
                        style={{ fontFamily: LATO, fontWeight: 700, fontSize: "clamp(1.25rem, 2vw, 1.5rem)", lineHeight: 1.2 }}
                      >
                        {p.project}
                      </h4>
                      <p className="text-muted leading-relaxed text-base mb-3">{p.desc}</p>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-text hover:underline underline-offset-4 transition-colors duration-200"
                      >
                        {new URL(p.href).hostname.replace("www.", "")} &rarr;
                      </a>
                    </div>
                  ))}
                </div>
                <p className="text-muted leading-relaxed text-sm mt-8">
                  Other partners and collaborators: SambaNova, TogetherAI, Mahidol
                  University, Thammasat University, KMITL, InnovestX.
                </p>
              </section>
            </FadeIn>

            {/* Community Events */}
            <FadeIn>
              <section id="community" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>Community Events</SectionLabel>

                <div className="space-y-10">
                  <div>
                    <div className="relative rounded-xl overflow-hidden border border-border/30" style={{ aspectRatio: "16 / 9" }}>
                      <Image src="/work/typhoon/typhoon-techsauce2024.jpg" alt="Typhoon at Techsauce 2024" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
                    </div>
                    <p className="text-muted text-sm italic leading-snug mt-3 text-center">
                      <strong>Techsauce Global Summit 2024</strong>, Southeast Asia&apos;s largest tech conference
                    </p>
                  </div>

                  <div>
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
                    <p className="text-muted text-sm italic leading-snug mt-3 text-center">
                      <strong>Typhoon Hackathon</strong>, hosted with 30 teams building applications using Typhoon
                    </p>
                  </div>

                  {/* The Rise of Intelligence — YouTube feature */}
                  <div>
                    <a
                      href="https://www.youtube.com/watch?v=fkYhx9nOkmE&t=2080s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl overflow-hidden border border-border/30 relative group"
                      style={{ aspectRatio: "16 / 9" }}
                    >
                      <Image
                        src="/work/typhoon/the-rise-of-intelligence-2.jpg"
                        alt="The Rise of Intelligence YouTube feature"
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 800px"
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
                    </a>
                    <p className="text-muted text-sm italic leading-snug mt-3 text-center">
                      <strong>The Rise of Intelligence</strong>, featured segment presenting real-world AI use cases in financial services customer support.
                    </p>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Impact */}
            <FadeIn>
              <section id="impact" style={{ scrollMarginTop: "100px" }}>
                <SectionLabel>The Impact</SectionLabel>
                <p className="text-muted leading-relaxed mb-8">
                  As of September 2024:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <StatCard value="320k+" label="Hugging Face model downloads" bg="rgba(240,200,186,0.2)" />
                  <StatCard value="23M+" label="API calls" bg="rgba(184,212,191,0.2)" />
                  <StatCard value="6k+" label="developers on the platform" bg="rgba(201,169,110,0.15)" />
                  <StatCard value="2k+" label="Discord community members" bg="rgba(240,200,186,0.15)" />
                  <StatCard value="30" label="teams at Typhoon Hackathon" bg="rgba(184,212,191,0.15)" />
                  <StatCard value="4 → 12" label="team scaled" bg="rgba(201,169,110,0.12)" />
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
