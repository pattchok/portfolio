// Soft blurred page background — sage green on the left, pink on the right.
// Used on every page except the home hero (which has its own HeroBg).
export default function PageBg() {
  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      <defs>
        <filter id="pageBgBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="80" />
        </filter>
      </defs>
      {/* Greens on the left */}
      <ellipse cx="70"   cy="460" rx="200" ry="360" fill="#8FB89A" opacity="0.09" filter="url(#pageBgBlur)" />
      <ellipse cx="420"  cy="480" rx="520" ry="380" fill="#B8D4BF" opacity="0.11" filter="url(#pageBgBlur)" />
      {/* Soft transition in the middle */}
      <ellipse cx="720"  cy="440" rx="360" ry="300" fill="#F0E5CE" opacity="0.08" filter="url(#pageBgBlur)" />
      {/* Pinks on the right */}
      <ellipse cx="1020" cy="480" rx="500" ry="370" fill="#F0C8BA" opacity="0.11" filter="url(#pageBgBlur)" />
      <ellipse cx="1380" cy="460" rx="180" ry="320" fill="#D4A090" opacity="0.09" filter="url(#pageBgBlur)" />
    </svg>
  );
}
