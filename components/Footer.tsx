import { PLAYFAIR, socialLinks } from "@/lib/constants";

type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

const findSocial = (label: string): FooterLink => {
  const match = socialLinks.find((l) => l.label === label);
  if (!match) throw new Error(`Missing social link: ${label}`);
  return match;
};

const navLinks: FooterLink[] = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  findSocial("Resume"),
];

const chatLinks: FooterLink[] = [
  findSocial("LinkedIn"),
  findSocial("Email"),
  findSocial("GitHub"),
  findSocial("Google Scholar"),
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <p
        className="mb-4 text-xs font-bold uppercase tracking-widest"
        style={{ color: "#B8D4BF" }}
      >
        {title}
      </p>
      <div className="flex flex-col gap-1.5">
        {links.map(({ href, label, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="w-fit text-base transition-colors duration-200 hover:text-[#C9A96E]"
            style={{ color: "rgba(255, 255, 255, 0.95)" }}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10" style={{ backgroundColor: "#33261c" }}>

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20 pt-8 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-x-20 gap-y-10 md:pl-10 md:pr-40">

          {/* Left: name + tagline */}
          <div>
            <p
              className="mb-2"
              style={{
                color: "rgba(255, 255, 255, 0.95)",
                fontSize: "1.75rem",
                fontFamily: PLAYFAIR,
                fontWeight: 700,
              }}
            >
              Patt Chokchainant
            </p>
            <p style={{ color: "rgba(255, 255, 255, 0.95)", fontSize: "1rem", fontStyle: "italic" }}>
              Making AI products easy to use
            </p>
          </div>

          <FooterColumn title="Navigation" links={navLinks} />
          <FooterColumn title="Let's Chat!" links={chatLinks} />

        </div>
      </div>
    </footer>
  );
}
