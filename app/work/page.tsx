import FadeIn from "@/components/FadeIn";
import WorkCard from "@/components/WorkCard";
import { workProjects } from "@/lib/work";
import { CALISTOGA } from "@/lib/constants";

export default function WorkPage() {
  return (
    <main style={{ backgroundColor: "#F3F5F0" }} className="pt-24">
      {/* Page heading */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-8 pb-4">
        <FadeIn>
          <h1
            className="text-text leading-tight"
            style={{ fontFamily: CALISTOGA, fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}
          >
            work experience
          </h1>
          <div
            style={{
              height: "2px",
              background: "linear-gradient(to right, #F0C8BA, #C9A96E, #B8D4BF, transparent)",
              marginTop: "12px",
              opacity: 0.6,
            }}
          />
        </FadeIn>
      </div>

      <div>
        {workProjects.map((project, i) => (
          <WorkCard
            key={project.slug}
            project={project}
            reversed={i % 2 !== 0}
            cta={{ label: "view more", href: `/work/${project.slug}` }}
          />
        ))}
      </div>
    </main>
  );
}
