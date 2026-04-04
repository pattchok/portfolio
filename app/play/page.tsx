import FadeIn from "@/components/FadeIn";
import { CALISTOGA } from "@/lib/constants";

const sectionHeading = (emoji: string, text: string) => (
  <div className="mb-6">
    <div className="flex items-baseline gap-3">
      <span className="text-2xl">{emoji}</span>
      <h2 style={{ fontFamily: CALISTOGA, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#D4A090", lineHeight: 1.1 }}>
        {text}
      </h2>
    </div>
    <div style={{ height: "2px", backgroundColor: "#D4A090", opacity: 0.35, marginTop: "8px" }} />
  </div>
);

export default function PlayPage() {
  return (
    <main className="px-6 md:px-10 lg:px-24 pt-32 pb-24" style={{ backgroundColor: "#FDF5EE" }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <FadeIn>
          <h1 style={{ fontFamily: CALISTOGA, fontSize: "clamp(3.5rem, 7vw, 6rem)", color: "#D4A090", lineHeight: 1.05 }}>
            play
          </h1>
          <div style={{ height: "2px", backgroundColor: "#D4A090", opacity: 0.35, marginTop: "10px", marginBottom: "12px" }} />
          <p className="text-muted text-lg mb-20 leading-relaxed">
            the stuff that fills me up outside of work.
          </p>
        </FadeIn>

        <div className="space-y-24">

          {/* Travels */}
          <section>
            <FadeIn>
              {sectionHeading("🌍", "travels")}
              <p className="text-muted text-lg leading-relaxed mb-6">
                i&apos;ve been to a good number of countries so far and i&apos;ve been keeping
                track of all my favorite spots!
              </p>
              <a
                href="#map"
                className="inline-flex items-center gap-2 text-brown text-sm border-b border-brown/30 pb-0.5 hover:border-brown transition-colors duration-200"
              >
                📍 check out my recommendations here →
              </a>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div id="map" className="mt-8 rounded-2xl overflow-hidden border border-border" style={{ height: "420px" }}>
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=15CTwe6PEXFL38-gZ0TGydJEebPXr1XM"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </section>

          {/* Running */}
          <section>
            <FadeIn>
              {sectionHeading("🏃‍♀️", "running")}
              <p className="text-muted text-lg leading-relaxed mb-8">
                this is my newest thing! i recently ran my first 10k ever and
                finished at{" "}
                <strong className="text-brown font-medium">55:56</strong>, and i&apos;m
                still pretty proud of that one :)
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="border border-border rounded-2xl p-6 bg-cream/60">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-1">race</p>
                    <p className="text-xl text-text" style={{ fontFamily: CALISTOGA }}>
                      🏅 my better half marathon
                    </p>
                    <p className="text-muted text-sm mt-1">february 8, 2026</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold tracking-tight uppercase text-pink-dark mb-1">finish time</p>
                    <p className="text-3xl text-brown" style={{ fontFamily: CALISTOGA }}>55:56</p>
                    <p className="text-muted text-xs mt-1">10k</p>
                  </div>
                </div>
                <div
                  className="mt-6 rounded-xl bg-pink/30 border border-pink-dark/20 flex items-center justify-center"
                  style={{ height: "200px" }}
                >
                  <p className="text-muted text-sm text-center">race bib photo coming soon 🏅</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-muted text-sm mt-6 italic">to be continued... 🏃‍♀️</p>
            </FadeIn>
          </section>

          {/* Flower Arrangement */}
          <section>
            <FadeIn>
              {sectionHeading("🌸", "flower arrangement")}
              <p className="text-muted text-lg leading-relaxed mb-8">
                i love flowers. this used to be my secret hobby. i&apos;m not great
                at keeping plants alive, but give me cut stems and i&apos;m happy.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="rounded-2xl overflow-hidden border border-border flex items-center justify-center"
                    style={{ height: "260px", background: n === 1 ? "#EDD5C5" : n === 2 ? "#C2D0B8" : "#F0E9DC", opacity: 0.6 }}
                  >
                    <p className="text-muted text-xs text-center px-4">photo coming soon 🌸</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* Reading */}
          <section>
            <FadeIn>
              {sectionHeading("📚", "reading")}
              <p className="text-muted text-lg leading-relaxed mb-8">
                i track everything i read with short notes and ratings. here&apos;s a peek at my reading log.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2].map((n) => (
                  <div
                    key={n}
                    className="rounded-2xl overflow-hidden border border-border flex items-center justify-center"
                    style={{ height: "320px", background: n === 1 ? "#EDD5C5" : "#C2D0B8", opacity: 0.5 }}
                  >
                    {/* Replace with: <img src="/reading-tracker-1.png" alt="reading tracker" className="w-full h-full object-cover" /> */}
                    <p className="text-muted text-xs text-center px-4">reading tracker screenshot coming soon 📚</p>
                  </div>
                ))}
              </div>
              <p className="text-muted text-sm mt-5 leading-relaxed">
                i also took a screenshot with each book on the day i finished too! you should do it. it&apos;s fun{" "}
                <span className="italic">(it&apos;s an idea from my boyfriend!)</span>
              </p>
            </FadeIn>
          </section>

        </div>
      </div>
    </main>
  );
}
