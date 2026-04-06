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
  thumbImg?: string;
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
    thumbImg: "/projects/shadowclaw-cover.svg",
    links: [
      { label: "github", href: "https://github.com/nckclrk/shadowclaw/tree/main" },
    ],
  },
  {
    slug: "huggingface-design",
    name: "Hugging Face Design Competition",
    shortDesc: "A design competition hosted by Hugging Face to redesign their landing page, focusing on better UX, clearer information architecture, and a more user-friendly experience.",
    year: "2025",
    thumbBg: "#EDD5C5",
    thumbImg: "/projects/huggingface-cover.png",
    links: [
      { label: "deck", href: "https://www.figma.com/deck/xpzASfsNLUgErfBC3XclBY/Hugging-Face-x-iEngage?node-id=1-352&t=Bae6oYG2AOchadY7-1" },
      { label: "design", href: "/projects/huggingface-design/hugging-face-ui.png" },
    ],
  },
  {
    slug: "prompthub",
    name: "PromptHub",
    shortDesc: "A marketplace for buying and selling AI prompts, designed to prevent buyers from reverse-engineering the secret sauce, built within the first 6 months after ChatGPT launched in Nov 2022.",
    year: "2023",
    thumbBg: "#EDD5C5",
    thumbImg: "/projects/prompthub-cover.jpg",
    links: [
      { label: "product hunt", href: "https://www.producthunt.com/products/prompthub" },
    ],
  },
  {
    slug: "speedboat",
    name: "Speedboat Studio",
    shortDesc: "A no-code NFT platform built for local creators to leverage blockchain technology in borderless world.",
    year: "2022",
    thumbBg: "#F0C8BA",
    thumbImg: "/projects/speedboat-home.png",
    links: [
      { label: "live (no longer active)", href: "https://speedboat.studio/" },
    ],
  },
];
