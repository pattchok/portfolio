"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  gradientSuffix?: string;
  gradientStyle?: React.CSSProperties;
  hideCursorUntilStart?: boolean;
}

export default function TypeWriter({
  text,
  delay = 400,
  speed = 80,
  className = "",
  style,
  gradientSuffix,
  gradientStyle,
  hideCursorUntilStart = false,
}: TypeWriterProps) {
  const fullText = gradientSuffix ? text + gradientSuffix : text;
  const [displayed, setDisplayed] = useState(0);
  const [started, setStarted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started || displayed >= fullText.length) return;
    const timer = setTimeout(() => setDisplayed((d) => d + 1), speed);
    return () => clearTimeout(timer);
  }, [started, displayed, fullText.length, speed]);

  useEffect(() => {
    if (displayed >= fullText.length && displayed > 0) {
      const timer = setTimeout(() => setShowCursor(false), 500);
      return () => clearTimeout(timer);
    }
  }, [displayed, fullText.length]);

  const mainEnd = Math.min(displayed, text.length);
  const suffixChars = displayed > text.length ? displayed - text.length : 0;

  const cursorHidden = hideCursorUntilStart && !started;
  const cursor = showCursor && !cursorHidden ? <span className="animate-blink">|</span> : null;

  return (
    <span className={className} style={style}>
      {displayed === 0 && cursor}
      {mainEnd > 0 && text.slice(0, mainEnd)}
      {gradientSuffix && suffixChars > 0 && (
        <span style={gradientStyle}>
          {gradientSuffix.slice(0, suffixChars)}
        </span>
      )}
      {displayed > 0 && cursor}
    </span>
  );
}
