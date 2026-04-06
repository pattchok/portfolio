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

  const pink = "#F0C8BA";
  const sage = "#B8D4BF";
  const gold = "#C9A96E";

  return (
    <main className="bg-cream min-h-screen relative overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute pointer-events-none" style={{ top: "5%", right: "-40px", width: "180px", height: "180px", background: pink, opacity: 0.18, borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%" }} />
      <div className="absolute pointer-events-none" style={{ top: "25%", left: "-60px", width: "140px", height: "140px", background: sage, opacity: 0.15, borderRadius: "40% 60% 45% 55% / 60% 40% 60% 40%" }} />
      <div className="absolute pointer-events-none" style={{ top: "50%", right: "-30px", width: "110px", height: "110px", background: gold, opacity: 0.12, borderRadius: "50% 40% 60% 40% / 40% 50% 40% 60%" }} />
      <div className="absolute pointer-events-none" style={{ top: "75%", left: "-50px", width: "120px", height: "120px", background: pink, opacity: 0.13, borderRadius: "45% 55% 40% 60% / 55% 45% 55% 45%" }} />

      <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-20 pt-32 pb-24 relative z-10">
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
