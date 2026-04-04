import { notFound } from "next/navigation";
import Link from "next/link";
import { workProjects } from "@/lib/work";
import WavyCTA from "@/components/WavyCTA";

export function generateStaticParams() {
  return workProjects
    .filter((p) => !p.comingSoon)
    .map((p) => ({ slug: p.slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = workProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-20 pt-32 pb-24">
        {/* Back */}
        <Link
          href="/work"
          className="text-muted text-sm hover:text-brown transition-colors duration-200 mb-12 inline-block"
        >
          ← work
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold tracking-tight uppercase text-pink-dark">
            {project.company}
          </span>
          <span className="text-muted text-xs">·</span>
          <span className="text-muted text-xs">{project.year}</span>
        </div>

        {/* Title */}
        <h1
          className="font-light text-text leading-tight mb-4"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontFamily: "var(--font-calistoga), Georgia, serif",
          }}
        >
          {project.name}
        </h1>
        <p className="text-muted text-lg leading-relaxed mb-5">{project.shortDesc}</p>

        {/* Thumbnail placeholder */}
        <div
          className="rounded-2xl w-full border border-border/30 mb-16"
          style={{ height: "320px", backgroundColor: project.thumbBg, opacity: 0.6 }}
        />

        {/* Placeholder content */}
        <p className="text-muted text-lg leading-relaxed italic mb-10">
          case study coming soon. if you&apos;d like to hear about this project, feel free to reach out!
        </p>
        <WavyCTA href="mailto:ch.pathomporn@gmail.com">get in touch</WavyCTA>
      </div>
    </main>
  );
}
