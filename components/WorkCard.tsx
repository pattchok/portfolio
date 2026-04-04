import FadeIn from "@/components/FadeIn";
import WavyCTA from "@/components/WavyCTA";
import { QUICKSAND } from "@/lib/constants";
import type { WorkProject } from "@/lib/work";

type WorkCardProps = {
  project: WorkProject;
  reversed: boolean;
  cta: { label: string; href: string };
};

export default function WorkCard({ project, reversed, cta }: WorkCardProps) {
  const { slug, name, shortDesc, year, company, thumbBg, comingSoon, meta } = project;

  return (
    <section className="px-6 md:px-10 lg:px-16 py-16 border-t border-border/40 -mt-px">
      <div className="max-w-7xl mx-auto">
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
                  style={{ height: "360px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                >
                  <iframe
                    src="/work/cs-copilot/copilot-preview.html"
                    className="w-full h-full"
                    style={{ border: 0, pointerEvents: "none" }}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div
                  className="rounded-2xl w-full border border-border/30"
                  style={{ height: "360px", backgroundColor: thumbBg, opacity: 0.65 }}
                />
              )}
            </div>
            <div className={reversed ? "[direction:ltr]" : ""}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark">
                  {company}
                </span>
                <span className="text-muted text-xs">·</span>
                <span className="text-muted text-xs">{year}</span>
              </div>
              <h2
                className="text-text leading-tight mb-4"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontFamily: QUICKSAND, fontWeight: 600 }}
              >
                {name}
              </h2>
              <p className="text-muted leading-relaxed mb-5 text-lg md:text-xl">
                {shortDesc}
              </p>

              {/* Meta fields */}
              {meta && (
                <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted mb-6">
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
