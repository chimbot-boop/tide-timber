import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Private Hire — Tide & Timber Surf School",
  description:
    "Exclusive private surf and paddleboard hire for corporate events, team building, birthday parties, hen and stag dos, and schools. Bespoke packages for groups up to 24.",
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
          "linear-gradient(150deg, #6B4E37 0%, #1A3A4A 50%, #0F2533 100%)",
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
          Groups &amp; Events
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
          Exclusively Yours
        </h1>
        <p className="text-sand/80 text-lg sm:text-xl max-w-2xl mx-auto">
          Book the beach, the boards, and the expertise entirely for your group.
          Corporate days, birthday bashes, hen parties, team-building — we handle
          everything.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-ember text-cream hover:bg-ember-dark transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Event Types                                                        */
/* ------------------------------------------------------------------ */
const EVENT_TYPES = [
  {
    title: "Corporate Team Building",
    description:
      "Take your team out of the meeting room and into the ocean. Our corporate half-day and full-day events are designed to build trust, communication, and confidence — all while having an absolute blast on the waves. Fully catered options available. We handle logistics; you focus on your team.",
    features: ["Up to 24 participants", "Dedicated event coordinator", "Optional catering", "Team photography"],
    gradient: "linear-gradient(135deg, #1A3A4A 0%, #5BA8A0 100%)",
  },
  {
    title: "Celebrations & Parties",
    description:
      "Whether it's a birthday surf day, a hen party with an adrenaline edge, or a stag do that nobody will forget — we create bespoke packages built around your group. Choose your beach, your sessions, your vibe. Morning surf followed by a beach BBQ? Done.",
    features: ["Bespoke itineraries", "Beach BBQ package available", "Photography included", "Up to 16 participants"],
    gradient: "linear-gradient(135deg, #C45A2A 0%, #6B4E37 100%)",
  },
  {
    title: "Schools & Youth Groups",
    description:
      "Inspiring young people through the ocean. Our schools programme is DBS-checked, risk-assessed, and aligned with PE curriculum goals. We cater for primary (years 5–6) and secondary groups, offering half-day and full-day residential options.",
    features: ["DBS-checked instructors", "Risk assessments provided", "Curriculum-linked sessions", "Residential options"],
    gradient: "linear-gradient(135deg, #5BA8A0 0%, #1A3A4A 100%)",
  },
  {
    title: "Brand Experiences",
    description:
      "Looking for a backdrop unlike anything your audience has seen? We work with brands to create surf and SUP experiences — product launches, content creation days, influencer activations. The Atlantic coast provides a cinematic backdrop that no studio can replicate.",
    features: ["Location scouting", "Content creation support", "Flexible scheduling", "Brand-safe environments"],
    gradient: "linear-gradient(135deg, #0F2533 0%, #6B4E37 100%)",
  },
];

function EventTypes() {
  return (
    <section className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-tide text-center mb-4">
          What Kind of Event?
        </h2>
        <p className="text-stone text-center max-w-xl mx-auto mb-12">
          We tailor every private hire to your group&apos;s needs, size, and ambitions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EVENT_TYPES.map((event) => (
            <article
              key={event.title}
              className="rounded-xl overflow-hidden border border-sand shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="h-32 relative"
                style={{ background: event.gradient }}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 640 128"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,80 C160,40 320,100 480,70 C560,55 610,80 640,80 L640,128 L0,128 Z"
                    fill="white"
                    opacity="0.07"
                  />
                </svg>
              </div>
              <div className="p-6 sm:p-8 bg-cream">
                <h3 className="font-serif text-2xl text-tide mb-3">
                  {event.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed mb-5">
                  {event.description}
                </p>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {event.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-stone">
                      <span className="text-seafoam shrink-0" aria-hidden="true">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Process Steps                                                      */
/* ------------------------------------------------------------------ */
const STEPS = [
  {
    number: "1",
    title: "Tell Us About Your Group",
    text: "Fill in our enquiry form or give us a call. We need your group size, preferred dates, location, and any special requirements. The more you tell us, the better we can tailor the experience.",
  },
  {
    number: "2",
    title: "We Build Your Package",
    text: "Within 24 hours we'll send you a bespoke proposal including session breakdown, pricing, logistics, and any add-on options like catering, photography, or transfers.",
  },
  {
    number: "3",
    title: "Confirm and Arrive",
    text: "Secure your date with a 25% deposit. Full payment is due 2 weeks before your event. On the day, your dedicated event lead will meet your group and handle everything from first briefing to final debrief.",
  },
];

function ProcessSteps() {
  return (
    <section className="bg-sand py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-tide text-center mb-12">
          How It Works
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Connector */}
          <div
            className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-0 border-t-2 border-dashed border-driftwood/20"
            aria-hidden="true"
          />

          {STEPS.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-16 h-16 rounded-full bg-ember text-cream flex items-center justify-center text-2xl font-serif">
                {step.number}
              </div>
              <h3 className="mt-5 font-serif text-xl text-tide">{step.title}</h3>
              <p className="mt-2 text-stone text-sm leading-relaxed max-w-xs">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Capacity & Pricing                                                 */
/* ------------------------------------------------------------------ */
function CapacityInfo() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20"
      style={{ background: "linear-gradient(135deg, #1A3A4A 0%, #0F2533 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-cream text-center mb-10">
          Capacity &amp; Pricing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {[
            { size: "Small Group", capacity: "Up to 8 people", from: "From £320", note: "Half day, 3 hrs" },
            { size: "Medium Group", capacity: "9–16 people", from: "From £560", note: "Half day, 3 hrs" },
            { size: "Large Group", capacity: "17–24 people", from: "From £POA", note: "Full day packages" },
          ].map((tier) => (
            <div
              key={tier.size}
              className="rounded-xl p-6 text-center"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <p className="font-serif text-xl text-seafoam mb-1">{tier.size}</p>
              <p className="text-sand/80 text-sm mb-3">{tier.capacity}</p>
              <p className="font-semibold text-cream text-2xl">{tier.from}</p>
              <p className="text-sand/50 text-xs mt-1">{tier.note}</p>
            </div>
          ))}
        </div>

        <p className="text-sand/60 text-sm text-center">
          All private hire packages include equipment, wetsuits, instructors, and RNLI beach briefing.
          Prices vary by date, beach, and specific requirements.{" "}
          <Link href="/contact" className="text-seafoam hover:text-cream underline transition-colors">
            Contact us
          </Link>{" "}
          for a precise quote.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA Form Prompt                                                    */
/* ------------------------------------------------------------------ */
function CtaBlock() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-tide mb-4">
          Ready to Make a Booking?
        </h2>
        <p className="text-stone mb-8">
          Drop us an enquiry and we&apos;ll come back to you within 24 hours with
          availability and a bespoke package.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold rounded-lg bg-ember text-cream hover:bg-ember-dark transition-colors"
        >
          Send an Enquiry
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
export default function PrivateHirePage() {
  return (
    <main>
      <PageHero />
      <EventTypes />
      <ProcessSteps />
      <CapacityInfo />
      <CtaBlock />
      <Footer />
    </main>
  );
}
