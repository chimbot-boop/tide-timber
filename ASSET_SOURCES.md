# Tide & Timber — Asset Sources

All visual assets used in this project are CSS-generated, inline SVG, or loaded via Next.js font optimisation. There are no raster images, no external image URLs, and no hotlinked content.

## Fonts

| Asset | Local Path | Source | Licence | Notes |
|---|---|---|---|---|
| DM Serif Display | Loaded via `next/font/google` at build time | Google Fonts (fonts.gstatic.com CDN, optimised subset downloaded at build) | SIL Open Font Licence 1.1 | Served as self-hosted subset in production Next.js build; no runtime CDN dependency |
| DM Sans | Loaded via `next/font/google` at build time | Google Fonts (fonts.gstatic.com CDN, optimised subset downloaded at build) | SIL Open Font Licence 1.1 | Served as self-hosted subset in production Next.js build; no runtime CDN dependency |

## Frameworks & Libraries

| Asset | Local Path | Source | Licence | Notes |
|---|---|---|---|---|
| Next.js 15 | `node_modules/next` | npmjs.com / github.com/vercel/next.js | MIT | React framework; App Router used |
| Tailwind CSS 3 | `node_modules/tailwindcss` | tailwindcss.com | MIT | Utility-first CSS framework; v3 with PostCSS pipeline |
| TypeScript | `node_modules/typescript` | typescriptlang.org | Apache 2.0 | Type checking; no runtime dependency |

## Visual Assets (CSS / SVG Generated)

| Asset | Location | Generation method | Licence |
|---|---|---|---|
| Hero ocean gradient | `src/app/page.tsx` Hero section | CSS `linear-gradient(160deg, #1A3A4A, #0F2533, #1A3A4A)` | N/A — CSS generated |
| Hero SVG wave overlay | `src/app/page.tsx` Hero section | Inline `<svg>` with `<path>` wave shapes | N/A — original SVG |
| Hero geometric circles | `src/app/page.tsx` Hero section | Inline `<svg>` with `<circle>` elements | N/A — original SVG |
| Section wave dividers | All page files, bottom of hero sections | Inline `<svg>` with `<path>` | N/A — original SVG |
| Session card visual headers | `src/app/sessions/page.tsx` | CSS `linear-gradient` per card | N/A — CSS generated |
| Location card visual headers | `src/app/locations/page.tsx` | CSS `linear-gradient` per location | N/A — CSS generated |
| Private hire card headers | `src/app/private-hire/page.tsx` | CSS `linear-gradient` per event type | N/A — CSS generated |
| USP icons (home page) | `src/app/page.tsx` UspStrip section | Inline `<svg>` with hand-drawn paths | N/A — original SVG |
| Getting there icons | `src/app/locations/page.tsx` GettingThere section | Inline `<svg>` with hand-drawn paths | N/A — original SVG |
| CTA ember gradient | `src/app/page.tsx` CtaBanner section | CSS `linear-gradient(135deg, #C45A2A, #6B4E37)` | N/A — CSS generated |
| Locations teaser dark gradient | `src/app/page.tsx` LocationsTeaser section | CSS `linear-gradient(135deg, #1A3A4A, #0F2533)` | N/A — CSS generated |
| Footer dark background | All page files, Footer components | CSS colour `#0F2533` (`tide-deep`) | N/A — CSS generated |
