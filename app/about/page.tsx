import FadeIn from "@/components/FadeIn";
import JourneyMap from "@/components/JourneyMap";
import WavyCTA from "@/components/WavyCTA";
import { CALISTOGA, QUICKSAND } from "@/lib/constants";

const sectionHeadingStyle = {
  fontFamily: CALISTOGA,
  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
} as const;

export default function AboutPage() {
  return (
    <main className="px-6 md:px-10 lg:px-16 pt-32 pb-24" style={{ backgroundColor: "#FDF5EE" }}>
      <div className="max-w-5xl mx-auto">

        {/* Page heading */}
        <FadeIn>
          <h1
            className="text-text leading-tight"
            style={{ fontFamily: CALISTOGA, fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
          >
            about
          </h1>
          <div
            style={{
              height: "2px",
              background: "linear-gradient(to right, #F0C8BA, #C9A96E, #B8D4BF, transparent)",
              marginTop: "10px",
              opacity: 0.6,
            }}
          />
        </FadeIn>

        {/* Life story */}
        <FadeIn delay={0.06}>
          <div className="space-y-5 text-lg md:text-xl leading-relaxed text-muted mt-8 mb-16 max-w-3xl">
            <p>
              i majored in finance and accounting in my undergrad at Chulalongkorn University.
              what i enjoyed most was the data part, like the records, how things connect, and
              seeing how things actually work. that curiosity and a love for hearing directly from
              users is what got me into product management.
            </p>
            <p>
              i shifted careers right after graduation to be a junior PM at Sertis, a data and AI
              consulting firm, then went on to work in fintech, financial services, and AI infrastructure.
              i&apos;ve been in PM for 6+ years now. i later did my master&apos;s at the University of Washington
              in information management to strengthen the data and AI side of things in a more technical way.
            </p>
          </div>
        </FadeIn>

        {/* Journey Map */}
        <FadeIn delay={0.1}>
          <section className="mb-20">
            <h2 className="text-text leading-tight mb-6" style={sectionHeadingStyle}>
              my journey
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
        <FadeIn delay={0.12}>
          <section className="mb-20">
            <h2 className="text-text leading-tight mb-6" style={sectionHeadingStyle}>
              community
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
                  style={{ fontFamily: QUICKSAND, fontWeight: 600, fontSize: "1.15rem" }}
                >
                  The AI Collective
                </h3>
                <p className="text-muted text-base leading-relaxed mb-4">
                  i co-organized AI meetups and community events in Seattle with The AI Collective,
                  bringing together engineers, researchers, and builders to share knowledge and explore
                  the latest in AI. we hosted regular sessions with talks, demos, and hands-on workshops.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="rounded-xl overflow-hidden border border-border/30 flex items-center justify-center"
                      style={{ height: "140px", backgroundColor: n === 1 ? "#EDD5C5" : n === 2 ? "#C2D0B8" : "#F0E9DC", opacity: 0.55 }}
                    >
                      <p className="text-muted text-xs text-center px-3">photo coming soon</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thai NLP */}
              <div>
                <h3
                  className="text-text mb-2"
                  style={{ fontFamily: QUICKSAND, fontWeight: 600, fontSize: "1.15rem" }}
                >
                  Thai NLP
                </h3>
                <p className="text-muted text-base leading-relaxed mb-4">
                  i contributed to the Thai NLP community, helping to advance natural language processing
                  for the Thai language. this included work on open-source datasets, evaluation benchmarks,
                  and community-building efforts to grow the Thai NLP ecosystem.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="rounded-xl overflow-hidden border border-border/30 flex items-center justify-center"
                      style={{ height: "140px", backgroundColor: n === 1 ? "#C2D0B8" : n === 2 ? "#EDD5C5" : "#F0E9DC", opacity: 0.55 }}
                    >
                      <p className="text-muted text-xs text-center px-3">photo coming soon</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={0.14}>
          <section className="mb-20">
            <h2 className="text-text leading-tight mb-6" style={sectionHeadingStyle}>
              education
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
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold tracking-tight uppercase text-pink-dark">
                    University of Washington
                  </span>
                  <span className="text-muted text-xs">&middot;</span>
                  <span className="text-muted text-xs">2025-2026</span>
                </div>
                <h3
                  className="text-text mb-2"
                  style={{ fontFamily: QUICKSAND, fontWeight: 600, fontSize: "1.1rem" }}
                >
                  M.S. in Information Management
                </h3>
                <div className="text-muted text-sm leading-relaxed space-y-1.5">
                  <p>
                    <span className="text-pink-dark font-medium text-xs uppercase tracking-tight">project</span>{" "}
                    Hugging Face design competition{" "}
                    <a
                      href="https://www.figma.com/deck/xpzASfsNLUgErfBC3XclBY/Hugging-Face-x-iEngage?node-id=1-352&t=Bae6oYG2AOchadY7-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brown hover:underline"
                    >
                      view deck &rarr;
                    </a>
                  </p>
                </div>
              </div>

              {/* Chulalongkorn */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold tracking-tight uppercase text-pink-dark">
                    Chulalongkorn University
                  </span>
                  <span className="text-muted text-xs">&middot;</span>
                  <span className="text-muted text-xs">2014-2018</span>
                </div>
                <h3
                  className="text-text mb-2"
                  style={{ fontFamily: QUICKSAND, fontWeight: 600, fontSize: "1.1rem" }}
                >
                  B.B.A. in Finance & Accounting
                </h3>
                <div className="text-muted text-sm leading-relaxed space-y-1.5">
                  <p>
                    <span className="text-pink-dark font-medium text-xs uppercase tracking-tight">focus</span>{" "}
                    Finance, Accounting, and Data Analytics
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Certificates */}
        <FadeIn delay={0.16}>
          <section className="mb-8">
            <h2 className="text-text leading-tight mb-4" style={sectionHeadingStyle}>
              certificates
            </h2>
            <div
              style={{
                height: "1.5px",
                background: "linear-gradient(to right, #F0C8BA, #C9A96E, #B8D4BF, transparent)",
                opacity: 0.5,
                marginBottom: "12px",
              }}
            />
            <p className="text-muted text-sm">PMP &middot; PMI-ACP</p>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.18}>
          <div className="border-t border-border pt-12 text-right flex flex-col items-end">
            <p className="text-muted mb-3">want to see what i&apos;ve built?</p>
            <WavyCTA href="/work" variant="nav">view my work</WavyCTA>
          </div>
        </FadeIn>

      </div>
    </main>
  );
}
