import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import AboutMeCard from "@/components/AboutMeCard";
import JourneyMap from "@/components/JourneyMap";
import WavyCTA from "@/components/WavyCTA";
import { PLAYFAIR, DM_SANS } from "@/lib/constants";

const sectionHeadingStyle = {
  fontFamily: PLAYFAIR,
  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
  fontWeight: 700,
} as const;

export default function AboutPage() {
  return (
    <main className="px-6 md:px-10 lg:px-16 pt-32 pb-24" style={{ backgroundColor: "#FDF5EE" }}>
      <div className="max-w-4xl mx-auto">

        <div className="space-y-16">

          {/* My Story — animated card */}
          <AboutMeCard />

          {/* Journey Map */}
          <FadeIn delay={1.4}>
            <section>
              <h2 className="text-text leading-tight mb-6" style={sectionHeadingStyle}>
                My Journey
              </h2>
              <div
                style={{
                  height: "1.5px",
                  background: "linear-gradient(to right, #F0C8BA, #C9A96E, #B8D4BF, transparent)",
                  opacity: 0.5,
                  marginBottom: "16px",
                }}
              />
              <JourneyMap />
            </section>
          </FadeIn>

          {/* Community */}
          <FadeIn delay={0.16}>
            <section>
              <h2 className="text-text leading-tight mb-6" style={sectionHeadingStyle}>
                Community
              </h2>
              <div
                style={{
                  height: "1.5px",
                  background: "linear-gradient(to right, #F0C8BA, #C9A96E, #B8D4BF, transparent)",
                  opacity: 0.5,
                  marginBottom: "16px",
                }}
              />

              <div className="space-y-12">
                {/* The AI Collective */}
                <div>
                  <h3
                    className="text-text mb-2"
                    style={{ fontFamily: DM_SANS, fontWeight: 600, fontSize: "1.15rem" }}
                  >
                    The AI Collective, Seattle Chapter
                  </h3>
                  <p className="text-muted text-base leading-relaxed mb-4">
                    I co-organized AI meetups and community events in Seattle with The AI Collective,
                    bringing together engineers, researchers, and builders to share knowledge and explore
                    the latest in AI. We hosted regular sessions with talks, demos, and hands-on workshops.
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <Image src="/about/aicollective-1.jpg" alt="AI Collective event" width={600} height={400} className="rounded-xl object-cover w-full border border-border/30" style={{ height: "140px" }} />
                    <div
                      className="rounded-xl overflow-hidden border border-border/30"
                      style={{ height: "140px", backgroundColor: "#f5f5f4" }}
                    >
                      <Image src="/about/aicollective-2.png" alt="Patt at AI Collective" width={600} height={400} className="w-full h-full object-contain object-center" />
                    </div>
                    <Image src="/about/aicollective-3.png" alt="AI Collective community" width={600} height={400} className="rounded-xl object-cover w-full border border-border/30" style={{ height: "140px" }} />
                  </div>
                </div>

                {/* Thai NLP */}
                <div>
                  <h3
                    className="text-text mb-2"
                    style={{ fontFamily: DM_SANS, fontWeight: 600, fontSize: "1.15rem" }}
                  >
                    Thai NLP
                  </h3>
                  <p className="text-muted text-base leading-relaxed mb-4">
                    I contributed to the Thai NLP community, helping to advance natural language processing
                    for the Thai language. This included work on open-source datasets, evaluation benchmarks,
                    and community-building efforts to grow the Thai NLP ecosystem.
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <Image src="/about/thainlp-1.png" alt="Thai NLP community" width={600} height={400} className="rounded-xl object-cover w-full border border-border/30" style={{ height: "140px" }} />
                    <Image src="/about/thainlp-2.png" alt="Techsauce 2024" width={600} height={400} className="rounded-xl object-cover w-full border border-border/30" style={{ height: "140px" }} />
                    <Image src="/about/thainlp-3.png" alt="ACL 2024" width={600} height={400} className="rounded-xl object-cover w-full border border-border/30" style={{ height: "140px" }} />
                  </div>
                </div>

                {/* RAISE */}
                <div>
                  <h3
                    className="text-text mb-2"
                    style={{ fontFamily: DM_SANS, fontWeight: 600, fontSize: "1.15rem" }}
                  >
                    RAISE Winter Exposition, UW
                  </h3>
                  <p className="text-muted text-base leading-relaxed">
                    During my time at UW, I joined the Winter Exposition by RAISE (Responsible AI Systems
                    and Experiences), a UW research initiative focused on building AI systems that are
                    trustworthy and human-centered. It was a great opportunity to engage with researchers
                    and practitioners working on responsible AI.
                  </p>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.18}>
            <section>
              <h2 className="text-text leading-tight mb-6" style={sectionHeadingStyle}>
                Education
              </h2>
              <div
                style={{
                  height: "1.5px",
                  background: "linear-gradient(to right, #F0C8BA, #C9A96E, #B8D4BF, transparent)",
                  opacity: 0.5,
                  marginBottom: "16px",
                }}
              />

              <div className="space-y-10">
                {/* UW */}
                <div>
                  <h3
                    className="leading-tight text-text"
                    style={{ fontFamily: DM_SANS, fontWeight: 600, fontSize: "1.15rem" }}
                  >
                    University of Washington
                  </h3>
                  <p className="text-text text-base mt-1.5 font-semibold">M.S. in Information Management</p>
                  <p className="text-muted text-base mt-0.5">Major in AI and Data Science</p>
                  <div className="flex items-center gap-2 text-xs mt-2">
                    <span className="font-bold tracking-tight uppercase text-pink-dark">Seattle, WA</span>
                    <span className="text-muted">&middot;</span>
                    <span className="text-muted">2024&ndash;2025</span>
                  </div>
                  <div
                    className="mt-3 ml-4 pl-4 border-l-2 text-muted text-base leading-relaxed space-y-1"
                    style={{ borderColor: "rgba(201,169,110,0.35)" }}
                  >
                    <p>GPA 3.96/4.0</p>
                    <p>Dean&apos;s Scholarship</p>
                  </div>
                </div>

                {/* Chulalongkorn */}
                <div>
                  <h3
                    className="leading-tight text-text"
                    style={{ fontFamily: DM_SANS, fontWeight: 600, fontSize: "1.15rem" }}
                  >
                    Chulalongkorn University
                  </h3>
                  <p className="text-text text-base mt-1.5 font-semibold">Bachelor of Business Administration</p>
                  <p className="text-muted text-base mt-0.5">Major in Finance and Accounting Information System</p>
                  <div className="flex items-center gap-2 text-xs mt-2">
                    <span className="font-bold tracking-tight uppercase text-pink-dark">Bangkok, Thailand</span>
                    <span className="text-muted">&middot;</span>
                    <span className="text-muted">2015&ndash;2019</span>
                  </div>
                  <div
                    className="mt-3 ml-4 pl-4 border-l-2 text-muted text-base leading-relaxed space-y-1"
                    style={{ borderColor: "rgba(201,169,110,0.35)" }}
                  >
                    <p>First Class Honors, GPA 3.88/4.0</p>
                    <p>Full-ride scholarship as the top three students at admission</p>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.22}>
            <div className="border-t border-border pt-12 text-right flex flex-col items-end">
              <p className="text-muted mb-3">want to see what i&apos;ve built?</p>
              <WavyCTA href="/work" variant="nav">view my work</WavyCTA>
            </div>
          </FadeIn>

        </div>
      </div>
    </main>
  );
}
