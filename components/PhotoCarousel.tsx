"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CARD_STYLE } from "@/lib/constants";

const arrowStyle: React.CSSProperties = {
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.88)",
  backdropFilter: "blur(8px)",
  boxShadow: "0 2px 10px rgba(0,0,0,0.10)",
  color: "#C9A96E",
};

interface PhotoCarouselProps {
  photos: string[];
  alt?: string;
  noCard?: boolean;
  square?: boolean;
}

export default function PhotoCarousel({ photos, alt = "photo", noCard = false, square = false }: PhotoCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  if (photos.length === 0) {
    return (
      <div style={CARD_STYLE}>
        <div className="rounded-xl flex items-center justify-center" style={{ height: "420px", background: "#F0E9DC" }}>
          <p className="text-muted text-sm">photos coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div style={noCard ? undefined : CARD_STYLE}>
      <div className="relative rounded-xl overflow-hidden" style={square ? { paddingBottom: "100%" } : { height: "420px" }}>
        <Image
          key={current}
          src={photos[current]}
          alt={`${alt} ${current + 1}`}
          fill
          className="object-cover"
        />

        <button
          onClick={prev}
          aria-label="previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center transition-transform duration-200 hover:scale-110"
          style={arrowStyle}
        >
          <ChevronLeft size={20} strokeWidth={2} />
        </button>

        <button
          onClick={next}
          aria-label="next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center transition-transform duration-200 hover:scale-110"
          style={arrowStyle}
        >
          <ChevronRight size={20} strokeWidth={2} />
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-4">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`go to photo ${i + 1}`}
            style={{
              height: "8px",
              width: i === current ? "22px" : "8px",
              borderRadius: "4px",
              background: i === current ? "#C9A96E" : "#D4A090",
              opacity: i === current ? 1 : 0.35,
              transition: "all 0.3s ease",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
