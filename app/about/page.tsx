import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import TypeWriter from "@/components/TypeWriter";
import WavyCTA from "@/components/WavyCTA";
import FlowerCarousel from "@/components/FlowerCarousel";
import { CALISTOGA, QUICKSAND, CARD_STYLE, LOMA } from "@/lib/constants";

const GRAD_TEXT: React.CSSProperties = {
  color: "#8C6050",
};

// Shared SVG defs — rendered once, referenced by all highlight marks
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

// Highlighter mark — sits just behind the text
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

const sectionLabel = (text: string) => (
  <div className="mb-8">
    <h2 style={{ fontFamily: CALISTOGA, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#D4A090", lineHeight: 1.1 }}>
      {text}
    </h2>
    <div style={{
      height: "2px",
      background: "linear-gradient(to right, #F0C8BA, #C9A96E, #B8D4BF, transparent)",
      marginTop: "8px",
      opacity: 0.7,
    }} />
  </div>
);

const sectionHeading = (text: string) => (
  <div className="mb-8 flex justify-center">
    <div style={{ position: "relative", display: "inline-block", paddingBottom: "3px" }}>
      <h3 style={{ fontFamily: CALISTOGA, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.1, position: "relative", zIndex: 1, ...GRAD_TEXT }}>
        {text}
      </h3>
      <Highlighter />
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <main className="px-6 md:px-10 lg:px-16 pt-32 pb-24" style={{ backgroundColor: "#FDF5EE" }}>
      <GradDefs />
      <div className="max-w-5xl mx-auto">

        {/* Greeting — name + photo side by side */}
        <FadeIn>
          <div className="mb-16">
            <p className="text-brown mb-3 tracking-wide" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontFamily: LOMA }}>
              <TypeWriter
                text="สวัสดีค่ะ"
                delay={400}
                speed={100}
              />
            </p>
            <h1 className="text-text leading-[1.05] relative" style={{ fontFamily: LOMA, fontSize: "clamp(3rem, 6vw, 3.75rem)" }}>
              <span aria-hidden="true" className="invisible">hi, i&apos;m patt :)</span>
              <span className="absolute left-0 top-0">
                <TypeWriter
                  text="hi, i'm patt "
                  gradientSuffix=":)"
                  gradientStyle={{
                    background: "linear-gradient(135deg, #F0C8BA, #C9A96E, #B8D4BF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  delay={1700}
                  speed={80}
                  hideCursorUntilStart
                />
              </span>
            </h1>
          </div>
        </FadeIn>

        <div className="space-y-16">

          {/* My Story */}
          <FadeIn delay={0.12}>
            <section>
              <div
                className="relative rounded-2xl px-8 py-10 md:px-12 md:py-12 overflow-visible"
                style={{
                  backgroundColor: "rgba(253,250,247,0.45)",
                  border: "1px solid rgba(234,216,204,0.4)",
                }}
              >
                {/* Decorative blobs — organic shapes like home hero */}
                <div className="absolute pointer-events-none" style={{ top: "-30px", right: "-20px", width: "130px", height: "130px", background: "#F0C8BA", opacity: 0.5, borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%", zIndex: 0 }} />
                <div className="absolute pointer-events-none" style={{ top: "55%", left: "-25px", width: "90px", height: "90px", background: "#B8D4BF", opacity: 0.45, borderRadius: "40% 60% 45% 55% / 60% 40% 60% 40%", zIndex: 0 }} />
                <div className="absolute pointer-events-none" style={{ bottom: "-18px", right: "15%", width: "60px", height: "60px", background: "#C9A96E", opacity: 0.4, borderRadius: "50% 50% 40% 60% / 40% 60% 40% 60%", zIndex: 0 }} />
                <div className="absolute pointer-events-none" style={{ top: "20%", right: "8%", width: "45px", height: "45px", background: "#B8D4BF", opacity: 0.3, borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%", zIndex: 0 }} />
                <div className="absolute pointer-events-none" style={{ bottom: "22%", left: "-16px", width: "50px", height: "50px", background: "#C9A96E", opacity: 0.35, borderRadius: "45% 55% 40% 60% / 55% 45% 60% 40%", zIndex: 0 }} />
                <div className="absolute pointer-events-none" style={{ bottom: "-12px", right: "calc(15% + 70px)", width: "50px", height: "50px", background: "#F0C8BA", opacity: 0.35, borderRadius: "50% 40% 55% 45% / 40% 55% 45% 60%", zIndex: 0 }} />
                <h2
                  className="relative text-text leading-tight mb-8"
                  style={{ fontFamily: CALISTOGA, fontSize: "clamp(2rem, 4vw, 2.8rem)", zIndex: 1 }}
                >
                  my story
                </h2>
                <div className="relative space-y-5 text-lg md:text-xl leading-relaxed text-muted" style={{ zIndex: 1 }}>
                  <p>
                    i majored in finance and accounting in my undergrad. what i enjoyed most was the data part, like the records,
                    how things connect, and seeing how things actually work. i also really enjoy hearing from customers directly,
                    their feedback, what they need, what frustrates them. that&apos;s kind of what got me into product management.
                  </p>
                  <p>
                    i shifted careers right after i graduated to be a junior pm at a data and ai consulting firm. it was the &ldquo;big data era&rdquo; back
                    then, and i was lucky to get to work on some really fun projects early on, including conversational ai for 7-Eleven Thailand.{" "}
                    <span className="text-brown-light italic text-sm">(fyi: 7-Eleven in Thailand is amazing :) we have over 15k branches, look it up!)</span>
                  </p>
                  <p>
                    i later went back to do my master&apos;s in information management to strengthen the data and ai side of things
                    in a more technical way, and it&apos;s shaped how i do product work a lot.
                  </p>
                  <p>
                    i&apos;ve been in pm for 6+ years now (a little mix of product, project, and program manager depending on the situation).
                    i&apos;ve worked across ai, data products, mobile apps, and enterprise tools.
                  </p>
                  <p>
                    outside of work, i&apos;m a runner, a hiker, a big food lover, and a dog lover
                    (i will pet your dog without asking). i also arrange flowers, read a lot, and
                    plan my next trip whenever i can. for a while, i organized local AI meetups with{" "}
                    <a
                      href="https://www.aicollective.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brown underline underline-offset-2 hover:text-brown-light transition-colors duration-200"
                    >
                      AI Collective Seattle
                    </a>
                    . seattle-based, always exploring. the stuff
                    below is a little window into that.
                  </p>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* Outside of work */}
          <FadeIn delay={0.14}>
            <h2
              className="text-text leading-tight mb-12"
              style={{ fontFamily: CALISTOGA, fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              outside of work
            </h2>
            <div className="space-y-5 text-lg md:text-xl leading-relaxed text-muted mb-12">
              <p>
                i believe in staying curious and saying yes to things that feel a little uncomfortable.
                most of what i love doing now started because i tried something on a whim and kept going.
              </p>
              <p>
                i care about being present, staying active, and making space for the things that keep me grounded.
                whether it&apos;s running before the sun comes up, arranging flowers on a sunday, or planning the next trip,
                these are the things that make everything else better.
              </p>
            </div>
            <div className="space-y-20">

              {/* Travels & Photography */}
              <div>
                <FadeIn>{sectionHeading("travels & photography")}</FadeIn>
                <FadeIn delay={0.1}>
                  <div id="map" className="rounded-xl overflow-hidden" style={{ height: "420px" }}>
                    <iframe
                      src="https://www.google.com/maps/d/embed?mid=15CTwe6PEXFL38-gZ0TGydJEebPXr1XM&z=2"
                      width="100%" height="420" style={{ border: 0 }}
                      allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <p className="text-muted text-lg text-center mt-4 mb-8">
                    i&apos;ve been to <strong><em>28 countries</em></strong> so far and have been keeping track of all my favorite spots! check out some of my <strong>photos</strong> below :)
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
                <FadeIn>{sectionHeading("running")}</FadeIn>
                <FadeIn delay={0.1}>
                  {/* Race info */}
                  <div className="flex items-start justify-center gap-16 flex-wrap mb-10">
                    <div>
                      <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-1">race</p>
                      <p className="text-xl text-text" style={{ fontFamily: CALISTOGA }}>🏅 my better half marathon</p>
                      <p className="text-muted text-sm mt-1">february 8, 2026</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-1">finish time</p>
                      <p className="text-3xl text-brown" style={{ fontFamily: CALISTOGA }}>55:55.1</p>
                      <p className="text-muted text-xs mt-1">10k · chip time</p>
                    </div>
                  </div>

                  {/* Fanned overlapping photos — natural ratios */}
                  <div className="flex items-end justify-center" style={{ paddingTop: "16px", paddingBottom: "8px" }}>
                    {/* Bib photo — smaller */}
                    <div style={{ width: "38%", flexShrink: 0, transform: "rotate(-7deg) translateY(12px)", zIndex: 1, marginRight: "-28px", borderRadius: "14px", overflow: "hidden", boxShadow: "0 8px 28px rgba(0,0,0,0.13)" }}>
                      <Image src="/running1.png" alt="running photo 1" width={400} height={500} className="w-full h-auto" />
                    </div>
                    {/* Center photo */}
                    <div style={{ width: "30%", flexShrink: 0, transform: "rotate(0.5deg)", zIndex: 3, borderRadius: "14px", overflow: "hidden", boxShadow: "0 12px 36px rgba(0,0,0,0.18)" }}>
                      <Image src="/running2.png" alt="running photo 2" width={600} height={750} className="w-full h-auto" />
                    </div>
                    {/* Right photo */}
                    <div style={{ width: "33%", flexShrink: 0, transform: "rotate(3.5deg) translateY(10px)", zIndex: 2, marginLeft: "-28px", borderRadius: "14px", overflow: "hidden", boxShadow: "0 8px 28px rgba(0,0,0,0.13)" }}>
                      <Image src="/running3.png" alt="running photo 3" width={500} height={625} className="w-full h-auto" />
                    </div>
                  </div>

                  <p className="text-muted text-xs text-center mt-4">📍 Seward Park, Seattle, WA</p>
                  <p className="text-muted text-lg text-center mt-4">
                    i started <strong>running</strong> more since i moved to Seattle. the PNW has such beautiful trails :) this was my first race ever, and i ran a <strong><em>sub-60 10k</em></strong>! pretty proud of that!
                  </p>
                </FadeIn>
              </div>

              {/* Reading */}
              <div>
                <FadeIn>{sectionHeading("reading")}</FadeIn>
                <FadeIn delay={0.1}>
                  <div style={CARD_STYLE}>
                    <Image src="/reading.png" alt="reading tracker" width={1200} height={800} className="w-full rounded-xl object-cover" />
                  </div>
                  <p className="text-muted text-lg text-center mt-4">
                    i love <strong>reading</strong> before bed and on trips :) my favorites are fantasy, rom-com, and a little bit of sci-fi. i recently started recording what i read and took a <em>selfie with the book</em> on the day i finish it!
                  </p>
                </FadeIn>
              </div>

              {/* Flower Arrangement */}
              <div>
                <FadeIn>{sectionHeading("flower arrangement")}</FadeIn>
                <FadeIn delay={0.1}>
                  <FlowerCarousel />
                  <p className="text-muted text-lg text-center mt-4">
                    i love giving people <strong>handmade gifts</strong>, and flower arrangement is one of the perfect ways to do that :) i&apos;m still pretty new but hope to learn more <em>techniques</em> in the future!
                  </p>
                </FadeIn>
              </div>

            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.18}>
            <div className="border-t border-border pt-12 text-right flex flex-col items-end">
              <p className="text-muted mb-3">want to see what i&apos;ve built?</p>
              <WavyCTA href="/work" variant="nav">view my work</WavyCTA>
            </div>
          </FadeIn>

        </div>
      </div>
    </main>
  );
}
