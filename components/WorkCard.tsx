import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import WavyCTA from "@/components/WavyCTA";
import { DM_SANS } from "@/lib/constants";
import type { WorkProject } from "@/lib/work";

type WorkCardProps = {
  project: WorkProject;
  reversed: boolean;
  cta: { label: string; href: string };
};

export default function WorkCard({ project, reversed, cta }: WorkCardProps) {
  const { slug, name, shortDesc, year, company, thumbBg, thumbImg, comingSoon, meta } = project;

  return (
    <section className="px-6 md:px-10 lg:px-16 py-16 border-t border-border/40 -mt-px">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              reversed ? "lg:[direction:rtl]" : ""
            }`}
          >
            <div className={reversed ? "[direction:ltr]" : ""}>
              {slug === "cs-copilot" ? (
                <div
                  className="rounded-2xl w-full border border-border/30 overflow-hidden"
                  style={{ height: "280px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                >
                  <iframe
                    src="/work/cs-copilot/copilot-preview.html"
                    className="w-full h-full"
                    style={{ border: 0, pointerEvents: "none" }}
                    loading="lazy"
                  />
                </div>
              ) : thumbImg ? (
                <div
                  className="rounded-2xl w-full border border-border/30 overflow-hidden"
                  style={{ height: "280px" }}
                >
                  <Image
                    src={thumbImg}
                    alt={name}
                    width={800}
                    height={360}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <div
                  className="rounded-2xl w-full border border-border/30"
                  style={{ height: "280px", backgroundColor: thumbBg, opacity: 0.65 }}
                />
              )}
            </div>
            <div className={reversed ? "[direction:ltr]" : ""}>
              <h2
                className="text-text leading-tight mb-4"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontFamily: DM_SANS, fontWeight: 600 }}
              >
                {name}
              </h2>
              <p className="text-muted leading-relaxed mb-5 text-base md:text-lg">
                {shortDesc}
              </p>

              {comingSoon ? (
                <span className="text-muted text-sm italic">coming soon</span>
              ) : (
                <WavyCTA href={cta.href} large>{cta.label}</WavyCTA>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
