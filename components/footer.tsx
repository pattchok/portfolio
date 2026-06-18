import Link from "next/link";
import { CopyEmail } from "@/components/copy-email";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/life", label: "Life" },
  { href: "/about", label: "About" },
  {
    href: "https://drive.google.com/file/d/1-Idc_QFsfUVvLExpb4Tddii-qEpEgyAT/view?usp=drive_link",
    label: "Resume",
    external: true,
  },
];

const chatLinks = [
  {
    href: "https://www.linkedin.com/in/pattchok",
    label: "LinkedIn",
    external: true,
  },
  { href: "https://www.github.com/pattchok", label: "GitHub", external: true },
  {
    href: "https://scholar.google.com/citations?user=6nkUwdAAAAAJ&hl=en",
    label: "Google Scholar",
    external: true,
  },
  { href: "mailto:ch.pathomporn@gmail.com", label: "Email", external: false },
];

const linkClass =
  "w-fit transition-colors duration-200 hover:text-[#C9A96E]";
const linkStyle = { color: "rgba(255, 255, 255, 0.95)", fontSize: "16px" };

export function Footer() {
  return (
    <footer
      className="relative z-10 font-lato"
      style={{ backgroundColor: "#33261c" }}
    >
      <div className="mx-auto max-w-6xl px-6 pt-8 pb-14 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-[1fr_auto_auto] md:pl-10 md:pr-40">
          {/* Wordmark */}
          <div>
            <p
              className="font-serif"
              style={{
                color: "rgba(255, 255, 255, 0.95)",
                fontSize: "1.75rem",
                fontWeight: 700,
              }}
            >
              Building products that make people&apos;s lives a little easier
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="mb-4 font-bold uppercase tracking-widest"
              style={{ color: "#C2C9A1", fontSize: "14px" }}
            >
              Navigation
            </p>
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                    style={linkStyle}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={linkClass}
                    style={linkStyle}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Let's Chat! */}
          <div>
            <p
              className="mb-4 font-bold uppercase tracking-widest"
              style={{ color: "#C2C9A1", fontSize: "14px" }}
            >
              Let&apos;s Chat!
            </p>
            <div className="flex flex-col gap-1.5">
              {chatLinks.map((link) =>
                link.href.startsWith("mailto:") ? (
                  <CopyEmail
                    key={link.label}
                    email={link.href.replace(/^mailto:/, "")}
                    label={link.label}
                    className={linkClass}
                    style={linkStyle}
                  />
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={linkClass}
                    style={linkStyle}
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
