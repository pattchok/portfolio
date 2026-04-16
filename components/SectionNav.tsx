"use client";

import { useEffect, useState } from "react";
import { LATO, PLAYFAIR } from "@/lib/constants";

export type SectionNavItem = {
  id: string;
  label: string;
};

type SectionNavProps = {
  items: SectionNavItem[];
  /** Project name shown at the top of the nav. */
  title?: string;
  /** Offset from viewport top (px) used when scrolling and when detecting the active section. Match the fixed nav height. */
  offset?: number;
};

export default function SectionNav({ items, title, offset = 100 }: SectionNavProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    if (items.length === 0) return;

    const handleScroll = () => {
      const threshold = offset + 20;
      let current = items[0].id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - threshold <= 0) {
          current = item.id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items, offset]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:block sticky self-start"
      style={{ top: `${offset + 16}px`, fontFamily: LATO }}
    >
      {title && (
        <p
          className="text-text mb-5"
          style={{ fontFamily: PLAYFAIR, fontWeight: 700, fontSize: "1.5rem" }}
        >
          {title}
        </p>
      )}
      <ul className="space-y-4">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className="block text-base transition-colors duration-200 hover:text-brown"
                style={{
                  color: active ? "#8C6050" : "rgba(54, 45, 39, 0.55)",
                  fontWeight: active ? 700 : 500,
                }}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
