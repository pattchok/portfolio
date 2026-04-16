import FadeIn from "@/components/FadeIn";
import TypeWriter from "@/components/TypeWriter";
import WavyCTA from "@/components/WavyCTA";
import WorkCard from "@/components/WorkCard";
import HeroBg from "@/components/HeroBg";
import { getFeaturedItems } from "@/lib/featured";
import { PLAYFAIR, LATO, LOMA } from "@/lib/constants";

const featuredProjects = getFeaturedItems();

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-cream relative overflow-hidden min-h-[75vh] flex items-center px-6 md:px-10 lg:px-16 pt-40 pb-16">
        <HeroBg />
        <div className="relative z-10 max-w-4xl w-full mx-auto text-lg">
          <div>
            <div>
              <p className="text-brown mb-3 tracking-wide" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontFamily: LOMA }}>
                <TypeWriter
                  text="สวัสดีค่ะ"
                  delay={400}
                  speed={60}
                />
              </p>
              <h1 className="leading-[1.05] relative mb-12" style={{ fontFamily: LOMA, fontSize: "clamp(3rem, 6vw, 3.75rem)", color: "#362d27" }}>
                <span aria-hidden="true" className="invisible">hi, i&apos;m patt :)</span>
                <span className="absolute left-0 top-0">
                  <TypeWriter
                    text="hi, i'm patt "
                    gradientSuffix=":)"
                    gradientStyle={{
                      background: "linear-gradient(135deg, #F0C8BA, #C9A96E, #B8D4BF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    delay={400}
                    speed={50}
                    hideCursorUntilStart
                  />
                </span>
              </h1>
              <FadeIn delay={1.6}>
                <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mt-8 mb-5 font-bold" style={{ color: "#362d27" }}>
                  Product Manager making AI products easy to use for everyone
                </p>
                <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-3">
                  I led Thailand&apos;s frontier AI research lab, try our latest language model{" "}
                  <a
                    href="https://opentyphoon.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-muted underline underline-offset-4 decoration-2"
                  >
                    here
                  </a>!
                </p>
                <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl mt-8 mb-6 font-bold">
                  Check out what{" "}
                  <a href="/work#side-projects" className="font-bold text-muted">
                    <span className="relative pb-1">
                      I&apos;ve built
                      <svg aria-hidden="true" className="absolute left-0 w-full overflow-visible pointer-events-none" style={{ bottom: "-2px", height: "7px" }} viewBox="0 0 100 7" preserveAspectRatio="none">
                        <path d="M0,3.5 C8,0.5 16,6.5 24,3.5 C32,0.5 40,6.5 48,3.5 C56,0.5 64,6.5 72,3.5 C80,0.5 88,6.5 96,3.5 C98,2 100,3.5 100,3.5" fill="none" stroke="url(#heroWavyGrad)" strokeWidth="3.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                      </svg>
                    </span>
                  </a>&nbsp;&nbsp;&rarr;
                </p>
              </FadeIn>
              <FadeIn delay={1.6}>
                <WavyCTA href="/about" variant="nav" color="#362d27">get to know me :)</WavyCTA>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured work ─────────────────────────────────────── */}
      <div style={{ backgroundColor: "#FDFBF7" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 pt-12 pb-2">
          <FadeIn>
            <h2
              className="text-text"
              style={{ fontFamily: PLAYFAIR, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700 }}
            >
              Projects I&apos;m Most Proud Of
            </h2>
            <div
              style={{
                height: "4px",
                background: "linear-gradient(to right, #F0C8BA, #C9A96E, #B8D4BF, transparent)",
                marginTop: "8px",
                opacity: 0.6,
              }}
            />
          </FadeIn>
        </div>
        {featuredProjects.map((item, i) => {
          const reversed = i % 2 !== 0;

          if (item.type === "work" && item.workProject) {
            return (
              <WorkCard
                key={item.slug}
                project={item.workProject}
                reversed={reversed}
                cta={{ label: "view project", href: item.href }}
              />
            );
          }

          // Side projects — simpler card without company/tags
          return (
            <section
              key={item.slug}
              className="px-6 md:px-10 lg:px-16 py-16 border-t border-border/40 -mt-px"
            >
              <div className="max-w-5xl mx-auto">
                <FadeIn>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                      reversed ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <div className={reversed ? "[direction:ltr]" : ""}>
                      <div
                        className="rounded-2xl w-full border border-border/30"
                        style={{ height: "280px", backgroundColor: item.thumbBg, opacity: 0.65 }}
                      />
                    </div>
                    <div className={reversed ? "[direction:ltr]" : ""}>
                      <h3
                        className="text-text leading-tight mb-5"
                        style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontFamily: LATO, fontWeight: 600 }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-muted leading-relaxed mb-8 text-base md:text-lg">
                        {item.desc}
                      </p>
                      <WavyCTA href={item.href} large>view project</WavyCTA>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── View more CTA ─────────────────────────────────────── */}
      <section className="px-6 md:px-10 lg:px-16 py-14 border-t border-border text-center bg-cream -mt-px">
        <FadeIn>
          <WavyCTA href="/work" variant="nav">view more of my work!</WavyCTA>
        </FadeIn>
      </section>
    </main>
  );
}
