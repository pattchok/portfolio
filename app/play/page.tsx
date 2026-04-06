import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import WavyCTA from "@/components/WavyCTA";
import FlowerCarousel from "@/components/FlowerCarousel";
import { PLAYFAIR, DM_SANS, CARD_STYLE } from "@/lib/constants";

const GRAD_TEXT: React.CSSProperties = {
  color: "#8C6050",
};

function GradDefs() {
  return (
    <svg aria-hidden="true" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
      <defs>
        <linearGradient id="hlGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#F0C8BA" stopOpacity="0.52" />
          <stop offset="50%"  stopColor="#C9A96E" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#B8D4BF" stopOpacity="0.52" />
        </linearGradient>
        <filter id="hlFilter" x="-5%" y="-120%" width="110%" height="340%">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.22" numOctaves="2" seed="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}

function Highlighter() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute",
        bottom: "2px",
        left: "-8px",
        width: "calc(100% + 16px)",
        height: "12px",
        zIndex: 0,
        overflow: "visible",
        pointerEvents: "none",
      }}
      viewBox="0 0 100 12"
      preserveAspectRatio="none"
    >
      <rect x="1" y="1" width="98" height="10" rx="3" fill="url(#hlGrad)" filter="url(#hlFilter)" />
    </svg>
  );
}

const sectionHeading = (text: string) => (
  <div className="mb-8 flex justify-center">
    <div style={{ position: "relative", display: "inline-block", paddingBottom: "3px" }}>
      <h3 style={{ fontFamily: PLAYFAIR, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 700, lineHeight: 1.1, position: "relative", zIndex: 1, ...GRAD_TEXT }}>
        {text}
      </h3>
      <Highlighter />
    </div>
  </div>
);

export default function PlayPage() {
  return (
    <main className="px-6 md:px-10 lg:px-16 pt-32 pb-24" style={{ backgroundColor: "#F3F5F0" }}>
      <GradDefs />
      <div className="max-w-4xl mx-auto">
        {/* Page heading */}
        <FadeIn>
          <h1
            className="text-text leading-tight"
            style={{ fontFamily: PLAYFAIR, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700 }}
          >
            Play
          </h1>
          <div
            style={{
              height: "2px",
              background: "linear-gradient(to right, #F0C8BA, #C9A96E, #B8D4BF, transparent)",
              marginTop: "10px",
              opacity: 0.6,
            }}
          />
        </FadeIn>

        {/* Intro */}
        <FadeIn delay={0.06}>
          <p className="text-base md:text-lg leading-relaxed text-muted mt-8 mb-14">
            Most of what I love doing now started because I tried something on a whim and kept going.
            I run before the sun comes up, arrange flowers on weekends, read way too many fantasy novels,
            and plan my next trip the moment I get back from one. I believe it&apos;s never too late to
            pick up something new, and these are the things that keep me grounded and make everything else better.
          </p>
        </FadeIn>

        <div className="space-y-20">

          {/* Travels & Photography */}
          <div>
            <FadeIn>{sectionHeading("Travels & Photography")}</FadeIn>
            <FadeIn delay={0.1}>
              <div id="map" className="rounded-xl overflow-hidden" style={{ height: "340px" }}>
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=15CTwe6PEXFL38-gZ0TGydJEebPXr1XM&z=2"
                  width="100%" height="340" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-muted text-base text-center mt-4 mb-8">
                I&apos;ve been to <strong><em>28 countries</em></strong> so far and have been keeping track of all my favorite spots! Check out some of my <strong>photos</strong> below :)
              </p>
              <div className="grid grid-cols-3 gap-2 mb-6">
                <Image src="/travel/1mtrainier.JPG" alt="mt. rainier" width={600} height={400} className="w-full h-48 object-cover rounded-xl" style={{ boxShadow: "0 6px 12px rgba(0,0,0,0.1)" }} />
                <Image src="/travel/20kyoto.JPG" alt="machiya district, kyoto" width={600} height={400} className="w-full h-48 object-cover rounded-xl" style={{ boxShadow: "0 6px 12px rgba(0,0,0,0.1)" }} />
                <Image src="/travel/3kyoto.JPG" alt="kyoto" width={600} height={400} className="w-full h-48 object-cover rounded-xl" style={{ boxShadow: "0 6px 12px rgba(0,0,0,0.1)" }} />
              </div>
              <div className="text-center">
                <WavyCTA href="/photos" large>see more photos</WavyCTA>
              </div>
            </FadeIn>
          </div>

          {/* Running */}
          <div>
            <FadeIn>{sectionHeading("Running")}</FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex items-start justify-center gap-16 flex-wrap mb-10">
                <div>
                  <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-1">race</p>
                  <p className="text-xl text-text" style={{ fontFamily: DM_SANS, fontWeight: 600 }}>🏅 My Better Half Marathon</p>
                  <p className="text-muted text-sm mt-1">February 8, 2026</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-1">finish time</p>
                  <p className="text-3xl text-brown" style={{ fontFamily: DM_SANS, fontWeight: 700 }}>55:55.1</p>
                  <p className="text-muted text-xs mt-1">10k &middot; chip time</p>
                </div>
              </div>

              <div className="flex items-end justify-center max-w-2xl mx-auto" style={{ paddingTop: "16px", paddingBottom: "8px" }}>
                <div style={{ width: "38%", flexShrink: 0, transform: "rotate(-7deg) translateY(12px)", zIndex: 1, marginRight: "-28px", borderRadius: "14px", overflow: "hidden", boxShadow: "0 8px 28px rgba(0,0,0,0.13)" }}>
                  <Image src="/running1.png" alt="running photo 1" width={400} height={500} className="w-full h-auto" />
                </div>
                <div style={{ width: "30%", flexShrink: 0, transform: "rotate(0.5deg)", zIndex: 3, borderRadius: "14px", overflow: "hidden", boxShadow: "0 12px 36px rgba(0,0,0,0.18)" }}>
                  <Image src="/running2.png" alt="running photo 2" width={600} height={750} className="w-full h-auto" />
                </div>
                <div style={{ width: "33%", flexShrink: 0, transform: "rotate(3.5deg) translateY(10px)", zIndex: 2, marginLeft: "-28px", borderRadius: "14px", overflow: "hidden", boxShadow: "0 8px 28px rgba(0,0,0,0.13)" }}>
                  <Image src="/running3.png" alt="running photo 3" width={500} height={625} className="w-full h-auto" />
                </div>
              </div>

              <p className="text-muted text-xs text-center mt-4">📍 Seward Park, Seattle, WA</p>
              <p className="text-muted text-base text-center mt-4">
                I started <strong>running</strong> more since I moved to Seattle. The PNW has such beautiful trails :) This was my first race ever, and I ran a <strong><em>sub-60 10k</em></strong>! Pretty proud of that!
              </p>
            </FadeIn>
          </div>

          {/* Reading */}
          <div>
            <FadeIn>{sectionHeading("Reading")}</FadeIn>
            <FadeIn delay={0.1}>
              <div style={CARD_STYLE}>
                <Image src="/reading.png" alt="reading tracker" width={1200} height={800} className="w-full rounded-xl object-cover" />
              </div>
              <p className="text-muted text-base text-center mt-4">
                I love <strong>reading</strong> before bed and on trips :) My favorites are fantasy, rom-com, and a little bit of sci-fi. I recently started recording what I read and took a <strong><em>selfie with the book</em></strong> on the day I finish it!
              </p>
            </FadeIn>
          </div>

          {/* Flower Arrangement */}
          <div>
            <FadeIn>{sectionHeading("Flower Arrangement")}</FadeIn>
            <FadeIn delay={0.1}>
              <FlowerCarousel />
              <p className="text-muted text-base text-center mt-4">
                I always love giving people <strong>handmade gifts</strong>, and <strong><em>flowers</em></strong> are one of them :) Each arrangement carries a little message, whether it&apos;s gratitude for a mentor, comfort for a friend, or celebration for someone I love.
              </p>
            </FadeIn>
          </div>

        </div>
      </div>
    </main>
  );
}
