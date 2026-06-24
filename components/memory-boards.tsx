"use client";

import Image from "next/image";
import { useState } from "react";

type Board = {
  id: string;
  /** Label under the circle. */
  label: string;
  /** Short initials shown inside the minimal highlight cover. */
  cover: string;
  /** 9:16 collage in /public. */
  src: string;
};

// Drop your 9:16 collages in /public and point each highlight at one.
const BOARDS: Board[] = [
  { id: "uw", label: "uw", cover: "uw", src: "/about/photo-uw.png" },
  { id: "llm", label: "llm", cover: "llm", src: "/about/photo-typhoon.png" },
  { id: "se", label: "se", cover: "se", src: "/about/photo-se.png" },
  { id: "cu", label: "cu", cover: "cu", src: "/about/photo-cu.png" },
];

export function MemoryBoards() {
  const [active, setActive] = useState(BOARDS[0].id);
  const board = BOARDS.find((b) => b.id === active) ?? BOARDS[0];

  return (
    <div className="mx-auto flex w-full max-w-[360px] flex-col items-center gap-6">
      {/* Story-highlight circles — minimal text covers */}
      <div className="flex flex-wrap items-start justify-center gap-5">
        {BOARDS.map((b) => {
          const isActive = b.id === active;
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => setActive(b.id)}
              aria-pressed={isActive}
              className="group flex w-16 flex-col items-center gap-1.5 focus:outline-none"
            >
              {/* Ring */}
              <span
                className={`rounded-full p-[2.5px] transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-tr from-[#F0C8BA] via-[#C9A96E] to-[#B8D4BF]"
                    : "bg-transparent ring-2 ring-hairline group-hover:ring-muted"
                }`}
              >
                {/* Inner white gap, like IG */}
                <span className="block rounded-full bg-background p-[2px]">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full font-loma lowercase transition-all duration-200 ${
                      isActive
                        ? "text-background"
                        : "bg-stone-100 text-foreground/70 group-hover:bg-stone-200"
                    }`}
                    style={{
                      fontSize: "1.15rem",
                      letterSpacing: "0.02em",
                      ...(isActive ? { backgroundColor: "#6b6f3a" } : {}),
                    }}
                  >
                    {b.cover}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Board frame — 9:16 */}
      <div
        className="relative aspect-[9/16] w-full overflow-hidden rounded-xl shadow-[0_18px_44px_-16px_rgba(0,0,0,0.55)] ring-1 ring-black/10"
        style={{ backgroundColor: "#33261c" }}
      >
        <Image
          key={board.id}
          src={board.src}
          alt={`${board.label} memories`}
          fill
          priority
          sizes="(min-width: 768px) 340px, 90vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
