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
