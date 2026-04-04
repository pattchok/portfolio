import FadeIn from "@/components/FadeIn";
import { sideProjects } from "@/lib/projects";
import { CALISTOGA } from "@/lib/constants";

export default function ProjectsPage() {
  return (
    <main style={{ backgroundColor: "#F3F5F0" }} className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-24">
        {/* Page heading */}
        <FadeIn>
          <h1
            className="text-text leading-tight"
            style={{ fontFamily: CALISTOGA, fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}
          >
            projects i&apos;ve built
          </h1>
          <div
            style={{
              height: "2px",
              background: "linear-gradient(to right, #F0C8BA, #C9A96E, #B8D4BF, transparent)",
              marginTop: "12px",
              marginBottom: "8px",
              opacity: 0.6,
            }}
          />
        </FadeIn>

        {/* Project list */}
        <div>
          {sideProjects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.06}>
              <div className="py-7 border-b border-border/40">
                <div className="flex items-start gap-6">
                  <span className="text-muted text-sm w-10 shrink-0 pt-1">{project.year}</span>
                  <div className="flex-1 min-w-0">
                    <h2
                      className="text-text mb-1.5 font-light"
                      style={{
                        fontFamily: "var(--font-calistoga), Georgia, serif",
                        fontSize: "1.25rem",
                      }}
                    >
                      {project.name}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed">{project.shortDesc}</p>
                    {project.subtitle && (
                      <p className="text-muted text-xs italic mt-1.5">{project.subtitle}</p>
                    )}
                    {project.links && project.links.length > 0 && (
                      <div className="flex flex-wrap gap-4 mt-3">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted hover:text-brown hover:underline transition-colors duration-200"
                          >
                            {link.label} →
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
