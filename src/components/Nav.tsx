import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/sessions", label: "Sessions" },
  { href: "/private-hire", label: "Private Hire" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="bg-tide text-cream sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between h-16 sm:h-18"
          aria-label="Main navigation"
        >
          {/* Brand */}
          <Link
            href="/"
            className="font-serif text-xl sm:text-2xl text-cream hover:text-sand transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            Tide &amp; Timber
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.slice(1, -1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-cream/80 hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Contact */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex text-sm font-medium text-cream/80 hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              Contact
            </Link>
            <Link
              href="/sessions"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-semibold rounded-lg bg-ember text-cream hover:bg-ember-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              Book a Session
            </Link>
          </div>
        </nav>

        {/* Mobile nav links */}
        <nav
          className="md:hidden pb-3 flex flex-wrap gap-x-4 gap-y-1"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cream/70 hover:text-cream transition-colors py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
