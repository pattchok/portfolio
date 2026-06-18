import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { GalleryHeading, PhotoGrid } from "@/components/photo-grid";
import { photos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Life",
};

const PREVIEW_COUNT = 6;

function ViewAll({ href }: { href: string }) {
  return (
    <div className="mt-8 flex justify-center">
      <Link
        href={href}
        className="group inline-flex items-center gap-2 font-medium text-[#8c5e48] transition-colors hover:text-accent"
        style={{ fontSize: "1.06rem" }}
      >
        view all
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}

export default function LifePage() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20">
      {/* Places I've been — heading + map + travel photos */}
      <section className="pt-[2.5rem] sm:pt-[3.2rem]">
        <GalleryHeading>
          a growing collection of the places i&apos;ve been
        </GalleryHeading>

        {/* Travel map — Google My Maps embed (same settings as pattchok.com/play) */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-xl">
            <iframe
              title="Places I've travelled"
              src="https://www.google.com/maps/d/embed?mid=15CTwe6PEXFL38-gZ0TGydJEebPXr1XM&ll=42%2C-100&z=2.5"
              className="h-[340px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <div className="mt-14">
          <PhotoGrid items={photos.slice(0, PREVIEW_COUNT)} />
        </div>
        {photos.length > PREVIEW_COUNT && (
          <ViewAll href="/life/travel" />
        )}
      </section>

      {/* Hobbies — a corkboard of running, reading, flower arrangement */}
      <section className="pt-[2.5rem] pb-24 sm:pt-[3.2rem] sm:pb-32">
        <GalleryHeading>things i do to keep me grounded</GalleryHeading>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-5xl overflow-hidden">
            <Image
              src="/life/hobbies.png"
              alt="A corkboard collage of my hobbies — running, reading, and flower arrangement"
              width={1280}
              height={720}
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
