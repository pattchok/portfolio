import { SocialIcon } from "@/components/SocialIcons";
import Marquee from "@/components/Marquee";
import { socialLinks } from "@/lib/constants";

// Footer uses same order as nav
const footerLinks = socialLinks;

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A0E08" }}>
      <Marquee />
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left: name + tagline */}
          <div>
            <p
              className="mb-2"
              style={{
                color: "#FAF5EE",
                fontSize: "1.4rem",
                fontFamily: "var(--font-calistoga), Georgia, serif",
              }}
            >
              Patt Chokchainant
            </p>
            <p style={{ color: "#FAF5EE", fontSize: "0.875rem" }}>
              Feel free to send a message along!
            </p>
          </div>

          {/* Right: links stacked row-by-row */}
          <div className="flex flex-col gap-3">
            {footerLinks.map(({ href, label, iconName, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2.5 group w-fit"
                style={{ color: "#FAF5EE" }}
              >
                <span className="transition-colors duration-200 group-hover:text-[#C9A96E]" style={{ color: "inherit" }}>
                  <SocialIcon name={iconName} size={13} />
                </span>
                <span className="text-sm transition-colors duration-200 group-hover:text-[#C9A96E]" style={{ color: "inherit" }}>
                  {label}
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
