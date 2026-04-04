import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { CALISTOGA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conversational AI in Retail - Patt",
};

const accent = "#8C6050";
const sage = "#B8D4BF";
const pink = "#F0C8BA";
const gold = "#C9A96E";

export default function ConversationalAIPage() {
  return (
    <main style={{ backgroundColor: "#F3F5F0" }} className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 px-6 md:px-10 lg:px-16">
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-40px",
            right: "-30px",
            width: "220px",
            height: "220px",
            background: pink,
            opacity: 0.25,
            borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "10%",
            left: "-40px",
            width: "140px",
            height: "140px",
            background: sage,
            opacity: 0.2,
            borderRadius: "40% 60% 45% 55% / 60% 40% 60% 40%",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn>
            <Link
              href="/work"
              className="text-muted text-sm hover:text-brown transition-colors duration-200 mb-10 inline-block"
            >
              &larr; work
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-tight uppercase text-pink-dark">
                DataWow
              </span>
              <span className="text-muted text-xs">&middot;</span>
              <span className="text-muted text-xs">2019 &ndash; 2021</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="text-text leading-[1.08] mb-5"
              style={{
                fontFamily: CALISTOGA,
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              }}
            >
              Conversational AI in Retail &amp; Commerce
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p
              className="text-muted leading-relaxed mb-8"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
            >
              Conversational AI deployed across 15,000+ stores in Thailand. One
              of the earliest large-scale conversational deployments in Thai
              retail.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted">
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  role
                </span>
                junior PM
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  stack
                </span>
                Dialogflow &middot; Python &middot; LINE API
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight uppercase text-pink-dark block mb-0.5">
                  industry
                </span>
                retail / commerce
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Coming soon */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pb-24 space-y-20">
        <FadeIn>
          <section
            className="rounded-2xl px-8 py-10 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(240,200,186,0.18) 0%, rgba(253,250,247,0.5) 50%, rgba(184,212,191,0.15) 100%)",
              border: "1px solid rgba(234,216,204,0.3)",
            }}
          >
            <p className="text-muted text-lg leading-relaxed mb-2" style={{ fontStyle: "italic" }}>
              case study coming soon.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              if you&apos;d like to hear about this project, feel free to{" "}
              <a
                href="mailto:ch.pathomporn@gmail.com"
                className="text-brown underline underline-offset-2 hover:text-brown-light transition-colors duration-200"
              >
                reach out
              </a>
              !
            </p>
          </section>
        </FadeIn>

        {/* Nav */}
        <FadeIn>
          <div className="flex justify-between items-center pt-8 border-t border-border/40">
            <Link
              href="/work"
              className="text-muted hover:text-brown transition-colors text-sm"
            >
              &larr; all work
            </Link>
            <Link
              href="mailto:ch.pathomporn@gmail.com"
              className="text-muted hover:text-brown transition-colors text-sm"
            >
              want to hear more? let&apos;s chat &rarr;
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
