export type WorkProject = {
  slug: string;
  name: string;
  shortDesc: string;
  year: string;
  company: string;
  thumbBg: string;
  thumbImg?: string;
  comingSoon?: boolean;
  meta?: {
    role?: string;
    stack?: string;
    industry?: string;
  };
};

export const workProjects: WorkProject[] = [
  {
    slug: "cs-copilot",
    name: "Customer Support Copilot",
    shortDesc: "An AI copilot that cut ticket resolution from 42 minutes to under 5, built for Thailand's largest commercial bank.",
    year: "2022–2025",
    company: "SCB 10X",
    thumbBg: "#B8D4BF",
    thumbImg: "/work/cs-copilot/copilot-cover.png",
    meta: {
      role: "Product Manager (0→1)",
      stack: "LangChain · Pinecone · LangFuse · Salesforce",
      industry: "Financial Services",
    },
  },
  {
    slug: "opentyphoon",
    name: "Typhoon",
    shortDesc: "Thailand's open-source multimodal AI: LLMs, vision, and voice models delivered through local hosting, APIs, and developer tools.",
    year: "2022–2025",
    company: "SCB 10X",
    thumbBg: "#EDD5C5",
    thumbImg: "/work/opentyphoon/typhoon-logo.png",
    meta: {
      role: "Product Manager",
      stack: "PyTorch · Hugging Face · vLLM",
      industry: "AI Infrastructure, Multimodal AI (LLMs, VLMs, Voice)",
    },
  },
  {
    slug: "finnomena",
    name: "Finnomena",
    shortDesc: "Designed and launched an AI-powered portfolio planning tool for 3,000+ financial advisors, built in partnership with Franklin Templeton.",
    year: "2021–2022",
    company: "Finnomena",
    thumbBg: "#C2D0B8",
    thumbImg: "/work/finnomena/finnomena-logo.png",
    meta: {
      role: "Product Manager",
      stack: "Figma · Jira · Miro",
      industry: "Fintech / Wealth Management",
    },
  },
  {
    slug: "conversational-ai",
    name: "7-Eleven Conversational AI Chatbot",
    shortDesc: "Built the chat commerce experience inside Thailand's 7-Eleven app, serving 16M+ monthly active users across 15,000+ stores nationwide.",
    year: "2019–2021",
    company: "Sertis",
    thumbBg: "#C9A96E",
    thumbImg: "/work/conversational-ai/7-eleven-chatbot.png",
    meta: {
      role: "Junior PM",
      stack: "Google DialogFlow · Python · RegEx",
      industry: "Retail E-Commerce",
    },
  },
];
