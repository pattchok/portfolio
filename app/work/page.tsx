import FadeIn from "@/components/FadeIn";
import CompactWorkRow from "@/components/CompactWorkRow";
import { workProjects } from "@/lib/work";
import { sideProjects } from "@/lib/projects";
import { PLAYFAIR } from "@/lib/constants";

export default function WorkPage() {
  return (
    <main style={{ backgroundColor: "#F3F5F0", scrollBehavior: "smooth" }} className="px-6 md:px-10 lg:px-16 pt-32 pb-24">
      <div className="max-w-4xl mx-auto">
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
              height: "2px",
              background: "linear-gradient(to right, #F0C8BA, #C9A96E, #B8D4BF, transparent)",
              marginTop: "10px",
              opacity: 0.6,
            }}
          />
        </FadeIn>

        {/* Intro */}
        <FadeIn delay={0.06}>
          <p className="text-base md:text-lg leading-relaxed text-muted mt-8 mb-14">
            I&apos;ve spent 6+ years working at the intersection of AI, data, and product. Most of my work
            has been in industries like financial services, retail, and AI infrastructure. I care deeply
            about building things that actually solve real problems for real people, and I believe in
            shipping early, learning fast, and staying close to the users.
          </p>
          <a
            href="#side-projects"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-brown hover:underline underline-offset-4 transition-colors duration-200 mb-12"
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
            style={{ fontFamily: PLAYFAIR, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 700 }}
          >
            Work Experience
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
              style={{ fontFamily: PLAYFAIR, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 700 }}
            >
              Side Projects
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
