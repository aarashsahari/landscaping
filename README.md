# Nolasco Landscaping — Website

A complete, production-ready, SEO-optimized landscaping website built with
**Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed to
rank in local Google search for landscaping services in Burlington, Hamilton,
Oakville, and surrounding communities across Ontario, Canada.

> _"Making Your Outdoor Space Look Its Best"_ · Free Estimates · 647-407-1409

---

## ✨ Features

- **20+ pages**, fully linked and navigable
- Dedicated pages for all **7 services** and **3 primary cities** (Burlington, Hamilton, Oakville)
- **SEO built in**: unique titles/descriptions, canonical URLs, Open Graph + Twitter cards, auto sitemap & robots
- **Structured data (JSON-LD)**: LocalBusiness, Service, FAQPage, BreadcrumbList, AggregateRating, BlogPosting
- **Conversion-focused**: click-to-call everywhere, sticky header CTA, floating mobile "Free Estimate" button, sticky service CTA bar
- **Performance**: `next/image` everywhere, preloaded hero (LCP), `font-display: swap`, responsive & mobile-first
- Warm, trustworthy design system with serif headings (Lora) + Inter body

---

## 🚀 Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel (one-click)

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and **import** the repo.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Or deploy from the CLI:

   ```bash
   npm i -g vercel
   vercel --prod
   ```

5. After deploying, update `url` in `src/lib/site.ts` to your real domain so
   canonical URLs, the sitemap, and Open Graph tags point to production.

---

## 🗂 Project Structure

```
src/
  app/                 ← App Router pages, sitemap.ts, robots.ts
    services/[slug]/   ← Dynamic template generating all 7 service pages
    locations/[slug]/  ← Burlington, Hamilton, Oakville
    blog/[slug]/       ← Blog post template
  components/          ← UI primitives, sections, layout (Navbar/Footer)
  lib/                 ← services, locations, testimonials, faqs, blog, site config,
                         metadata + JSON-LD helpers
  styles/globals.css
```

All business data lives in `src/lib/` — edit those files to update services,
service areas, reviews, or contact details in one place.

---

## ✅ Pre-Launch Checklist

- [ ] **Replace all `// TODO` comments** (search the codebase for `TODO` and `REPLACE`):
  - Real email address (`src/lib/site.ts`)
  - Real business address, if applicable (`src/lib/jsonld.ts`)
  - Google Maps embed on the contact page (`src/app/contact/page.tsx`)
  - Real social profile URLs (`src/lib/site.ts`)
  - Web designer / agency credit in the footer (`src/components/layout/Footer.tsx`)
  - Real photos (swap the Unsplash placeholder URLs)
- [ ] Set the production domain in `src/lib/site.ts` (`url`).
- [ ] **Connect the contact form** to a backend — Formspree, Resend, or Netlify
      Forms (`src/components/ContactForm.tsx`).
- [ ] Add **Google Analytics / Google Tag Manager**.
- [ ] **Submit `sitemap.xml`** to Google Search Console (`/sitemap.xml`).
- [ ] **Claim the Google Business Profile** for Nolasco Landscaping.
- [ ] Add real photos to a gallery.

---

## 📈 Local SEO Quick-Wins (Post-Launch)

1. **Get 10 Google reviews** that specifically mention Burlington, Hamilton, and
   Oakville — then replace the placeholder testimonials in
   `src/lib/testimonials.ts` and update the `rating` in `src/lib/site.ts`.
2. **Build local citations** on Yelp, HomeStars, and Yellow Pages Canada with
   consistent name, address, and phone (NAP).
3. **Register on Google Business Profile** with all 7 services listed and the
   correct service areas.
4. Keep publishing seasonal blog posts targeting long-tail Ontario keywords.

---

## 🎨 Design System

| Token            | Value     | Usage                         |
| ---------------- | --------- | ----------------------------- |
| Primary Green    | `#2D6A4F` | Nav, buttons, accents         |
| Secondary Green  | `#52B788` | Hover states, section accents |
| Light Green      | `#D8F3DC` | Section backgrounds           |
| Earthy Amber     | `#E9C46A` | CTA highlights, star ratings  |
| Earth Brown      | `#6B4F3A` | Footer, subtle accents        |
| Dark             | `#1A1A1A` | Headings & body text          |

Headings use **Lora** (serif); body uses **Inter**. Both load via
`next/font/google` with `font-display: swap`.

---

Built with Next.js 14, TypeScript & Tailwind CSS.
