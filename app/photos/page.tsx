import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { PLAYFAIR } from "@/lib/constants";

export const metadata = {
  title: "Photos - Patt",
};

const photos: { src: string; caption?: string }[] = [
  { src: "/travel/1mtrainier.JPG", caption: "mt. rainier national park, washington, usa" },
  { src: "/travel/2mtfuji2.JPG", caption: "mt. fuji, shizuoka, japan" },
  { src: "/travel/3kyoto.JPG", caption: "ryoanji temple, kyoto, japan" },
  { src: "/travel/4italy1.JPG", caption: "colosseum, rome, italy" },
  { src: "/travel/5snowlake2.JPG", caption: "snow lake, snoqualmie pass, usa" },
  { src: "/travel/6salsalito.JPG", caption: "sausalito, california, usa" },
  { src: "/travel/7olympic.JPG", caption: "olympic national park, washington, usa" },
  { src: "/travel/8mtfuji.JPG", caption: "mt. fuji, shizuoka, japan" },
  { src: "/travel/9mtrainier2.JPG", caption: "mt. rainier national park, washington, usa" },
  { src: "/travel/10snowlake3.JPG", caption: "snow lake, snoqualmie pass, usa" },
  { src: "/travel/12italy2.JPG", caption: "trastevere, rome, italy" },
  { src: "/travel/13taiwan1.JPG", caption: "taipei 101, taipei, taiwan" },
  { src: "/travel/14snowlake.JPG", caption: "snow lake, snoqualmie pass, usa" },
  { src: "/travel/15singapore.JPG", caption: "marina bay sands, singapore" },
  { src: "/travel/17vancouver.jpeg", caption: "gastown steam clock, vancouver, canada" },
  { src: "/travel/18sanfrancisco.JPG", caption: "union square, san francisco, usa" },
  { src: "/travel/19salsalito.JPG", caption: "waterfront, sausalito, usa" },
  { src: "/travel/20kyoto.JPG", caption: "machiya district, kyoto, japan" },
  { src: "/travel/21betong.JPG", caption: "sea of mist, betong, thailand" },
  { src: "/travel/22taiwan2.JPG", caption: "beitou hot springs, taipei, taiwan" },
  { src: "/travel/23italy3.JPG", caption: "bramante staircase, vatican city, italy" },
  { src: "/travel/23naan.JPG", caption: "mountain valley, nan, thailand" },
  { src: "/travel/24siena-italy4.JPG", caption: "torre del mangia, siena, italy" },
  { src: "/travel/osaka.JPG", caption: "izakaya street, osaka, japan" },
  { src: "/travel/sf.JPG", caption: "crissy field, san francisco, usa" },
];

export default function PhotosPage() {
  return (
    <main className="px-6 md:px-10 lg:px-16 pt-32 pb-24" style={{ backgroundColor: "#FDF5EE" }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <Link
            href="/play#map"
            className="text-brown text-sm hover:text-brown-light transition-colors duration-200 mb-6 inline-block"
          >
            &larr; back to play
          </Link>
          <h1
            className="text-text leading-tight mb-4"
            style={{ fontFamily: PLAYFAIR, fontSize: "clamp(2.4rem, 5vw, 3.5rem)" }}
          >
            photos
          </h1>
          <p className="text-muted text-lg mb-12">
            some snapshots from places i&apos;ve been :)
          </p>
        </FadeIn>

        {photos.length === 0 ? (
          <FadeIn delay={0.1}>
            <div
              className="rounded-2xl flex items-center justify-center"
              style={{
                height: "300px",
                background: "linear-gradient(135deg, rgba(240,200,186,0.13) 0%, rgba(253,250,247,0.55) 50%, rgba(184,212,191,0.11) 100%)",
                border: "1px solid rgba(234,216,204,0.4)",
              }}
            >
              <p className="text-muted">photos coming soon</p>
            </div>
          </FadeIn>
        ) : (
          <div className="space-y-6">
            {photos.map((photo, i) => (
              <FadeIn key={photo.src} delay={Math.min(i * 0.03, 0.3)}>
                <div>
                  <div className="overflow-hidden" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                    <Image
                      src={photo.src}
                      alt={photo.caption || `photo ${i + 1}`}
                      width={1400}
                      height={900}
                      className="w-full h-auto"
                    />
                  </div>
                  {photo.caption && (
                    <p className="text-muted text-xs mt-2">{photo.caption}</p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
