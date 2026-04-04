import { workProjects, type WorkProject } from "./work";
import { sideProjects } from "./projects";

// ─────────────────────────────────────────────────────────────────
// Edit this list to control what appears on the home page and in
// what order. type "work" → /work/[slug], "project" → /projects/[slug]
// ─────────────────────────────────────────────────────────────────
export const featuredEntries: Array<{ type: "work" | "project"; slug: string }> = [
  { type: "work",    slug: "cs-copilot"       },
  { type: "work",    slug: "joe-coffee"      },
  { type: "work",    slug: "opentyphoon"     },
  { type: "project", slug: "prompthub"       },
];

export type FeaturedItem = {
  type: "work" | "project";
  slug: string;
  href: string;
  name: string;
  desc: string;
  thumbBg: string;
  workProject?: WorkProject;
};

export function getFeaturedItems(): FeaturedItem[] {
  return featuredEntries.flatMap<FeaturedItem>(({ type, slug }) => {
    if (type === "work") {
      const p = workProjects.find((w) => w.slug === slug);
      if (!p) return [];
      return [{
        type,
        slug: p.slug,
        href: `/work/${p.slug}`,
        name: p.name,
        desc: p.shortDesc,
        thumbBg: p.thumbBg,
        workProject: p,
      }];
    } else {
      const p = sideProjects.find((s) => s.slug === slug);
      if (!p) return [];
      return [{
        type,
        slug: p.slug,
        href: `/projects/${p.slug}`,
        name: p.name,
        desc: p.shortDesc,
        thumbBg: p.thumbBg,
      }];
    }
  });
}
