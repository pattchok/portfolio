"use client";

const ITEMS = [
  "ship it",
  "stay curious",
  "dot connector",
  "keep going",
  "build things",
  "dream big",
  "try again",
  "never stop",
  "have fun",
  "be kind",
  "start now",
  "make stuff",
  "ask why",
  "run more",
  "read more",
  "keep learning",
];

function MarqueeTrack() {
  const content = ITEMS.map((item, i) => (
    <span key={i} className="inline-flex items-center">
      <span>{item}</span>
      <span className="mx-4 opacity-40">✿</span>
    </span>
  ));

  return (
    <div
      className="flex shrink-0 items-center"
      style={{ animation: "marqueeScroll 30s linear infinite" }}
    >
      <div className="flex shrink-0 items-center whitespace-nowrap">{content}</div>
      <div className="flex shrink-0 items-center whitespace-nowrap">{content}</div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      className="overflow-hidden select-none"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        className="py-3.5 text-[11px] font-bold tracking-widest uppercase flex"
        style={{ color: "#3D2A1E" }}
      >
        <MarqueeTrack />
      </div>
    </div>
  );
}
