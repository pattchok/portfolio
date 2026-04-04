"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";

export default function HeroBg() {
  const [isPlaying, setIsPlaying] = useState(true);
  const ps = isPlaying ? "running" : "paused";

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
            @keyframes drift6 { from { transform: translateX(0px); } to { transform: translateX(-34px); } }
            .cloud1 { animation: drift1 52s ease-in-out infinite alternate; animation-play-state: ${ps}; }
            .cloud2 { animation: drift2 68s ease-in-out infinite alternate; animation-play-state: ${ps}; }
            .cloud3 { animation: drift3 44s ease-in-out infinite alternate; animation-play-state: ${ps}; }
            .cloud4 { animation: drift4 58s ease-in-out infinite alternate; animation-play-state: ${ps}; }
            .cloud5 { animation: drift5 62s ease-in-out infinite alternate; animation-play-state: ${ps}; }
            .cloud6 { animation: drift6 48s ease-in-out infinite alternate; animation-play-state: ${ps}; }
          `}</style>

          <linearGradient id="bgBase" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#FEF8F4" />
            <stop offset="55%"  stopColor="#FDFAF7" />
            <stop offset="100%" stopColor="#F5FAF5" />
          </linearGradient>

          <filter id="blur70" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="70" />
          </filter>
          <filter id="cloudBlur" x="-15%" y="-30%" width="130%" height="160%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <rect width="1440" height="800" fill="url(#bgBase)" />

        <ellipse cx="80"   cy="400" rx="200" ry="340" fill="#D4A090" opacity="0.22" filter="url(#blur70)" />
        <ellipse cx="430"  cy="420" rx="520" ry="370" fill="#F0C8BA" opacity="0.28" filter="url(#blur70)" />
        <ellipse cx="720"  cy="390" rx="360" ry="300" fill="#F0E5CE" opacity="0.22" filter="url(#blur70)" />
        <ellipse cx="1020" cy="420" rx="500" ry="360" fill="#B8D4BF" opacity="0.26" filter="url(#blur70)" />
        <ellipse cx="1370" cy="400" rx="180" ry="320" fill="#8FB89A" opacity="0.20" filter="url(#blur70)" />

        {/* Cloud 1 — upper right, large */}
        <g className="cloud1" filter="url(#cloudBlur)" opacity="0.85">
          <ellipse cx="1155" cy="145" rx="180" ry="42" fill="white" />
          <circle cx="1050" cy="118" r="44"  fill="white" />
          <circle cx="1105" cy="96"  r="56"  fill="white" />
          <circle cx="1168" cy="80"  r="64"  fill="white" />
          <circle cx="1232" cy="98"  r="50"  fill="white" />
          <circle cx="1285" cy="120" r="38"  fill="white" />
        </g>

        {/* Cloud 2 — left, mid-height */}
        <g className="cloud2" filter="url(#cloudBlur)" opacity="0.72">
          <ellipse cx="220" cy="526" rx="142" ry="34" fill="white" />
          <circle cx="120" cy="505" r="34" fill="white" />
          <circle cx="172" cy="488" r="46" fill="white" />
          <circle cx="230" cy="476" r="54" fill="white" />
          <circle cx="288" cy="490" r="40" fill="white" />
          <circle cx="336" cy="510" r="28" fill="white" />
        </g>

        {/* Cloud 3 — upper center, wisp */}
        <g className="cloud3" filter="url(#cloudBlur)" opacity="0.56">
          <ellipse cx="616" cy="80" rx="88" ry="22" fill="white" />
          <circle cx="550" cy="64" r="26" fill="white" />
          <circle cx="592" cy="48" r="36" fill="white" />
          <circle cx="638" cy="40" r="40" fill="white" />
          <circle cx="682" cy="54" r="30" fill="white" />
        </g>

        {/* Cloud 4 — right, upper-mid */}
        <g className="cloud4" filter="url(#cloudBlur)" opacity="0.48">
          <ellipse cx="1306" cy="354" rx="108" ry="26" fill="white" />
          <circle cx="1232" cy="334" r="30" fill="white" />
          <circle cx="1274" cy="314" r="42" fill="white" />
          <circle cx="1324" cy="304" r="46" fill="white" />
          <circle cx="1372" cy="322" r="32" fill="white" />
        </g>

        {/* Cloud 5 — upper left, small */}
        <g className="cloud5" filter="url(#cloudBlur)" opacity="0.44">
          <ellipse cx="198" cy="152" rx="70" ry="20" fill="white" />
          <circle cx="148" cy="136" r="24" fill="white" />
          <circle cx="186" cy="120" r="34" fill="white" />
          <circle cx="228" cy="116" r="32" fill="white" />
          <circle cx="262" cy="132" r="22" fill="white" />
        </g>

        {/* Cloud 6 — lower right, small */}
        <g className="cloud6" filter="url(#cloudBlur)" opacity="0.36">
          <ellipse cx="1190" cy="608" rx="60" ry="18" fill="white" />
          <circle cx="1144" cy="592" r="22" fill="white" />
          <circle cx="1180" cy="576" r="30" fill="white" />
          <circle cx="1218" cy="574" r="28" fill="white" />
          <circle cx="1252" cy="590" r="20" fill="white" />
        </g>
      </svg>

      <button
        onClick={() => setIsPlaying((p) => !p)}
        aria-label={isPlaying ? "Pause cloud animation" : "Play cloud animation"}
        className="absolute bottom-5 right-6 z-20 flex items-center gap-1.5 text-muted/60 hover:text-brown transition-colors duration-200 pointer-events-auto"
        style={{ fontSize: "0.65rem", letterSpacing: "0.05em" }}
      >
        {isPlaying ? <Pause size={11} strokeWidth={1.5} /> : <Play size={11} strokeWidth={1.5} />}
        <span>{isPlaying ? "pause" : "play"}</span>
      </button>
    </>
  );
}
