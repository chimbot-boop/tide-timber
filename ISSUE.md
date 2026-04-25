# Developer Instructions

The spec below is your complete blueprint. Follow it exactly. Copy the TSX code blocks verbatim. Do not improvise.

## BUILD ORDER
1. Read the spec completely, including any 'DESIGN.md' section. Treat SPEC.md as the canonical build contract and DESIGN.md as the structured visual system contract.
2. Generate ALL images from the IMAGE MANIFEST using build_generate_image FIRST
3. Write globals.css, layout.tsx, components, then pages. Map DESIGN.md tokens into globals.css, layout.tsx, and reusable classes before building pages.
4. Wrap sections in motion components as specified (TextReveal, FadeIn, StaggerChildren, ScaleIn, SlideIn)
5. npm install --legacy-peer-deps && npm run build (MUST pass)
6. Push via build_push_and_pr

## RULES
- Every section uses the container wrapper from the spec (max-w-7xl mx-auto px-6 lg:px-8)
- No placeholder text. No [BRACKETS]. If the spec has copy, use it exactly.
- Each page = separate file under src/app/{route}/page.tsx
- Git author: chimbot-boop <chimbot@chimnie.com>
- Tailwind v4: @theme in globals.css, NOT tailwind.config.ts
- If DESIGN.md is present, preserve it in the repository root as DESIGN.md so Polish and QA can verify visual intent
- DESIGN.md must stay aligned with globals.css, layout.tsx, and primary component styling
- British English. No em dashes.

IMPORTANT: The design persona below is NON-NEGOTIABLE. Do not soften, rebalance, or genericise any design decision from the spec.

## CRITICAL: Image Generation
For EVERY <img> or <Image> tag in your code, you MUST call build_generate_image to create the actual image file. An <img src="/images/workshop.jpg"> tag without a corresponding file at public/images/workshop.jpg is a BROKEN IMAGE.

After writing all pages:
1. List every image src path in your TSX files
2. Check which ones exist in public/images/ (run: ls public/images/)
3. For any missing, call build_generate_image with a descriptive prompt
4. Verify ALL images exist before running npm run build
5. DO NOT mark this issue as done until every image file exists
## Design Persona (copy verbatim from brief)
### Brand Identity
- Exact Tailwind colour tokens with config snippet
- Font imports via next/font/google with variable names
- Typography scale (h1-h3, body, small) with exact Tailwind classes
- Spacing rules, border rules, corner rules
- Interaction rules (transition durations, hover behaviours)

### DESIGN.md Contract (MANDATORY)
After the technical specification, add a separate section headed exactly # DESIGN.md. Treat this as the structured visual system contract for Developer, Polish, and QA. It does not replace the technical spec. It must contain:
- name
- colors with semantic tokens matching the @theme block
- typography with display/body fonts, scale, weights, tracking, and usage rules
- spacing with section, container, grid, and rhythm rules
- rounded with radius tokens and where to use them
- components covering button-primary, button-secondary, card-standard, nav-link, input, and any dark-band or section-band pattern
- Overview, Colors, Typography, Layout, Components, and Do's and Don'ts prose sections
- Anti-convergence rules that are not pure tokens, such as no gradients, no bento grid, no generic SaaS motifs, no centred hero if the persona forbids it, and accent colour used sparingly

Keep SPEC.md as the canonical build contract. Keep DESIGN.md compact, explicit, and aligned with the spec. If the two conflict, the spec wins and DESIGN.md must be corrected before handoff.

### Technical Stack
- Package.json dependencies (next, react, motion, react-hook-form, zod, @hookform/resolvers, lucide-react)
- Config files (tailwind.config.ts, postcss.config.mjs, next.config.mjs)

### Component Specs
For EACH component: name, file path, props, exact Tailwind classes, motion treatment (initial/animate/whileInView), content.

### Page Specs
For EACH page: route, components used in order, layout, content copy.

### Image Generation Prompts
For EACH required image: filename, dimensions, detailed prompt for image_generate, alt text.

### Animation Spec (MANDATORY)
- Hero entrance sequence with stagger delays
- Section scroll reveal pattern
- Card/button hover states
- Page transition approach

### Anti-Convergence Rules (copy from brief + add your own)

---

The FULL TECHNICAL SPEC is in the comments of issue CHIA-91.
Read the spec from CHIA-91 using the Paperclip API, then use the build tools to construct the site.
Do NOT write a spec yourself. Do NOT complete or extend the spec. Your job is to BUILD, not write.

Business name from title: Build website: Design Contract Smoke Test
