# Schedulaa Platform Source of Truth — Template Migration (2026)

Last updated: 2026-02-19  
Scope: Marketing FE (`schedulaa-marketing-techwind`), App FE (`frontend`), Backend (`backend`)

## 1) Final Architecture

- `https://www.schedulaa.com` = Marketing site (Next.js, SEO/indexed).
- `https://app.schedulaa.com` = Product app (CRA, authenticated operations).
- `https://scheduling-application.onrender.com` = Backend API (Flask).
- Rule: marketing and app are separated by domain. Marketing does not own session state.

## 2) Repos and Ownership

- Marketing FE: `uc4u2/schedulaa-marketing` (`schedulaa-marketing-techwind`).
- App FE: `uc4u2/scheduling-frontend` (`frontend`).
- Backend: `uc4u2/scheduling-application` (`backend`).

## 3) Template Migration Strategy (What we did)

- Preserved route architecture, middleware, locale handling, sitemap/robots, SEO helpers.
- Migrated visual skin in layers instead of replacing architecture.
- Added vendor reference buckets and skin wrappers, then swapped page layouts route-by-route.
- Kept legacy copy/content as source of truth and mapped it into new template structure.
- Avoided global vendor CSS breakage; used controlled style integration.

## 4) Page-by-Page Migration Pattern

For each route:

1. Keep route path unchanged.
2. Copy template section order 1:1.
3. Map legacy text/content into those sections.
4. Keep links on contract routes.
5. Fix missing assets/imports.
6. Verify page render/build.

Applied to core pages including homepage, features, pricing, demo, booking/payroll/website sections, and header/footer parity updates.

## 5) Locale and SEO Contract

- Locales: `/en/*` and `/fa/*` supported.
- Locale rendering remains active after skin migration.
- Marketing routes remain indexable.
- App routes are excluded from marketing SEO surfaces/sitemaps by domain split.

## 6) FE/BE Wiring Contract

- Marketing links into app with app origin and return context.
- Backend remains single API origin for both frontends.
- CORS allowlist includes `www`, apex, `app`, and localhost dev origins.
- Public/business link generation is centralized in backend helpers to avoid hardcoded domains.

## 7) Auth + Billing Behavior (Current)

- Marketing pricing plans point to app upgrade bridge:
  - `${APP_ORIGIN}/upgrade?plan=<starter|pro|business>&interval=monthly&returnTo=<marketing-url>`
- App `/upgrade` behavior:
  - No session -> redirect to `/login?tab=billing&plan=...&interval=...&returnTo=...`
  - Logged-in manager -> `POST /billing/checkout` then redirect to Stripe URL.
  - Logged-in non-manager -> redirect to role dashboard.
- Auth pages are session-aware:
  - Logged-in users are redirected away from form pages.
  - Billing intent (`tab=billing` or `plan`) routes manager to billing settings path.

## 8) Pricing Flow (End-to-End)

1. User clicks plan on marketing pricing.
2. Lands on app `/upgrade` with plan params.
3. If manager is authenticated, checkout starts directly.
4. Backend `/billing/checkout` may return Checkout or Portal URL based on account/subscription state.
5. Website design CTA on marketing is wired to manager billing settings path in app.

## 9) Manager and Employee Dashboard Notes

- Manager billing actions use app billing endpoints and Stripe portal flow.
- Employee dashboard tab/navigation and layout regressions were fixed during this migration pass.
- Auth/nav alignment ensures login/register screens do not show dashboard-style nav clutter.

## 10) Render Source of Truth (Critical)

- `schedulaa-marketing` service deploys marketing repo only.
- `scheduling-frontend` service deploys app repo only.
- `scheduling-application`, `scheduling-application-worker`, `scheduling-application-beat` deploy backend components.
- If behavior belongs to `app.schedulaa.com`, deploy `scheduling-frontend` (not marketing).

## 11) Environment Variables (Operational)

Marketing service:

- `NEXT_PUBLIC_APP_ORIGIN=https://app.schedulaa.com`

App service:

- `REACT_APP_MARKETING_ORIGIN=https://www.schedulaa.com`

Backend services:

- `APP_ORIGIN=https://app.schedulaa.com`
- `MARKETING_ORIGIN=https://www.schedulaa.com`
- Plus existing CORS and backend operational variables.

## 12) Important Recent Fixes

- Added app `/upgrade` route bridge and manager checkout handoff.
- Reserved `/upgrade` in app route slug guard so it is not misread as tenant slug.
- Pricing plan CTAs switched from `/register` to `/upgrade`.
- Demo page on marketing replaced with rich walkthrough version (credentials, videos, CTAs).
- Footer column order fixed so Compare appears after Resources.

## 13) Safe Pattern for Future Migrations

1. Keep route contracts fixed.
2. Migrate one page at a time with template section parity.
3. Keep legacy content authoritative.
4. Keep app-origin links centralized.
5. Deploy the correct Render service for each change.
6. Re-test `/en` and `/fa` critical pages after each batch.

