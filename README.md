# The Virtuose

A luxurious, cinematic marketing site for **The Virtuose** — a boutique video
production studio (French Made, based in Andorra). Built as a bespoke Next.js
application with a warm-monochrome, edit-bay visual identity.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Framer Motion** for orchestrated reveals and transitions
- **Lenis** for smooth scrolling (auto-disabled under reduced-motion)
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

## Design system

Everything is driven by tokens in [`src/app/globals.css`](src/app/globals.css):

- **Palette** — warm monochrome: `--void` (near-black), `--bone` (projector
  off-white), `--ash` (secondary), `--flare` (the single warm "light" accent).
- **Type scale** — fluid `clamp()` steps from caption to `--display-lg`.
- **Motion** — shared `--ease-out` film curve and duration tokens.

### Signature: the timecode

The studio's identity device is a running `HH:MM:SS:FF` timecode (see
[`Timecode.tsx`](src/components/Timecode.tsx)) plus a viewfinder frame, film
grain, and cinemascope mattes on every "screen" — the site is dressed as an
edit bay. All of it respects `prefers-reduced-motion`.

## Adding real footage & imagery

The site ships with animated monochrome placeholders so the layout is complete
before any assets exist. To go live:

- **Video** → see [`public/reels/README.md`](public/reels/README.md)
- **Portrait** → see [`public/studio/README.md`](public/studio/README.md)
- **Projects** → edit the data in [`src/lib/works.ts`](src/lib/works.ts)
  (titles, clients, categories, runtimes, narrative). The work grid and the
  `/work/[slug]` detail pages are generated from that single file.

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
