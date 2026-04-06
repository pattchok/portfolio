import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import WavyCTA from "@/components/WavyCTA";
import { DM_SANS } from "@/lib/constants";

type CompactWorkRowProps = {
  name: string;
  shortDesc: string;
  href: string;
  thumbBg: string;
  thumbImg?: string;
  thumbIframe?: string;
  meta?: { role?: string; stack?: string; industry?: string };
  year: string;
  company?: string;
  comingSoon?: boolean;
  links?: { label: string; href: string }[];
};

export default function CompactWorkRow({
  name,
  shortDesc,
  href,
  thumbBg,
  thumbImg,
  thumbIframe,
  meta,
  year,
  company,
  comingSoon,
  links,
}: CompactWorkRowProps) {
  return (
    <FadeIn>
      <div className="py-6 border-b border-border/40">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-5 md:gap-8 items-start">
          {/* Thumbnail */}
          <div
            className="rounded-xl overflow-hidden border border-border/30 w-full"
            style={{ height: "130px" }}
          >
            {thumbIframe ? (
              <iframe
                src={thumbIframe}
                className="w-full h-full"
                style={{ border: 0, pointerEvents: "none", transform: "scale(0.6)", transformOrigin: "top left", width: "167%", height: "167%" }}
                loading="lazy"
              />
            ) : thumbImg ? (
              <Image
                src={thumbImg}
                alt={name}
                width={400}
                height={260}
                className="object-cover w-full h-full"
              />
            ) : (
              <div
                className="w-full h-full"
                style={{ backgroundColor: thumbBg, opacity: 0.65 }}
              />
            )}
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              {company && (
                <>
                  <span className="text-xs font-bold tracking-tight uppercase text-pink-dark">
                    {company}
                  </span>
                  <span className="text-muted text-xs">&middot;</span>
                </>
              )}
              <span className="text-muted text-xs">{year}</span>
            </div>
            <h3
              className="text-text leading-tight mb-1.5"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                fontFamily: DM_SANS, fontWeight: 600,
              }}
            >
              {name}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-3 line-clamp-2">
              {shortDesc}
            </p>

            {meta && (
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted mb-3">
                {meta.stack && (
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      stack
                    </span>
                    {meta.stack}
                  </div>
                )}
                {meta.industry && (
                  <div>
                    <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                      industry
                    </span>
                    {meta.industry}
                  </div>
                )}
              </div>
            )}

            {comingSoon ? (
              <span className="text-muted text-xs italic">coming soon</span>
            ) : links && links.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted hover:text-brown hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    {link.label}{" "}&rarr;
                  </a>
                ))}
              </div>
            ) : (
              <WavyCTA href={href} className="text-sm">view more</WavyCTA>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
