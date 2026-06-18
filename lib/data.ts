export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  // When true, render a labeled placeholder box instead of loading the file
  // (used for screens/mockups not yet added to /public).
  placeholder?: boolean;
};

// A feature/sub-section block. May carry its own full-width image under the
// text, or a row of images (e.g. an event photo set).
export type ProjectFeature = {
  title?: string;
  body?: string;
  image?: ProjectImage;
  images?: ProjectImage[];
  caption?: string; // shared caption shown under an images row
};

// A published work / paper reference.
export type ProjectPublication = {
  title: string;
  date?: string;
  body: string;
  authors?: string;
  link?: { label: string; href: string };
};

// A partner shown as a logo card with a short description.
export type ProjectPartner = {
  name: string;
  logo?: ProjectImage;
  body: string;
  link?: { label: string; href: string };
};

// A flexible body section rendered in the right column. The outline is just an
// ordered list of these, so each project can insert custom sections (e.g.
// "Research & Partnership", "Community Events") anywhere between TL;DR and Impact.
export type ProjectSectionBlock = {
  id: string; // anchor id used by the sticky left index, e.g. "problem"
  title: string; // display heading in the body, e.g. "The Problem"
  navTitle?: string; // short label for the left index (defaults to title)
  lead?: string; // intro paragraph
  leadImage?: ProjectImage; // image shown right after the lead (e.g. an overview diagram)
  bullets?: { label: string; body: string }[]; // bulleted list with inline bold label
  cards?: { title: string; body: string }[]; // bordered card grid
  features?: ProjectFeature[]; // subsections, each optionally with a full-width image
  tools?: { name: string; role: string }[]; // tool/role list (tech stack style)
  context?: string; // italic note/quote block
  carousel?: { images: ProjectImage[]; caption?: string }; // click-through image carousel
  publication?: ProjectPublication; // a paper/report reference block
  partners?: ProjectPartner[]; // partner logo cards
  partnersNote?: string; // trailing "other partners" line
};

export type ProjectDetail = {
  tldr: string;
  facts: { label: string; value: string }[];
  // Optional wide hero image for the detail page (falls back to the card image).
  heroImage?: ProjectImage;
  // Optional external links shown in the TL;DR (e.g. live site, paper).
  tldrLinks?: { label: string; href: string }[];
  // Optional click-through image carousel shown under the TL;DR.
  tldrCarousel?: { images: ProjectImage[]; caption?: string };
  // Optional embedded HTML mockups (iframes) shown under the TL;DR, stacked.
  tldrEmbeds?: {
    items: { src: string; title: string; width: number; height: number }[];
    caption?: string;
  };
  // Optional caption under the hero image.
  heroNote?: string;
  // Ordered body sections (Problem, Solution, custom sections, …).
  sections: ProjectSectionBlock[];
  // Impact as big-number stats for the infographic row (rendered last).
  stats?: { value: string; label: string }[];
};

export type Project = {
  title: string;
  description?: string;
  meta?: string; // company / context, e.g. "SCB 10X" or "2025"
  // Visual: an image src, or a tailwind gradient for a placeholder tile.
  image?: string;
  gradient?: string;
  // Link to project detail / live site.
  href?: string;
  linkLabel?: string; // e.g. "view more", "live"
  // Multiple external links, e.g. a deck and a design file. Takes precedence over href.
  links?: { label: string; href: string }[];
  // If set, the card links to an internal /projects/<slug> detail page.
  slug?: string;
  detail?: ProjectDetail;
};

export function getProjectBySlug(slug: string): Project | undefined {
  for (const section of projectSections) {
    const found = section.projects.find((p) => p.slug === slug);
    if (found) return found;
  }
  return undefined;
}

export type ProjectSection = {
  id: string;
  label: string;
  blurb: string;
  projects: Project[];
};

export const featuredProjects = [
  {
    title: "Typhoon",
    left: "Open-source multimodal Thai LLMs",
    right: "AI Research, GTM, Developer Tools",
    href: "/projects/typhoon",
    scene: "typhoon" as const,
    video: "/work/typhoon/typhoon-demo.mp4",
  },
  {
    title: "AI Copilot for Customer Support",
    left: "AI copilot for customer support teams",
    right: "Prototyping, LLM, RAG, Eval",
    href: "/projects/cs-ai-copilot",
    scene: "copilot" as const,
    video: "/work/ai-copilot/copilot-demo.mp4",
  },
  {
    title: "7-Eleven AI Commerce Chatbot",
    left: "Conversational AI Commerce Chatbot",
    right: "User Discovery, Product Design, API Integration",
    href: "/projects/7-eleven-chatbot",
    scene: "7-eleven" as const,
  },
];

export const projectSections: ProjectSection[] = [
  {
    id: "projects",
    label: "Projects",
    blurb: "things i built outside my full-time jobs",
    projects: [
      {
        title: "SnapStrip",
        description:
          "A digital photo booth that turns your quick snaps into shareable photo strips. Made with Claude Code as an experimental project.",
        meta: "2026",
        gradient: "from-rose-200 via-amber-100 to-stone-100",
        image: "/projects/snapstrip/snapstrip-cover.png",
        href: "https://snapstrip-two.vercel.app/",
        linkLabel: "live",
      },
      {
        title: "Hugging Face Design Competition",
        description:
          "A redesign of the Hugging Face landing experience for a product design competition during my time at UW Seattle, aimed at streamlining the open-source AI community.",
        meta: "2025",
        gradient: "from-rose-200 via-amber-100 to-stone-100",
        image: "/projects/hugging-face-design/huggingface-cover.png",
        links: [
          {
            label: "deck",
            href: "https://www.figma.com/deck/xpzASfsNLUgErfBC3XclBY/Hugging-Face-x-iEngage?node-id=1-352&t=Bae6oYG2AOchadY7-1",
          },
          {
            label: "design",
            href: "/projects/hugging-face-design/hugging-face-ui.png",
          },
        ],
      },
      {
        title: "PromptHub",
        description:
          "A prompt marketplace for buying and selling generative AI prompts, built in the first three months after ChatGPT launched in Dec 2022. No longer active.",
        meta: "2023",
        gradient: "from-rose-200 via-amber-100 to-stone-100",
        image: "/projects/prompthub/prompthub-cover.png",
        href: "https://www.producthunt.com/products/prompthub",
        linkLabel: "product hunt",
      },
      {
        title: "Speedboat",
        description:
          "A no-code web3 platform built for creators to leverage blockchain technology to design and ship NFT collections without writing a single line of code. No longer active.",
        meta: "2022",
        gradient: "from-rose-200 via-amber-100 to-stone-100",
        image: "/projects/speedboat/speedboat-cover.png",
        href: "https://speedboat.studio/",
        linkLabel: "link",
      },
    ],
  },
  {
    id: "work",
    label: "Work",
    blurb: "work as a product manager",
    projects: [
      {
        title: "Typhoon",
        description:
          "Thailand's open-source multimodal AI: LLMs, vision, and voice models delivered through local hosting, APIs, and developer tools.",
        meta: "2023–2025",
        gradient: "from-sky-200 via-slate-200 to-zinc-100",
        image: "/work/typhoon/typhoon-cover.png",
        slug: "typhoon",
        detail: {
          heroImage: {
            src: "/work/typhoon/hero-typhoon.png",
            alt: "Typhoon — Thailand's open-source multimodal AI",
            width: 3000,
            height: 1200,
          },
          tldr: "Typhoon is Thailand's first open-source multimodal AI initiative, including LLMs, vision, and voice models built for the Thai language. As a founding member, I led program management, GTM, partnerships, and community, scaling from zero to 320k+ model downloads, 23M+ API calls, and 6k+ developers on the platform.",
          facts: [
            {
              label: "Role",
              value: "Founding Product/Program Manager",
            },
            { label: "Timeline", value: "May 2023 – Mar 2025" },
            { label: "Tech Stack", value: "PyTorch · Hugging Face · vLLM" },
            {
              label: "Skills",
              value:
                "Technical Program Management, GTM, Partnerships, Community",
            },
          ],
          tldrLinks: [
            { label: "opentyphoon.ai", href: "https://opentyphoon.ai" },
            {
              label: "arXiv 2312.13951 (70+ citations)",
              href: "https://arxiv.org/abs/2312.13951",
            },
          ],
          tldrCarousel: {
            images: [
              {
                src: "/work/typhoon/typhoon-techsauce2024.jpg",
                alt: "Typhoon at Techsauce Global Summit 2024",
                width: 1920,
                height: 1445,
              },
              {
                src: "/work/typhoon/typhoon-acl1.jpg",
                alt: "Typhoon at ACL 2024 in Bangkok",
                width: 1920,
                height: 1436,
              },
              {
                src: "/work/typhoon/typhoon-acl2.jpeg",
                alt: "Typhoon at ACL 2024 in Bangkok",
                width: 1024,
                height: 768,
              },
              {
                src: "/work/typhoon/typhoon-hackathon-1.jpg",
                alt: "Typhoon hackathon",
                width: 2000,
                height: 1333,
              },
            ],
            caption:
              "Typhoon was at a few major AI conferences and events: **ACL 2024** in Bangkok, Techsauce Global Summit, Super AI Singapore, and hosting hackathons!",
          },
          sections: [
            {
              id: "problem",
              title: "The Problem",
              navTitle: "Problem",
              lead: "Thai is one of the world's most **underrepresented** languages in AI. Most large language models are built for English first, and when they do support Thai, they often miss context, culture, and how people actually communicate.",
              context:
                "Ask ChatGPT in Thai how to cook grilled chicken (ไก่ย่าง) and it'll give you a fluent Thai recipe that tells you to put the chicken in the oven. In Thailand, ไก่ย่าง means chicken skewers over charcoal. Most Thai kitchens don't even have ovens.\n\nThe language was right but the context was wrong, so we built Typhoon models to narrow this gap.",
            },
            {
              id: "solution",
              title: "The Solution",
              navTitle: "Solution",
              lead: "Building open-source multimodal AI models for Thai language and culture, so anyone can start using them for Thai-specific use cases.",
              features: [
                {
                  title: "User picks the right model",
                  body: "Typhoon is a family of models across every modality: text, speech, vision, and translation. Users browse the collection, pick the model that fits, and can deploy it locally.",
                  image: {
                    src: "/work/typhoon/typhoon-solution-1.png",
                    alt: "Typhoon model collection on Hugging Face",
                    width: 1448,
                    height: 931,
                  },
                },
                {
                  title: "User tries the model directly in the browser",
                  body: "Before committing to anything, anyone can test any Typhoon model at playground.opentyphoon.ai. No extra setup needed.",
                  image: {
                    src: "/work/typhoon/typhoon-solution-2.png",
                    alt: "Typhoon playground in the browser",
                    width: 1183,
                    height: 666,
                  },
                },
                {
                  title: "User builds production-grade applications with API",
                  body: "Full API access with documentation and demo apps. Same models as the playground, ready for production.",
                  image: {
                    src: "/work/typhoon/typhoon-solution-3.png",
                    alt: "Typhoon API docs and code snippet",
                    width: 1487,
                    height: 817,
                  },
                },
              ],
            },
            {
              id: "research-partnership",
              title: "Research & Partnership",
              publication: {
                title: "Typhoon: Thai Large Language Models",
                date: "Dec 2023",
                body: "Co-authored technical report on the development of Thailand's first open-source Thai LLM, covering data preparation, pretraining, instruction-tuning, and evaluation. Typhoon achieved performance on par with GPT-3.5 in Thai while being 2.62× more efficient at tokenizing Thai text.",
                authors:
                  "Kunat Pipatanakul, Phatrasek Jirabovonvisut, Potsawee Manakul, Sittipong Sripaisarnmongkol, Ruangsak Patomwong, Pathomporn Chokchainant, Kasima Tharnpipitchai",
                link: {
                  label: "arxiv.org/abs/2312.13951 (70+ citations)",
                  href: "https://arxiv.org/abs/2312.13951",
                },
              },
              partners: [
                {
                  name: "Stanford HAI",
                  logo: {
                    src: "/work/typhoon/stanford-hai-logo.png",
                    alt: "Stanford HAI",
                    width: 2400,
                    height: 494,
                  },
                  body: "Worked with Professor Percy Liang's lab at Stanford HAI to add Thai to the HELM leaderboard, benchmarking Typhoon against 42 multilingual models.",
                  link: {
                    label: "crfm.stanford.edu",
                    href: "https://crfm.stanford.edu",
                  },
                },
                {
                  name: "SEACrowd",
                  logo: {
                    src: "/work/typhoon/seacrowd-logo.png",
                    alt: "SEACrowd",
                    width: 1596,
                    height: 330,
                  },
                  body: "Joined AI Singapore's SEACrowd collaboration to pool Southeast Asian language data, placing Typhoon inside a broader regional research network.",
                  link: { label: "seacrowd.org", href: "https://seacrowd.org" },
                },
                {
                  name: "VISTEC",
                  logo: {
                    src: "/work/typhoon/vistec-logo.png",
                    alt: "VISTEC",
                    width: 797,
                    height: 313,
                  },
                  body: "Ongoing research partnership with one of Thailand's leading science and technology institutes, spanning multiple projects across Thai NLP.",
                  link: { label: "vistec.ac.th", href: "https://vistec.ac.th" },
                },
              ],
              partnersNote:
                "Other partners and collaborators: SambaNova, TogetherAI, Mahidol University, Thammasat University, KMITL, InnovestX.",
            },
            {
              id: "community-events",
              title: "Community Events",
              features: [
                {
                  image: {
                    src: "/work/typhoon/typhoon-techsauce2024.jpg",
                    alt: "Typhoon at Techsauce Global Summit 2024",
                    width: 1920,
                    height: 1445,
                    caption:
                      "**Techsauce Global Summit 2024**, Southeast Asia's largest tech conference",
                  },
                },
                {
                  images: [
                    {
                      src: "/work/typhoon/typhoon-hackathon-1.jpg",
                      alt: "Typhoon hackathon",
                      width: 2000,
                      height: 1333,
                    },
                    {
                      src: "/work/typhoon/typhoon-hackathon-2.jpg",
                      alt: "Typhoon hackathon",
                      width: 2000,
                      height: 1333,
                    },
                    {
                      src: "/work/typhoon/typhoon-hackathon-3.jpg",
                      alt: "Typhoon hackathon",
                      width: 2000,
                      height: 1333,
                    },
                  ],
                  caption:
                    "**Typhoon Hackathon**, hosted with 30 teams building applications using Typhoon",
                },
                {
                  image: {
                    src: "/work/typhoon/the-rise-of-intelligence-2.jpg",
                    alt: "The Rise of Intelligence — featured segment",
                    width: 1600,
                    height: 843,
                    caption:
                      "**The Rise of Intelligence**, featured segment presenting real-world AI use cases in financial services customer support.",
                  },
                },
              ],
            },
          ],
          stats: [
            { value: "320k+", label: "Hugging Face model downloads" },
            { value: "23M+", label: "API calls" },
            { value: "6k+", label: "developers on the platform" },
            { value: "2k+", label: "Discord community members" },
            { value: "30", label: "teams at Typhoon Hackathon" },
            { value: "4 → 12", label: "team scaled" },
          ],
        },
      },
      {
        title: "AI Copilot for Customer Support",
        description:
          "An AI copilot for customer support teams to respond faster and more accurately to customers at Thailand's largest bank. It retrieves relevant information and generates responses based on grounded information.",
        meta: "2023–2024",
        gradient: "from-emerald-200 via-teal-100 to-stone-100",
        image: "/work/ai-copilot/copilot-cover.png",
        slug: "cs-ai-copilot",
        detail: {
          heroImage: {
            src: "/work/ai-copilot/hero-copilot.png",
            alt: "Customer Support Copilot",
            width: 3000,
            height: 1200,
          },
          tldr: "A RAG-based AI copilot for customer support at Thailand's largest bank, helping 150+ agents cut ticket resolution time from 42 minutes to under 5. It retrieves customer info in real time, cross-checks internal bank policies, drafts suggested replies for agents to review, and auto-generates a ticket summary at the end of every conversation.",
          facts: [
            { label: "Role", value: "Senior Product Manager (0→1)" },
            { label: "Timeline", value: "Nov 2023 – Jun 2024" },
            { label: "Tech Stack", value: "LangChain · Pinecone · LangFuse · Salesforce" },
            { label: "Industry", value: "Financial Services" },
            { label: "Skills", value: "Product Management · User Research · Evaluation" },
          ],
          tldrEmbeds: {
            items: [
              {
                src: "/work/ai-copilot/copilot-mockup-chat.html",
                title: "Copilot chat interface",
                width: 960,
                height: 720,
              },
              {
                src: "/work/ai-copilot/copilot-mockup-summary.html",
                title: "Auto-generated ticket summary",
                width: 960,
                height: 720,
              },
            ],
            caption:
              "Due to enterprise confidentiality, actual product screens can't be shared. These interactive mockups were built to demonstrate the experience. Conversations are translated into English.",
          },
          sections: [
            {
              id: "problem",
              title: "The Problem",
              navTitle: "Problem",
              lead: "SCB 10X is the innovation arm of Siam Commercial Bank, Thailand's largest financial institution. Their support teams handled thousands of inquiries daily, with predominantly manual processes.",
              bullets: [
                {
                  label: "Slow resolution with scattered knowledge",
                  body: "A single ticket averaged 42 minutes. Policies lived in PDFs, wikis, and shared drives with inconsistent formats.",
                },
                {
                  label: "No automatic conversation capture",
                  body: "Tickets had to be written up by hand after each chat, and sometimes information got lost, was inaccurate, or incomplete.",
                },
                {
                  label: "Strict regulation and data privacy",
                  body: "Financial services sit under heavy regulation. Every design choice had to factor in compliance and data privacy protection act.",
                },
              ],
              context:
                "This was late 2023, about a year after ChatGPT launched. RAG was a brand-new concept with no best practices and playbooks for building it in production.",
            },
            {
              id: "solution",
              title: "The Solution",
              navTitle: "Solution",
              lead: "A RAG-based copilot that retrieves bank knowledge in real time, drafts suggested replies for agents to review, and auto-generates ticket summaries. Deliberately designed as a copilot, not a chatbot, because financial services regulation requires a human in the loop at every step.",
              leadImage: {
                src: "/work/ai-copilot/rag_copilot_system_architecture.svg",
                alt: "RAG copilot system architecture diagram",
                width: 680,
                height: 520,
              },
              features: [
                {
                  title: "Real-time knowledge retrieval",
                  body: "Semantic search across the bank's Salesforce knowledge base (policies, troubleshooting guides, regulatory docs), surfaced contextually. Sources populate in the bottom-right of the screen so agents see exactly where each answer came from.",
                },
                {
                  title: "Reply suggestions",
                  body: "The copilot drafts three reply options per message, each grounded in retrieved sources. Agents pick one, edit, and send. Human in the loop at every step, as required in regulated financial services.",
                },
                {
                  title: "Auto-generated ticket summary",
                  body: "At the end of each conversation, the system writes a summary and next-step list back to Salesforce. No more forgotten or incomplete tickets.",
                },
              ],
            },
            {
              id: "tech-stack",
              title: "Tech Stack",
              lead: "The RAG pipeline searched across the bank's entire knowledge base, everything from password reset guides to cross-bank transfer policies to Thai-specific regulatory edge cases.",
              tools: [
                { name: "LangChain", role: "Orchestration & prompt routing" },
                { name: "Pinecone", role: "Vector DB for semantic search" },
                { name: "LangFuse", role: "Observability & monitoring" },
                { name: "Salesforce", role: "Knowledge base, CRM & output" },
              ],
              features: [
                {
                  title: "PDPA-compliant PII redaction",
                  body: "Sensitive customer data was masked before anything hit the LLM, then re-injected into the final output. Compliant by design, with no raw PII ever leaving the bank's infrastructure.",
                },
                {
                  title: "Evaluation in a world with no playbook",
                  body: "There was no off-the-shelf way to evaluate RAG in late 2023, so we built our own: automated retrieval tests, LLM-based evaluation against a golden dataset put together with CS leads, LangFuse tracing for observability, and a structured feedback loop from the agents themselves.",
                },
              ],
            },
          ],
          stats: [
            { value: "42min → <5min", label: "average ticket resolution time" },
            { value: "150+", label: "agents using the copilot" },
            { value: "87%", label: "customer satisfaction (CSAT)" },
          ],
        },
      },
      {
        title: "Finnomena Financial Advisor Tool",
        description:
          "A wealth management platform for 3,000+ financial advisors to create personalized investment portfolios based on clients' risk profiles. The platform manages $1B+ Assets under Management (AUM).",
        meta: "2021–2022",
        gradient: "from-amber-200 via-orange-100 to-stone-100",
        image: "/work/finnomena/finnomena-cover.png",
        slug: "finnomena",
        detail: {
          heroImage: {
            src: "/work/finnomena/hero-finnomena.png",
            alt: "Finnomena investment platform",
            width: 3000,
            height: 1200,
          },
          tldr: "Designed and launched an AI-powered portfolio planning tool for 3,000+ financial advisors at Finnomena, one of Thailand's leading wealth management platforms, built in partnership with Franklin Templeton. The tool integrated Franklin Templeton's algorithmic recommendation engine via API, so financial advisors could apply their own judgment on top of AI-suggested portfolios.",
          facts: [
            { label: "Role", value: "Product Manager · Finnomena · 2022" },
            { label: "Tech Stack", value: "Figma · Jira · Miro" },
            { label: "Industry", value: "Fintech / Wealth Management" },
            {
              label: "Skills",
              value:
                "Product Management · UX Design · User Research · API Integration",
            },
          ],
          sections: [
            {
              id: "problem",
              title: "The Problem",
              navTitle: "Problem",
              lead: "Financial advisors at Finnomena were building client portfolios manually, selecting funds and allocations based on their own research. No personalized recommendation system to help optimize portfolio performance at scale.",
            },
            {
              id: "solution",
              title: "The Solution",
              navTitle: "Solution",
              lead: "Partnered with Franklin Templeton to integrate their Investment Optimization Engine via API, adding personalized algorithmic recommendations into Finnomena's existing platform.",
              features: [
                {
                  title: "Full portfolio lifecycle",
                  body: "Beyond integration, the tool supported the full lifecycle: create, edit, and manage plans. Each portfolio tied to the client's risk profile and updated as conditions changed.",
                },
                {
                  title: "Personalized portfolio recommendations",
                  body: "Advisors entered a client's risk profile, investment horizon, and goals. The engine returned an optimized fund and allocation recommendation tailored to that client.",
                },
                {
                  title: "Multi-scenario comparison",
                  body: "Advisors could generate and compare multiple portfolio options side-by-side (e.g., aggressive vs. balanced) before recommending one to a client.",
                },
                {
                  title: "Pre-built plan templates",
                  body: "Templates for common goals (retirement, education, growth) so advisors could start from a tested baseline and tweak per client instead of building from scratch.",
                },
              ],
              context:
                "Across every feature, financial advisors still made the final judgment. The algorithm surfaced recommendations, but every portfolio decision stayed in their hands.",
            },
          ],
          stats: [
            { value: "60%", label: "advisor adoption in 2 weeks" },
            { value: "3k+", label: "financial advisors" },
            { value: "30+", label: "user interviews" },
            { value: "500+", label: "surveys collected" },
          ],
        },
      },
      {
        title: "7-Eleven AI Commerce Chatbot",
        description:
          "A conversational AI chatbot designed to create a seamless shopping experience, built inside the 7-Eleven Thailand mobile app (16M+ MAUs) and integrated with 7-Delivery, a real-time on-demand delivery service.",
        meta: "2019–2021",
        gradient: "from-green-200 via-lime-100 to-stone-100",
        image: "/work/7-eleven-chatbot/7-eleven-chatbot-cover.png",
        slug: "7-eleven-chatbot",
        detail: {
          heroImage: {
            src: "/work/7-eleven-chatbot/hero-7-eleven.png",
            alt: "7-Eleven Conversational AI",
            width: 3000,
            height: 1200,
          },
          tldr: "Built a conversational AI chatbot inside the 7-Eleven Thailand app, powering both customer support and chat commerce for 16M+ monthly active users across 15,000+ stores nationwide. Users could browse products, check real-time stock at nearby stores, get personalized recommendations, and complete purchases, all without leaving the chat.",
          facts: [
            { label: "Role", value: "Product Manager" },
            {
              label: "Organization",
              value: "Sertis · Client: CP All (7-Eleven Thailand)",
            },
            { label: "Timeline", value: "2019–2021" },
            { label: "Tech Stack", value: "Google DialogFlow · Python · RegEx" },
            { label: "Industry", value: "Retail E-Commerce" },
            {
              label: "Skills",
              value: "Product Management · Conversational Design · NLP",
            },
          ],
          sections: [
            {
              id: "problem",
              title: "The Problem",
              navTitle: "Problem",
              lead: "7-Eleven Thailand isn't like 7-Eleven anywhere else. With over 15,000 branches blanketing the country, it's less a convenience store chain and more a piece of national infrastructure. The mobile app had 16M+ monthly active users, and the company wanted to unlock new digital sales channels as part of a larger digital transformation.\n\nThe goal was to build a conversational layer inside the app that could serve across three distribution channels: answering customer inquiries, driving product sales through chat, and supporting the app's real-time delivery service. All of it had to work across 15,000+ stores with live inventory, local promotions, and a nationwide user base.",
              features: [
                {
                  title: "Fun fact",
                  body: "7-Eleven in Thailand is genuinely amazing. We have over 15,000 branches. Seriously, look it up!",
                },
                {
                  title: "Context",
                  body: "This was before the ChatGPT era. Every intent was mapped by hand, every fallback designed deliberately, every response tree built from scratch. No LLM safety net, just NLP, pattern matching, and a lot of conversational design.",
                },
              ],
            },
            {
              id: "solution",
              title: "The Solution",
              navTitle: "Solution",
              lead: "A chat commerce experience inside the 7-Eleven app, where users could discover, decide, and check out without ever leaving the conversation. The same chatbot also handled customer support (store locator, hours, promos, delivery order status), but the ambitious part was turning a chat thread into a full shopping flow.",
              features: [
                {
                  title: "Real-time stock at your nearest store",
                  body: "The chatbot detected the user's location, mapped them to their closest 7-Eleven stores, and queried live inventory across 15,000+ stores to show only what was actually on the shelf. No dead ends, no out-of-stock disappointments.",
                },
                {
                  title: "Personalized product recommendations",
                  body: "Product carousels surfaced inside the chat thread, tailored to each user's purchase history and profile, with current promotions applied automatically. Every conversation felt relevant rather than generic.",
                },
                {
                  title: "Complete purchase in chat",
                  body: "The entire shopping flow, from discovery to checkout, happened inside the conversation. No app switching, no separate cart screens, just one thread from the first question to the confirmation message.",
                },
              ],
            },
          ],
          stats: [
            { value: "16M+", label: "monthly active users" },
            { value: "15k+", label: "stores nationwide" },
            { value: "3", label: "distribution channels" },
            { value: "+15%", label: "customer satisfaction" },
          ],
        },
      },
    ],
  },
  {
    id: "community",
    label: "Community",
    blurb: "community i contributed to",
    projects: [
      {
        title: "The AI Collective",
        description:
          "The global non-profit AI community of 200,000+ builders, researchers, and investors. I organized AI meetups and community events with the Seattle Chapter for talks, demos, and hands-on workshops.",
        meta: "2024–2025",
        gradient: "from-violet-200 via-rose-100 to-stone-100",
        image: "/community/ai-collective/ai-collective-cover.png",
        href: "https://www.aicollective.com/",
        linkLabel: "website",
      },
      {
        title: "Thai NLP Community",
        description:
          "Contributed to advancing natural language processing for the Thai language: open-source datasets, evaluation benchmarks, and community building.",
        meta: "2022–2025",
        gradient: "from-indigo-200 via-sky-100 to-stone-100",
        image: "/community/thai-nlp/thai-nlp-cover.jpg",
      },
    ],
  },
];

import type { SocialIconKey } from "@/components/social-icons";

export type Social = {
  label: string;
  href: string;
  icon: SocialIconKey;
};

export const socials: Social[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pattchok",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:ch.pathomporn@gmail.com", icon: "email" },
  { label: "GitHub", href: "https://www.github.com/pattchok", icon: "github" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=6nkUwdAAAAAJ&hl=en",
    icon: "scholar",
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1-Idc_QFsfUVvLExpb4Tddii-qEpEgyAT/view?usp=drive_link",
    icon: "resume",
  },
];

// Travel photos — files live in /public/life/travel. `caption` = place, region, country.
export type Photo = {
  src: string;
  caption: string;
};

export const photos: Photo[] = [
  { src: "/life/travel/1mtrainier.JPG", caption: "Mt. Rainier National Park, Washington, USA" },
  { src: "/life/travel/3kyoto.JPG", caption: "Ryoanji Temple, Kyoto, Japan" },
  { src: "/life/travel/18sanfrancisco.JPG", caption: "Union Square, San Francisco, USA" },
  { src: "/life/travel/4italy1.JPG", caption: "Colosseum, Rome, Italy" },
  { src: "/life/travel/6salsalito.JPG", caption: "Sausalito, California, USA" },
  { src: "/life/travel/5snowlake2.JPG", caption: "Snow Lake, Snoqualmie Pass, USA" },
  { src: "/life/travel/7olympic.JPG", caption: "Olympic National Park, Washington, USA" },
  { src: "/life/travel/2mtfuji2.JPG", caption: "Mt. Fuji, Shizuoka, Japan" },
  { src: "/life/travel/9mtrainier2.JPG", caption: "Mt. Rainier National Park, Washington, USA" },
  { src: "/life/travel/10snowlake3.JPG", caption: "Snow Lake, Snoqualmie Pass, USA" },
  { src: "/life/travel/12italy2.JPG", caption: "Trastevere, Rome, Italy" },
  { src: "/life/travel/13taiwan1.JPG", caption: "Taipei 101, Taipei, Taiwan" },
  { src: "/life/travel/14snowlake.JPG", caption: "Snow Lake, Snoqualmie Pass, USA" },
  { src: "/life/travel/15singapore.JPG", caption: "Marina Bay Sands, Singapore" },
  { src: "/life/travel/17vancouver.jpeg", caption: "Gastown Steam Clock, Vancouver, Canada" },
  { src: "/life/travel/8mtfuji.JPG", caption: "Mt. Fuji, Shizuoka, Japan" },
  { src: "/life/travel/19salsalito.JPG", caption: "Waterfront, Sausalito, USA" },
  { src: "/life/travel/20kyoto.JPG", caption: "Machiya District, Kyoto, Japan" },
  { src: "/life/travel/21betong.JPG", caption: "Sea of Mist, Betong, Thailand" },
  { src: "/life/travel/22taiwan2.JPG", caption: "Beitou Hot Springs, Taipei, Taiwan" },
  { src: "/life/travel/23italy3.JPG", caption: "Bramante Staircase, Vatican City, Italy" },
  { src: "/life/travel/23naan.JPG", caption: "Mountain Valley, Nan, Thailand" },
  { src: "/life/travel/24siena-italy4.JPG", caption: "Torre del Mangia, Siena, Italy" },
  { src: "/life/travel/naan2.JPG", caption: "Nan, Thailand" },
  { src: "/life/travel/osaka.JPG", caption: "Izakaya Street, Osaka, Japan" },
  { src: "/life/travel/sf.JPG", caption: "Crissy Field, San Francisco, USA" },
];

// "The things I do to keep me grounded" — running. Drop photos in
// /public/life/running/ and update src + caption.
export const runningPhotos: Photo[] = [
  { src: "/life/running/1.jpg", caption: "" },
  { src: "/life/running/2.jpg", caption: "" },
  { src: "/life/running/3.jpg", caption: "" },
];

// Flowers — flower arrangement.
// Drop photos in /public/life/flowers/ and update src + caption.
export const flowerPhotos: Photo[] = [
  { src: "/life/flowers/flower1.png", caption: "" },
  { src: "/life/flowers/flower2.png", caption: "" },
  { src: "/life/flowers/flower3.jpeg", caption: "" },
];

// Secondary hobbies — shown compactly under the featured photography section.
export type Hobby = {
  title: string;
  blurb: string;
  images: { label: string; gradient: string }[];
};

export const hobbies: Hobby[] = [
  {
    title: "Flower arrangement",
    blurb: "Slowing down with seasonal stems and quiet compositions.",
    images: [
      { label: "Arrangement 01", gradient: "from-rose-300 via-pink-200 to-stone-100" },
      { label: "Arrangement 02", gradient: "from-emerald-200 via-rose-100 to-amber-100" },
    ],
  },
  {
    title: "Running",
    blurb: "Early miles, new routes, and the occasional race.",
    images: [
      { label: "Run 01", gradient: "from-sky-300 via-slate-200 to-zinc-100" },
      { label: "Run 02", gradient: "from-orange-200 via-amber-100 to-stone-100" },
    ],
  },
];
