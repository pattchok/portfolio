export type ProjectLink = {
  label: string;
  href: string;
};

export type SideProject = {
  slug: string;
  name: string;
  shortDesc: string;
  subtitle?: string;
  year: string;
  thumbBg: string;
  links?: ProjectLink[];
};

export const sideProjects: SideProject[] = [
  {
    slug: "shadowclaw",
    name: "shadowclaw",
    shortDesc: "What if you never had to prompt OpenClaw?",
    subtitle: "brewing now, coming soon :)",
    year: "2026",
    thumbBg: "#B8D4BF",
    links: [],
  },
  {
    slug: "huggingface-design",
    name: "hugging face design competition",
    shortDesc: "A design competition during my time at UW MS Information Management program. We didn't win but we learned a lot during the process, especially around information architecture and UX/UI design!",
    year: "2025",
    thumbBg: "#EDD5C5",
    links: [
      { label: "deck", href: "https://www.figma.com/deck/xpzASfsNLUgErfBC3XclBY/Hugging-Face-x-iEngage?node-id=1-352&t=Bae6oYG2AOchadY7-1" },
      { label: "design", href: "/projects/huggingface-design/hugging-face-ui.png" },
    ],
  },
  {
    slug: "prompthub",
    name: "prompthub",
    shortDesc: "A community hub for sharing and discovering AI prompts — built when prompt engineering was still a new idea.",
    year: "2023",
    thumbBg: "#EDD5C5",
    links: [
      { label: "product hunt", href: "https://www.producthunt.com/products/prompthub" },
    ],
  },
  {
    slug: "speedboat",
    name: "speedboat studio",
    shortDesc: "A no-code NFT platform built for local creators to leverage blockchain technology in borderless world.",
    year: "2022",
    thumbBg: "#F0C8BA",
    links: [
      { label: "live (not maintained)", href: "https://speedboat.studio/" },
    ],
  },
];
