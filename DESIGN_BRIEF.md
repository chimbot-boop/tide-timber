# Tide & Timber — Design Brief

## Project Overview

Tide & Timber is a premium surf and paddleboard school operating on the UK's south-west coast. The brand sits at the intersection of adventure and craft — the "tide" speaks to the ocean and the unpredictable energy of the sea, while "timber" evokes handmade boards, natural materials, and a sense of enduring quality. Together they suggest a school that is both thrilling and trustworthy.

## Target Audience

- Primary: Adults aged 25–45 seeking active, outdoor experiences — weekend breaks, staycations, fitness-focused holidays
- Secondary: Corporate groups and event planners looking for unique private-hire team experiences
- Tertiary: Families with older children (10+) wanting supervised, safe water sports lessons
- Geography: UK-based visitors to Cornwall and Devon; London-based professionals planning weekend escapes

## Project Goals

1. Convert browsing visitors into session bookings — the primary CTA on every page is "Book a Session"
2. Build brand confidence through photography-free, CSS-generated visuals that feel premium without relying on stock imagery
3. Demonstrate clear value differentiation: small group sizes, experienced instructors, BSUPA-certified, locally crafted boards
4. Provide a seamless multi-page experience with consistent navigation and clear information hierarchy
5. Pass Vercel deployment with zero external image dependencies

## Visual Direction

**Mood:** Coastal, natural, unhurried but energetic. Think early morning surf before the crowds, salt-weathered timber, seafoam and rock pools. Not neon-bright surf-bro; instead, considered and premium.

**Reference aesthetic:** Kinfolk magazine meets a Cornish craft brewery — editorial quality, organic textures, restrained palette.

**Style principles:**
- Heavy use of CSS gradients to evoke ocean depth and horizon light
- Inline SVG wave forms and geometric overlays for visual interest
- Serif headlines for gravitas; clean sans-serif for body copy
- Generous white space; content never feels cramped
- No external image hotlinks; all visuals are code-generated

## Key Pages and Routes

| Route | Purpose |
|---|---|
| `/` | Hero landing — brand story, key USPs, CTA to book |
| `/sessions` | Session types — surfing, paddleboarding, beginner to advanced |
| `/private-hire` | Group bookings, corporate events, birthday parties |
| `/locations` | Beach locations — Sennen, Croyde, Polzeath, Perranporth |
| `/contact` | Contact form, opening hours, social links |

## Primary CTA and Conversion Goals

- **Primary CTA:** "Book a Session" — appears in header nav on all pages and in hero sections
- **Secondary CTA:** "Get in Touch" — contact page link in footer
- **Conversion micro-goals:** session enquiry form submission, phone call click, newsletter sign-up

## Asset Sourcing Policy

All visual assets must be:
1. CSS-generated gradients, SVG shapes, or typographic treatments — no raster images
2. Google Fonts loaded via Next.js font optimization (no hotlinks to Google CDN at runtime in production)
3. No external `<img>` or `<Image src="https://...">` references
4. No `remotePatterns` in next.config — the project must be image-self-contained

## Brand Values

- **Authentic** — Real instructors, real waves, no manufactured adventure
- **Sustainable** – Boards sourced from UK shapers using recycled materials where possible
- **Inclusive** – All abilities welcome; adaptive sessions available on request
- **Local** – Embedded in coastal communities; supporting local economy
