# SEO and acquisition foundation — 2026-09-25

Status: historical production implementation and rollback record

Current authority: [`seo/SEO_SOURCE_OF_TRUTH.md`](seo/SEO_SOURCE_OF_TRUTH.md). This file preserves the September 2026 implementation evidence and older baselines; it is not the current priority backlog.

## Scope and recovery points

- Marketing project: `schedulaa-marketing-techwind`
- Application project: `frontend`
- Marketing baseline: `7cfcb06808c31bd8b662228304596f310a0eb2df`
- Application baseline: `f26cd359eb9a5c6d64c53283d3c44efd6854c1d0`
- Recovery branch in each repository: `checkpoint/seo-acquisition-baseline-20260925`
- Implementation branch in each repository: `feature/seo-acquisition-foundation-20260925`
- Database migrations: none
- Tenant website changes: none

## Live baseline before implementation

The production marketing routes returned HTTP 200 and self-canonicalized. They had no robots meta override and no JSON-LD in the raw response. Every audited route advertised all nine locale alternates, including routes whose visible content was English in every locale. The sitemap contained deployment-time `lastmod` values and unnecessary untranslated locale duplicates.

| Route | Baseline title | Baseline H1 finding |
| --- | --- | --- |
| `/en` | `Schedulaa | Website Builder, Booking, Invoices and Scheduling for Service Businesses` | Homepage-specific |
| `/en/booking` | Same as homepage | Booking-specific, creating metadata/H1 mismatch |
| `/en/booking/salon` | `Salon Booking Software | Schedulaa` | Salon booking oriented |
| `/en/booking/tutor` | `Tutor Booking Software | Schedulaa` | Tutor booking oriented |
| `/en/website-builder` | `Website Builder for Service Businesses - Free Domain & Hosting | Schedulaa` | Website-builder-specific |
| `/en/pricing` | `Schedulaa Pricing | Launch on your own domain with automatic SSL` | Pricing-specific |

Baseline quality gates:

- Marketing production build: passed (90 routes).
- Marketing lint: failed with 282 existing findings.
- Application production build and ReactSnap: passed (88/88 routes).
- Application lint: failed with 582 existing findings.
- Application tests: existing unrelated failures were present before implementation.

## Implemented behavior

- GA4 is conditionally loaded on the marketing site through `NEXT_PUBLIC_GA_MEASUREMENT_ID`; no ID is hardcoded.
- The production marketing and application sites should use the same existing production GA4 web-stream ID.
- Marketing SPA page views are explicit and deduplicated. Application page views omit all query strings and fragments.
- Only allowlisted campaign parameters (`utm_*` and `gclid`) are kept in session storage and carried to `app.schedulaa.com` links.
- Conversion event names and parameters are allowlisted. PII, messages, checkout session IDs, and invite tokens are not event parameters.
- Registration, contact, checkout, trial, and paid-subscription events are tied to the corresponding successful or authoritative application state.
- Non-English routes without complete visible translations permanently redirect to the English canonical and are excluded from hreflang and the sitemap.
- Genuine fully translated routes retain reciprocal locale alternates. See `SEO_LOCALE_MATRIX.md`.
- Sitemap URLs are absolute, deduplicated, and no longer publish deployment-time `lastmod` values.
- Booking, salon, and tutor pages have unique commercial metadata.
- `/en/booking/salon` is now the focused salon website + booking landing page and uses only current product screenshots and supportable capability wording.

## Search Console collection checklist

After deployment, export or screenshot **Performance → Search results → Last 16 months** with:

- total clicks, impressions, CTR, and average position;
- Queries and Pages tables;
- Countries and Devices tabs.

From **Indexing → Pages**, provide:

- indexed page count;
- Crawled — currently not indexed;
- Discovered — currently not indexed;
- duplicate/canonical exclusions;
- blocked and noindex URLs.

From **Sitemaps**, provide:

- submitted sitemap URL;
- discovered page count;
- errors and warnings;
- last-read date.

Use URL Inspection after deployment for:

- `https://www.schedulaa.com/en`
- `https://www.schedulaa.com/en/booking`
- `https://www.schedulaa.com/en/booking/salon`
- `https://www.schedulaa.com/en/booking/tutor`
- `https://www.schedulaa.com/en/website-builder`
- `https://www.schedulaa.com/en/pricing`
- one genuine translation, for example `https://www.schedulaa.com/fr/contact`
- one former duplicate, for example `https://www.schedulaa.com/fr/booking/salon`, to confirm the redirect to English
- `https://www.schedulaa.com/sitemap.xml`

For each important page, run **Test live URL**, verify the user-declared canonical, inspect the rendered HTML, and request indexing only after the deployed output is correct.

## Rollback

Revert the marketing and application implementation commits independently, or redeploy the baseline SHAs above. The change has no database migration and no tenant data mutation. Removing `NEXT_PUBLIC_GA_MEASUREMENT_ID` disables marketing GA loading without affecting page rendering.
