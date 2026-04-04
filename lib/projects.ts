export type SideProject = {
  slug: string;
  name: string;
  shortDesc: string;
  year: string;
  tags: string[];
  thumbBg: string;
  link?: string;
};

export const sideProjects: SideProject[] = [
  {
    slug: "shadowclaw",
    name: "shadowclaw",
    shortDesc: "A tabletop RPG campaign tool for dungeon masters.",
    year: "2026",
    tags: ["game design", "side project"],
    thumbBg: "#B8D4BF",
    link: "",
  },
  {
    slug: "huggingface-design",
    name: "hugging face design competition",
    shortDesc: "A UI/UX design submission for the Hugging Face design competition.",
    year: "2025",
    tags: ["design", "competition"],
    thumbBg: "#EDD5C5",
  },
  {
    slug: "prompthub",
    name: "prompthub",
    shortDesc: "A community hub for sharing and discovering AI prompts — built when prompt engineering was still a new idea.",
    year: "2023",
    tags: ["ai", "community", "side project"],
    thumbBg: "#EDD5C5",
  },
  {
    slug: "speedboat",
    name: "speedboat studio",
    shortDesc: "A blockchain project built with friends.",
    year: "2022",
    tags: ["blockchain", "side project"],
    thumbBg: "#F0C8BA",
    link: "",
  },
];
