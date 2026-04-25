import Link from "next/link";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule/30 bg-primary text-bg">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="#home" className="font-display text-2xl font-semibold tracking-[-0.03em] text-bg transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
          The Bindery
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 sm:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bg transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bg sm:hidden">York bindery</span>
      </div>
    </header>
  );
}
