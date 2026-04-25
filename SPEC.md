# SPEC.md: Design Contract Smoke Test Website

## Project Summary

Build a compact but distinctive single-page website for Design Contract Smoke Test, a fictional independent bookbinder in York. The site validates that the pipeline carries a DESIGN.md visual system contract from Specwriter to Developer and Polish. The finished site is intentionally small, but the design contract is complete and buildable. Sections are Home, Services, and Contact on one route. The aesthetic is letterpress workshop craft: bone folder tools, deckled paper, ink-black type, warm parchment, sharp edges, and restrained burgundy accents.

## Reference Site Review

No external reference URLs were supplied in the source brief. Because there are no URLs to visit, this spec grounds layout, typography, colour, and motion in the material cues supplied in the brief: letterpress workshop, bone folder tools, deckled paper, ink-black type, warm parchment, and restrained burgundy accent. The premium direction is drawn from traditional book arts and print-shop conventions rather than web trend references.

Observed material translation:
- Letterpress impressions become sharp 1px borders, no shadows, and precise spacing.
- Deckled paper becomes warm parchment backgrounds and subtle off-white section bands.
- Ink-black type becomes high-contrast headings and a solid black header/footer band.
- Bone folder tools become narrow rules, measured grid alignment, and quiet tactile imagery.
- Burgundy is used like a printer's registration mark: sparse, small, and meaningful.

## Design Persona

Letterpress workshop aesthetic. Bone folder tools, deckled paper edges, ink-black type on warm parchment. Restrained burgundy accent used sparingly, never as a background fill, only for interactive elements and key details. The feel is quiet craft confidence: a workshop that has been here for decades and does not need to shout.

## Brand Identity

### Exact Tailwind Colour Tokens

Use Tailwind CSS v4 tokens in app/globals.css. The semantic tokens must include the required pipeline names: bg, text, primary, secondary, and accent. Additional material tokens are aliases and helpers.

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-bg: #f5f0e8;
  --color-text: #1a1a1a;
  --color-primary: #1a1a1a;
  --color-secondary: #e8e0d0;
  --color-accent: #7a2334;
  --color-accent-hover: #5e1a28;
  --color-muted: #6b6560;
  --color-surface: #faf7f2;
  --color-rule: #d8cdbc;
  --color-paper-shadow: #cbbda9;

  --font-display: var(--font-playfair);
  --font-body: var(--font-source-sans);
  --font-mono: var(--font-source-code);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--color-bg);
  color: var(--color-text);
}
```

Legacy tailwind.config.ts can remain minimal because v4 uses @theme. If a config file is required by the scaffold, use:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;
```

Semantic mapping:
- bg: #f5f0e8, warm parchment page field.
- text: #1a1a1a, ink-black copy and headings.
- primary: #1a1a1a, black structural bands and major controls.
- secondary: #e8e0d0, darker parchment for ruled areas and quiet bands.
- accent: #7a2334, burgundy for buttons, active links, bullets, and focus rings.
- accent-hover: #5e1a28, deeper burgundy for hover states.
- muted: #6b6560, softened grey-brown for secondary copy.
- surface: #faf7f2, cream cards and inset areas.
- rule: #d8cdbc, thin paper-edge borders.
- paper-shadow: #cbbda9, physical edge colour only, not box-shadow.

### Font Imports via next/font/google

Use three Google fonts so the required display, body, and mono tokens exist. The mono font is used sparingly for labels, service numbers, and measurement-like details.

```tsx
// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap"
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap"
});

const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source-code",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Design Contract Smoke Test | York Bookbinder",
  description: "A compact letterpress-inspired site for a fictional independent York bookbinder."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} ${sourceCode.variable}`}>
      <body className="min-h-screen bg-bg font-body text-text antialiased">
        {children}
      </body>
    </html>
  );
}
```

Font rationale:
- Playfair Display provides a refined high-contrast serif with enough heritage character for bookbinding without becoming novelty Victorian.
- Source Sans 3 provides readable, practical body copy and form UI. It feels clean without becoming generic SaaS.
- Source Code Pro is reserved for small labels that feel like workshop tags, catalogue numbers, and tool measurements.

### Typography Scale

Use exact Tailwind classes:

- h1: `font-display text-[3.25rem] leading-[0.95] tracking-[-0.04em] text-text sm:text-[4.5rem] md:text-[5.75rem] md:leading-[0.9]`
- h2: `font-display text-4xl leading-[1.02] tracking-[-0.035em] text-text md:text-6xl`
- h3: `font-display text-2xl leading-tight tracking-[-0.02em] text-text md:text-3xl`
- h4: `font-body text-sm font-semibold uppercase tracking-[0.24em] text-accent`
- body large: `font-body text-lg leading-8 text-muted md:text-xl md:leading-9`
- body: `font-body text-base leading-7 text-muted`
- small: `font-body text-sm leading-6 text-muted`
- mono label: `font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent`
- nav link: `font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bg transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none`

Usage rules:
- Headings are never centred except the optional tiny section label. Major headings stay left-aligned.
- Body measure should stay between `max-w-xl` and `max-w-2xl`.
- The h1 must not use gradient text, outlined text, or text shadow.
- Mono labels must be sparse: one per section, service number, and form label only.
- Uppercase is for nav, labels, and buttons only. Paragraphs remain sentence case.

### Spacing Rules

- Page container: `mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10`
- Narrow content: `mx-auto w-full max-w-4xl px-5 sm:px-8`
- Hero section: `pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32`
- Standard section: `py-20 sm:py-24 lg:py-28`
- Compact band: `py-12 sm:py-16`
- Section heading stack: `space-y-5 md:space-y-6`
- Grid gaps: `gap-5 sm:gap-6 lg:gap-8`
- Card internal padding: `p-5 sm:p-6 lg:p-8`
- Rhythm between paragraphs: `space-y-4`
- Footer rhythm: `py-10`

### Border Rules

- Borders are 1px and flat: `border border-rule` or `border-t border-rule`.
- Header and footer use no border unless separating from parchment: `border-b border-rule/30` only if needed.
- Cards use `border border-rule bg-surface`.
- Image frames use `border border-text bg-secondary p-2` for a print-proof look.
- Inputs use `border border-rule bg-surface` and focus ring in burgundy.
- Never use drop shadows. If depth is required, use a visible paper edge created by an offset border element, not `shadow-*` classes.

### Corner Rules

- Default radius: `rounded-none`.
- Buttons: `rounded-none`.
- Cards: `rounded-none`.
- Inputs: `rounded-none`.
- Images: `rounded-none`.
- No pills, circles, blobs, soft cards, or rounded badges.

### Interaction Rules

- Standard transition: `transition-colors duration-200 ease-out`.
- Button hover: background changes only, no scale. Primary goes `bg-accent hover:bg-accent-hover`. Secondary goes `hover:bg-text hover:text-bg`.
- Card hover: optional 2px vertical lift via Motion only: `whileHover={{ y: -2 }}`. No shadow appears.
- Link hover: burgundy underline appears through `decoration-accent underline-offset-4`.
- Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg`.
- Reduced motion: respect `prefers-reduced-motion` by disabling transforms and using opacity only.

### Required globals.css Contract

The verification system requires a complete @theme block. Include this exact block or a superset of it:

```css
@import "tailwindcss";

@theme {
  --color-bg: #f5f0e8;
  --color-text: #1a1a1a;
  --color-primary: #1a1a1a;
  --color-secondary: #e8e0d0;
  --color-accent: #7a2334;
  --color-accent-hover: #5e1a28;
  --color-muted: #6b6560;
  --color-surface: #faf7f2;
  --color-rule: #d8cdbc;
  --color-paper-shadow: #cbbda9;
  --font-display: var(--font-playfair);
  --font-body: var(--font-source-sans);
  --font-mono: var(--font-source-code);
}
```

# DESIGN.md

name: Design Contract Smoke Test - York Letterpress Bindery

colors:
  bg: "#f5f0e8"
  text: "#1a1a1a"
  primary: "#1a1a1a"
  secondary: "#e8e0d0"
  accent: "#7a2334"
  accent-hover: "#5e1a28"
  muted: "#6b6560"
  surface: "#faf7f2"
  rule: "#d8cdbc"
  paper-shadow: "#cbbda9"

typography:
  display:
    family: "Playfair Display"
    token: "--font-display"
    weights: [400, 600, 700]
    usage: "h1, h2, h3, hero statement, section titles"
  body:
    family: "Source Sans 3"
    token: "--font-body"
    weights: [400, 500, 600, 700]
    usage: "paragraphs, navigation, buttons, contact details"
  mono:
    family: "Source Code Pro"
    token: "--font-mono"
    weights: [400, 600]
    usage: "small labels, service numbers, form labels, workshop tags"
  scale:
    h1: "font-display text-[3.25rem] leading-[0.95] tracking-[-0.04em] sm:text-[4.5rem] md:text-[5.75rem] md:leading-[0.9]"
    h2: "font-display text-4xl leading-[1.02] tracking-[-0.035em] md:text-6xl"
    h3: "font-display text-2xl leading-tight tracking-[-0.02em] md:text-3xl"
    body: "font-body text-base leading-7"
    small: "font-body text-sm leading-6"
    label: "font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em]"
  rules:
    - "Headings are left aligned."
    - "No gradient text."
    - "Mono labels are sparse and functional."
    - "Line length for paragraphs stays under max-w-2xl."

spacing:
  section: "py-20 sm:py-24 lg:py-28"
  hero: "pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32"
  container: "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10"
  narrow: "mx-auto w-full max-w-4xl px-5 sm:px-8"
  grid: "gap-5 sm:gap-6 lg:gap-8"
  rhythm: "space-y-4 for paragraphs, space-y-6 for major stacks"

rounded:
  none: "rounded-none"
  usage: "Use rounded-none for buttons, cards, inputs, image frames, and badges. No other radius token is allowed."

components:
  button-primary: "inline-flex items-center justify-center bg-accent px-6 py-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bg transition-colors duration-200 ease-out hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
  button-secondary: "inline-flex items-center justify-center border border-text px-6 py-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-text transition-colors duration-200 ease-out hover:bg-text hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
  card-standard: "border border-rule bg-surface p-5 sm:p-6 lg:p-8 rounded-none"
  nav-link: "font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bg transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none"
  input: "w-full rounded-none border border-rule bg-surface px-4 py-3 font-body text-base text-text placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
  dark-band: "bg-primary text-bg with parchment text and no gradient, used only for header and footer"
  section-band: "Alternating bg-bg and bg-surface with thin border-t border-rule"

## Overview

This site is a compact, single-page design contract smoke test for a fictional York bookbinder. The visual system must feel like a letterpress workshop rather than a modern product landing page. The design is quiet, precise, tactile, and restrained. Typography, spacing, and thin rules carry the identity. The page should look like a well-set colophon, not a SaaS brochure.

## Colors

The colour system is ink on parchment with one burgundy accent. The bg token is warm parchment. The text and primary tokens are ink black. Secondary is a darker paper tone used for structural contrast. Accent is restrained burgundy, only for CTAs, active details, focus rings, and small marks. Never use burgundy as a full-width background. Never add gradients, glows, or colour washes.

## Typography

Display type uses Playfair Display for a heritage editorial quality. Body type uses Source Sans 3 for clear, practical reading. Source Code Pro is a tool-label voice and must stay sparse. Use large display headings, compact uppercase labels, and generous paragraph leading. Avoid over-centred text. Avoid trendy oversized sans-serif wordmarks.

## Layout

The layout is a single route with sections for Home, Services, and Contact. The hero is an asymmetric two-column arrangement on desktop: text on the left, workshop image proof on the right. On mobile it stacks. Containers are limited to max-w-6xl, while long copy uses max-w-2xl. Services use a measured grid with thin bordered cards. Contact uses a split ledger-like panel.

## Components

Buttons are sharp, uppercase, and print-label-like. Cards are bordered paper panels with no shadow. Navigation is mono uppercase with tight spacing. Inputs use flat surfaces and strong focus rings. The dark-band pattern belongs only to header and footer. Section bands alternate parchment and cream, divided by a thin rule.

## Do's and Don'ts

Do:
- Use warm parchment, ink black, cream, and sparse burgundy.
- Keep all edges sharp.
- Use thin rules and measured spacing.
- Let typography and material imagery create atmosphere.
- Keep motion subtle, slow, and opacity-led.

Don't:
- No gradients.
- No bento grid.
- No generic SaaS motifs.
- No rounded cards, rounded buttons, pills, circles, or blobs.
- No drop shadows or glows.
- No centred gradient hero.
- No stock photos of smiling teams.
- No burgundy background fills.
- No overuse of icons.
- No placeholder copy.

## Technical Stack

### package.json Dependencies

```json
{
  "name": "design-contract-smoke-test",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.0.0",
    "lucide-react": "^0.468.0",
    "motion": "^12.0.0",
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.54.0",
    "zod": "^3.24.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.0"
  }
}
```

### Config Files

postcss.config.mjs:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {}
  }
};

export default config;
```

next.config.mjs:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
```

tailwind.config.ts:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;
```

## Component Specs

### Component: SiteHeader

File path: `components/SiteHeader.tsx`

Props: none.

Exact classes:
- Root: `sticky top-0 z-50 border-b border-rule/30 bg-primary text-bg`
- Inner: `mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10`
- Logo link: `font-display text-2xl font-semibold tracking-[-0.03em] text-bg transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary`
- Nav: `hidden items-center gap-7 sm:flex`
- Nav link: `font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bg transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none`
- Mobile menu text: `font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bg sm:hidden`

Motion treatment:
- Header itself is static. No slide-in. It should feel permanent and workshop-like.
- Nav links use CSS colour transitions only.

Content:
- Logo: "The Bindery"
- Links: Home, Services, Contact.
- Link hrefs: `#home`, `#services`, `#contact`.

Implementation notes:
- Use semantic `<header>` and `<nav aria-label="Primary">`.
- Keep the logo text in HTML, not an image.
- No icons in the header.

### Component: HeroSection

File path: `components/HeroSection.tsx`

Props: none.

Exact classes:
- Section: `relative overflow-hidden bg-bg pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32`
- Container: `mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:px-10`
- Label: `font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent`
- H1: `mt-5 font-display text-[3.25rem] leading-[0.95] tracking-[-0.04em] text-text sm:text-[4.5rem] md:text-[5.75rem] md:leading-[0.9]`
- Paragraph: `mt-7 max-w-2xl font-body text-lg leading-8 text-muted md:text-xl md:leading-9`
- CTA row: `mt-9 flex flex-col gap-3 sm:flex-row`
- Primary CTA: button-primary contract classes.
- Secondary CTA: button-secondary contract classes.
- Image frame: `relative border border-text bg-secondary p-2`
- Image: `aspect-[4/5] w-full object-cover rounded-none`
- Caption: `mt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted`

Motion treatment:
- Wrapper variants: `initial="hidden" animate="show"`.
- Container transition: `staggerChildren: 0.12, delayChildren: 0.08`.
- Child hidden: `{ opacity: 0, y: 18 }`.
- Child show: `{ opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }`.
- Image frame: same fade-up but delay 0.38.
- Respect reduced motion through `useReducedMotion` or CSS media query.

Content:
- Label: "York, handbound since morning light"
- H1: "Books repaired, bound, and boxed by hand."
- Paragraph: "Design Contract Smoke Test is a fictional independent bindery tucked just inside York's old city walls. The workshop restores worn family volumes, binds new journals in cloth and paper, and makes protective boxes with the measured patience of letterpress work."
- Primary CTA: "View services"
- Secondary CTA: "Contact the workshop"
- Caption: "Bone folder, awl, linen thread, and deckled paper on the bench."

### Component: SectionIntro

File path: `components/SectionIntro.tsx`

Props:
```ts
type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
};
```

Exact classes:
- Root left: `max-w-2xl space-y-5`
- Root center: `mx-auto max-w-2xl space-y-5 text-center`
- Eyebrow: `font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent`
- Title: `font-display text-4xl leading-[1.02] tracking-[-0.035em] text-text md:text-6xl`
- Body: `font-body text-base leading-7 text-muted md:text-lg md:leading-8`

Motion treatment:
- `initial={{ opacity: 0, y: 20 }}`
- `whileInView={{ opacity: 1, y: 0 }}`
- `viewport={{ once: true, margin: "-80px" }}`
- `transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}`

Content:
- Render provided props only. No placeholder defaults.

### Component: ServicesSection

File path: `components/ServicesSection.tsx`

Props: none.

Exact classes:
- Section: `border-t border-rule bg-surface py-20 sm:py-24 lg:py-28`
- Container: `mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10`
- Grid: `mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6`
- Service feature card first item: `border border-text bg-bg p-6 sm:col-span-2 lg:col-span-1 lg:p-8`
- Standard service card: `border border-rule bg-bg p-6 lg:p-8`
- Number: `font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent`
- Card title: `mt-6 font-display text-2xl leading-tight tracking-[-0.02em] text-text md:text-3xl`
- Card body: `mt-4 font-body text-sm leading-6 text-muted md:text-base md:leading-7`

Motion treatment:
- SectionIntro uses its own scroll reveal.
- Cards use `initial={{ opacity: 0, y: 24 }}` and `whileInView={{ opacity: 1, y: 0 }}`.
- Card transition: `duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1]`.
- Hover: `whileHover={{ y: -2 }}` with `transition={{ duration: 0.18 }}`.
- No scale and no shadow.

Content:
Service cards:
1. Title: "Case binding". Body: "Hardcover books built with cloth or paper-covered boards, sewn sections, clean endpapers, and a spine that opens with dignity rather than drama."
2. Title: "Coptic stitch journals". Body: "Exposed-spine notebooks that lie flat on the bench, made for artists, recipe keepers, field notes, and everyday records."
3. Title: "Family book repair". Body: "Careful stabilisation for torn hinges, loose boards, tired corners, and treasured books that should stay in use rather than sit in a drawer."
4. Title: "Clamshell boxes". Body: "Protective boxes made to measure for albums, letters, editions, and fragile objects that need a safe paper-lined home."
5. Title: "Edition binding". Body: "Short runs for artists, writers, and small presses, planned with clear materials, repeatable processes, and quiet finish quality."
6. Title: "Workshop advice". Body: "Plain-spoken guidance on paper, cloth, thread, repair limits, and the choices that make a binding last."

### Component: MaterialBand

File path: `components/MaterialBand.tsx`

Props: none.

Exact classes:
- Section: `border-t border-rule bg-bg py-12 sm:py-16`
- Container: `mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-5 sm:px-8 md:grid-cols-3 lg:px-10`
- Item: `border-l border-rule pl-5`
- Label: `font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent`
- Text: `mt-3 font-body text-sm leading-6 text-muted`

Motion treatment:
- Whole band: `initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}`.
- Items: small stagger with y 12.

Content:
- Item 1 label: "Paper". Text: "Warm parchment surfaces, cream panels, and thin rules echo deckled edges without using decorative textures everywhere."
- Item 2 label: "Tools". Text: "Bone folder, awl, press, and linen thread guide the measured proportions and sharp, unrounded edges."
- Item 3 label: "Ink". Text: "Ink black carries the architecture. Burgundy appears as a printer's mark, never a decorative flood."

### Component: ContactSection

File path: `components/ContactSection.tsx`

Props: none.

Exact classes:
- Section: `border-t border-rule bg-bg py-20 sm:py-24 lg:py-28`
- Container: `mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10`
- Details panel: `border border-rule bg-surface p-6 lg:p-8`
- Form panel: `border border-text bg-surface p-6 lg:p-8`
- Detail row: `border-t border-rule py-4 first:border-t-0 first:pt-0 last:pb-0`
- Detail label: `font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent`
- Detail text: `mt-2 font-body text-base leading-7 text-text`
- Form grid: `space-y-5`
- Label: `mb-2 block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent`
- Input: input contract classes.
- Textarea: `min-h-32` added to input classes.

Motion treatment:
- Details panel: fade-up on scroll, duration 0.55.
- Form panel: fade-up on scroll with delay 0.12.
- Button: CSS hover only.

Content:
- Section eyebrow: "Contact"
- Section title: "Bring a book to the bench."
- Section body: "Send a note with the condition of the book, the kind of binding you have in mind, or the object that needs a box. The fictional workshop replies with clear next steps and no unnecessary fuss."
- Address: "14 Stonegate, York, YO1 8AS"
- Phone: "01904 555 012"
- Email: "hello@designcontractbindery.co.uk"
- Hours: "Tuesday to Friday, 9:30 to 17:00. Saturday by appointment. Closed Sunday and Monday."
- Form fields: Name, Email, Project type, Message.
- Button: "Send enquiry"

Form validation:
- Use react-hook-form with zod.
- Name: required, min 2.
- Email: valid email.
- Project type: required.
- Message: required, min 20.
- On submit: show inline success message only. No backend is required for smoke test.

### Component: ImageProof

File path: `components/ImageProof.tsx`

Props:
```ts
type ImageProofProps = {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
  aspect?: "portrait" | "landscape" | "square";
};
```

Exact classes:
- Figure: `relative border border-text bg-secondary p-2`
- Image portrait: `aspect-[4/5] w-full object-cover rounded-none`
- Image landscape: `aspect-[16/10] w-full object-cover rounded-none`
- Image square: `aspect-square w-full object-cover rounded-none`
- Caption: `mt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted`

Motion treatment:
- Optional parent-controlled fade-up. The component itself does not animate.

Content:
- Render props only.

### Component: SiteFooter

File path: `components/SiteFooter.tsx`

Props: none.

Exact classes:
- Footer: `border-t border-rule/30 bg-primary py-10 text-bg`
- Container: `mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10`
- Brand: `font-display text-3xl tracking-[-0.03em] text-bg`
- Text: `font-body text-sm leading-6 text-secondary`
- Links: `flex gap-5`
- Link: nav-link contract classes.

Motion treatment:
- None. Footer is static.

Content:
- Brand: "The Bindery"
- Text: "Fictional York bookbinder for the Design Contract Smoke Test. Built to verify SPEC.md and DESIGN.md handoff."
- Copyright: "Copyright 2026 Design Contract Smoke Test."
- Links: Home, Services, Contact.

## Page Specs

### Page: Home

Route: `/`

Components used in order:
1. SiteHeader
2. HeroSection
3. MaterialBand
4. ServicesSection
5. ContactSection
6. SiteFooter

Layout:
- Single-page route with anchor navigation.
- No separate services or contact pages.
- Header remains sticky.
- Hero uses desktop asymmetric grid and mobile stacked layout.
- Services are cards in a measured responsive grid.
- Contact is a ledger-like split panel with contact details and an enquiry form.

Content copy:

Hero eyebrow: "York, handbound since morning light"

Hero heading: "Books repaired, bound, and boxed by hand."

Hero paragraph: "Design Contract Smoke Test is a fictional independent bindery tucked just inside York's old city walls. The workshop restores worn family volumes, binds new journals in cloth and paper, and makes protective boxes with the measured patience of letterpress work."

Primary CTA: "View services"

Secondary CTA: "Contact the workshop"

Material band heading is implicit through labels:
- Paper: "Warm parchment surfaces, cream panels, and thin rules echo deckled edges without using decorative textures everywhere."
- Tools: "Bone folder, awl, press, and linen thread guide the measured proportions and sharp, unrounded edges."
- Ink: "Ink black carries the architecture. Burgundy appears as a printer's mark, never a decorative flood."

Services section:
- Eyebrow: "Services"
- Title: "Binding, repair, and protective boxes."
- Body: "The offer is deliberately small. Each service reads as workshop craft rather than a catalogue of generic features. The cards should feel like labels pinned beside finished work."
- Include the six service cards listed in ServicesSection.

Contact section:
- Eyebrow: "Contact"
- Title: "Bring a book to the bench."
- Body: "Send a note with the condition of the book, the kind of binding you have in mind, or the object that needs a box. The fictional workshop replies with clear next steps and no unnecessary fuss."
- Details exactly as listed in ContactSection.

Accessibility:
- Use semantic landmark elements: header, main, section, footer.
- Every image has alt text.
- Form labels are explicit and associated with inputs.
- Focus indicators must be visible.
- Colour contrast must pass WCAG AA.

Responsive behaviour:
- Mobile under 640px: stacked layout, nav links hidden except small "York bindery" text, hero image below copy, single-column services.
- Tablet 640px to 1023px: two-column services, stacked contact panels.
- Desktop 1024px and above: asymmetric hero, three-column services, split contact.

## Image Generation Prompts

Image implementation note: The source brief asks for a small single-page site. Use a maximum of 5 images on the page itself. The full manifest below supplies 10 unique generated assets for pipeline completeness, visual QA, and future section swaps. Do not render all 10 at once on the single page. Required rendered images are marked "render". Reserve images are marked "reserve". No text may appear in any image.

image: hero-workbench-bone-folder.jpg - render
- Dimensions: 1600x2000
- Prompt: "Close-up editorial photograph of a traditional bookbinder workbench in York, smooth bone folder beside an awl, linen thread, and deckled handmade paper, warm north-window daylight, shallow depth of field, ink black and parchment colour palette, quiet craft atmosphere, no people, no lettering, no readable text."
- Alt text: "Bone folder, awl, linen thread, and deckled paper on a bookbinder workbench."

image: paper-stack-deckled-edges.jpg - render
- Dimensions: 1400x1000
- Prompt: "Stack of handmade deckled paper sheets on a worn wooden bindery bench, subtle uneven edges, warm parchment and cream tones, soft natural side light, minimal composition, premium editorial still life, no hands, no text, no labels."
- Alt text: "A stack of handmade paper with deckled edges on a wooden bench."

image: binding-press-cloth-boards.jpg - render
- Dimensions: 1400x1000
- Prompt: "Traditional bookbinding press holding cloth-covered boards, dark ink-black metal press, burgundy cloth strip nearby, warm workshop background, precise craft detail, natural light, muted parchment palette, no visible words or numbers."
- Alt text: "A bookbinding press holding cloth-covered boards in a warm workshop."

image: coptic-stitch-linen-thread.jpg - render
- Dimensions: 1200x1200
- Prompt: "Macro photograph of coptic stitch binding with natural linen thread along an exposed spine, cream paper sections, black cloth cover partially visible, tactile handmade texture, soft directional light, no text, no watermark."
- Alt text: "Close view of linen thread on a coptic stitch book spine."

image: clamshell-box-open-paper-lined.jpg - render
- Dimensions: 1400x1000
- Prompt: "Open handmade clamshell archival box lined with warm cream paper, burgundy cloth hinge detail, placed on a clean bindery table, quiet premium still life, flat natural light, no labels, no written text."
- Alt text: "An open handmade clamshell box lined with cream paper."

image: awl-and-thread-measured-grid.jpg - reserve
- Dimensions: 1400x1000
- Prompt: "Bookbinding awl, linen thread spool, and ruler arranged in a measured grid on parchment paper, overhead composition, restrained burgundy accent from thread, ink black tool handle, warm workshop light, no readable markings, no text."
- Alt text: "Bookbinding tools and linen thread arranged neatly on parchment paper."

image: repaired-family-book-spine.jpg - reserve
- Dimensions: 1400x1000
- Prompt: "Restored old family book with repaired spine resting on cream paper, visible cloth texture, careful hinge repair, warm parchment and ink-black palette, archival craft mood, no title, no readable text, no hands."
- Alt text: "An old book with a carefully repaired cloth spine."

image: handmade-endpaper-marbling.jpg - reserve
- Dimensions: 1400x1000
- Prompt: "Abstract close-up of handmade marbled endpaper in muted cream, charcoal, and restrained burgundy swirls, photographed flat with soft even light, tactile paper fibres visible, no letters, no symbols, no text."
- Alt text: "Muted handmade marbled endpaper in cream, charcoal, and burgundy."

image: workshop-window-paper-dust.jpg - reserve
- Dimensions: 1600x1000
- Prompt: "Quiet York bindery window with warm daylight falling across a paper cutting bench, faint paper dust in the air, dark tools at the edge of frame, parchment tones, calm editorial photography, no signage, no text."
- Alt text: "Warm daylight falling across a paper cutting bench in a quiet bindery."

image: linen-thread-spools-burgundy.jpg - reserve
- Dimensions: 1200x1200
- Prompt: "Small collection of linen thread spools in natural cream, charcoal black, and restrained burgundy on a bookbinder table, close still life, tactile fibres, warm soft light, no labels, no printed text."
- Alt text: "Cream, black, and burgundy linen thread spools on a bindery table."

## Animation Spec

### Hero Entrance Sequence

Use Motion from `motion/react`, not framer-motion.

Hero sequence:
- 0.00 seconds: Eyebrow fades up from y 18.
- 0.12 seconds: H1 fades up from y 18.
- 0.24 seconds: Paragraph fades up from y 18.
- 0.36 seconds: CTA row fades up from y 18.
- 0.42 seconds: Image proof fades up from y 24 and opacity 0.

Exact variant:

```ts
const heroParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

const heroChild = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
```

### Section Scroll Reveal Pattern

All below-fold sections use the same reveal:

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
>
  {children}
</motion.div>
```

Cards use staggered delays:

```ts
transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
```

Reduced motion:
- If `prefers-reduced-motion: reduce`, set all y transforms to 0 and shorten duration to 0.01.
- Hover transforms should be disabled for reduced motion users.

### Card and Button Hover States

Buttons:
- Primary: colour shift only, `bg-accent hover:bg-accent-hover`.
- Secondary: invert only, `hover:bg-text hover:text-bg`.
- No scale, no shadow, no glow.

Cards:
- Motion lift: `whileHover={{ y: -2 }}`.
- Border remains visible.
- No shadow appears on hover.
- Cursor stays default unless the whole card is a link. These service cards are not links.

Links:
- Burgundy text or underline on hover.
- Use `underline-offset-4` where an underline is visible.

### Page Transition Approach

No route-level page transitions are required because the site is a single page. Use native anchor scrolling with `scroll-behavior: smooth`. Do not add animated page overlays, loaders, progress bars, or cursor effects.

## Anti-Convergence Rules

Rules copied from the brief and extended for build QA:

1. Letterpress workshop persona is non-negotiable. Do not modernise it into generic luxury minimalism.
2. Bone folder tools, deckled paper, ink-black type, warm parchment, and restrained burgundy must remain visible in the visual language.
3. Burgundy accent is used sparingly and never as a background fill.
4. No gradients anywhere.
5. No bento grid layouts.
6. No generic SaaS motifs: no logo bars, no pricing tables, no feature comparison strips, no dashboard mockups.
7. No centred gradient hero. The hero is left-weighted and material-led.
8. No rounded corners: no pills, circles, blobs, soft cards, or rounded buttons.
9. No drop shadows, glows, glassmorphism, neon, or blurred colour blobs.
10. No stock photos of smiling teams, laptops, office desks, or generic craft hands holding coffee.
11. No more than two primary type families plus the small mono utility font specified in the @theme block.
12. No placeholder copy, lorem ipsum, bracketed values, or unfilled address fields.
13. No decorative icons unless they are functional and sparse. Thin rules are preferred over icon rows.
14. No full-screen video, parallax, 3D effects, or scroll-jacking.
15. No black-and-white brutalism. This is warm parchment craft, not concrete or cyberpunk.
16. Do not replace Playfair Display with Inter, Montserrat, Poppins, or Playfair plus generic SaaS layouts.
17. Do not use accent colour on every heading. Headings are ink black.
18. Do not over-texture the background. Material texture belongs in generated images, not repeated CSS noise.
19. Do not hide focus states. Burgundy focus rings are required.
20. Do not render text inside images. All words must be HTML and CSS.

## Build Acceptance Checklist

- app/globals.css includes `@import "tailwindcss";`.
- app/globals.css includes a complete @theme block with `--color-bg`, `--color-text`, `--color-primary`, `--color-secondary`, `--color-accent`, `--font-display`, `--font-body`, and `--font-mono`.
- Font variables in layout.tsx exactly match @theme references.
- The site has one route, `/`, with Home, Services, and Contact sections.
- All copy is real and specific to a York bookbinder.
- The DESIGN.md section exists as a separate `# DESIGN.md` heading in this spec.
- Components use exact classes or faithful equivalents from this contract.
- No gradients, rounded corners, shadows, glows, bento grid, or generic SaaS motifs.
- Images contain no text.
- `npm install --legacy-peer-deps` completes.
- `npm run build` completes with 0 errors.

## Developer Notes

The goal is not to expand scope. Keep this compact. The design system is complete because the pipeline test is about contract handoff, not because the site needs many pages. If there is a conflict between adding visual flourishes and preserving the small letterpress smoke-test scope, preserve the small scope. The @theme block is mandatory and must remain in globals.css.
