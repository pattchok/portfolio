import { notFound } from "next/navigation";
import Link from "next/link";
import { sideProjects } from "@/lib/projects";
import WavyCTA from "@/components/WavyCTA";
import { PLAYFAIR } from "@/lib/constants";

export function generateStaticParams() {
  return sideProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = sideProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-20 pt-32 pb-24">
        {/* Back */}
        <Link
          href="/work#side-projects"
          className="text-muted text-sm hover:text-brown transition-colors duration-200 mb-12 inline-block"
        >
          &larr; work
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-muted text-xs">{project.year}</span>
        </div>

        {/* Title */}
        <h1
          className="font-light text-text leading-tight mb-4"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontFamily: PLAYFAIR,
          }}
        >
          {project.name}
        </h1>
        <p className="text-muted text-base leading-relaxed mb-5">{project.shortDesc}</p>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-12">
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

        {/* Thumbnail placeholder */}
        <div
          className="rounded-2xl w-full border border-border/30 mb-16"
          style={{ height: "280px", backgroundColor: project.thumbBg, opacity: 0.6 }}
        />

        {/* Placeholder content */}
        <p className="text-muted text-base leading-relaxed italic mb-10">
          More details coming soon!
        </p>
        {project.links && project.links.length > 0 && project.links[0].href && (
          <WavyCTA href={project.links[0].href}>visit project</WavyCTA>
        )}
      </div>
    </main>
  );
}
