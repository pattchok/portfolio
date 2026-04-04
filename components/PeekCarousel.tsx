"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PeekCarouselProps {
  photos: string[];
  alt?: string;
}

const btnStyle: React.CSSProperties = {
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.88)",
  backdropFilter: "blur(8px)",
  boxShadow: "0 2px 10px rgba(0,0,0,0.10)",
  color: "#C9A96E",
};

export default function PeekCarousel({ photos, alt = "photo" }: PeekCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  const prevIdx = (current - 1 + photos.length) % photos.length;
  const nextIdx = (current + 1) % photos.length;

  if (photos.length === 0) return null;

  return (
    <div>
      <div className="flex items-center justify-center gap-4">
        {/* Left button */}
        <button
          onClick={prev}
          aria-label="previous photo"
          className="shrink-0 flex items-center justify-center transition-transform duration-200 hover:scale-110 cursor-pointer"
          style={btnStyle}
        >
          <ChevronLeft size={20} strokeWidth={2} />
        </button>

        {/* Photos */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Left peek - 1/3 visible with blur fade */}
          <div className="relative overflow-hidden rounded-xl shrink-0" style={{ width: "22%", aspectRatio: "1" }}>
            <Image
              src={photos[prevIdx]}
              alt={`${alt} ${prevIdx + 1}`}
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, rgba(250,245,238,0.95) 0%, rgba(250,245,238,0.5) 50%, rgba(250,245,238,0) 100%)",
                backdropFilter: "blur(3px)",
                WebkitMaskImage: "linear-gradient(to right, black 0%, black 50%, transparent 100%)",
                maskImage: "linear-gradient(to right, black 0%, black 50%, transparent 100%)",
              }}
            />
          </div>

          {/* Center photo */}
          <div
            className="relative overflow-hidden rounded-xl flex-1"
            style={{
              aspectRatio: "1",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              key={current}
              src={photos[current]}
              alt={`${alt} ${current + 1}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Right peek - 1/3 visible with blur fade */}
          <div className="relative overflow-hidden rounded-xl shrink-0" style={{ width: "22%", aspectRatio: "1" }}>
            <Image
              src={photos[nextIdx]}
              alt={`${alt} ${nextIdx + 1}`}
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to left, rgba(250,245,238,0.95) 0%, rgba(250,245,238,0.5) 50%, rgba(250,245,238,0) 100%)",
                backdropFilter: "blur(3px)",
                WebkitMaskImage: "linear-gradient(to left, black 0%, black 50%, transparent 100%)",
                maskImage: "linear-gradient(to left, black 0%, black 50%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* Right button */}
        <button
          onClick={next}
          aria-label="next photo"
          className="shrink-0 flex items-center justify-center transition-transform duration-200 hover:scale-110 cursor-pointer"
          style={btnStyle}
        >
          <ChevronRight size={20} strokeWidth={2} />
        </button>
      </div>

      {/* Dots */}
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
