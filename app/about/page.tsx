import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { MemoryBoards } from "@/components/memory-boards";
import { CopyEmail } from "@/components/copy-email";
import { socialIcons } from "@/components/social-icons";
import { socials } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20">
      {/* Intro — two columns */}
      <section className="grid items-center gap-7 pt-[4.5rem] pb-24 sm:pt-[6rem] sm:pb-32 md:grid-cols-2 md:gap-10">
        <Reveal>
          <div className="flex justify-center">
            <MemoryBoards />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full max-w-[520px] flex-col justify-center">
            {/* Greeting — LomaThin, colors/gradient matched to pattchok.com */}
            <h1
              className="font-loma leading-[1.05]"
              style={{ fontSize: "clamp(3.2rem, 6.4vw, 4rem)" }}
            >
              <span style={{ color: "#8c5e48" }}>สวัสดีค่ะ</span>
              <br />
              <span style={{ color: "#362d27" }}>hi, i&apos;m patt </span>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #F0C8BA, #C9A96E, #B8D4BF)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                :)
              </span>
            </h1>

            <div
              className="mt-8 flex flex-col gap-5 leading-relaxed text-muted"
              style={{ fontSize: "1.06rem" }}
            >
              <p>
                I&apos;m a Product Manager with 6+ years of experience in
                language technology: conversational AI, LLMs, and text analysis.
                I&apos;m from Bangkok, Thailand, but currently live in Seattle,
                WA. I recently graduated from UW Seattle in Information
                Management. Previously, I studied accounting and finance at
                Chulalongkorn University.
              </p>

              <p
                className="font-semibold leading-snug text-foreground"
                style={{ fontSize: "1.35rem" }}
              >
                I connect what people need to what they actually experience.
              </p>

              <p>
                I enjoy talking to users and find it fascinating how differently
                people think and how much that shapes what they actually need. My
                favorite part is turning those needs into something usable, then
                hearing what they think of it. My goal is to make experiencing
                products easy and accessible for everyone, and I believe that&apos;d
                be a small way to make people&apos;s lives a little easier :)
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {socials.map((s) => {
                const Icon = socialIcons[s.icon];
                if (s.icon === "email") {
                  return (
                    <CopyEmail
                      key={s.label}
                      email={s.href.replace(/^mailto:/, "")}
                      label={s.label}
                      icon={<Icon className="h-4 w-4" />}
                      className="group inline-flex items-center gap-2 text-base font-medium text-[#8c5e48] transition-colors hover:text-accent"
                      labelClassName="underline-offset-4 group-hover:underline"
                    />
                  );
                }
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-base font-medium text-[#8c5e48] transition-colors hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="underline-offset-4 group-hover:underline">
                      {s.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
