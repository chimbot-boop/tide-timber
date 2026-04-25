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
