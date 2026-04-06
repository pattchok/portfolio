import FadeIn from "@/components/FadeIn";
import CompactWorkRow from "@/components/CompactWorkRow";
import { workProjects } from "@/lib/work";
import { sideProjects } from "@/lib/projects";
import { CALISTOGA } from "@/lib/constants";

export default function WorkPage() {
  return (
    <main style={{ backgroundColor: "#F3F5F0", scrollBehavior: "smooth" }} className="pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Page heading */}
        <div className="pt-8 pb-4">
          <FadeIn>
            <h1
              className="text-text leading-tight"
              style={{ fontFamily: CALISTOGA, fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              work
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
        </div>

        {/* Intro */}
        <FadeIn delay={0.06}>
          <p className="text-muted text-lg leading-relaxed mb-4 max-w-3xl">
            i&apos;ve spent 6+ years working at the intersection of AI, data, and product. most of my work
            has been in industries like financial services, retail, and AI infrastructure. i care deeply
            about building things that actually solve real problems for real people, and i believe in
            shipping early, learning fast, and staying close to the users.
          </p>
          <a
            href="#side-projects"
            className="inline-flex items-center gap-1 text-sm text-brown hover:text-brown-light transition-colors duration-200 mb-12"
          >
            check out my side projects below
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </FadeIn>

        {/* Work experience */}
        <FadeIn delay={0.1}>
          <h2
            className="text-text leading-tight mb-2"
            style={{ fontFamily: CALISTOGA, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)" }}
          >
            work experience
          </h2>
          <div
            style={{
              height: "1.5px",
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
              thumbIframe={p.slug === "cs-copilot" ? "/work/cs-copilot/copilot-preview.html" : undefined}
              meta={p.meta}
              year={p.year}
              company={p.company}
              comingSoon={p.comingSoon}
            />
          ))}
        </div>

        {/* Side projects */}
        <div id="side-projects" className="mt-16">
          <FadeIn>
            <h2
              className="text-text leading-tight mb-2"
              style={{ fontFamily: CALISTOGA, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)" }}
            >
              side projects
            </h2>
            <div
              style={{
                height: "1.5px",
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
