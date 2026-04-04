import FadeIn from "@/components/FadeIn";
import WavyCTA from "@/components/WavyCTA";
import WorkCard from "@/components/WorkCard";
import HeroBg from "@/components/HeroBg";
import { getFeaturedItems } from "@/lib/featured";
import { CALISTOGA, QUICKSAND } from "@/lib/constants";

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
              <FadeIn delay={0.05}>
                <h1
                  className="text-text leading-[1.1] mb-4"
                  style={{ fontSize: "clamp(3rem, 6.5vw, 5rem)", fontFamily: CALISTOGA }}
                >
                  patt chokchainant
                </h1>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p className="text-brown text-xl md:text-2xl mb-8 tracking-wide">
                  curious learner · operator · amateur builder
                </p>
              </FadeIn>
              <FadeIn delay={0.24}>
                <p className="text-muted text-xl md:text-2xl leading-relaxed max-w-xl mb-10">
                  product manager with 6+ years in ai and data, passionate about
                  understanding what people actually need and turning those into
                  insight-driven products.
                </p>
              </FadeIn>
              <FadeIn delay={0.36}>
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
              <div className="max-w-7xl mx-auto">
                <FadeIn>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                      reversed ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <div className={reversed ? "[direction:ltr]" : ""}>
                      <div
                        className="rounded-2xl w-full border border-border/30"
                        style={{ height: "360px", backgroundColor: item.thumbBg, opacity: 0.65 }}
                      />
                    </div>
                    <div className={reversed ? "[direction:ltr]" : ""}>
                      <h3
                        className="text-text leading-tight mb-5"
                        style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontFamily: QUICKSAND, fontWeight: 600 }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-muted leading-relaxed mb-8 text-lg md:text-xl">
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
      <section className="px-6 md:px-10 lg:px-16 py-20 border-t border-border text-center bg-cream -mt-px">
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
