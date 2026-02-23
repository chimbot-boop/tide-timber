# Tide & Timber — Design Plan

## Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `ember` | `#C45A2A` | Primary CTA buttons, active nav states |
| `driftwood` | `#6B4E37` | Secondary accents, hover states |
| `sand` | `#F5EFE0` | Light section backgrounds |
| `tide` | `#1A3A4A` | Dark hero backgrounds, footer |
| `stone` | `#4A4A52` | Body text, secondary text |
| `sea-mist` | `#E8F2F5` | Alternate light background sections |
| `seafoam` | `#5BA8A0` | Icon accents, divider lines |
| `cream` | `#FDFAF4` | Page background default |

## Typography Stack

**Serif (headings):** `DM_Serif_Display` — loaded via `next/font/google`
- CSS variable: `--font-serif`
- Used for: all `h1`, `h2`, `h3` elements; blockquotes
- Weights: 400 (the only available weight for DM Serif Display)

**Sans-serif (body/UI):** `DM_Sans` — loaded via `next/font/google`
- CSS variable: `--font-sans`
- Used for: body text, nav links, buttons, labels, captions
- Weights: 300, 400, 500, 600, 700

**Type scale:**
- `h1`: `text-4xl` → `text-5xl` → `text-6xl` (mobile → tablet → desktop)
- `h2`: `text-3xl` → `text-4xl` → `text-5xl`
- `h3`: `text-xl` → `text-2xl`
- Body: `text-base` (16px); small: `text-sm` (14px)

## Responsive Breakpoints

| Name | Width | Tailwind prefix |
|---|---|---|
| Mobile | < 640px | (default) |
| Tablet | ≥ 640px | `sm:` |
| Tablet-L | ≥ 768px | `md:` |
| Desktop | ≥ 1024px | `lg:` |
| Wide | ≥ 1280px | `xl:` |

**Mobile behaviour:**
- Navigation collapses; desktop nav hidden on mobile with hamburger placeholder (static for simplicity)
- Single-column layouts; grids reduce from 3-col → 1-col on mobile
- Hero section text scales down; CTAs stack vertically
- Section padding reduces: `py-12` mobile → `py-20` desktop

## Component Hierarchy

```
RootLayout (src/app/layout.tsx)
├── Nav (src/components/Nav.tsx)
│   ├── Brand wordmark
│   └── Links: /, /sessions, /private-hire, /locations, /contact
└── {children}  ← page content
    └── Footer (inline per page or shared)
```

## Layout Structure Per Page

### `/` — Home
1. Hero — full-viewport CSS gradient (tide→dark) with SVG wave overlay and h1 CTA
2. USP strip — 4 icons + short copy on `sea-mist` background
3. Sessions overview — 3-card grid on `sand` background
4. Locations teaser — 2-column split on `tide` background
5. Testimonials — 3-card grid on `cream` background
6. CTA banner — `ember` gradient with "Book a Session" button
7. Footer — `tide` background, 3-column grid

### `/sessions`
1. Page hero — `tide` gradient, h1 "Surf & Paddle Sessions"
2. Beginner sessions card
3. Intermediate sessions card
4. Advanced sessions card
5. Pricing table — grid on `sand`
6. FAQ accordion — 4 questions

### `/private-hire`
1. Page hero — `driftwood`→`tide` gradient
2. Event types — corporate, birthday, hen/stag, schools
3. Capacity & pricing
4. Process steps (3 steps)
5. CTA form

### `/locations`
1. Page hero — full-width with location name
2. Location cards — Sennen, Croyde, Polzeath, Perranporth
3. Facilities per location
4. Getting there — transport info

### `/contact`
1. Page hero — minimal, `sea-mist` background
2. Contact form (name, email, enquiry type, message)
3. Info panel — address, phone, email, hours
4. Social links

## Spacing System

Based on Tailwind's default scale (4px base unit):
- Section vertical padding: `py-12` (48px) mobile, `py-16` (64px) tablet, `py-20` (80px) desktop
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6` mobile, `gap-8` desktop
- Component internal padding: `p-6` (24px) or `p-8` (32px)

## Visual Asset Strategy

All visuals are CSS/SVG generated:
- Hero backgrounds: multi-stop CSS `linear-gradient` simulating ocean depth
- Section dividers: inline SVG wave paths
- Icon placeholders: inline SVG geometric shapes
- No `<img>` tags; no external URLs; no `next/image` with remote sources
