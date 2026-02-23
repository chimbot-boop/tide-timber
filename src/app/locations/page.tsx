import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locations — Tide & Timber Surf School",
  description:
    "We operate at four world-class UK surf beaches: Sennen Cove, Croyde Bay, Polzeath, and Perranporth. Find directions, facilities, and what to expect at each location.",
};

/* ------------------------------------------------------------------ */
/*  Page Hero                                                          */
/* ------------------------------------------------------------------ */
function PageHero() {
  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #5BA8A0 0%, #1A3A4A 50%, #0F2533 100%)",
      }}
    >
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ height: "80px" }}
      >
        <path
          d="M0,50 C480,20 960,80 1440,40 L1440,80 L0,80 Z"
          fill="#FDFAF4"
        />
      </svg>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-seafoam font-sans font-medium text-sm uppercase tracking-widest mb-4">
          Where We Are
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
          Four World-Class Beaches
        </h1>
        <p className="text-sand/80 text-lg sm:text-xl max-w-2xl mx-auto">
          From the wild headlands of west Cornwall to the crescent bays of north
          Devon — we&apos;ve picked four of the UK&apos;s finest surf spots so you
          always have a wave worth catching.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Location Cards                                                     */
/* ------------------------------------------------------------------ */
const LOCATIONS = [
  {
    name: "Sennen Cove",
    county: "West Cornwall",
    postcode: "TR19 7DB",
    tagline: "Land's End brilliance",
    description:
      "Sennen is Cornwall's most westerly surf beach — a long, exposed Atlantic-facing crescent that picks up almost every swell going. It's as dramatic as it is beautiful, with the granite headland of Land's End visible to the south. Perfect for all abilities; the southern end is more sheltered for beginners and the northern point produces powerful, peeling lefts for advanced surfers.",
    swell: "West, NW, SW",
    bestFor: "All levels",
    parkingMinutes: "5 min walk",
    facilities: ["Surf school hut", "Changing rooms", "Showers", "Café on site", "Lifeguard cover (seasonal)", "Accessible toilets"],
    gradient: "linear-gradient(135deg, #1A3A4A 0%, #5BA8A0 100%)",
  },
  {
    name: "Croyde Bay",
    county: "North Devon",
    postcode: "EX33 1LZ",
    tagline: "Devon's premier break",
    description:
      "Croyde is arguably England's best beach break — a powerful, punchy shore-break that's produced more British champions than any other beach. The village itself is charming and the surf scene is authentic. We operate on the main beach in conjunction with the local surf club. Best in autumn and winter when Atlantic swells push in from the north-west.",
    swell: "NW, N, W",
    bestFor: "Intermediate to advanced",
    parkingMinutes: "3 min walk",
    facilities: ["Surf school unit", "Board storage", "Rinse showers", "Village pubs 5 mins", "Lifeguard cover (seasonal)"],
    gradient: "linear-gradient(135deg, #C45A2A 0%, #6B4E37 100%)",
  },
  {
    name: "Polzeath",
    county: "North Cornwall",
    postcode: "PL27 6SR",
    tagline: "Family-friendly north Cornwall",
    description:
      "Polzeath is the classic family surf beach — wide, sandy, and relatively sheltered compared to its more exposed cousins. The bay faces north-west and catches long-period Atlantic swells beautifully. It's the go-to location for our beginner sessions and family groups. The village has excellent facilities and is a short drive from Rock and Padstow.",
    swell: "NW, N",
    bestFor: "Beginners and families",
    parkingMinutes: "On beach car park",
    facilities: ["Permanent surf school base", "Full changing facilities", "Kit wash-down area", "Café and restaurant", "Lifeguard cover (Jun–Sep)", "Baby-friendly facilities"],
    gradient: "linear-gradient(135deg, #5BA8A0 0%, #1A3A4A 100%)",
  },
  {
    name: "Perranporth",
    county: "Mid Cornwall",
    postcode: "TR6 0AQ",
    tagline: "Three miles of golden sand",
    description:
      "Perranporth's three-mile beach is one of the longest in Cornwall — a vast, sandy playground with consistent surf, stunning cliff-backed dunes, and an end-of-the-world wildness that's hard to match. We run SUP tours here as well as surf sessions. The tidal caves at the southern end are a spectacular bonus on low tide.",
    swell: "W, NW, SW",
    bestFor: "SUP and intermediate surf",
    parkingMinutes: "7 min walk",
    facilities: ["Beach surf hut", "Changing shelters", "Rinse showers", "Multiple cafés", "Lifeguard cover (seasonal)", "SUP launch area"],
    gradient: "linear-gradient(135deg, #6B4E37 0%, #C45A2A 60%, #1A3A4A 100%)",
  },
];

function LocationCard({ location }: { location: (typeof LOCATIONS)[0] }) {
  return (
    <article className="rounded-xl overflow-hidden shadow-md bg-cream border border-sand">
      {/* Visual header */}
      <div
        className="h-48 relative flex items-end"
        style={{ background: location.gradient }}
        aria-hidden="false"
      >
        <svg
          viewBox="0 0 640 192"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,130 C160,90 320,160 480,120 C560,100 610,130 640,120 L640,192 L0,192 Z"
            fill="white"
            opacity="0.07"
          />
        </svg>
        <div className="relative z-10 p-6">
          <span className="block font-sans text-xs text-seafoam uppercase tracking-widest mb-1">
            {location.county}
          </span>
          <span className="block font-serif text-3xl text-cream">
            {location.name}
          </span>
          <span className="block font-sans text-sm text-sand/70 mt-1">
            {location.tagline}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* Quick stats */}
        <div className="flex flex-wrap gap-3 mb-5">
          <span className="text-xs bg-sea-mist text-tide px-3 py-1 rounded-full font-medium">
            Swell: {location.swell}
          </span>
          <span className="text-xs bg-sea-mist text-tide px-3 py-1 rounded-full font-medium">
            Best for: {location.bestFor}
          </span>
          <span className="text-xs bg-sea-mist text-tide px-3 py-1 rounded-full font-medium">
            Parking: {location.parkingMinutes}
          </span>
        </div>

        <p className="text-stone text-sm leading-relaxed mb-5">
          {location.description}
        </p>

        <h3 className="font-sans font-semibold text-tide text-sm uppercase tracking-wider mb-3">
          Facilities
        </h3>
        <ul className="grid grid-cols-2 gap-y-1.5 gap-x-4 mb-6">
          {location.facilities.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-stone">
              <span className="text-seafoam shrink-0" aria-hidden="true">
                ✓
              </span>
              {f}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold rounded-lg bg-tide text-cream hover:bg-tide-deep transition-colors"
        >
          Book at {location.name}
        </Link>
      </div>
    </article>
  );
}

function LocationsList() {
  return (
    <section className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {LOCATIONS.map((loc) => (
            <LocationCard key={loc.name} location={loc} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Getting There                                                      */
/* ------------------------------------------------------------------ */
function GettingThere() {
  return (
    <section className="bg-sand py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-tide text-center mb-10">
          Getting There
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              title: "By Car",
              icon: (
                <svg viewBox="0 0 40 40" className="w-10 h-10 text-ember" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="5" y="14" width="30" height="16" rx="3" />
                  <path d="M8,14 L12,6 L28,6 L32,14" />
                  <circle cx="12" cy="30" r="3" fill="currentColor" />
                  <circle cx="28" cy="30" r="3" fill="currentColor" />
                </svg>
              ),
              text: "All four locations are accessible by car. Cornwall beaches are 4–6 hours from London via the A30. Croyde is 3 hours from London via the M5. Parking is available at or near all sites — please allow extra time in summer.",
            },
            {
              title: "By Train",
              icon: (
                <svg viewBox="0 0 40 40" className="w-10 h-10 text-ember" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="8" y="6" width="24" height="24" rx="4" />
                  <path d="M8,22 L32,22" />
                  <path d="M15,32 L14,36 M25,32 L26,36" />
                  <circle cx="14" cy="14" r="2" fill="currentColor" />
                  <circle cx="26" cy="14" r="2" fill="currentColor" />
                </svg>
              ),
              text: "Great Western Railway serves Penzance (Sennen), Exeter (Croyde), Bodmin Parkway (Polzeath), and Truro (Perranporth). We can recommend local taxi partners for the onward journey from the station.",
            },
            {
              title: "Staying Nearby",
              icon: (
                <svg viewBox="0 0 40 40" className="w-10 h-10 text-ember" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M20,4 L4,18 L4,36 L36,36 L36,18 Z" />
                  <rect x="15" y="24" width="10" height="12" />
                </svg>
              ),
              text: "We partner with local surf lodges, B&Bs, and glamping sites near each beach. Ask us for recommendations when you book — we often have exclusive rates for Tide & Timber guests.",
            },
            {
              title: "Transfers",
              icon: (
                <svg viewBox="0 0 40 40" className="w-10 h-10 text-ember" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="20" cy="20" r="14" />
                  <path d="M12,20 L28,20 M22,14 L28,20 L22,26" />
                </svg>
              ),
              text: "For groups of 6 or more, we can arrange minibus transfers from major stations and towns to the beach. Available as an add-on when booking a private hire package.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-5">
              <div className="shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-serif text-xl text-tide mb-2">{item.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="py-8" style={{ background: "#0F2533" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="font-serif text-xl text-cream hover:text-sand transition-colors">
          Tide &amp; Timber
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm">
          {[
            { href: "/", label: "Home" },
            { href: "/sessions", label: "Sessions" },
            { href: "/private-hire", label: "Private Hire" },
            { href: "/locations", label: "Locations" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sand/60 hover:text-cream transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-sand/40">
          &copy; {new Date().getFullYear()} Tide &amp; Timber Ltd.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Export                                                        */
/* ------------------------------------------------------------------ */
export default function LocationsPage() {
  return (
    <main>
      <PageHero />
      <LocationsList />
      <GettingThere />
      <Footer />
    </main>
  );
}
