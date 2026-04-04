"use client";

import Link from "next/link";
import { ReactNode } from "react";

// ── CrayonMark ────────────────────────────────────────────────────
// Decorative crayon highlight for specific words in headings / body.
// Usage: <CrayonMark>product manager</CrayonMark>

function CrayonLine() {
  return (
    <svg
      aria-hidden="true"
      className="absolute left-0 w-full overflow-visible pointer-events-none"
      style={{ bottom: "-3px", height: "9px" }}
      viewBox="0 0 100 9"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="crayonF" x="-4%" y="-80%" width="108%" height="260%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035 0.7"
            numOctaves="4"
            seed="8"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="3"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <linearGradient id="crayonGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F0C8BA" />
          <stop offset="45%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#B8D4BF" />
        </linearGradient>
      </defs>
      <path
        d="M1,4.5 C22,2 44,6 62,3.5 C76,2 89,5.5 99,3.5"
        fill="none"
        stroke="url(#crayonGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
        filter="url(#crayonF)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M2,3.5 C20,1.5 42,5.5 60,3 C75,1.5 88,4.5 99,3"
        fill="none"
        stroke="url(#crayonGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.35"
        filter="url(#crayonF)"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function CrayonMark({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block pb-1">
      {children}
      <CrayonLine />
    </span>
  );
}

// ── Type A: WavyCTA ──────────────────────────────────────────────
// Opens secondary pages ("view project →", "view case study →")
// Tight wavy gradient underline.

function WavyLine({ large = false }: { large?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="absolute left-0 w-full overflow-visible pointer-events-none"
      style={{ bottom: large ? "-6px" : "-3px", height: large ? "11px" : "7px" }}
      viewBox="0 0 100 7"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="wavyCTAGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F0C8BA" />
          <stop offset="45%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#B8D4BF" />
        </linearGradient>
      </defs>
      <path
        className="wavy-line-path"
        pathLength="1"
        d="M0,3.5 C8,0.5 16,6.5 24,3.5 C32,0.5 40,6.5 48,3.5 C56,0.5 64,6.5 72,3.5 C80,0.5 88,6.5 96,3.5 C98,2 100,3.5 100,3.5"
        fill="none"
        stroke="url(#wavyCTAGrad)"
        strokeWidth={large ? "3.5" : "2"}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

// ── Type B: NavCTA ──────────────────────────────────────────────
// Moves between main pages ("get to know me →", "view my work →")
// Soft gradient dot trail — playful, lighter feel.

function BrushStroke() {
  return (
    <svg
      aria-hidden="true"
      className="absolute left-0 w-full overflow-visible pointer-events-none"
      style={{ bottom: "-3px", height: "8px" }}
      viewBox="0 0 100 8"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="brushGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F0C8BA" />
          <stop offset="45%" stopColor="#C9A96E" />
          <stop offset="100%" stopColor="#B8D4BF" />
        </linearGradient>
        <filter id="brushSoft" x="-2%" y="-40%" width="104%" height="180%">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>
      {/* Organic filled shape — slight upward tilt, asymmetric taper, thicker middle */}
      <path
        d="M2,5.5 C6,4.8 14,3.6 25,3.2 C40,2.7 50,2.2 65,2 C78,1.8 90,2.2 98,3
           L97,5.2 C89,5.8 77,5.5 64,5.6 C50,5.8 38,6.2 24,6 C13,5.8 5,6 2,5.5 Z"
        fill="url(#brushGrad)"
        opacity="0.52"
        filter="url(#brushSoft)"
      />
    </svg>
  );
}

interface WavyCTAProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  large?: boolean;
  /** "detail" (default) = wavy line for secondary pages, "nav" = dot trail for main page navigation */
  variant?: "detail" | "nav";
}

export default function WavyCTA({
  href,
  children,
  className = "",
  external = false,
  large = false,
  variant = "detail",
}: WavyCTAProps) {

  const inner = (
    <span
      className={`inline-flex items-center gap-2 group font-medium text-text ${large ? "text-lg" : ""} ${className}`}
    >
      <span className="relative pb-2">
        {children}
        {variant === "nav" ? <BrushStroke /> : <WavyLine large={large} />}
      </span>
      <span className="text-brown group-hover:translate-x-1 transition-transform duration-300">
        →
      </span>
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return <Link href={href}>{inner}</Link>;
}
