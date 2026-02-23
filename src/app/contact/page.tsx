import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Tide & Timber Surf School",
  description:
    "Get in touch with Tide & Timber. Book a session, ask about private hire, or just say hello. We're based in Sennen Cove, Cornwall.",
};

/* ------------------------------------------------------------------ */
/*  Page Hero                                                          */
/* ------------------------------------------------------------------ */
function PageHero() {
  return (
    <section
      className="py-20 sm:py-28 text-center"
      style={{ background: "#E8F2F5" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-seafoam font-sans font-medium text-sm uppercase tracking-widest mb-4">
          Say Hello
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-tide mb-6">
          Get in Touch
        </h1>
        <p className="text-stone text-lg max-w-xl mx-auto">
          Whether you want to book a session, discuss private hire, or just
          have a question about the waves — we&apos;re always happy to talk.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact Form + Info                                                */
/* ------------------------------------------------------------------ */
function ContactSection() {
  return (
    <section className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl text-tide mb-8">
              Send a Message
            </h2>

            <form
              action="/contact/thank-you"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-stone mb-1.5"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    required
                    autoComplete="given-name"
                    className="w-full rounded-lg border border-driftwood/20 bg-cream px-4 py-3 text-sm text-stone placeholder-stone/40 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent"
                    placeholder="Anna"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-stone mb-1.5"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    required
                    autoComplete="family-name"
                    className="w-full rounded-lg border border-driftwood/20 bg-cream px-4 py-3 text-sm text-stone placeholder-stone/40 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone mb-1.5"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-driftwood/20 bg-cream px-4 py-3 text-sm text-stone placeholder-stone/40 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent"
                  placeholder="anna@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="enquiry-type"
                  className="block text-sm font-medium text-stone mb-1.5"
                >
                  Enquiry type
                </label>
                <select
                  id="enquiry-type"
                  name="enquiry-type"
                  className="w-full rounded-lg border border-driftwood/20 bg-cream px-4 py-3 text-sm text-stone focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="book-session">Book a session</option>
                  <option value="private-hire">Private hire / group booking</option>
                  <option value="general">General question</option>
                  <option value="schools">Schools and youth groups</option>
                  <option value="press">Press and media</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone mb-1.5"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-lg border border-driftwood/20 bg-cream px-4 py-3 text-sm text-stone placeholder-stone/40 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent resize-none"
                  placeholder="Tell us what you're looking for — preferred dates, group size, location, ability level…"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-ember text-cream hover:bg-ember-dark transition-colors"
              >
                Send Message
              </button>

              <p className="text-xs text-stone/50 text-center">
                We typically respond within 24 hours on weekdays.
              </p>
            </form>
          </div>

          {/* Info panel — 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-tide mb-4">
                Our Details
              </h3>
              <address className="not-italic space-y-3 text-sm text-stone">
                <p className="font-medium text-tide">Tide &amp; Timber Ltd</p>
                <p>The Surf Hut, Sennen Beach</p>
                <p>Sennen Cove, Cornwall TR19 7DB</p>
                <p className="pt-2">
                  <a
                    href="tel:+441736871234"
                    className="text-ember hover:text-ember-dark transition-colors"
                  >
                    01736 871 234
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:hello@tideandtimber.co.uk"
                    className="text-ember hover:text-ember-dark transition-colors"
                  >
                    hello@tideandtimber.co.uk
                  </a>
                </p>
              </address>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-tide mb-4">
                Opening Hours
              </h3>
              <dl className="space-y-2 text-sm">
                {[
                  { day: "Monday – Friday", hours: "08:00 – 18:00" },
                  { day: "Saturday", hours: "07:00 – 19:00" },
                  { day: "Sunday", hours: "08:00 – 17:00" },
                  { day: "Bank Holidays", hours: "Seasonal — check social" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between gap-4">
                    <dt className="text-stone">{day}</dt>
                    <dd className="font-medium text-tide">{hours}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-stone/50">
                Hours vary in winter (Oct–Mar). We operate year-round, weather permitting.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-tide mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { label: "Instagram", handle: "@tideandtimber" },
                  { label: "Facebook", handle: "Tide & Timber" },
                ].map(({ label, handle }) => (
                  <div
                    key={label}
                    className="flex-1 rounded-lg bg-sea-mist p-4 text-center"
                  >
                    <p className="font-semibold text-tide text-sm">{label}</p>
                    <p className="text-stone text-xs mt-1">{handle}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-xl p-6"
              style={{ background: "linear-gradient(135deg, #1A3A4A 0%, #5BA8A0 100%)" }}
            >
              <p className="font-serif text-xl text-cream mb-2">
                Planning a group?
              </p>
              <p className="text-sand/80 text-sm mb-4">
                Private hire packages for 6–24 people. Bespoke itineraries, catering, and transfers available.
              </p>
              <Link
                href="/private-hire"
                className="inline-flex items-center text-sm font-semibold text-cream hover:text-seafoam transition-colors underline underline-offset-2"
              >
                View Private Hire Options
              </Link>
            </div>
          </div>
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
export default function ContactPage() {
  return (
    <main>
      <PageHero />
      <ContactSection />
      <Footer />
    </main>
  );
}
