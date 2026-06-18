import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { SectionIndex } from "@/components/section-index";
import { ImageCarousel } from "@/components/image-carousel";
import { HtmlEmbed } from "@/components/html-embed";
import { getProjectBySlug, projectSections } from "@/lib/data";
import type { ProjectImage, ProjectSectionBlock } from "@/lib/data";

export function generateStaticParams() {
  return projectSections
    .flatMap((s) => s.projects)
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug as string }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project?.title ?? "Project" };
}

// Render a string with **bold** spans into React nodes.
function withBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-widest text-[#8c5e48]">
      {children}
    </h2>
  );
}

function BodyImage({ image }: { image: ProjectImage }) {
  return (
    <figure className="mt-4">
      {image.placeholder ? (
        <div
          className="flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-dashed border-hairline bg-stone-100"
          style={{ aspectRatio: `${image.width} / ${image.height}` }}
        >
          <span className="px-4 text-center text-sm text-muted">
            {image.alt}
          </span>
        </div>
      ) : image.src.endsWith(".svg") ? (
        // SVGs render with a plain img tag (no Next optimization needed, and
        // avoids requiring dangerouslyAllowSVG in next.config). No background
        // wrapper — the diagram sits directly on the page.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="mx-auto h-auto w-full max-w-2xl"
        />
      ) : (
        <div className="overflow-hidden rounded-xl border border-hairline bg-stone-100">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-auto w-full"
          />
        </div>
      )}
      {image.caption && (
        <figcaption className="mt-3 text-center text-sm italic leading-relaxed text-muted">
          {withBold(image.caption)}
        </figcaption>
      )}
    </figure>
  );
}

function SectionBody({ section }: { section: ProjectSectionBlock }) {
  return (
    <>
      {section.lead &&
        section.lead.split("\n\n").map((para, i) => (
          <p
            key={i}
            className={`leading-relaxed text-muted ${i === 0 ? "mt-3" : "mt-3"}`}
          >
            {withBold(para)}
          </p>
        ))}

      {/* Lead image — e.g. an overview diagram shown right after the lead */}
      {section.leadImage && <BodyImage image={section.leadImage} />}

      {/* Bulleted list with inline bold label */}
      {section.bullets && (
        <ul className="mt-5 flex list-disc flex-col gap-3 pl-5 marker:text-[#8c5e48]">
          {section.bullets.map((b) => (
            <li key={b.label} className="leading-relaxed text-[#8c5e48]">
              <span className="font-semibold text-foreground">{b.label}</span>
              {": "}
              {b.body}
            </li>
          ))}
        </ul>
      )}

      {/* Tools (tech-stack) — small cards */}
      {section.tools && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {section.tools.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-hairline bg-background/50 p-5"
            >
              <h3 className="font-medium tracking-tight text-foreground">
                {t.name}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[#8c5e48]">
                {t.role}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Bordered card grid */}
      {section.cards && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {section.cards.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-hairline bg-background/50 p-5"
            >
              <h3 className="font-medium tracking-tight text-foreground">
                {c.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#8c5e48]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Feature subsections — optional heading/body, plus a single image or a
          row of images sharing one caption. */}
      {section.features && (
        <div className="mt-6 flex flex-col gap-10">
          {section.features.map((f, i) => (
            <div key={f.title || i}>
              {f.title && (
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {f.title}
                </h3>
              )}
              {f.body && (
                <p className="mt-1.5 leading-relaxed text-muted">{f.body}</p>
              )}
              {f.image && <BodyImage image={f.image} />}
              {f.images && (
                <figure className={f.title || f.body ? "mt-4" : ""}>
                  <div className="grid grid-cols-3 gap-3">
                    {f.images.map((img) => (
                      <div
                        key={img.src}
                        className="overflow-hidden rounded-xl border border-hairline bg-stone-100"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={img.width}
                          height={img.height}
                          className="aspect-square h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  {f.caption && (
                    <figcaption className="mt-3 text-center text-sm italic leading-relaxed text-muted">
                      {withBold(f.caption)}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Publication block — plain, no card */}
      {section.publication && (
        <div className="mt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-semibold tracking-tight text-foreground">
              {section.publication.title}
            </h3>
            {section.publication.date && (
              <span className="text-xs text-muted">
                {section.publication.date}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {section.publication.body}
          </p>
          {section.publication.authors && (
            <p className="mt-3 text-xs leading-relaxed text-muted/80">
              {section.publication.authors}
            </p>
          )}
          {section.publication.link && (
            <a
              href={section.publication.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-[#8c5e48] underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {section.publication.link.label}&nbsp;→
            </a>
          )}
        </div>
      )}

      {/* Partner logo cards */}
      {section.partners && (
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {section.partners.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-xl border border-hairline bg-background/50 p-5"
            >
              {p.logo ? (
                <div className="flex h-10 items-center">
                  <Image
                    src={p.logo.src}
                    alt={p.logo.alt}
                    width={p.logo.width}
                    height={p.logo.height}
                    className="h-auto max-h-8 w-auto max-w-[140px] object-contain"
                  />
                </div>
              ) : (
                <h3 className="font-medium tracking-tight">{p.name}</h3>
              )}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {p.body}
              </p>
              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-[#8c5e48] underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {p.link.label}&nbsp;→
                </a>
              )}
            </div>
          ))}
        </div>
      )}
      {section.partnersNote && (
        <p className="mt-4 text-sm italic leading-relaxed text-muted">
          {section.partnersNote}
        </p>
      )}

      {/* Carousel within a section */}
      {section.carousel && (
        <ImageCarousel
          images={section.carousel.images}
          caption={section.carousel.caption}
        />
      )}

      {/* Italic / callout block — supports multiple paragraphs */}
      {section.context && (
        <div className="mt-6 border-l-2 border-accent/40 pl-4">
          {section.context.split("\n\n").map((para, i) => (
            <p
              key={i}
              className={`text-sm italic leading-relaxed text-muted ${i > 0 ? "mt-3" : ""}`}
            >
              {para}
            </p>
          ))}
        </div>
      )}
    </>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !project.detail) notFound();

  const { title, image, gradient, detail } = project;
  const hero = detail.heroImage;

  // Build the left index: TL;DR, each body section, then Impact (if present).
  const indexItems = [
    { id: "tldr", title: "TL;DR" },
    ...detail.sections.map((s) => ({ id: s.id, title: s.navTitle ?? s.title })),
    ...(detail.stats ? [{ id: "impact", title: "Impact" }] : []),
  ];

  return (
    <div className="w-full">
      {/* Full-bleed hero at the very top — sits under the transparent nav
          (-mt-18 cancels the layout's pt-18 nav offset). */}
      <Reveal>
        <div className="-mt-18 w-full overflow-hidden bg-stone-100">
          {hero ? (
            <Image
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              priority
              className="h-auto w-full"
            />
          ) : image ? (
            <Image
              src={image}
              alt={title}
              width={2560}
              height={1097}
              priority
              className="aspect-[21/9] h-full w-full object-cover"
            />
          ) : (
            <div
              className={`aspect-[21/9] h-full w-full bg-gradient-to-br ${gradient ?? "from-stone-200 to-stone-100"}`}
            />
          )}
        </div>
        {detail.heroNote && (
          <p className="px-6 pt-3 text-xs leading-relaxed text-muted md:px-12 lg:px-20">
            {detail.heroNote}
          </p>
        )}
      </Reveal>

      {/* Two-column body: sticky left index + running right content */}
      <div className="px-6 pt-12 pb-14 md:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
          {/* Left — sticky index */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <Link
                href={`/projects#card-${slug}`}
                className="mb-4 inline-block text-sm text-[#8c5e48] underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                ← back
              </Link>
              <h2 className="mb-4 font-serif text-xl font-semibold leading-snug tracking-tight text-foreground">
                {title}
              </h2>
              <SectionIndex items={indexItems} />
            </div>
          </aside>

          {/* Right — running content */}
          <div className="flex max-w-3xl flex-col gap-16">
            {/* TL;DR */}
            <section id="tldr" className="scroll-mt-28">
              <SectionHeading>TL;DR</SectionHeading>
              <p className="mt-3 text-lg leading-relaxed text-muted">
                {detail.tldr}
              </p>
              <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 border-y border-hairline py-8 sm:grid-cols-2">
                {detail.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-xs font-medium uppercase tracking-widest text-accent">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm text-[#8c5e48]">{f.value}</dd>
                  </div>
                ))}
              </dl>
              {detail.tldrLinks && (
                <div className="mt-6 flex flex-col gap-2">
                  {detail.tldrLinks.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                      {l.label}&nbsp;→
                    </a>
                  ))}
                </div>
              )}
              {detail.tldrCarousel && (
                <ImageCarousel
                  images={detail.tldrCarousel.images}
                  caption={detail.tldrCarousel.caption}
                />
              )}
              {detail.tldrEmbeds && (
                <figure className="mt-6">
                  <div className="flex flex-col gap-6">
                    {detail.tldrEmbeds.items.map((embed) => (
                      <div
                        key={embed.src}
                        className="overflow-hidden rounded-xl border border-hairline bg-white"
                      >
                        <HtmlEmbed src={embed.src} title={embed.title} />
                      </div>
                    ))}
                  </div>
                  {detail.tldrEmbeds.caption && (
                    <figcaption className="mt-3 text-center text-sm italic leading-relaxed text-muted">
                      {detail.tldrEmbeds.caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </section>

            {/* Flexible body sections */}
            {detail.sections.map((section) => (
              <Reveal key={section.id}>
                <section id={section.id} className="scroll-mt-28">
                  <SectionHeading>{section.title}</SectionHeading>
                  <SectionBody section={section} />
                </section>
              </Reveal>
            ))}

            {/* Impact — stats infographic */}
            {detail.stats && (
              <Reveal>
                <section id="impact" className="scroll-mt-28">
                  <SectionHeading>Impact</SectionHeading>
                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {detail.stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl border border-hairline bg-background/50 p-6 text-center"
                      >
                        <div className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                          {s.value}
                        </div>
                        <div className="mt-2 text-xs leading-snug text-muted">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
