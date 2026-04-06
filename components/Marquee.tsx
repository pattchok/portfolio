"use client";

const TEXT = "ship it  ✿  stay curious  ✿  dream big  ✿  ship it  ✿  stay curious  ✿  dream big  ✿  ship it  ✿  stay curious  ✿  dream big  ✿  ";

// Wave: period = 400px, amplitude ~15px (matching reference sine wave)
// We tile 3 full waves (1200px) then duplicate for seamless scroll
const WAVE_W = 1200;
const buildWave = (xOff: number) => {
  const x0 = xOff;
  return `S${x0 + 133.2},48.536 ${x0 + 200},48.536 S${x0 + 466.8},18.536 ${x0 + 600},18.536 S${x0 + 866.8},48.536 ${x0 + 1000},48.536 S${x0 + 1266.8},18.536 ${x0 + 1200},18.536`;
};

const PATH = `M-400,18.536 L-400,18.536 S-133.2,48.536 0,48.536 S266.8,18.536 400,18.536 ${buildWave(400)} ${buildWave(1600)} ${buildWave(2800)} ${buildWave(4000)}`;

export default function Marquee() {
  return (
    <div
      className="overflow-hidden select-none"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <svg
        className="w-full"
        style={{ height: "67px" }}
        viewBox={`0 0 ${WAVE_W} 67`}
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="marqueeWave"
            fill="none"
            d={PATH}
          />
        </defs>
        <text
          fill="#FAF5EE"
          opacity="0.3"
          fontSize="11"
          fontWeight="bold"
          letterSpacing="3"
          style={{ textTransform: "uppercase" }}
        >
          <textPath href="#marqueeWave">
            <animate
              attributeName="startOffset"
              from="0%"
              to="-100%"
              dur="20s"
              repeatCount="indefinite"
            />
            {TEXT}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
