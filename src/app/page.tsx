import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #1A3A4A 0%, #0F2533 50%, #1A3A4A 100%)",
      }}
    >
      {/* SVG wave overlay */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        style={{ height: "180px" }}
      >
        <path
          d="M0,80 C240,150 480,20 720,80 C960,140 1200,30 1440,80 L1440,180 L0,180 Z"
          fill="#FDFAF4"
          opacity="0.08"
        />
        <path
          d="M0,120 C300,60 600,160 900,110 C1100,75 1300,140 1440,120 L1440,180 L0,180 Z"
          fill="#FDFAF4"
          opacity="0.05"
        />
      </svg>

      {/* Abstract circles */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <circle
          cx="200"
          cy="200"
          r="300"
          fill="none"
          stroke="#5BA8A0"
          strokeWidth="1"
          opacity="0.12"
        />
        <circle
          cx="1200"
          cy="600"
          r="250"
          fill="none"
          stroke="#5BA8A0"
          strokeWidth="1"
          opacity="0.10"
        />
        <path
          d="M0,450 Q360,300 720,450 T1440,450"
          fill="none"
          stroke="#5BA8A0"
          strokeWidth="1.5"
          opacity="0.08"
        />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-seafoam font-sans font-medium text-sm sm:text-base uppercase tracking-widest mb-4">
          Cornwall &amp; Devon&apos;s Premier Surf School
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-tight">
          Ride the Tide,
          <br />
          Find Your Flow
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-sand/90 max-w-2xl mx-auto font-sans leading-relaxed">
          Small-group surf and paddleboard sessions on some of the UK&apos;s
          most beautiful beaches. BSUPA-certified instructors, locally crafted
          boards, unforgettable mornings.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/sessions"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-ember text-cream hover:bg-ember-dark transition-colors w-full sm:w-auto"
          >
            Book a Session
          </Link>
          <Link
            href="/locations"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg border-2 border-cream/60 text-cream hover:bg-cream/10 transition-colors w-full sm:w-auto"
          >
            View Locations
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  USP Strip                                                          */
/* ------------------------------------------------------------------ */
const USP_ITEMS = [
  {
    title: "Small Groups",
    text: "Max 6 per instructor. You get real coaching, not just supervision.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 text-seafoam" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="15" cy="14" r="5" />
        <circle cx="25" cy="14" r="5" />
        <path d="M5,34 C5,26 10,22 15,22 M35,34 C35,26 30,22 25,22 M15,22 C17,21 23,21 25,22 C28,24 30,28 30,34" />
      </svg>
    ),
  },
  {
    title: "Expert Instructors",
    text: "BSUPA-certified coaches with 10+ years on the water.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 text-seafoam" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M20,4 L24,14 L35,14 L27,21 L30,32 L20,26 L10,32 L13,21 L5,14 L16,14 Z" />
      </svg>
    ),
  },
  {
    title: "Local Boards",
    text: "Hand-shaped boards by Cornish shapers. No plastic, no shortcuts.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 text-seafoam" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <ellipse cx="20" cy="20" rx="6" ry="16" />
        <path d="M20,36 L20,38 M14,36 L20,36 L26,36" />
      </svg>
    ),
  },
  {
    title: "All Abilities",
    text: "Beginner to advanced. Adaptive sessions available on request.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 text-seafoam" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M20,6 C13,6 8,12 8,20 C8,28 13,34 20,34 C27,34 32,28 32,20 C32,12 27,6 20,6 Z" />
        <path d="M14,20 L20,14 L26,20 M20,14 L20,28" />
      </svg>
    ),
  },
];

function UspStrip() {
  return (
    <section className="bg-sea-mist py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {USP_ITEMS.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-serif text-xl text-tide mb-2">{item.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sessions Overview                                                  */
/* ------------------------------------------------------------------ */
const SESSION_CARDS = [
  {
    label: "Beginners",
    title: "Learn to Surf",
    description:
      "Never stood on a board? Perfect. We&apos;ll have you riding white water in your first session. All equipment provided.",
    gradient: "linear-gradient(135deg, #1A3A4A 0%, #5BA8A0 100%)",
    price: "From £45",
    href: "/sessions",
  },
  {
    label: "Intermediate",
    title: "Paddleboarding",
    description:
      "Master the SUP — stand-up paddleboarding on glassy estuaries or open coast. Core strength, calm mind.",
    gradient: "linear-gradient(135deg, #6B4E37 0%, #C45A2A 100%)",
    price: "From £40",
    href: "/sessions",
  },
  {
    label: "Advanced",
    title: "Performance Surf",
    description:
      "Carving, duck-diving, reading the break. Take your surfing to the next level with one of our senior coaches.",
    gradient: "linear-gradient(135deg, #0F2533 0%, #1A3A4A 60%, #5BA8A0 100%)",
    price: "From £60",
    href: "/sessions",
  },
];

function SessionsOverview() {
  return (
    <section className="bg-sand py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-tide text-center mb-4">
          Sessions for Every Level
        </h2>
        <p className="text-stone text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          Whether you&apos;re stepping on a board for the first time or hunting
          your next personal best, we have a session for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SESSION_CARDS.map((card) => (
            <article
              key={card.title}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-cream border border-sand"
            >
              {/* Visual placeholder */}
              <div
                className="h-48 relative"
                style={{ background: card.gradient }}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 320 192"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,120 C80,80 160,150 240,110 C300,80 320,100 320,100 L320,192 L0,192 Z"
                    fill="white"
                    opacity="0.08"
                  />
                </svg>
                <span className="absolute top-4 left-4 bg-ember text-cream text-xs font-semibold px-3 py-1 rounded-full">
                  {card.label}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl text-tide mb-2">
                  {card.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed mb-4">
                  {card.description.replace(/&apos;/g, "'")}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ember">{card.price}</span>
                  <Link
                    href={card.href}
                    className="text-sm font-semibold text-tide hover:text-seafoam transition-colors underline underline-offset-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Locations Teaser                                                   */
/* ------------------------------------------------------------------ */
function LocationsTeaser() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20"
      style={{
        background: "linear-gradient(135deg, #1A3A4A 0%, #0F2533 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream mb-6">
              Four Stunning Beaches
            </h2>
            <p className="text-sand/80 text-base sm:text-lg leading-relaxed mb-8">
              We operate at Sennen Cove, Croyde Bay, Polzeath, and
              Perranporth — all world-class surf breaks with Atlantic swells
              and warm Cornish hospitality.
            </p>
            <Link
              href="/locations"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg bg-seafoam text-cream hover:bg-seafoam/80 transition-colors"
            >
              Explore All Locations
            </Link>
          </div>

          {/* Visual grid of location names */}
          <div className="grid grid-cols-2 gap-4">
            {["Sennen Cove", "Croyde Bay", "Polzeath", "Perranporth"].map(
              (name, i) => (
                <div
                  key={name}
                  className="rounded-lg p-6 flex items-end"
                  style={{
                    background: i % 2 === 0
                      ? "linear-gradient(135deg, #5BA8A0 0%, #1A3A4A 100%)"
                      : "linear-gradient(135deg, #6B4E37 0%, #1A3A4A 100%)",
                    minHeight: "120px",
                  }}
                  aria-hidden="true"
                >
                  <span className="font-serif text-cream text-base sm:text-lg">
                    {name}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */
const TESTIMONIALS = [
  {
    quote:
      "Best morning of the whole holiday. The instructor was patient, encouraging, and incredibly knowledgeable. I was standing up by session two.",
    author: "Rachel H.",
    location: "Bristol",
  },
  {
    quote:
      "Came as a corporate team-building day and left as proper converts. The paddleboarding on the estuary was serene and hilarious in equal measure.",
    author: "Marcus W.",
    location: "London",
  },
  {
    quote:
      "The boards are absolutely beautiful — you can tell they've been made with real care. Nothing like the battered hire kit you get elsewhere.",
    author: "Sophie L.",
    location: "Bath",
  },
];

function Testimonials() {
  return (
    <section className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-tide text-center mb-10 sm:mb-14">
          What Our Surfers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.author}
              className="bg-sand rounded-xl p-6 sm:p-8 flex flex-col border border-sand/60"
            >
              <span
                className="text-4xl leading-none font-serif text-ember select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="mt-2 font-serif text-lg text-tide leading-relaxed italic flex-1">
                {t.quote}
              </p>
              <footer className="mt-6 pt-4 border-t border-driftwood/20">
                <p className="font-semibold text-stone">{t.author}</p>
                <p className="text-sm text-stone/70">{t.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA Banner                                                         */
/* ------------------------------------------------------------------ */
function CtaBanner() {
  return (
    <section
      className="py-16 sm:py-20"
      style={{
        background: "linear-gradient(135deg, #C45A2A 0%, #6B4E37 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream mb-4">
          Ready to Hit the Water?
        </h2>
        <p className="text-cream/80 text-lg mb-8">
          Sessions fill fast — especially summer weekends. Book your spot today.
        </p>
        <Link
          href="/sessions"
          className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold rounded-lg bg-cream text-ember hover:bg-sand transition-colors"
        >
          Book a Session
        </Link>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer
      className="py-12 sm:py-16"
      style={{ background: "#0F2533" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="font-serif text-2xl text-cream mb-3">
              Tide &amp; Timber
            </p>
            <p className="text-sand/60 text-sm leading-relaxed">
              Premium surf &amp; paddleboard school. Cornwall and Devon. Est. 2014.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-cream text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/sessions", label: "Sessions" },
                { href: "/private-hire", label: "Private Hire" },
                { href: "/locations", label: "Locations" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sand/60 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-cream text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <address className="not-italic text-sm text-sand/60 space-y-2">
              <p>Sennen Cove, Cornwall TR19 7DB</p>
              <p>
                <a
                  href="mailto:hello@tideandtimber.co.uk"
                  className="hover:text-cream transition-colors"
                >
                  hello@tideandtimber.co.uk
                </a>
              </p>
              <p>
                <a
                  href="tel:+441736871234"
                  className="hover:text-cream transition-colors"
                >
                  01736 871 234
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-sand/10 text-center text-xs text-sand/40">
          &copy; {new Date().getFullYear()} Tide &amp; Timber Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <UspStrip />
      <SessionsOverview />
      <LocationsTeaser />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}
