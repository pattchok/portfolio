import Link from "next/link";
import { ExternalLink } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Tag from "@/components/Tag";
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
              <div className="group flex items-start gap-6 py-7 border-b border-border/40 hover:border-border/70 transition-colors duration-200">
                <span className="text-muted text-sm w-10 shrink-0 pt-1">{project.year}</span>
                <div className="flex-1 min-w-0">
                  <Link href={`/projects/${project.slug}`}>
                    <h2
                      className="text-text group-hover:text-brown transition-colors duration-200 mb-1.5 font-light"
                      style={{
                        fontFamily: "var(--font-calistoga), Georgia, serif",
                        fontSize: "1.25rem",
                      }}
                    >
                      {project.name}
                    </h2>
                  </Link>
                  <p className="text-muted text-sm leading-relaxed">{project.shortDesc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-1 shrink-0">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-brown transition-colors duration-200"
                      aria-label={`external link for ${project.name}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-muted group-hover:text-brown transition-colors duration-200 text-lg"
                  >
                    →
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
