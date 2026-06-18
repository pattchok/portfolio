"use client";

import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type CopyEmailProps = {
  email: string;
  label: string;
  icon?: ReactNode;
  className?: string;
  labelClassName?: string;
  style?: CSSProperties;
};

export function CopyEmail({
  email,
  label,
  icon,
  className,
  labelClassName,
  style,
}: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently.
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Email copied" : `Copy email ${email}`}
      className={className}
      style={style}
    >
      {icon}
      <span className={labelClassName}>{copied ? "copied!" : label}</span>
    </button>
  );
}
