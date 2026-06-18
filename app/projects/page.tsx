import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { WavyUnderline } from "@/components/wavy-underline";
import { projectSections } from "@/lib/data";

export const metadata: Metadata = {
  title: "projects",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <section className="pt-[2.5rem] pb-20 sm:pt-[3.2rem]">
        <Reveal>
          <h1 className="mx-auto max-w-2xl text-center font-serif text-3xl font-normal leading-snug tracking-tight sm:text-4xl">
            6-year history of my projects, professional work, and community
            initiatives
          </h1>
        </Reveal>
      </section>

      <div className="flex flex-col gap-20 pb-20">
        {projectSections.map((section) => (
          <section key={section.id} id={section.id}>
            <Reveal>
              <h2 className="text-base font-semibold uppercase tracking-widest text-foreground">
                <WavyUnderline gradientId={`wavy-${section.id}`}>
                  {section.label}
                </WavyUnderline>
              </h2>
              {section.blurb ? (
                <p className="mb-[3rem] mt-2 text-base text-muted">
                  {section.blurb}
                </p>
              ) : (
                <div className="mb-[3rem]" />
              )}
            </Reveal>

            <div className="flex flex-col gap-[1.5rem]">
              {section.projects.map((project) => {
                // Cover links to the card's primary destination: internal detail
                // page (slug), the first external link (e.g. HF's deck), or href.
                const coverHref = project.slug
                  ? `/projects/${project.slug}`
                  : project.links?.[0]?.href ?? project.href;
                const isInternalCover = Boolean(project.slug);

                const cover = (
                  <>
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 640px) 240px, 100vw"
                        className="object-cover transition-transform duration-300 group-hover/cover:scale-105"
                      />
                    ) : project.comingSoon ? (
                      <div
                        className="flex h-full w-full items-center justify-center"
                        style={{ backgroundColor: "#e7e8d3" }}
                      >
                        <span className="font-serif text-lg italic text-foreground/55">
                          coming soon :)
                        </span>
                      </div>
                    ) : (
                      <div
                        className={`h-full w-full bg-gradient-to-br ${project.gradient ?? "from-stone-200 to-stone-100"}`}
                      />
                    )}
                  </>
                );

                const coverClass =
                  "group/cover relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-hairline bg-stone-100";

                return (
                <Reveal key={project.title}>
                  <div
                    id={project.slug ? `card-${project.slug}` : undefined}
                    className="grid scroll-mt-28 gap-5 sm:grid-cols-[240px_1fr] sm:gap-7"
                  >
                    {/* Photo — left */}
                    {coverHref ? (
                      isInternalCover ? (
                        <Link href={coverHref} className={coverClass}>
                          {cover}
                        </Link>
                      ) : (
                        <a
                          href={coverHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={coverClass}
                        >
                          {cover}
                        </a>
                      )
                    ) : (
                      <div className={coverClass}>{cover}</div>
                    )}

                    {/* Text — right */}
                    <div className="flex flex-col justify-center">
                      <div className="flex items-baseline gap-3">
                        <h3 className="text-xl font-bold tracking-tight">
                          {project.title}
                        </h3>
                        {project.meta && (
                          <span className="text-sm text-muted">
                            {project.meta}
                          </span>
                        )}
                      </div>
                      {project.description && (
                        <p
                          className="mt-2 max-w-xl leading-relaxed text-muted"
                          style={{ fontSize: "1.06rem" }}
                        >
                          {project.description}
                        </p>
                      )}
                      {project.slug ? (
                        <Link
                          href={`/projects/${project.slug}`}
                          className="mt-3 inline-block w-fit font-medium text-[#8c5e48] underline-offset-4 transition-colors hover:text-accent hover:underline"
                          style={{ fontSize: "1.06rem" }}
                        >
                          view more&nbsp;<span aria-hidden>→</span>
                        </Link>
                      ) : project.links ? (
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                          {project.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block w-fit font-medium text-[#8c5e48] underline-offset-4 transition-colors hover:text-accent hover:underline"
                              style={{ fontSize: "1.06rem" }}
                            >
                              {link.label}&nbsp;<span aria-hidden>→</span>
                            </a>
                          ))}
                        </div>
                      ) : (
                        project.href && (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-block w-fit font-medium text-[#8c5e48] underline-offset-4 transition-colors hover:text-accent hover:underline"
                            style={{ fontSize: "1.06rem" }}
                          >
                            {project.linkLabel ?? "view more"}&nbsp;<span aria-hidden>→</span>
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </Reveal>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
