export default function HeroBg() {
  const ps = "running";

  return (
    <>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <style>{`
            @keyframes drift1 { from { transform: translateX(0px); } to { transform: translateX(55px); } }
            @keyframes drift2 { from { transform: translateX(0px); } to { transform: translateX(-45px); } }
            @keyframes drift3 { from { transform: translateX(0px); } to { transform: translateX(38px); } }
            @keyframes drift4 { from { transform: translateX(0px); } to { transform: translateX(-50px); } }
            @keyframes drift5 { from { transform: translateX(0px); } to { transform: translateX(30px); } }
            .wave1 { animation: drift1 52s ease-in-out infinite alternate; animation-play-state: ${ps}; }
            .wave2 { animation: drift2 68s ease-in-out infinite alternate; animation-play-state: ${ps}; }
            .wave3 { animation: drift3 44s ease-in-out infinite alternate; animation-play-state: ${ps}; }
            .wave4 { animation: drift4 58s ease-in-out infinite alternate; animation-play-state: ${ps}; }
            .wave5 { animation: drift5 62s ease-in-out infinite alternate; animation-play-state: ${ps}; }
          `}</style>

          <linearGradient id="bgBase" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#FEF8F4" />
            <stop offset="55%"  stopColor="#FDFAF7" />
            <stop offset="100%" stopColor="#F5FAF5" />
          </linearGradient>

          <filter id="blur70" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="70" />
          </filter>
          <filter id="waveBlur" x="-15%" y="-50%" width="130%" height="200%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        <rect width="1440" height="800" fill="url(#bgBase)" />

        <ellipse cx="80"   cy="400" rx="200" ry="340" fill="#D4A090" opacity="0.11" filter="url(#blur70)" />
        <ellipse cx="430"  cy="420" rx="520" ry="370" fill="#F0C8BA" opacity="0.14" filter="url(#blur70)" />
        <ellipse cx="720"  cy="390" rx="360" ry="300" fill="#F0E5CE" opacity="0.11" filter="url(#blur70)" />
        <ellipse cx="1020" cy="420" rx="500" ry="360" fill="#B8D4BF" opacity="0.13" filter="url(#blur70)" />
        <ellipse cx="1370" cy="400" rx="180" ry="320" fill="#8FB89A" opacity="0.10" filter="url(#blur70)" />

        {/* Soft white wavy ribbons — thinner, some fading in/out mid-screen */}
        <g fill="white" filter="url(#waveBlur)">
          {/* Upper — ends around middle-left */}
          <path
            className="wave1"
            d="M -200 140 C 60 95, 220 190, 400 140 S 600 90, 760 140 L 760 162 C 600 212, 400 168, 220 212 S 60 115, -200 162 Z"
            opacity="0.55"
          />
          {/* Upper-right — starts around middle-right */}
          <path
            className="wave2"
            d="M 820 210 C 980 165, 1120 255, 1280 210 S 1520 165, 1720 210 L 1720 232 C 1520 278, 1280 238, 1120 278 S 980 185, 820 232 Z"
            opacity="0.45"
          />
          {/* Mid — crosses through center, thin */}
          <path
            className="wave3"
            d="M -200 430 C 140 382, 360 478, 620 430 S 1060 382, 1340 430 S 1720 478, 2040 430 L 2040 450 C 1720 500, 1340 460, 1060 500 S 620 460, 360 500 S 140 450, -200 450 Z"
            opacity="0.4"
          />
          {/* Lower-left — fades out before middle */}
          <path
            className="wave4"
            d="M -200 560 C 100 512, 260 608, 440 560 S 640 510, 780 560 L 780 580 C 640 628, 440 588, 260 628 S 100 530, -200 580 Z"
            opacity="0.38"
          />
          {/* Lower-right — starts around middle-right */}
          <path
            className="wave5"
            d="M 900 650 C 1060 602, 1200 698, 1340 650 S 1560 602, 1720 650 L 1720 670 C 1560 718, 1340 678, 1200 718 S 1060 615, 900 670 Z"
            opacity="0.35"
          />
        </g>
      </svg>

    </>
  );
}
