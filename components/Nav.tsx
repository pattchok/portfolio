"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SocialIcon } from "@/components/SocialIcons";
import { socialLinks, LOMA } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/play", label: "play" },
  { href: "/about", label: "about" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-brown hover:text-text transition-colors duration-200"
          aria-label="Home"
        >
          <span style={{ fontFamily: LOMA, fontSize: "1.5rem", letterSpacing: "0.02em" }}>patt chokchainant</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-base tracking-wide transition-colors duration-200 relative group ${
                  active ? "text-brown" : "text-muted hover:text-text"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-brown transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop social icons */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map(({ href, iconName, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-muted hover:text-brown transition-colors duration-200"
            >
              <SocialIcon name={iconName} size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted hover:text-text transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-b border-border px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm tracking-wide py-1 ${
                  active ? "text-brown" : "text-muted"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="flex gap-4 pt-2">
            {socialLinks.map(({ href, iconName, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-muted hover:text-brown transition-colors"
              >
                <SocialIcon name={iconName} size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
