# PRAHO! PROJECT - Final Tech Stack

> Chosen stack for migrating prahoproject.com from WordPress/WooCommerce to Next.js

---

## Architecture Overview

```
Vercel (Hosting)
└── Next.js App
    ├── /app/(frontend)/...        Public website (CZ + EN)
    ├── /app/(payload)/admin/...   Payload CMS admin dashboard
    ├── /api/...                   Auto-generated REST + GraphQL APIs
    └── Stripe webhooks            Payment processing

Neon (Database)
└── PostgreSQL                     All CMS content, products, orders, quiz data

Stripe (Payments)
└── Card payments, bank transfers, recurring donations

Vercel Blob / Payload Media (File Storage)
└── Images, PDFs, documents
```

---

## Stack Components

### Core

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 15+ (App Router) | Frontend + backend in one app |
| **CMS + E-commerce** | Payload CMS 3.x | Content management, product catalog, orders, admin UI |
| **Database** | PostgreSQL via [Neon](https://neon.tech) | All data storage (content, products, orders, quizzes) |
| **Hosting** | [Vercel](https://vercel.com) | Deployment, CDN, edge functions, serverless |
| **Language** | TypeScript | Full stack type safety |

### Payments & E-commerce

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Card payments** | Stripe (via Payload Stripe plugin) | Checkout, product purchases |
| **Bank transfer** | Manual flow in Payload admin | Mark orders as paid when transfer received |
| **Recurring donations** | Stripe Subscriptions | Monthly donation support |
| **Shipping** | Custom Payload collection + Zasilkovna API | Pickup points, home delivery, free pickups |
| **Cart** | Client-side state (React Context/Zustand) | Cart persisted in localStorage |

### Frontend

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Styling** | Tailwind CSS | Rapid UI development, design system |
| **i18n** | next-intl or Payload built-in localization | Czech (default) + English (`/en/` prefix) |
| **Forms** | React Hook Form | Quiz forms, contact form, donation form |
| **Charts** | Recharts or Chart.js | Statistics page data visualization |
| **Image optimization** | Next.js Image component | Automatic optimization via Vercel |

### Third-Party Integrations

| Service | Purpose | Notes |
|---------|---------|-------|
| **Stripe** | Payments + donations | Already used by PRAHO!, supports CZ |
| **Zasilkovna (Packeta)** | Shipping | Custom API integration (~1-2 days dev) |
| **Ecomail** | Newsletter + email marketing | Keep existing integration |
| **Google Analytics 4** | Website analytics | Keep existing (GT-5D93S6L2) |
| **Google reCAPTCHA v3** (or Cloudflare Turnstile) | Form spam protection | Turnstile is lighter alternative |

---

## Payload CMS Collections (Data Model)

| Collection | Purpose | Key Fields |
|------------|---------|------------|
| **Pages** | Static content pages (About, Manifest, Contact...) | title, slug, content (rich text), layout blocks |
| **Blog Posts** | News articles | title, slug, content, featured image, categories, date |
| **Products** | E-shop items | name, slug, price, salePrice, images, variants, SKU, weight, dimensions, categories |
| **Orders** | Purchase records | items, billing, shipping, payment status, shipping method |
| **Portfolio Items** | Art installations/realizations | title, description, images (gallery), partners, category |
| **Team Members** | Author profiles | name, role, photo, email, bio |
| **Partners** | Partner logos + links | name, logo, URL, category (institutional/district/international/strategic/media) |
| **Quizzes** | 24 interactive quizzes | number, intro text, questions (array of MC + open), closing fields |
| **Quiz Responses** | Submitted answers | quiz reference, answers, age category, happiness, timestamp |
| **Media** | All uploads | images, PDFs, documents |
| **Legal Pages** | Privacy, cookies, T&C | title, content (rich text), effective date |

---

## Estimated Monthly Cost

### Baseline (low traffic: ~500 visits, ~30 orders/month)

| Service | Plan | Cost |
|---------|------|------|
| **Vercel** | Hobby (free) or Pro ($20) | $0-20/mo |
| **Neon PostgreSQL** | Free tier (0.5 GB storage, 190 compute hours) | $0/mo |
| **Payload CMS** | Self-hosted (MIT license) | $0/mo |
| **Stripe** | Pay-per-transaction only | ~1.5% + €0.25/tx |
| **Ecomail** | Existing plan | (already paid) |
| **Domain** | prahoproject.com renewal | ~$1/mo (~$12/yr) |
| **Total platform fees** | | **$0-20/mo** |

### With growth (1,000 visits, 100 orders/month)

| Service | Plan | Cost |
|---------|------|------|
| **Vercel** | Pro | $20/mo |
| **Neon PostgreSQL** | Free tier still sufficient | $0/mo |
| **Payload CMS** | Self-hosted | $0/mo |
| **Stripe** | ~100 transactions @ avg 500 Kc | ~€37.50/mo in fees |
| **Total platform fees** | | **~$20/mo + Stripe fees** |

### Comparison with current WordPress hosting

| | Current (WordPress) | New (Payload + Vercel) |
|---|---|---|
| Hosting | ~$10-30/mo (shared/managed WP) | $0-20/mo (Vercel) |
| CMS | WordPress (free) | Payload (free) |
| E-commerce | WooCommerce (free + plugins) | Payload built-in (free) |
| Database | Included in WP hosting | Neon free tier ($0) |
| **Total** | **~$10-30/mo** | **~$0-20/mo** |

---

## Why This Stack

| Decision | Reasoning |
|----------|-----------|
| **Payload over Sanity/Storyblok** | Single platform for CMS + e-commerce. No external API dependency. Free. Full control. |
| **Payload over Shopify** | No monthly subscription. 10 products don't justify $25+/mo platform. Full design control. |
| **Neon over Supabase** | Best serverless PostgreSQL for Vercel. Generous free tier. Auto-scaling. Official Payload adapter. |
| **Vercel over self-hosted** | Zero-config Next.js deployment. Free tier covers this scale. CDN, edge functions, analytics built-in. |
| **Tailwind over CSS modules** | Faster development. Consistent design tokens. Works great with AI-assisted coding. |
| **Stripe direct over payment aggregators** | Already used by PRAHO!. Supports CZ. Handles both purchases and recurring donations. |

---

## What Needs Custom Development

| Feature | Effort | Notes |
|---------|--------|-------|
| **Zasilkovna integration** | 1-2 days | Packeta API for pickup points + home delivery |
| **Quiz conversational UI** | 3-5 days | Step-by-step form with animations (24 quizzes, reusable component) |
| **Statistics charts** | 1-2 days | Aggregate quiz responses into charts |
| **Donation multi-step form** | 1-2 days | Amount selection + billing + Stripe payment |
| **Homepage hero animation** | 1-2 days | Prague blob/map SVG animation |
| **Cookie consent** | 0.5 day | Bilingual banner with preferences |
| **Cart + checkout flow** | 3-5 days | Client-side cart, checkout page with Stripe Elements |
| **Email notifications** | 1 day | Order confirmation, contact form (via Resend or Ecomail) |

---

## Database: Why Neon PostgreSQL (Not Convex)

Payload CMS requires a traditional database with a specific adapter. Supported options:
- **PostgreSQL** (recommended) — via `@payloadcms/db-postgres`
- **MongoDB** — via `@payloadcms/db-mongodb`
- **SQLite** — via `@payloadcms/db-sqlite` (dev only)

Convex is a proprietary reactive backend service, not a traditional database. There is no Payload adapter for Convex, and Convex's query model (reactive subscriptions, no SQL) is architecturally incompatible with how Payload reads/writes data.

**Neon** is the standard choice for Payload + Vercel deployments:
- Serverless PostgreSQL (scales to zero when idle)
- Free tier: 0.5 GB storage, 190 compute hours/month
- Sub-millisecond cold starts on Vercel
- Official Payload support
