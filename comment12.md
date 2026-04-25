# Technical Specification: Design Contract Smoke Test
## A fictional independent bookbinder in York

---

## Design Persona

Letterpress workshop aesthetic. Bone folder tools, deckled paper edges, ink-black type on warm parchment. Restrained burgundy accent used sparingly — never as a background fill, only for interactive elements and key details. The feel is quiet craft confidence: a workshop that has been here for decades and doesn't need to shout.

---

## Brand Identity

### Colour Tokens

```ts
// tailwind.config.ts theme.extend.colors
colors: {
  ink: '#1a1a1a',
  parchment: '#f5f0e8',
  'parchment-dark': '#e8e0d0',
  burgundy: '#7a2334',
  'burgundy-hover': '#5e1a28',
  warmgray: '#6b6560',
  cream: '#faf7f2',
}
```

| Token | Hex | Usage |
|-------|-----|-------|
| ink | #1a1a1a | Primary text, headings, header bg |
| parchment | #f5f0e8 | Page background |
| parchment-dark | #e8e0d0 | Section alternation, card bg |
| burgundy | #7a2334 | Links, buttons, accent borders |
| burgundy-hover | #5e1a28 | Hover state for burgundy elements |
| warmgray | #6b6560 | Secondary text, captions |
| cream | #faf7f2 | Light section variant |

### Typography

**Fonts:**
```ts
// app/layout.tsx
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '700'],
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '600'],
})
```

**Scale:**

| Element | Classes |
|---------|---------|
| h1 | `font-display text-4xl md:text-5xl font-bold tracking-tight text-ink` |
| h2 | `font-display text-2xl md:text-3xl font-bold tracking-tight text-ink` |
| h3 | `font-display text-xl font-bold text-ink` |
| body | `font-body text-base leading-relaxed text-warmgray` |
| small | `font-body text-sm text-warmgray` |
| nav link | `font-body text-sm uppercase tracking-widest text-parchment` |

### Spacing & Borders

- Section padding: `py-20 md:py-28`
- Container: `max-w-4xl mx-auto px-6`
- Border radius: `rounded-none` everywhere (sharp edges = letterpress)
- Dividers: `border-t border-parchment-dark` (1px, subtle)
- Cards: no box-shadow, use `border border-parchment-dark` if needed

### Interactions

- Transitions: `transition-colors duration-200`
- Link hover: `text-burgundy hover:text-burgundy-hover`
- Button hover: scale not used — colour shift only (`bg-burgundy hover:bg-burgundy-hover`)
- Focus: `focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2 focus:ring-offset-parchment`

---

## DESIGN.md

```markdown
# DESIGN.md — Design Contract Smoke Test

## name
Design Contract Smoke Test — York Bookbinder

## colors
| Semantic Token | Value | Usage |
|---|---|---|
| ink | #1a1a1a | Text, header background |
| parchment | #f5f0e8 | Page background |
| parchment-dark | #e8e0d0 | Alternating sections |
| burgundy | #7a2334 | Accent: links, buttons, key borders |
| burgundy-hover | #5e1a28 | Hover states |
| warmgray | #6b6560 | Secondary text |
| cream | #faf7f2 | Light sections |

## typography
- **Display:** Playfair Display (serif) — headings, hero
- **Body:** Source Sans 3 (sans-serif) — paragraphs, nav, UI
- **Scale:** h1 4xl/5xl bold, h2 2xl/3xl bold, h3 xl bold, body base relaxed, small sm
- **Tracking:** headings tight, nav links widest+uppercase
- **Weight:** headings 700, body 400, emphasis 600

## spacing
- **Section:** py-20 md:py-28
- **Container:** max-w-4xl mx-auto px-6
- **Grid:** services uses 1-col mobile, 2-col md, 3-col lg — gap-8
- **Rhythm:** elements within sections spaced with space-y-6

## rounded
- All corners: rounded-none (sharp letterpress edges)
- No rounded buttons, no rounded cards, no pills

## components

### button-primary
`bg-burgundy text-parchment px-6 py-3 font-body text-sm uppercase tracking-widest transition-colors duration-200 hover:bg-burgundy-hover focus:ring-2 focus:ring-burgundy`

### button-secondary
`border border-ink text-ink px-6 py-3 font-body text-sm uppercase tracking-widest transition-colors duration-200 hover:bg-ink hover:text-parchment`

### card-standard
`border border-parchment-dark p-6 bg-cream` — no shadow, no radius

### nav-link
`font-body text-sm uppercase tracking-widest text-parchment transition-colors duration-200 hover:text-burgundy`

### input
`border border-parchment-dark bg-parchment px-4 py-2 font-body text-ink focus:outline-none focus:ring-2 focus:ring-burgundy`

### section-band
Alternating: odd sections `bg-parchment`, even sections `bg-cream`

## Overview
A quiet, craft-confident single-page site for a fictional York bookbinder. The aesthetic channels letterpress workshops: sharp edges, generous whitespace, restrained colour, serif headings that feel hand-set. Every element earns its place.

## Colors
Ink-on-parchment is the foundation. Burgundy appears only at interaction points — links, buttons, active states — never as a background fill or decorative wash. Warmgray softens body text without losing readability.

## Typography
Playfair Display carries heritage weight for headings. Source Sans 3 provides clean readability at body sizes. The contrast between decorative serif and functional sans mirrors the bookbinder's own craft: ornamented covers, precise stitching.

## Layout
Single-page, three sections. Max-width 4xl container centred. No sidebar, no complex grid. Services section uses a simple responsive grid. Generous vertical padding creates breathing room between sections.

## Components
All components are sharp-edged (rounded-none). Buttons use uppercase tracking-widest for a workshop-label feel. Cards are minimal — border only, no shadow. The header is full-width ink-black with centred nav.

## Do's and Don'ts
### Do
- Use generous whitespace
- Keep burgundy accent sparse (links, buttons, thin borders)
- Let typography do the heavy lifting
- Maintain sharp edges everywhere

### Don't
- No gradients anywhere
- No bento grid layouts
- No generic SaaS patterns (pricing tables, feature grids)
- No centred hero with gradient overlay
- No rounded corners (pills, circles, soft cards)
- No drop shadows
- No more than 2 fonts
```

---

## Technical Stack

### package.json

```json
{
  "name": "design-contract-smoke-test",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "motion": "^12.0.0",
    "react-hook-form": "^7.54.0",
    "zod": "^3.24.0",
    "@hookform/resolvers": "^4.0.0",
    "lucide-react": "^0.470.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.0",
    "@types/react": "^19.0.0",
    "@types/node": "^22.0.0"
  }
}
```

### tailwind.config.ts
Tailwind v4 — use `@theme` in CSS:
```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-ink: #1a1a1a;
  --color-parchment: #f5f0e8;
  --color-parchment-dark: #e8e0d0;
  --color-burgundy: #7a2334;
  --color-burgundy-hover: #5e1a28;
  --color-warmgray: #6b6560;
  --color-cream: #faf7f2;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Source Sans 3', sans-serif;
}
```

### postcss.config.mjs
```js
export default { plugins: { '@tailwindcss/postcss': {} } }
```

### next.config.mjs
```js
/** @type {import('next').NextConfig} */
export default {}
```

---

## Component Specs

### 1. Header
- **File:** `components/Header.tsx`
- **Props:** none
- **Classes:** `bg-ink py-6`
- **Inner:** `max-w-4xl mx-auto px-6 flex items-center justify-between`
- **Logo:** `font-display text-xl text-parchment tracking-tight` — text "The Bindery"
- **Nav:** `flex gap-8` with nav-link styled anchors: Home, Services, Contact
- **Motion:** none (static, always visible)

### 2. HeroSection
- **File:** `components/HeroSection.tsx`
- **Props:** none
- **Classes:** `bg-parchment py-20 md:py-28`
- **Inner:** `max-w-4xl mx-auto px-6`
- **Content:**
  - h1: "Handbound books, made in York" — `font-display text-4xl md:text-5xl font-bold tracking-tight text-ink`
  - p: Workshop narrative (2-3 sentences) — `font-body text-lg text-warmgray mt-6 max-w-2xl leading-relaxed`
  - CTA: "View Services" — button-primary classes, `mt-8 inline-block`
- **Motion:**
  - h1: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}`
  - p: same with `delay: 0.15`
  - button: same with `delay: 0.3`

### 3. ServicesSection
- **File:** `components/ServicesSection.tsx`
- **Props:** none
- **Classes:** `bg-cream py-20 md:py-28`
- **Inner:** `max-w-4xl mx-auto px-6`
- **Content:**
  - h2: "Services" — centred
  - Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12`
  - 5 service cards using card-standard component
- **Services:**
  1. Case Binding — Hardcover books with cloth or paper-covered boards
  2. Coptic Stitch — Exposed-spine binding for lay-flat journals
  3. Restoration — Repair and conservation of damaged volumes
  4. Custom Journals — Bespoke notebooks with handmade endpapers
  5. Box Making — Protective slipcases and clamshell boxes
- **Motion:** `whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}`

### 4. ServiceCard
- **File:** `components/ServiceCard.tsx`
- **Props:** `{ title: string; description: string }`
- **Classes:** card-standard (`border border-parchment-dark p-6 bg-cream`)
- **Inner:**
  - h3: `font-display text-xl font-bold text-ink`
  - p: `font-body text-sm text-warmgray mt-3 leading-relaxed`

### 5. ContactSection
- **File:** `components/ContactSection.tsx`
- **Props:** none
- **Classes:** `bg-parchment py-20 md:py-28`
- **Inner:** `max-w-4xl mx-auto px-6`
- **Content:**
  - h2: "Contact" — centred
  - Two-column layout at md: left = address/details, right = hours
  - Address: 14 Stonegate, York, YO1 8AS
  - Phone: 01904 555 012
  - Email: hello@thebindery-york.co.uk
  - Hours: Mon–Fri 9–5, Sat 10–4, Sun closed
- **Motion:** `whileInView` fade-up, `viewport={{ once: true }}`

### 6. Footer
- **File:** `components/Footer.tsx`
- **Props:** none
- **Classes:** `bg-ink py-8`
- **Inner:** `max-w-4xl mx-auto px-6 text-center`
- **Content:** `font-body text-sm text-warmgray` — "© 2026 The Bindery, York"

---

## Page Specs

### / (Home — Single Page)
- **Route:** `app/page.tsx`
- **Layout:** `app/layout.tsx` wraps with font variables, `bg-parchment min-h-screen`
- **Components in order:**
  1. Header
  2. HeroSection
  3. ServicesSection
  4. ContactSection
  5. Footer
- **Content:** All copy as specified in component specs above.

---

## Image Generation Prompts

No images required. This is a typography-and-whitespace-driven site. If a hero image is later desired:

### hero-workshop.jpg
- **Dimensions:** 1920×800
- **Prompt:** "Close-up of a bookbinder's workbench in a York workshop, bone folder and awl resting on deckled handmade paper, warm afternoon light through a sash window, shallow depth of field, muted warm tones, no people visible, editorial photography style"
- **Alt text:** "Bookbinding tools resting on handmade paper in a sunlit workshop"

---

## Animation Spec

### Hero Entrance Sequence
```ts
// Stagger: 0ms → 150ms → 300ms
h1:     { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }
p:      { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.15 } }
button: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 } }
```

### Section Scroll Reveal
```ts
// All sections below the fold
{ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, viewport: { once: true, margin: '-100px' } }
```

### Card Hover States
```ts
// ServiceCard
{ whileHover: { y: -4 }, transition: { duration: 0.2 } }
// No scale, no shadow — just a subtle lift
```

### Page Transitions
None. Single-page site; smooth scroll via `scroll-behavior: smooth` in CSS.

---

## Anti-Convergence Rules

1. **No gradients** — anywhere, ever. Flat colour only.
2. **No bento grid** — no trendy asymmetric dashboard layouts.
3. **No generic SaaS motifs** — no pricing tables, feature comparison grids, or "trusted by" logo bars.
4. **No centred hero with gradient overlay** — the hero is left-aligned text on flat parchment.
5. **No rounded corners** — everything is sharp. Letterpress doesn't do soft.
6. **No drop shadows** — borders only, and sparingly.
7. **No emoji in copy** — this is a serious workshop.
8. **No more than 2 typefaces** — Playfair Display + Source Sans 3, nothing else.
9. **Burgundy stays sparse** — links, buttons, thin accent borders. Never as a section background.
10. **No stock photography carousel** — if images are added later, one editorial photo max.

---

*Spec complete. Covers design persona, brand identity, DESIGN.md contract, technical stack, component specs, page specs, image prompts, animation spec, and anti-convergence rules.*
