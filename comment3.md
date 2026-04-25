### Design Persona (copy verbatim from brief)
Compact but distinctive aesthetic: letterpress workshop, bone folder tools, deckled paper, ink-black type, warm parchment, restrained burgundy accent. Include home, services, and contact sections only. Keep scope deliberately small.

### Reference Site Study
The supplied brief did not include explicit reference URLs. To ground the build anyway, I studied three relevant public references by fetch where browser rendering was blocked by network timeouts:

1. https://www.bookbinding.co.uk/
   - Layout: old craft-site structure, direct navigation, dense text, no over-designed marketing shell. Useful lesson: keep the page honest and workshop-led.
   - Typography: traditional Times-style serif, simple hierarchy, text-first presentation.
   - Color: black, white, red, yellow link accents. We should not copy the dated palette, but the restrained craft directness fits.
   - Motion: none. The build should use very quiet motion, not SaaS-style sweeping reveals.
   - Premium takeaway: authenticity comes from specificity of tools, process, address, materials, and pricing cues, not abstract value propositions.

2. https://www.presentandcorrect.com/
   - Layout: product-led stationery shop with carefully spaced grids, small captions, strong white or off-white grounds, and visual restraint.
   - Typography: clean editorial type with compact labels and understated navigation.
   - Color: restrained base palette with small accent use. Accent should appear in rules, stamps, and focus states only.
   - Motion: commerce interactions are subtle, mostly hover and state changes.
   - Premium takeaway: negative space plus material detail feels more expensive than decorative overload.

3. https://www.cambridgeimprint.co.uk/
   - Layout: craft and print focused site with image-forward blocks, editorial rhythm, and a shop/workshop sensibility.
   - Typography: classic serif/editorial pairing, confident headings, body copy that reads as human and specific.
   - Color: warm paper grounds with ink-like text and occasional strong color.
   - Motion: minimal. The site feels grounded because the materials carry the atmosphere.
   - Premium takeaway: let pattern, paper, craft tools, and production process lead the visual system.

### Brand Identity

Brand name: Design Contract Smoke Test
Business type: fictional independent bookbinder in York
Positioning: a compact, practical workshop website that proves the DESIGN.md handoff path while still feeling intentional, crafted, and local.

Core visual idea:
A one-page letterpress proof sheet. The site should feel like an inked broadside pinned in a bookbinding studio: black type, warm parchment, burgundy registration marks, deckled paper edges, fine ruled lines, and close-up material photography. It must not feel like a generic artisan template or startup landing page.

Exact Tailwind color tokens:

```css
@theme {
  --color-bg: #F3E7D0;
  --color-text: #17130F;
  --color-primary: #17130F;
  --color-secondary: #7A2E2E;
  --color-accent: #B67A4A;
  --color-paper: #FFF8EA;
  --color-paper-deep: #E6D0AD;
  --color-muted: #6D5D4B;
  --color-line: #3A2D24;
  --color-band: #17130F;
  --color-band-text: #FFF8EA;
  --color-success: #4F6A45;
  --font-display: var(--font-cormorant);
  --font-body: var(--font-source-serif);
}
```

Tailwind config snippet:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F3E7D0",
        text: "#17130F",
        primary: "#17130F",
        secondary: "#7A2E2E",
        accent: "#B67A4A",
        paper: "#FFF8EA",
        "paper-deep": "#E6D0AD",
        muted: "#6D5D4B",
        line: "#3A2D24",
        band: "#17130F",
        "band-text": "#FFF8EA",
        success: "#4F6A45",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-source-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        press: "0 18px 50px rgba(23, 19, 15, 0.14)",
        insetLine: "inset 0 0 0 1px rgba(58, 45, 36, 0.55)",
      },
      backgroundImage: {
        papergrain: "radial-gradient(rgba(23,19,15,.055) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
```

Font imports via next/font/google:

```ts
import { Cormorant_Garamond, Source_Serif_4 } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
```

Typography scale with exact Tailwind classes:

- h1: `font-display text-[3.75rem] leading-[0.86] tracking-[-0.055em] text-primary md:text-[6.5rem] lg:text-[8rem]`
  - Usage: hero title only. Large, compressed, letterpress-like. Keep left aligned.
- h2: `font-display text-[2.5rem] leading-[0.9] tracking-[-0.04em] text-primary md:text-[4.5rem]`
  - Usage: section headings, services and contact.
- h3: `font-display text-[1.65rem] leading-[1] tracking-[-0.025em] text-primary md:text-[2.25rem]`
  - Usage: cards, service names, form heading.
- body-large: `font-body text-[1.15rem] leading-[1.72] text-text md:text-[1.3rem]`
  - Usage: hero lead and intro paragraphs.
- body: `font-body text-base leading-7 text-text md:text-[1.05rem]`
  - Usage: default copy.
- small: `font-body text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-muted`
  - Usage: labels, eyebrow text, nav, service meta.
- caption: `font-body text-sm leading-6 text-muted`
  - Usage: image captions and footer notes.

Spacing rules:

- Page outer padding: `px-4 sm:px-6 lg:px-8`.
- Container: `mx-auto max-w-[1180px]`.
- Section vertical rhythm: `py-16 md:py-24 lg:py-28`.
- Compact smoke-test pages may use `py-12 md:py-16` for secondary bands.
- Hero: `min-h-[88vh] pt-28 pb-16 md:pt-36`.
- Grid gap: `gap-6 md:gap-8 lg:gap-10`.
- Card internal padding: `p-6 md:p-8`.
- Use hard horizontal rules between sections: `border-t border-line/45`.
- Use offset alignment. Avoid centered stacked hero composition.

Border rules:

- Primary rules: `border border-line/70`.
- Fine rules: `border border-line/30`.
- Dark bands: `border-y border-line bg-band text-band-text`.
- Image frames: `border-[10px] border-paper shadow-press outline outline-1 outline-line/40`.
- Do not use glossy shadows. Use paper-like soft shadow only.

Corner rules:

- Default radius: square, `rounded-none`.
- Small interactive radius: `rounded-[2px]` only for buttons and inputs.
- Paper image sheets: `rounded-[1px]`.
- Do not use pill chips except tiny availability mark, and only as `rounded-full` on one small status element.

Interaction rules:

- Standard transition: `transition-[color,background-color,border-color,transform,opacity] duration-300 ease-out`.
- Button hover: primary translates by `hover:-translate-y-0.5`, swaps black to burgundy, and shows an inset top line.
- Secondary button hover: background fills with ink black and text changes to paper.
- Nav hover: burgundy underline drawn from left using `after:scale-x-100`.
- Card hover: `hover:-translate-y-1 hover:border-secondary/70 hover:shadow-press`.
- Image hover: `hover:rotate-0 hover:scale-[1.015]` when the default is a tiny rotated placement.
- Inputs: no rounded SaaS form styling. Use underlined fields or square paper boxes with burgundy focus border.

Reference-informed implementation notes:

- From traditional bookbinder references: keep copy plain, specific, and local. Mention York, cloth, thread, paper, repair, slipcases, and appointments.
- From stationery references: use disciplined grids, small labels, quiet hover states, and material imagery.
- From craft print references: make rules, paper texture, and object photography do the work. Avoid decoration without craft reason.

# DESIGN.md

name: Design Contract Smoke Test

colors:
  bg: "#F3E7D0"
  text: "#17130F"
  primary: "#17130F"
  secondary: "#7A2E2E"
  accent: "#B67A4A"
  paper: "#FFF8EA"
  paper-deep: "#E6D0AD"
  muted: "#6D5D4B"
  line: "#3A2D24"
  band: "#17130F"
  band-text: "#FFF8EA"
  success: "#4F6A45"

@theme:
```css
@theme {
  --color-bg: #F3E7D0;
  --color-text: #17130F;
  --color-primary: #17130F;
  --color-secondary: #7A2E2E;
  --color-accent: #B67A4A;
  --color-paper: #FFF8EA;
  --color-paper-deep: #E6D0AD;
  --color-muted: #6D5D4B;
  --color-line: #3A2D24;
  --color-band: #17130F;
  --color-band-text: #FFF8EA;
  --color-success: #4F6A45;
  --font-display: var(--font-cormorant);
  --font-body: var(--font-source-serif);
}
```

typography:
  display: Cormorant Garamond via `--font-cormorant`
  body: Source Serif 4 via `--font-source-serif`
  scale:
    h1: `font-display text-[3.75rem] leading-[0.86] tracking-[-0.055em] md:text-[6.5rem] lg:text-[8rem]`
    h2: `font-display text-[2.5rem] leading-[0.9] tracking-[-0.04em] md:text-[4.5rem]`
    h3: `font-display text-[1.65rem] leading-[1] tracking-[-0.025em] md:text-[2.25rem]`
    body-large: `font-body text-[1.15rem] leading-[1.72] md:text-[1.3rem]`
    body: `font-body text-base leading-7 md:text-[1.05rem]`
    small: `font-body text-[0.78rem] font-semibold uppercase tracking-[0.18em]`
  weights: display 600 to 700, body 400 to 600, labels 700
  tracking: display tight, labels wide, body normal
  usage: serif only, no sans fallback styling beyond browser fallback

spacing:
  section: `py-16 md:py-24 lg:py-28`
  compact-section: `py-12 md:py-16`
  container: `mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8`
  grid: `grid gap-6 md:gap-8 lg:gap-10`
  rhythm: headings sit 4 to 6 spacing units above copy; cards use `p-6 md:p-8`; rules divide major sections

rounded:
  none: `rounded-none` for sections, cards, bands, frames
  tiny: `rounded-[2px]` for buttons and inputs only
  paper: `rounded-[1px]` for image sheet edges
  full: `rounded-full` only for one availability dot or tiny status badge

components:
  button-primary:
    classes: `inline-flex items-center justify-center rounded-[2px] border border-primary bg-primary px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.16em] text-paper transition-[color,background-color,border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary`
    use: primary call to action, book an appointment
  button-secondary:
    classes: `inline-flex items-center justify-center rounded-[2px] border border-line/70 bg-transparent px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.16em] text-primary transition-[color,background-color,border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary`
    use: services anchor, telephone link
  card-standard:
    classes: `group border border-line/60 bg-paper/70 p-6 shadow-none transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-secondary/70 hover:shadow-press md:p-8`
    use: services, process notes, contact detail cards
  nav-link:
    classes: `relative font-body text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-paper/82 transition-colors duration-300 hover:text-paper after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-secondary after:transition-transform after:duration-300 hover:after:scale-x-100`
    use: header links only
  input:
    classes: `w-full rounded-[2px] border border-line/55 bg-paper px-4 py-3 font-body text-base text-primary outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-muted/70 focus:border-secondary focus:shadow-[0_0_0_3px_rgba(122,46,46,0.12)]`
    use: contact form fields if Developer includes form UI
  dark-band:
    classes: `border-y border-line bg-band text-band-text`
    use: header, workshop proof strip, footer
  section-band:
    classes: `border-t border-line/45 bg-bg bg-papergrain [background-size:18px_18px]`
    use: all main content sections

Overview:
This site is a compact single-page proof of the design handoff system. It should feel like a York letterpress and bookbinding workshop, not a generic portfolio page. The page is deliberately small: home, services, contact. Distinction comes from material details, asymmetry, serif type, rules, and close-up workshop imagery.

Colors:
Use parchment as the page ground, paper as inset cards, ink black as the dominant type and band color, burgundy as the restrained accent, and tan as the material highlight. Accent color must be sparse. It should mark rules, button hovers, focus states, and small stamped labels. Do not flood backgrounds with burgundy.

Typography:
Use Cormorant Garamond for large display and Source Serif 4 for body copy. The page should feel printed, literary, and tactile. Headings are left aligned, tight, and oversized relative to the compact page. Labels are small, uppercase, and widely tracked.

Layout:
Use a narrow, disciplined single-page layout. The hero is asymmetric with copy on the left and a tactile image stack or proof-card on the right. Services use a three-column grid on desktop and single column on mobile. Contact uses a two-column layout with form or appointment details beside address and opening hours. Section dividers are visible printed rules.

Components:
Buttons are square, letterpress-like blocks. Cards are paper sheets with fine borders. Nav is a dark band with small uppercase links. Inputs are square paper fields with burgundy focus. Dark bands should feel like inked strips. Section bands should use subtle grain and fine rule separation.

Do's and Don'ts:
Do use craft-specific language. Do show tools, paper, stitching, and York location. Do keep the page compact. Do use quiet motion. Do keep all text in HTML/CSS. Do preserve left-aligned editorial structure.
Do not use gradients. Do not use bento grids. Do not use generic SaaS motifs, blob backgrounds, abstract 3D shapes, glassmorphism, neon, or floating dashboards. Do not use a centered hero. Do not use rounded cards beyond tiny paper radius. Do not overuse burgundy. Do not put text inside images.

### Technical Stack

Package dependencies for `package.json`:

```json
{
  "dependencies": {
    "@hookform/resolvers": "latest",
    "lucide-react": "latest",
    "motion": "latest",
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "react-hook-form": "latest",
    "zod": "latest"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "latest",
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "tailwindcss": "latest",
    "typescript": "latest"
  }
}
```

Recommended app structure:

```txt
app/
  globals.css
  layout.tsx
  page.tsx
components/
  SiteHeader.tsx
  HeroSection.tsx
  ServicesSection.tsx
  ContactSection.tsx
  SectionLabel.tsx
  PaperCard.tsx
  Button.tsx
  TextureOverlay.tsx
lib/
  fonts.ts
  site-data.ts
public/
  images/
    hero-bone-folder.jpg
    deckled-paper-stack.jpg
    thread-spine-detail.jpg
    burgundy-cloth-swatch.jpg
    york-workshop-door.jpg
```

`postcss.config.mjs`:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

`next.config.mjs`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
```

`app/globals.css` essentials:

```css
@import "tailwindcss";

@theme {
  --color-bg: #F3E7D0;
  --color-text: #17130F;
  --color-primary: #17130F;
  --color-secondary: #7A2E2E;
  --color-accent: #B67A4A;
  --color-paper: #FFF8EA;
  --color-paper-deep: #E6D0AD;
  --color-muted: #6D5D4B;
  --color-line: #3A2D24;
  --color-band: #17130F;
  --color-band-text: #FFF8EA;
  --color-success: #4F6A45;
  --font-display: var(--font-cormorant);
  --font-body: var(--font-source-serif);
}

html {
  scroll-behavior: smooth;
  background: var(--color-bg);
}

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
}

::selection {
  background: var(--color-secondary);
  color: var(--color-paper);
}
```

### Component Specs

Component: SiteHeader
File path: `components/SiteHeader.tsx`
Props:

```ts
type SiteHeaderProps = {
  links?: { href: string; label: string }[];
};
```

Exact Tailwind classes:

- Wrapper: `fixed left-0 top-0 z-50 w-full border-b border-paper/15 bg-band/95 text-band-text backdrop-blur-sm`
- Inner: `mx-auto flex max-w-[1180px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8`
- Brand: `font-display text-2xl font-semibold tracking-[-0.035em] text-paper`
- Descriptor: `hidden font-body text-[0.72rem] uppercase tracking-[0.18em] text-paper/60 md:block`
- Nav: `hidden items-center gap-7 md:flex`
- Mobile note: `font-body text-[0.72rem] uppercase tracking-[0.18em] text-paper/65 md:hidden`

Motion treatment:

```ts
initial={{ y: -24, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
```

Content:
- Brand text: `Design Contract Smoke Test`
- Descriptor: `Independent bookbinder, York`
- Links: Home, Services, Contact

Component: Button
File path: `components/Button.tsx`
Props:

```ts
type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};
```

Exact Tailwind classes:

- Base: `inline-flex items-center justify-center rounded-[2px] px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.16em] transition-[color,background-color,border-color,transform] duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary`
- Primary: `border border-primary bg-primary text-paper hover:border-secondary hover:bg-secondary`
- Secondary: `border border-line/70 bg-transparent text-primary hover:border-primary hover:bg-primary hover:text-paper`

Motion treatment:
- No entrance motion in the Button component itself.
- Use `whileHover={{ y: -2 }}` only if rendered as `motion.a`; otherwise Tailwind hover is enough.
- Use `whileTap={{ scale: 0.985 }}`.

Content examples:
- `Book a bench appointment`
- `See services`

Component: SectionLabel
File path: `components/SectionLabel.tsx`
Props:

```ts
type SectionLabelProps = {
  eyebrow: string;
  number: string;
};
```

Exact Tailwind classes:

- Wrapper: `mb-7 flex items-center gap-4`
- Number: `font-body text-[0.78rem] font-bold uppercase tracking-[0.18em] text-secondary`
- Rule: `h-px flex-1 bg-line/45`
- Eyebrow: `font-body text-[0.78rem] font-bold uppercase tracking-[0.18em] text-muted`

Motion treatment:

```ts
initial={{ opacity: 0, x: -18 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, amount: 0.5 }}
transition={{ duration: 0.45, ease: "easeOut" }}
```

Component: PaperCard
File path: `components/PaperCard.tsx`
Props:

```ts
type PaperCardProps = {
  children: React.ReactNode;
  className?: string;
};
```

Exact Tailwind classes:

- Card: `group border border-line/60 bg-paper/75 p-6 shadow-none transition-[border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-secondary/70 hover:shadow-press md:p-8`

Motion treatment:

```ts
initial={{ opacity: 0, y: 22 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.25 }}
transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
```

Component: TextureOverlay
File path: `components/TextureOverlay.tsx`
Props: none
Exact Tailwind classes:

- Overlay: `pointer-events-none fixed inset-0 z-[1] opacity-[0.12] mix-blend-multiply [background-image:radial-gradient(rgba(23,19,15,.4)_0.6px,transparent_0.6px)] [background-size:14px_14px]`

Motion treatment:
- None.

Content:
- Decorative only. Add `aria-hidden="true"`.

Component: HeroSection
File path: `components/HeroSection.tsx`
Props:

```ts
type HeroSectionProps = {
  title?: string;
};
```

Exact Tailwind classes:

- Section: `relative overflow-hidden bg-bg pt-28 pb-16 md:pt-36 lg:min-h-[88vh]`
- Container: `relative z-10 mx-auto grid max-w-[1180px] gap-10 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-end lg:px-8`
- Left column: `max-w-[760px]`
- Eyebrow line: `mb-6 flex items-center gap-3 font-body text-[0.78rem] font-bold uppercase tracking-[0.18em] text-muted`
- Eyebrow mark: `h-px w-12 bg-secondary`
- H1: `font-display text-[3.75rem] leading-[0.86] tracking-[-0.055em] text-primary md:text-[6.5rem] lg:text-[8rem]`
- Lead: `mt-7 max-w-[640px] font-body text-[1.15rem] leading-[1.72] text-text md:text-[1.3rem]`
- CTA row: `mt-8 flex flex-col gap-3 sm:flex-row`
- Proof facts: `mt-10 grid gap-3 border-y border-line/50 py-5 sm:grid-cols-3`
- Fact label: `font-body text-[0.72rem] font-bold uppercase tracking-[0.18em] text-muted`
- Fact value: `mt-1 font-display text-2xl font-semibold tracking-[-0.03em] text-primary`
- Right image stack: `relative min-h-[470px] md:min-h-[620px]`
- Main image: `absolute right-0 top-4 w-[82%] rotate-[1.5deg] border-[10px] border-paper object-cover shadow-press outline outline-1 outline-line/40 transition-transform duration-500 hover:rotate-0 hover:scale-[1.015]`
- Secondary image: `absolute bottom-6 left-0 w-[52%] -rotate-[2deg] border-[8px] border-paper object-cover shadow-press outline outline-1 outline-line/40 transition-transform duration-500 hover:rotate-0 hover:scale-[1.015]`
- Stamp card: `absolute bottom-0 right-8 border border-secondary bg-paper px-5 py-4 font-body text-[0.76rem] font-bold uppercase tracking-[0.18em] text-secondary shadow-press`

Motion treatment:

- Hero container controls stagger:

```ts
const heroParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.12 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
```

- Right images:

```ts
initial={{ opacity: 0, y: 28, rotate: 2 }}
animate={{ opacity: 1, y: 0, rotate: 1.5 }}
transition={{ duration: 0.75, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
```

Content:
- Eyebrow: `York workshop - letterpress proof no. 01`
- H1: `Books repaired, rebound, and made by hand.`
- Lead: `A compact York bindery for well-loved volumes, presentation copies, cloth cases, and practical repairs. Bone folders, linen thread, deckled paper, and patient bench work.`
- CTAs: `Book a bench appointment`, `See services`
- Proof facts:
  - `Base` / `York`
  - `Material` / `Cloth, thread, paper`
  - `Method` / `Hand bound`
- Stamp: `Open by appointment`

Component: ServicesSection
File path: `components/ServicesSection.tsx`
Props: none
Exact Tailwind classes:

- Section: `relative border-t border-line/45 bg-bg bg-papergrain py-16 [background-size:18px_18px] md:py-24 lg:py-28`
- Container: `mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8`
- Intro grid: `grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:items-end`
- H2: `font-display text-[2.5rem] leading-[0.9] tracking-[-0.04em] text-primary md:text-[4.5rem]`
- Intro copy: `font-body text-[1.05rem] leading-8 text-text md:text-[1.18rem]`
- Service grid: `mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3`
- Card number: `mb-8 font-body text-[0.78rem] font-bold uppercase tracking-[0.18em] text-secondary`
- Card title: `font-display text-[1.65rem] leading-[1] tracking-[-0.025em] text-primary md:text-[2.25rem]`
- Card copy: `mt-4 font-body text-base leading-7 text-text`
- Meta: `mt-6 border-t border-line/35 pt-4 font-body text-[0.75rem] font-bold uppercase tracking-[0.18em] text-muted`
- Image strip: `mt-12 grid gap-5 md:grid-cols-[0.7fr_1.3fr]`
- Strip image: `h-[280px] w-full border-[8px] border-paper object-cover shadow-press outline outline-1 outline-line/35 md:h-[360px]`
- Dark note: `flex min-h-[280px] flex-col justify-between border border-line bg-band p-7 text-band-text md:min-h-[360px] md:p-9`

Motion treatment:
- SectionLabel uses reveal.
- Intro H2 and copy use `whileInView` with y 24, opacity 0 to y 0, opacity 1.
- Service cards stagger by index with delay `index * 0.07`.

Content service cards:
1. `Cloth rebacking` - `Stabilise worn spines, retain character, and return daily-use books to the shelf with strong cloth and sympathetic paper.` Meta: `Repair bench`
2. `Case binding` - `Simple hand-built cases for editions, notebooks, portfolios, and presentation copies.` Meta: `Made to measure`
3. `Section sewing` - `Linen thread, folded gatherings, and careful tension for books that need to open cleanly and last.` Meta: `Thread work`
4. `Slipcases` - `Protective boxes for heirlooms, small editions, and gifts, measured and covered by hand.` Meta: `Protection`
5. `Paper repair` - `Tears, loose leaves, and softened corners repaired with restraint so the original material remains in charge.` Meta: `Conservation light`

Component: ContactSection
File path: `components/ContactSection.tsx`
Props: none
Exact Tailwind classes:

- Section: `relative border-t border-line/45 bg-paper py-16 md:py-24 lg:py-28`
- Container: `mx-auto grid max-w-[1180px] gap-10 px-4 sm:px-6 md:grid-cols-[1fr_0.9fr] lg:px-8`
- H2: `font-display text-[2.5rem] leading-[0.9] tracking-[-0.04em] text-primary md:text-[4.5rem]`
- Body: `mt-6 max-w-[620px] font-body text-[1.05rem] leading-8 text-text md:text-[1.18rem]`
- Contact card: `border border-line/65 bg-bg p-6 shadow-press md:p-8`
- Detail rows: `divide-y divide-line/30 border-y border-line/40`
- Detail row: `grid gap-1 py-4 sm:grid-cols-[130px_1fr]`
- Label: `font-body text-[0.72rem] font-bold uppercase tracking-[0.18em] text-muted`
- Value: `font-body text-base leading-7 text-primary`
- Form: `mt-7 grid gap-4`
- Two input grid: `grid gap-4 sm:grid-cols-2`
- Textarea: `min-h-[132px] resize-y rounded-[2px] border border-line/55 bg-paper px-4 py-3 font-body text-base text-primary outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-muted/70 focus:border-secondary focus:shadow-[0_0_0_3px_rgba(122,46,46,0.12)]`

Motion treatment:
- Section reveal same as Services.
- Contact card delay 0.14.
- Form fields do not animate individually to keep page compact.

Content:
- Eyebrow: `03 - Contact`
- H2: `Bring the book to the bench.`
- Body: `Appointments keep the bench quiet and the advice specific. Send a note with the book type, condition, and what you want it to become.`
- Address: `Stonegate workshop, York YO1`
- Phone: `01904 010 221`
- Email: `bench@designcontract.test`
- Hours: `Tuesday to Saturday, 10:00 to 16:00, by appointment`
- Form labels: Name, Email, Book or project notes
- Submit: `Send enquiry`

Component: SiteFooter
File path: `components/SiteFooter.tsx`
Props: none
Exact Tailwind classes:

- Footer: `border-t border-paper/15 bg-band py-8 text-band-text`
- Inner: `mx-auto flex max-w-[1180px] flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8`
- Text: `font-body text-sm leading-6 text-paper/70`
- Mark: `font-body text-[0.72rem] font-bold uppercase tracking-[0.18em] text-paper/55`

Motion treatment:
- None.

Content:
- `Design Contract Smoke Test, independent bookbinder in York.`
- `Proof page for DESIGN.md pipeline adoption.`

### Page Specs

Page: Home
Route: `/`
Components used in order:
1. TextureOverlay
2. SiteHeader
3. HeroSection
4. ServicesSection
5. ContactSection
6. SiteFooter

Layout:
- Single-page scroll with anchor links: `#home`, `#services`, `#contact`.
- All sections use `max-w-[1180px]` container.
- Header is fixed, dark, compact.
- Hero uses asymmetric two-column layout on desktop and stacked layout on mobile.
- Services use intro row then service card grid.
- Contact uses copy and details card with optional compact form.
- Footer closes with a dark ink band.

Page content copy:

Hero:
- Eyebrow: `York workshop - letterpress proof no. 01`
- Heading: `Books repaired, rebound, and made by hand.`
- Lead: `A compact York bindery for well-loved volumes, presentation copies, cloth cases, and practical repairs. Bone folders, linen thread, deckled paper, and patient bench work.`
- CTA primary: `Book a bench appointment`
- CTA secondary: `See services`

Services:
- Eyebrow: `02 - Services`
- Heading: `Small-batch binding, repair, and protective work.`
- Intro: `The bench is set up for practical craft rather than volume production. Each job starts with a conversation about use, value, and how visible the repair should be.`
- Services as listed in Component Specs.
- Dark note title: `Restraint is part of the repair.`
- Dark note copy: `New material should support the book without pretending the years never happened. The goal is strength, clarity, and honest evidence of the hand.`

Contact:
- Eyebrow: `03 - Contact`
- Heading: `Bring the book to the bench.`
- Copy: `Appointments keep the bench quiet and the advice specific. Send a note with the book type, condition, and what you want it to become.`
- Contact details as listed above.

SEO metadata:

```ts
export const metadata = {
  title: "Design Contract Smoke Test | Independent Bookbinder in York",
  description: "A compact York bookbinding workshop for repairs, case binding, slipcases, paper repair, and hand-sewn sections.",
};
```

Accessibility requirements:
- All images require meaningful alt text.
- Header nav links must have visible focus outlines.
- Color contrast must pass WCAG AA. Ink on parchment and paper passes comfortably.
- Do not rely on color alone for focus or status.
- Use semantic sections with `aria-labelledby` when practical.
- Respect reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Image Generation Prompts

All images must contain no text, letters, numerals, labels, logos, or signage. Render all wording in HTML/CSS only.

image: hero-bone-folder.jpg - dimensions: 1400x1800 - prompt: `Close-up editorial photograph of a bookbinding bench in warm north-light, a smooth bone folder resting beside folded cream paper signatures, linen thread, small awl, and black ink smudges on a worn wooden table, tactile letterpress workshop atmosphere, warm parchment tones, restrained burgundy cloth in the background, shallow depth of field, no text, no letters, no labels, no logo` - alt text: `Bone folder and folded paper signatures on a warm bookbinding bench.`

image: deckled-paper-stack.jpg - dimensions: 1200x900 - prompt: `A stack of handmade deckled-edge cream papers on a dark wooden workbench, soft side light, visible fibre texture, a burgundy cloth strip partly tucked underneath, quiet craft studio mood, high detail, editorial still life, no text, no markings, no labels, no logo` - alt text: `Deckled handmade papers stacked on a dark workbench.`

image: thread-spine-detail.jpg - dimensions: 1200x900 - prompt: `Macro photograph of hand-sewn book sections with linen thread along the spine, cream paper folds, dark ink-black background cloth, precise craft detail, warm studio lighting, shallow depth of field, no text, no numbers, no labels, no logo` - alt text: `Close-up of linen thread sewn through folded book sections.`

image: burgundy-cloth-swatch.jpg - dimensions: 1000x1200 - prompt: `Editorial still life of burgundy book cloth swatches, brass binding weights, a small brush, and cream paper offcuts on a parchment-colored surface, tactile handmade materials, soft shadows, no text, no labels, no logo` - alt text: `Burgundy book cloth swatches with binding tools and paper offcuts.`

image: york-workshop-door.jpg - dimensions: 1200x1400 - prompt: `Exterior detail of an old York workshop doorway in warm stone, black painted wooden door slightly open, no visible signage, a glimpse of paper and bookbinding tools inside, muted historic street atmosphere, natural overcast light, no text, no letters, no logo` - alt text: `Old York workshop doorway with a glimpse of bookbinding tools inside.`

### Animation Spec (MANDATORY)

Hero entrance sequence:

1. Header enters first: y -24 to 0, opacity 0 to 1, duration 0.55, delay 0.
2. Hero eyebrow enters: y 22 to 0, opacity 0 to 1, duration 0.65, delay 0.12.
3. Hero h1 enters: y 22 to 0, opacity 0 to 1, duration 0.65, delay 0.23.
4. Hero lead enters: y 22 to 0, opacity 0 to 1, duration 0.65, delay 0.34.
5. CTA row enters: y 22 to 0, opacity 0 to 1, duration 0.65, delay 0.45.
6. Proof facts enter: y 22 to 0, opacity 0 to 1, duration 0.65, delay 0.56.
7. Main image enters: y 28 to 0, opacity 0 to 1, rotate 3 to 1.5, duration 0.75, delay 0.42.
8. Secondary image enters: y 28 to 0, opacity 0 to 1, rotate -4 to -2, duration 0.75, delay 0.55.
9. Stamp enters: scale 0.96 to 1, opacity 0 to 1, duration 0.45, delay 0.76.

Use this easing wherever possible:

```ts
const ease = [0.22, 1, 0.36, 1];
```

Section scroll reveal pattern:

- Trigger once per section with `viewport={{ once: true, amount: 0.22 }}`.
- Section label: opacity 0, x -18 to opacity 1, x 0, duration 0.45.
- Section heading: opacity 0, y 24 to opacity 1, y 0, duration 0.6, delay 0.08.
- Section copy: opacity 0, y 18 to opacity 1, y 0, duration 0.6, delay 0.16.
- Cards: opacity 0, y 22 to opacity 1, y 0, duration 0.55, delay `0.12 + index * 0.07`.
- Images: opacity 0, y 26, rotate small to opacity 1, y 0, target rotate, duration 0.7.

Card and button hover states:

- Cards: `hover:-translate-y-1 hover:border-secondary/70 hover:shadow-press`.
- Primary button: `hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary`.
- Secondary button: `hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-paper`.
- Images: default slight rotation, hover returns to 0 rotation and scale 1.015.
- Nav links: underline scale from left, color to paper.
- Inputs: burgundy border plus soft ring on focus.

Page transition approach:

- Single-page site, no route transition required beyond initial hero entrance.
- If later expanded, wrap pages in a `motion.main` with:

```ts
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.28, ease: "easeOut" }}
```

- Do not use large cross-page slides. The visual language is printed material, so transitions should feel like paper appearing, not an app carousel.

### Anti-Convergence Rules (copy from brief + add your own)

Copied from brief:
- Use a compact but distinctive aesthetic: letterpress workshop, bone folder tools, deckled paper, ink-black type, warm parchment, restrained burgundy accent.
- Include home, services, and contact sections only.
- Keep scope deliberately small.
- Verify the pipeline carries a DESIGN.md design contract from Specwriter to Developer and Polish.

Additional rules:
- No gradients, except the optional tiny grain implementation in CSS. If grain is used, it must be nearly invisible and paper-like.
- No bento grid.
- No generic SaaS motifs: no dashboards, cards floating in space, abstract mesh shapes, stats walls, glowing orbs, feature icons, or fake analytics.
- No centered hero. The hero must be left-led and asymmetric.
- No glassmorphism or blurred translucent cards.
- No neon, blue-purple startup palette, or bright accent overload.
- No large rounded cards. Default geometry is square and printed.
- No stock-smiling people. Use hands, tools, paper, thread, cloth, benches, and workshop details.
- No text inside images.
- No decorative icon set unless the icon is clearly functional. Prefer rules, labels, and material photography over icons.
- Burgundy is an accent only. Use it for rules, stamps, hover states, and focus states.
- Do not expand the scope into extra pages, blog, ecommerce, booking engine, gallery, or CMS.
- Keep the copy practical. Avoid luxury cliches like bespoke excellence, timeless craft, or elevated experience unless tied to concrete materials and work.

Developer handoff checklist:

- Build a Next.js single page at `/`.
- Include `# DESIGN.md` content in the project root as `DESIGN.md` if file output is part of the downstream implementation.
- Use the exact @theme tokens above.
- Use next/font with Cormorant Garamond and Source Serif 4.
- Implement the six core components listed.
- Use five image assets with the exact filenames listed.
- Keep all text in HTML/CSS.
- Match section order: Header, Hero, Services, Contact, Footer.
- Keep scope small and smoke-test oriented.
- Verify responsive behavior at 375, 768, 1024, and 1440 widths.
- Verify reduced motion support.
- Verify all nav anchors work.
- Verify there are no em dash or en dash characters in source copy.

QA acceptance criteria:

1. The issue comment contains this spec and the `# DESIGN.md` section.
2. The implementation can be completed with no missing tokens, fonts, component paths, or copy.
3. The visual system reads as York bookbinder, letterpress, parchment, ink, burgundy restraint.
4. The website has only home, services, and contact content.
5. The page avoids generic SaaS patterns.
6. The accent color is used sparingly.
7. The images have unique filenames and unique descriptions.
8. The page remains usable without images because all required text is HTML/CSS.
9. Buttons, cards, nav links, and inputs have specified hover or focus states.
10. Motion is quiet, staggered, and disabled under reduced motion.
