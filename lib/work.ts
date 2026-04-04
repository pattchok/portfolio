export type WorkProject = {
  slug: string;
  name: string;
  shortDesc: string;
  year: string;
  company: string;
  thumbBg: string;
  comingSoon?: boolean;
  meta?: {
    role?: string;
    stack?: string;
    industry?: string;
  };
};

export const workProjects: WorkProject[] = [
  {
    slug: "joe-coffee",
    name: "Joe Coffee Mobile Ordering",
    shortDesc: "Mobile ordering experience for a beloved specialty coffee brand — bringing the in-store warmth to a digital-first product.",
    year: "2026",
    company: "Joe Coffee",
    thumbBg: "#F0C8BA",
    meta: {
      role: "Product Manager",
      stack: "React Native · Figma",
      industry: "F&B / Consumer",
    },
  },
  {
    slug: "opentyphoon",
    name: "OpenTyphoon.ai",
    shortDesc: "Thailand's large language model. Built to understand and generate Thai language at scale — a foundational AI infrastructure project.",
    year: "2023–2025",
    company: "SCB 10X",
    thumbBg: "#EDD5C5",
    meta: {
      role: "Product Manager",
      stack: "PyTorch · Hugging Face · vLLM",
      industry: "AI Infrastructure",
    },
  },
  {
    slug: "cs-copilot",
    name: "Customer Support Copilot",
    shortDesc: "An AI copilot that cut ticket resolution from 42 minutes to under 5 — built for Thailand's largest commercial bank.",
    year: "2024",
    company: "SCB 10X",
    thumbBg: "#B8D4BF",
    meta: {
      role: "Product Manager (0→1)",
      stack: "LangChain · Pinecone · LangFuse · Salesforce",
      industry: "Financial Services",
    },
  },
  {
    slug: "lingthai",
    name: "LingThai — Data Annotation Platform",
    shortDesc: "A data annotation platform for Thai language — purpose-built tooling to support NLP model development at scale.",
    year: "2023",
    company: "LingThai",
    thumbBg: "#EDD5C5",
    comingSoon: true,
    meta: {
      role: "Product Manager",
      stack: "Python · React",
      industry: "AI / NLP",
    },
  },
  {
    slug: "finnomena",
    name: "Finnomena",
    shortDesc: "Investment platform for Thai retail investors — making wealth management more accessible and understandable.",
    year: "2022",
    company: "Finnomena",
    thumbBg: "#C2D0B8",
    comingSoon: true,
    meta: {
      role: "Product Manager",
      industry: "Fintech / Investments",
    },
  },
  {
    slug: "conversational-ai",
    name: "Conversational AI in Retail & Commerce",
    shortDesc: "Conversational AI deployed across 15,000+ stores in Thailand. One of the earliest large-scale conversational deployments in Thai retail.",
    year: "2019–2021",
    company: "DataWow",
    thumbBg: "#C9A96E",
    meta: {
      role: "Junior PM",
      stack: "Dialogflow · Python · LINE API",
      industry: "Retail / Commerce",
    },
  },
];
