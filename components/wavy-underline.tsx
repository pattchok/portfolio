// Wavy gradient underline — matches pattchok.com's hero squiggle.
// Wrap inline text: <WavyUnderline>PROJECTS</WavyUnderline>
// gradientId must be unique per instance (multiple same-id <svg> on a page is invalid).

export function WavyUnderline({
  children,
  gradientId,
}: {
  children: React.ReactNode;
  gradientId: string;
}) {
  return (
    <span className="relative inline-block pb-1">
      {children}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-0 w-full overflow-visible"
        style={{ bottom: "-2px", height: "7px" }}
        viewBox="0 0 100 7"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F0C8BA" />
            <stop offset="50%" stopColor="#C9A96E" />
            <stop offset="100%" stopColor="#B8D4BF" />
          </linearGradient>
        </defs>
        <path
          d="M0,3.5 C8,0.5 16,6.5 24,3.5 C32,0.5 40,6.5 48,3.5 C56,0.5 64,6.5 72,3.5 C80,0.5 88,6.5 96,3.5 C98,2 100,3.5 100,3.5"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}
