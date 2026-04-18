// Soft blurred page background — sage green on the left, pink on the right.
// Mirrors the home page HeroBg ratios and opacities, just with the color order flipped.
export default function PageBg() {
  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      <defs>
        <filter id="pageBgBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="70" />
        </filter>
      </defs>
      {/* Greens on the left */}
      <ellipse cx="80"   cy="400" rx="200" ry="340" fill="#8FB89A" opacity="0.10" filter="url(#pageBgBlur)" />
      <ellipse cx="430"  cy="420" rx="520" ry="370" fill="#B8D4BF" opacity="0.13" filter="url(#pageBgBlur)" />
      {/* Soft cream transition in the middle */}
      <ellipse cx="720"  cy="390" rx="360" ry="300" fill="#F0E5CE" opacity="0.11" filter="url(#pageBgBlur)" />
      {/* Pinks on the right */}
      <ellipse cx="1020" cy="420" rx="500" ry="360" fill="#F0C8BA" opacity="0.14" filter="url(#pageBgBlur)" />
      <ellipse cx="1370" cy="400" rx="180" ry="320" fill="#D4A090" opacity="0.11" filter="url(#pageBgBlur)" />
    </svg>
  );
}
