// Highlighter-marker swipe behind text — matches pattchok.com/play topic style.
// A low-opacity gradient rounded-rect with a turbulence filter for rough,
// hand-drawn marker edges, sitting BEHIND the text.
// filterId / gradientId must be unique per instance (same id twice on a page is invalid).

export function Highlight({
  children,
  gradientId,
  filterId,
}: {
  children: React.ReactNode;
  gradientId: string;
  filterId: string;
}) {
  return (
    <span
      className="relative inline-block"
      style={{ paddingBottom: "3px" }}
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute overflow-visible"
        style={{
          bottom: "2px",
          left: "-8px",
          width: "calc(100% + 16px)",
          height: "12px",
          zIndex: 0,
        }}
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F0C8BA" stopOpacity="0.52" />
            <stop offset="50%" stopColor="#C9A96E" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#B8D4BF" stopOpacity="0.52" />
          </linearGradient>
          <filter id={filterId} x="-5%" y="-120%" width="110%" height="340%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.22"
              numOctaves="2"
              seed="5"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="1.8"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <rect
          x="1"
          y="1"
          width="98"
          height="10"
          rx="3"
          fill={`url(#${gradientId})`}
          filter={`url(#${filterId})`}
        />
      </svg>
      <span className="relative" style={{ zIndex: 1 }}>
        {children}
      </span>
    </span>
  );
}
