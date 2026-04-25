import Link from "next/link";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-rule/30 bg-primary py-10 text-bg">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
        <div>
          <p className="font-display text-3xl tracking-[-0.03em] text-bg">The Bindery</p>
          <p className="mt-2 max-w-xl font-body text-sm leading-6 text-secondary">Fictional York bookbinder for the Design Contract Smoke Test. Built to verify SPEC.md and DESIGN.md handoff.</p>
          <p className="mt-2 font-body text-sm leading-6 text-secondary">Copyright 2026 Design Contract Smoke Test.</p>
        </div>
        <nav className="flex gap-5" aria-label="Footer">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bg transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
