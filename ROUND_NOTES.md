# Tide & Timber — Round Notes

## Round 1: Project Setup & Architecture

Changes made in this round:

- Initialised Next.js App Router project in `tide-timber/` with TypeScript, Tailwind CSS v3, and `next/font/google` integration
- Created `tailwind.config.ts` with custom colour palette: `ember` (#C45A2A), `driftwood` (#6B4E37), `sand` (#F5EFE0), `tide` (#1A3A4A), `tide-deep` (#0F2533), `stone` (#4A4A52), `sea-mist` (#E8F2F5), `seafoam` (#5BA8A0), `cream` (#FDFAF4)
- Set up `src/app/layout.tsx` with DM Serif Display (serif headings) and DM Sans (body) loaded as CSS variables via `next/font/google`; `<body>` has `font-sans` class applied and `<html>` carries both font variable classes
- Created `src/components/Nav.tsx` as a shared navigation component containing `href` attributes for all 5 routes: `/`, `/sessions`, `/private-hire`, `/locations`, `/contact`
- Wrote `DESIGN_BRIEF.md` and `DESIGN_PLAN.md` before any component code was written, per the design process requirement

## Round 2: Home Page & Core Visual Language

Changes made in this round:

- Built `src/app/page.tsx` with 7 sections: Hero, USP Strip, Sessions Overview, Locations Teaser, Testimonials, CTA Banner, and Footer
- Hero section uses a multi-stop CSS linear-gradient (`#1A3A4A` → `#0F2533` → `#1A3A4A`) with inline SVG wave paths and geometric circle overlays — no external images used
- All `h1` elements across all pages use `font-serif` class pointing to DM Serif Display; all `h2`/`h3` use `font-serif` consistently
- Inline SVGs used throughout for decorative wave shapes, section dividers, and icon placeholders — all CSS/SVG-generated with no `<img>` tags referencing external URLs
- Confirmed colour palette compliance: all Tailwind colour classes use custom tokens (`bg-tide`, `text-ember`, `bg-sand`, etc.) — no default Tailwind colours like `blue-500`, `red-500`, or `green-500` used anywhere

## Round 3: Inner Pages Implementation

Changes made in this round:

- Created `src/app/sessions/page.tsx` with 4 session cards (Learn to Surf, Surf Progression, Performance Coaching, Paddleboarding), an HTML pricing table, and an FAQ accordion using native `<details>/<summary>` elements
- Created `src/app/private-hire/page.tsx` with event type cards (Corporate, Celebrations, Schools, Brand Experiences), 3-step process section, and capacity/pricing tiers
- Created `src/app/locations/page.tsx` with 4 location cards (Sennen Cove, Croyde Bay, Polzeath, Perranporth), each with facilities list, swell info, and booking link
- Created `src/app/contact/page.tsx` with HTML contact form (name, email, enquiry type, message fields), business info panel, opening hours, and private hire cross-link
- All pages include consistent footer with links to all 5 routes, ensuring navigation is present on every page

## Round 4: Build Verification & Deployment Readiness

Changes made in this round:

- Verified `next.config.mjs` exists at `tide-timber/` project root with no `remotePatterns` or `images.domains` configured — project is image-self-contained
- Confirmed `src/app/layout.tsx` and `src/app/page.tsx` exist; each route (`sessions`, `private-hire`, `locations`, `contact`) has its own directory with `page.tsx` under `src/app/`
- Ran `npm install` and `npm run build` in `tide-timber/` — build exits with code 0; all 5 routes render successfully
- Audited all page files: no `<img>` or `<Image>` tag with an `src` attribute pointing to an external `http://` or `https://` URL was found; all visual assets are inline SVGs or CSS gradients
- Verified typography consistency: every `h1` uses `font-serif` class; `h2`/`h3` use `font-serif` consistently; `<body>` has `font-sans` class; `<html>` has both `--font-serif` and `--font-sans` CSS variable classes applied
