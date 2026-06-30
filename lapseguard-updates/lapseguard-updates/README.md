# LapseGuard

A premium marketing site for **LapseGuard**, a compliance platform that tracks license,
certification, permit, and insurance renewals so nothing lapses unnoticed.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and
shadcn/ui-style components on Radix primitives.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Design system

- **Color**: deep ink neutrals (`#0F1320`) + a single confident brand blue (`#2954FF`),
  with semantic safe/warn/danger colors reserved for renewal urgency states.
- **Type**: Inter Tight for display headings, Inter for body copy, JetBrains Mono for
  data figures (countdowns, stats, prices) — set via `next/font` in `app/layout.tsx`.
- **Signature motif**: the `CountdownPill` component (`components/ui/countdown-pill.tsx`)
  — an urgency-colored "Nd left" chip that recurs in the hero mockup, the dashboard
  preview, and feature copy, plus the rotating radar-sweep glow behind the hero dashboard
  (`components/dashboard/dashboard-shell.tsx`). Together they dramatize the product's
  core promise: LapseGuard is always counting down, so you don't have to.
- **Dark mode**: class-based, via `next-themes`, toggle in the navbar.

## Project structure

```
app/                     Routes, layout, metadata, generated icons/OG image
  layout.tsx              Root layout: fonts, SEO metadata, providers, nav/footer shell
  page.tsx                Homepage: composes all marketing sections in order
  globals.css             Tailwind layers, focus states, reduced-motion handling
  icon.tsx / apple-icon.tsx / opengraph-image.tsx   Generated favicon + OG image (next/og)
  sitemap.ts / robots.ts / manifest.ts              SEO + PWA metadata

components/
  ui/                     Reusable primitives (Button, Card, Badge, Accordion, Switch, …)
  layout/                 Navbar, Footer, CookieBanner, ThemeToggle
  dashboard/              The fake SaaS dashboard mockup, built from small composable panels
  sections/               One file per landing-page section (Hero, Pricing, FAQ, …)

lib/
  constants.ts            All marketing copy/data (nav, features, pricing, FAQ, testimonials)
  animations.ts            Shared Framer Motion variants
  utils.ts                 `cn()` class-merging helper

types/index.ts             Shared TypeScript types for the content data
```

## Notes for production

- **Contact form and newsletter signup are now wired to real API routes**
  (`app/api/contact/route.ts` and `app/api/newsletter/route.ts`), using
  [Resend](https://resend.com) to send email — no domain verification needed
  to start, since they use Resend's shared `onboarding@resend.dev` sender.
  Set these two environment variables (locally in `.env.local`, and in
  Vercel under Project → Settings → Environment Variables, then redeploy):
  - `RESEND_API_KEY` — your API key from resend.com
  - `CONTACT_TO_EMAIL` — the inbox you want submissions delivered to

  See `.env.example`. The newsletter route currently just emails you each
  new subscriber; swap it for Resend Audiences or a provider like
  Mailchimp/ConvertKit once you want to send real campaigns.
- Replace the text-based "company logos" in the social proof section with real
  customer logos (SVG) once available.
- Update `SITE_URL` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` to
  the production domain before launch.
