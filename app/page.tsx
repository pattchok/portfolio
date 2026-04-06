import FadeIn from "@/components/FadeIn";
import TypeWriter from "@/components/TypeWriter";
import WavyCTA from "@/components/WavyCTA";
import WorkCard from "@/components/WorkCard";
import HeroBg from "@/components/HeroBg";
import { getFeaturedItems } from "@/lib/featured";
import { PLAYFAIR, DM_SANS, LOMA } from "@/lib/constants";

const featuredProjects = getFeaturedItems();

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-cream relative overflow-hidden min-h-[75vh] flex items-center px-6 md:px-10 lg:px-16 pt-24 pb-16">
        <HeroBg />
        <div className="relative z-10 max-w-4xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-brown mb-3 tracking-wide" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontFamily: LOMA }}>
                <TypeWriter
                  text="สวัสดีค่ะ"
                  delay={400}
                  speed={60}
                />
              </p>
              <h1 className="text-text leading-[1.05] relative mb-6" style={{ fontFamily: LOMA, fontSize: "clamp(3rem, 6vw, 3.75rem)" }}>
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
                    delay={1400}
                    speed={60}
                    hideCursorUntilStart
                  />
                </span>
              </h1>
              <FadeIn delay={3.5}>
                <p className="text-muted text-lg md:text-xl leading-relaxed max-w-xl mb-10">
                  product manager with 6+ years in AI and data, passionate about shipping solutions that address people's actual needs
                </p>
              </FadeIn>
              <FadeIn delay={3.8}>
                <WavyCTA href="/about" variant="nav">get to know me :)</WavyCTA>
              </FadeIn>
            </div>

            {/* Right: side blobs — pink top-right, sage center, gold bottom-left */}
            <div className="hidden lg:flex flex-col items-end gap-10 self-center">
              <div style={{ width: "190px", height: "190px", background: "#F0C8BA", opacity: 0.65, borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%", alignSelf: "flex-end" }} />
              <div style={{ width: "120px", height: "120px", background: "#B8D4BF", opacity: 0.6, borderRadius: "40% 60% 45% 55% / 60% 40% 60% 40%", alignSelf: "center" }} />
              <div style={{ width: "80px", height: "80px", background: "#C9A96E", opacity: 0.5, borderRadius: "50% 50% 40% 60% / 40% 60% 40% 60%", alignSelf: "flex-start" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured work ─────────────────────────────────────── */}
      <div style={{ backgroundColor: "#F3F5F0" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 pt-12 pb-2">
          <FadeIn>
            <h2
              className="text-text"
              style={{ fontFamily: PLAYFAIR, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700 }}
            >
              Featured Work
            </h2>
            <div
              style={{
                height: "2px",
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
                        style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontFamily: DM_SANS, fontWeight: 600 }}
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
          <p className="font-serif font-light text-muted text-xl italic mb-6">
            there&apos;s more where that came from
          </p>
          <WavyCTA href="/work" variant="nav">view more of my work!</WavyCTA>
        </FadeIn>
      </section>
    </main>
  );
}
