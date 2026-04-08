// Shared design constants used across pages and components

// Heading font (serif) — page/section headings
export const PLAYFAIR = "var(--font-playfair), Georgia, serif";

// Subheading font (sans) — project/work names
export const DM_SANS = "var(--font-dm-sans), sans-serif";

// Display font — hero section only (gimmick)
export const LOMA = "var(--font-loma), sans-serif";

export const CARD_STYLE: React.CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(240,200,186,0.13) 0%, rgba(253,250,247,0.55) 50%, rgba(184,212,191,0.11) 100%)",
  borderRadius: "1rem",
  padding: "1.25rem",
  boxShadow:
    "0 4px 28px rgba(240,200,186,0.16), 0 2px 10px rgba(184,212,191,0.12)",
};

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/pattcho/",
    label: "LinkedIn",
    iconName: "linkedin" as const,
    external: true,
  },
  {
    href: "https://github.com/pattchok",
    label: "GitHub",
    iconName: "github" as const,
    external: true,
  },
  {
    href: "https://scholar.google.com/citations?user=6nkUwdAAAAAJ&hl=en",
    label: "Google Scholar",
    iconName: "scholar" as const,
    external: true,
  },
  {
    href: "mailto:ch.pathomporn@gmail.com",
    label: "Email",
    iconName: "mail" as const,
    external: false,
  },
  {
    href: "/Patt%20Chokchainant_Resume.pdf",
    label: "Resume",
    iconName: "resume" as const,
    external: true,
  },
];

export type SocialLink = (typeof socialLinks)[number];
