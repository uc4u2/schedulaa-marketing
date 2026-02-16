# Schedulaa Marketing Platform Migration — Source of Truth (2026)

Last updated: 2026-02-16  
Scope: `schedulaa-marketing-techwind` (Next marketing), `frontend` (CRA app), `backend` (Flask API)

## 1) Original Architecture (Before Migration)

- `https://www.schedulaa.com` served CRA frontend with mixed concerns:
  - marketing pages
  - app/dashboard routes
- `https://scheduling-application.onrender.com` served Flask API.

### Pain points

- Tailwind + MUI conflicts in one frontend runtime.
- Marketing and application logic mixed in CRA.
- SEO rendering and app session flows coupled.
- Hard to scale/release marketing independently.
- No clean subdomain separation (`www` vs `app`).

## 2) Target Architecture (Current Contract)

- `https://www.schedulaa.com` -> Next.js marketing site (static marketing content).
- `https://app.schedulaa.com` -> CRA product app (auth, manager, employee, operations).
- `https://scheduling-application.onrender.com` -> Flask API.

### Domain responsibilities

- Marketing only on `www`: public pages, docs, blog, pricing, feature landing.
- Product/app only on `app`: login, register, manager dashboard, employee dashboard, booking operations, payroll operations.
- No session-aware navbar logic in marketing.

## 3) DNS and Platform Setup

- `app` CNAME points to the CRA Render service.
- `www` points to the Next marketing Render service.
- Cloudflare handles DNS + TLS.
- Backend CORS allowlist must include:
  - `https://www.schedulaa.com`
  - `https://schedulaa.com`
  - `https://app.schedulaa.com`
  - `http://localhost:3000`
  - `http://localhost:3001`

## 4) Next Template Installation and Repo Baseline

- Template: NextSaaS (Next.js 16, Tailwind 4, React 19).
- Installed under:
  - `~/work/scheduler2/schedulaa-marketing-techwind`
- Repo created/cleaned and pushed:
  - `github.com/uc4u2/schedulaa-marketing`

## 5) Marketing Route Contract (Current)

Core routes:

- `/`
- `/features`
- `/workforce`
- `/booking`
- `/marketing`
- `/payroll`
- `/payroll/usa`
- `/payroll/canada`
- `/payroll/tools/w2`
- `/payroll/tools/t4`
- `/payroll/tools/roe`
- `/website-builder`
- `/industries`
- `/status`
- `/roadmap`
- `/pricing`
- `/blog`
- `/blog/[slug]`
- `/blog/category/[slug]`
- `/compare`
- `/compare/[vendor]`
- `/alternatives`
- `/alternatives/[vendor]`
- `/demo`
- `/contact`
- `/client/support`
- `/docs`
- `/faq`
- `/privacy`
- `/terms`
- `/payslips`

Auth bridge routes:

- `/login` -> redirects to `${APP_ORIGIN}/login`
- `/signup` -> redirects to `${APP_ORIGIN}/register`

## 6) Locale Routing Contract

- Supported locales:
  - `en`
  - `fa`
- Marketing URLs are locale-accessible:
  - `/en/...`
  - `/fa/...`
- Unsupported placeholders shown in selector only:
  - `ru`, `zh` disabled/fallback.

### Stability fixes applied

- Fixed `/en/*` and `/fa/*` local 404 behavior with explicit Next rewrites.
- Fixed missing translation keys that were causing locale pages to fail:
  - `footer.helpCenter`
  - `footer.zapier`
- Added `timeZone` to next-intl provider/request config for runtime stability.

## 7) Navigation and Footer IA (Legacy-aligned)

Header:

- Left:
  - Product dropdown
  - Resources dropdown
  - Pricing
- Right:
  - Employee Dashboard -> `${APP_ORIGIN}/employee`
  - Manager Dashboard -> `${APP_ORIGIN}/manager`
  - Language selector
  - Log in -> `${APP_ORIGIN}/login`
  - Start free -> `${APP_ORIGIN}/register`

Footer:

- Company / Product / Resources / Compare / Legal groups
- Links aligned to migrated marketing routes

## 8) Legacy Content Parity Migration (Batch 1 + Batch 2)

Migration rule used:

- Legacy CRA copy is source of truth.
- No CRA component/style copy into Next.
- Rebuilt content in Next template structure.

Completed parity migration includes:

- features, pricing, payroll (overview + usa + canada), website-builder
- booking, marketing
- compare + alternatives + dynamic vendor pages
- workforce, industries, status, demo, contact, client/support, docs, blog, zapier

## 9) Branding Changes Completed

- Replaced template logo with legacy Schedulaa logo:
  - `public/images/shared/schedulaa-logo-legacy.png`
  - used in navbar and footer
- Replaced Next favicon with legacy favicon:
  - `src/app/favicon.ico` replaced from CRA `frontend/public/favicon.ico`
- Added explicit icon metadata:
  - `icon`, `shortcut`, `apple` -> `/favicon.ico`

## 10) Contact Form Parity + Backend Integration

Marketing contact page:

- Replaced template contact block with Schedulaa parity content.
- Added working contact form fields:
  - `name`
  - `email`
  - `company`
  - `message`
- Form posts to backend:
  - `POST /api/public/contact`

Backend behavior:

- Sends email if SMTP available.
- If SMTP unavailable/fails, stores payload in `contact_messages` fallback table.
- Returns success JSON with `ok: true`.
- Status normalized to HTTP `200`.

## 11) Environment Variables (Current)

Marketing (`schedulaa-marketing-techwind`):

- `NEXT_PUBLIC_APP_ORIGIN=https://app.schedulaa.com`
- `NEXT_PUBLIC_BACKEND_URL=https://scheduling-application.onrender.com` (recommended in prod)
- local dev can override to `http://localhost:5000`

Backend (`scheduling-application`):

- `CORS_ALLOWED_ORIGINS` includes `www`, apex, `app`, localhosts.
- `FRONTEND_URL=https://app.schedulaa.com` for transactional app links.

## 12) Build/Verification Standard

Marketing:

1. `npm run build`
2. prod-mode route checks:
   - `/en`
   - `/en/pricing`
   - `/en/blog`
   - `/fa`
3. verify no locale 404 regressions.

Backend:

1. `python -m py_compile app/routes.py`
2. verify `POST /api/public/contact` returns success.

## 13) What Is Explicitly Out of Scope (By Decision)

- No marketing-side auth session logic.
- No cross-subdomain session cookie integration in marketing.
- No `/api/auth/session` or `/api/auth/logout` in marketing flow.
- No dashboard behavior moved from CRA to Next.

## 14) Source-of-Truth References

- Marketing repo: `schedulaa-marketing-techwind`
- App repo: `frontend` (CRA product app)
- API repo: `backend` (Flask)

This document is the operational baseline for future marketing routing, SEO, and branding updates.
