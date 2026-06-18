"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import type { ProjectImage } from "@/lib/data";

// Render a string with **bold** spans into React nodes.
function withBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export function ImageCarousel({
  images,
  caption,
}: {
  images: ProjectImage[];
  caption?: string;
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const go = (next: number) => setIndex((next + count) % count);

  if (count === 0) return null;
  const current = images[index];

  return (
    <figure className="mt-6">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-hairline bg-stone-100">
        {current.placeholder ? (
          <div className="flex h-full w-full items-center justify-center border-dashed">
            <span className="px-4 text-center text-sm text-muted">
              {current.alt}
            </span>
          </div>
        ) : (
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
          />
        )}

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Dots — below the image so they're always visible */}
      {count > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-accent" : "bg-foreground/25 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>
      )}

      {caption && (
        <figcaption className="mt-3 text-center text-sm italic leading-relaxed text-muted">
          {withBold(caption)}
        </figcaption>
      )}
    </figure>
  );
}
