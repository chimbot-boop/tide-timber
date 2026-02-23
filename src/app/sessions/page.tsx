import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sessions — Tide & Timber Surf School",
  description:
    "Surf and paddleboard sessions for all abilities. Beginner lessons, intermediate coaching, and advanced performance sessions on the UK's best beaches.",
};

/* ------------------------------------------------------------------ */
/*  Page Hero                                                          */
/* ------------------------------------------------------------------ */
function PageHero() {
  return (
    <section
      className="relative py-24 sm:py-32 flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(150deg, #1A3A4A 0%, #0F2533 60%, #5BA8A0 100%)",
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
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z"
          fill="#FDFAF4"
        />
      </svg>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-seafoam font-sans font-medium text-sm uppercase tracking-widest mb-4">
          What We Offer
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
          Surf &amp; Paddle Sessions
        </h1>
        <p className="text-sand/80 text-lg sm:text-xl max-w-2xl mx-auto">
          From your very first wave to advanced performance coaching — we have
          a session tailored to where you are right now.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Session Cards                                                      */
/* ------------------------------------------------------------------ */
const SESSIONS = [
  {
    level: "Beginner",
    title: "Learn to Surf",
    duration: "2.5 hours",
    groupSize: "Max 4 per instructor",
    price: "£45 per person",
    includes: [
      "Wetsuit and surfboard hire",
      "All safety equipment",
      "Beach theory session (30 min)",
      "In-water coaching (2 hrs)",
      "Post-session debrief",
    ],
    description:
      "Have you ever stared at a wave and thought 'I could do that'? You can. Our beginner sessions start on the sand with the basics of ocean reading, board positioning, and popping up. By the end of the session you will have ridden your first white-water waves and discovered a lifelong passion.",
    gradient: "linear-gradient(135deg, #1A3A4A 0%, #5BA8A0 100%)",
    badge: "Most Popular",
  },
  {
    level: "Intermediate",
    title: "Surf Progression",
    duration: "2 hours",
    groupSize: "Max 4 per instructor",
    price: "£55 per person",
    includes: [
      "Shortboard or longboard option",
      "Video analysis session",
      "Surf theory — reading the break",
      "Technique drills in water",
      "Personalised coaching plan",
    ],
    description:
      "You can get to your feet — now it's time to really surf. Intermediate sessions focus on transitioning from white water to the open face, improving your pop-up timing, building rail-to-rail trimming, and learning to read where waves are going to break before they do.",
    gradient: "linear-gradient(135deg, #5BA8A0 0%, #6B4E37 100%)",
    badge: null,
  },
  {
    level: "Advanced",
    title: "Performance Coaching",
    duration: "3 hours",
    groupSize: "Max 2 per instructor",
    price: "£80 per person",
    includes: [
      "High-performance shortboard",
      "GoPro recording included",
      "Full video analysis",
      "Carve and snap drills",
      "Fitness and cross-training advice",
    ],
    description:
      "One-on-one coaching for surfers ready to take their performance to the next level. These sessions are intense, focused, and results-driven. Expect video analysis, targeted technique breakdowns, and the kind of direct feedback that only an experienced performance coach can give.",
    gradient: "linear-gradient(135deg, #0F2533 0%, #1A3A4A 70%, #C45A2A 100%)",
    badge: null,
  },
  {
    level: "All Levels",
    title: "Paddleboarding (SUP)",
    duration: "2 hours",
    groupSize: "Max 6 per instructor",
    price: "£40 per person",
    includes: [
      "SUP board and paddle",
      "Buoyancy aid",
      "Estuary or open coast option",
      "Yoga and balance drills",
      "Guided coastal paddle",
    ],
    description:
      "Stand-up paddleboarding is the fastest growing watersport in the UK — and it's easy to see why. Serene, full-body, and meditative when conditions are right. Our SUP sessions run on glassy estuaries for beginners or on open coast for those seeking more of a challenge.",
    gradient: "linear-gradient(135deg, #6B4E37 0%, #C45A2A 100%)",
    badge: "New",
  },
];

function SessionCard({
  session,
}: {
  session: (typeof SESSIONS)[0];
}) {
  return (
    <article className="bg-cream rounded-xl overflow-hidden shadow-md border border-sand">
      {/* Visual header */}
      <div
        className="h-40 relative"
        style={{ background: session.gradient }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 640 160"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C160,60 320,130 480,90 C560,70 610,100 640,100 L640,160 L0,160 Z"
            fill="white"
            opacity="0.07"
          />
        </svg>
        {session.badge && (
          <span className="absolute top-4 right-4 bg-ember text-cream text-xs font-semibold px-3 py-1 rounded-full">
            {session.badge}
          </span>
        )}
        <span className="absolute bottom-4 left-6 bg-tide/70 text-cream text-xs font-semibold px-3 py-1 rounded-full">
          {session.level}
        </span>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h2 className="font-serif text-2xl text-tide">{session.title}</h2>
          <span className="font-semibold text-ember whitespace-nowrap">
            {session.price}
          </span>
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          <span className="text-xs bg-sea-mist text-stone px-3 py-1 rounded-full">
            {session.duration}
          </span>
          <span className="text-xs bg-sea-mist text-stone px-3 py-1 rounded-full">
            {session.groupSize}
          </span>
        </div>

        <p className="text-stone text-sm leading-relaxed mb-5">
          {session.description}
        </p>

        <ul className="space-y-1.5 mb-6">
          {session.includes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-stone">
              <span className="text-seafoam mt-0.5 shrink-0" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold rounded-lg bg-ember text-cream hover:bg-ember-dark transition-colors"
        >
          Book This Session
        </Link>
      </div>
    </article>
  );
}

function SessionsList() {
  return (
    <section className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SESSIONS.map((session) => (
            <SessionCard key={session.title} session={session} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Pricing Table                                                      */
/* ------------------------------------------------------------------ */
function PricingTable() {
  return (
    <section className="bg-sand py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-tide text-center mb-10">
          Pricing at a Glance
        </h2>

        <div className="overflow-x-auto rounded-xl border border-driftwood/20">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-tide text-cream">
                <th className="text-left px-6 py-4 font-semibold">Session</th>
                <th className="text-left px-6 py-4 font-semibold">Duration</th>
                <th className="text-left px-6 py-4 font-semibold">Group Size</th>
                <th className="text-left px-6 py-4 font-semibold">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-driftwood/10 bg-cream">
              {[
                { name: "Learn to Surf", duration: "2.5 hrs", group: "Max 4", price: "£45 pp" },
                { name: "Surf Progression", duration: "2 hrs", group: "Max 4", price: "£55 pp" },
                { name: "Performance Coaching", duration: "3 hrs", group: "Max 2", price: "£80 pp" },
                { name: "Paddleboarding (SUP)", duration: "2 hrs", group: "Max 6", price: "£40 pp" },
                { name: "Private Hire (full day)", duration: "6 hrs", group: "Up to 12", price: "£POA" },
              ].map((row) => (
                <tr key={row.name} className="hover:bg-sea-mist/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-tide">{row.name}</td>
                  <td className="px-6 py-4 text-stone">{row.duration}</td>
                  <td className="px-6 py-4 text-stone">{row.group}</td>
                  <td className="px-6 py-4 font-semibold text-ember">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-stone text-sm text-center mt-6">
          All prices include equipment hire, insurance, and RNLI beach safety briefing.
          Wetsuit hire is included.{" "}
          <Link href="/contact" className="text-ember underline hover:text-ember-dark">
            Contact us
          </Link>{" "}
          for group discounts.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */
const FAQ_ITEMS = [
  {
    q: "Do I need any experience to book a session?",
    a: "None at all. Our beginner sessions are designed for complete novices. As long as you can swim 50m and are comfortable in the sea, you're ready to go.",
  },
  {
    q: "What should I bring?",
    a: "Just a towel, a swimsuit or shorts, and sunscreen. We provide wetsuits, boards, and all safety equipment. Leave your valuables at your accommodation — we don't have secure storage on the beach.",
  },
  {
    q: "What happens if conditions are poor?",
    a: "Safety is our absolute priority. If conditions are unsafe, we'll contact you as early as possible to reschedule. You won't lose your deposit — we'll find another slot that works for you.",
  },
  {
    q: "Can children participate?",
    a: "Children aged 10 and over are welcome in our beginner and SUP sessions when accompanied by a parent or guardian. Younger children can join our Junior Surf Club (seasonal) — ask us for details.",
  },
];

function FAQ() {
  return (
    <section className="bg-sea-mist py-12 sm:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-tide text-center mb-10">
          Common Questions
        </h2>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-driftwood/15 bg-cream"
            >
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 sm:px-6 sm:py-5 text-base font-semibold text-stone list-none [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <svg
                  className="w-5 h-5 text-stone/50 shrink-0 ml-4 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-stone text-sm leading-relaxed">
                {item.a}
              </div>
            </details>
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
export default function SessionsPage() {
  return (
    <main>
      <PageHero />
      <SessionsList />
      <PricingTable />
      <FAQ />
      <Footer />
    </main>
  );
}
