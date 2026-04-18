import FadeIn from "@/components/FadeIn";
import CompactWorkRow from "@/components/CompactWorkRow";
import PageBg from "@/components/PageBg";
import { workProjects } from "@/lib/work";
import { sideProjects } from "@/lib/projects";
import { PLAYFAIR } from "@/lib/constants";

export default function WorkPage() {
  return (
    <main style={{ backgroundColor: "#F3F5F0", scrollBehavior: "smooth" }} className="relative px-6 md:px-10 lg:px-16 pt-32 pb-24">
      <PageBg />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Page heading */}
        <FadeIn>
          <h1
            className="text-text leading-tight"
            style={{ fontFamily: PLAYFAIR, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700 }}
          >
            Work
          </h1>
          <div
            style={{
              height: "4px",
              background: "linear-gradient(to right, #F0C8BA, #C9A96E, #B8D4BF, transparent)",
              marginTop: "10px",
              opacity: 0.6,
            }}
          />
        </FadeIn>

        {/* Intro */}
        <FadeIn delay={0.06}>
          <p className="text-base md:text-lg leading-relaxed text-muted mt-8 mb-5">
            I have 6 years building <strong>AI products</strong> across fintech, e-commerce, and retail, working mostly with <strong>language technology</strong>: conversational AI, text analysis, LLMs, and data collection and annotation. I&apos;ve launched B2C products reaching <strong>tens of millions of MAUs</strong>, and B2B products that integrate AI into enterprise production workflows.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted mb-14">
            Outside of work, I build small side projects (mostly for fun) and once <strong>co-founded a startup </strong>with friends. Though it&apos;s no longer active, it remains one of the best learning experiences I&apos;ve ever had!
          </p>
          <a
            href="#side-projects"
            className="group inline-flex items-center gap-1 text-sm text-text hover:text-brown transition-colors duration-200 mb-12"
          >
            <span className="font-bold underline underline-offset-4 decoration-1">
              check out my side projects below
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-y-1"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </FadeIn>

        {/* Work experience */}
        <FadeIn delay={0.1}>
          <h2
            className="text-text leading-tight mb-2"
            style={{ fontFamily: PLAYFAIR, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 700 }}
          >
            My Fun Career
          </h2>
          <div
            style={{
              height: "3px",
              background: "linear-gradient(to right, #F0C8BA, #C9A96E, #B8D4BF, transparent)",
              opacity: 0.5,
              marginBottom: "4px",
            }}
          />
        </FadeIn>

        <div>
          {workProjects.map((p) => (
            <CompactWorkRow
              key={p.slug}
              name={p.name}
              shortDesc={p.shortDesc}
              href={`/work/${p.slug}`}
              thumbBg={p.thumbBg}
              thumbImg={p.thumbImg}
              thumbIframe={undefined}
              meta={p.meta}
              year={p.year}
              company={p.company}
              comingSoon={p.comingSoon}
            />
          ))}
        </div>

        {/* Side projects */}
        <div id="side-projects" className="mt-16" style={{ scrollMarginTop: "120px" }}>
          <FadeIn>
            <h2
              className="text-text leading-tight mb-2"
              style={{ fontFamily: PLAYFAIR, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 700 }}
            >
              What I Did Outside of My 9-5
            </h2>
            <div
              style={{
                height: "3px",
                background: "linear-gradient(to right, #F0C8BA, #C9A96E, #B8D4BF, transparent)",
                opacity: 0.5,
                marginBottom: "4px",
              }}
            />
          </FadeIn>

          <div>
            {sideProjects.map((p) => (
              <CompactWorkRow
                key={p.slug}
                name={p.name}
                shortDesc={p.shortDesc}
                href={`/projects/${p.slug}`}
                thumbBg={p.thumbBg}
                thumbImg={p.thumbImg}
                year={p.year}
                links={p.links}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
