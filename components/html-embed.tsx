"use client";

import { useEffect, useRef, useState } from "react";

// Embeds a same-origin HTML mockup and auto-sizes the iframe to fit its full
// content height (no clipping, no inner scrollbar).
export function HtmlEmbed({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    let mo: MutationObserver | undefined;
    let poll: ReturnType<typeof setInterval> | undefined;

    const measure = () => {
      const doc = iframe.contentDocument;
      if (!doc) return;
      // Use the full scroll height of the document.
      const h = Math.max(
        doc.body?.scrollHeight ?? 0,
        doc.documentElement?.scrollHeight ?? 0,
      );
      if (h > 0) setHeight(h);
    };

    const onLoad = () => {
      measure();
      const doc = iframe.contentDocument;
      if (doc?.body) {
        // The mockups animate content in over time, which grows the document.
        // Watch for DOM/attribute/style changes and re-measure so the iframe
        // always fits the full content (incl. the replay button at the bottom).
        mo = new MutationObserver(measure);
        mo.observe(doc.body, {
          subtree: true,
          childList: true,
          attributes: true,
          characterData: true,
        });
      }
      // Backstop: poll briefly to catch transition-driven height changes that
      // a MutationObserver may not fire on.
      let ticks = 0;
      poll = setInterval(() => {
        measure();
        if (++ticks > 30) {
          if (poll) clearInterval(poll);
          poll = undefined;
        }
      }, 300);
    };

    iframe.addEventListener("load", onLoad);

    // Re-measure on container resize (responsive mockups reflow → height changes).
    const ro = new ResizeObserver(measure);
    ro.observe(iframe);

    // In case it already loaded before the listener attached.
    if (iframe.contentDocument?.readyState === "complete") onLoad();

    return () => {
      iframe.removeEventListener("load", onLoad);
      ro.disconnect();
      mo?.disconnect();
      if (poll) clearInterval(poll);
    };
  }, [src]);

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      loading="lazy"
      scrolling="no"
      className="w-full"
      style={{ height: height ? `${height}px` : "720px", border: "0" }}
    />
  );
}
