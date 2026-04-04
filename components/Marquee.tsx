// Static marquee strip for footer (animation paused for now)
const ITEMS = [
  "product manager",
  "ai & data",
  "seattle",
  "6+ years experience",
  "open to connect",
  "dot connector",
  "always curious",
];

export default function Marquee() {
  return (
    <div
      className="overflow-hidden border-b py-3 select-none"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="flex justify-center whitespace-nowrap">
        <span
          className="text-[11px] font-bold tracking-widest uppercase"
          style={{ color: "#6B4535" }}
        >
          {ITEMS.join("  ·  ")}
        </span>
      </div>
    </div>
  );
}
