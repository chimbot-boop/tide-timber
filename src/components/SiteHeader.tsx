"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule/30 bg-primary text-bg">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#home"
          className="font-display text-2xl font-semibold tracking-[-0.03em] text-bg transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          The Bindery
        </a>

        <nav className="hidden items-center gap-7 sm:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bg transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bg sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-rule/20 px-5 pb-4 sm:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3 pt-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bg transition-colors duration-200 hover:text-accent"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
