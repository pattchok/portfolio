"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  id: string;
  fallbackHeight: number;
  title?: string;
};

export default function AutoHeightIframe({ src, id, fallbackHeight, title }: Props) {
  const [height, setHeight] = useState(fallbackHeight);
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      const data = e.data;
      if (data && data.type === "copilot-iframe-height" && data.id === id && typeof data.height === "number") {
        setHeight(data.height);
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [id]);

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      className="w-full block"
      style={{ height: `${height}px`, border: 0 }}
      loading="lazy"
    />
  );
}
