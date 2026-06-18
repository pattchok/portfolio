import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { PhotoCard } from "@/components/photo-card";
import type { Photo } from "@/lib/data";

export function GalleryHeading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="mx-auto max-w-2xl text-center font-serif text-3xl font-normal leading-snug tracking-tight sm:text-4xl">
        {children}
      </h2>
    </Reveal>
  );
}

export function PhotoGrid({ items }: { items: Photo[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {items.map((photo, i) => (
        <Reveal key={photo.src} delay={(i % 3) * 0.05}>
          <PhotoCard src={photo.src} caption={photo.caption} />
        </Reveal>
      ))}
    </div>
  );
}

export function BackToLife() {
  return (
    <div className="mt-12 flex justify-center">
      <Link
        href="/life"
        className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-1">
          ←
        </span>
        back to life
      </Link>
    </div>
  );
}
