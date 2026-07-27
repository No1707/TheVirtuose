# The Virtuose

A vitrine site for **The Virtuose** — a video editing service.

## Stack

- **Next.js 15** + **React 19** + **TypeScript**
- **Framer Motion** for reveals and transitions
- **Lenis** for smooth scrolling
- Bespoke CSS with a design-token system (no UI framework)
- Fonts via `next/font`: **Fraunces** (display serif), **Geist** (sans),
  **Geist Mono** (timecode / labels)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

Deploy: this is a standard Next.js app — one-click on **Vercel**, or any Node
host. All pages are statically renderable.

## Structure

```
src/
  app/
    layout.tsx            Root layout: fonts, nav, grain, cursor, frame
    page.tsx              Home (all sections)
    work/[slug]/page.tsx  Generated case-study pages
    not-found.tsx         404
    globals.css           Design tokens + base styles
  components/             One component + CSS module per section
  lib/
    works.ts              Project data (single source of truth)
    motion.ts             Shared Framer Motion variants
```

## Accessibility

- Skip link, visible focus rings, semantic landmarks and headings
- `prefers-reduced-motion` honoured across preloader, scroll, grain, marquee
- Touch targets ≥ 44px; custom cursor is fine-pointer only
- Client names in the marquee are also exposed as real text for screen readers
