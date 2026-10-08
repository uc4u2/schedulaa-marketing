# SEO and acquisition foundation — implemented 2026-09-25, updated 2026-09-26

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

## Production release history

| Release | Commit | Production outcome |
| --- | --- | --- |
| Measurement and international SEO foundation | `5c468b47` | Marketing GA4 integration, safe attribution handoff, conversion-event architecture, booking metadata, locale eligibility, sitemap cleanup, and the salon landing-page foundation. |
| Canonical and internal-authority correction | `f843bd4c` | Sitemap reduced from 253 to 177 intended URLs; canonical conflicts reduced from 87 to 0; untranslated locale clones redirect to English; homepage authority shifted toward canonical commercial pages. |
| Organic traffic Wave 1 | `a7ace86e` | Improved pages that already had Search Console visibility: the ROE/T4/W-2 guide, HVAC scheduling article, T4 generator, Features overview, and Spa internal-link structure. |

Wave 1 was deployed through Render as deployment `dep-das2aa3tqb8s739dfio0` and reached `live` on 2026-09-26. The previous production/rollback commit is `f843bd4c4643853757d0e18d98b31d5a07f75bbd`.

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

## September 26 canonical and internal-authority correction

- The production sitemap now contains 177 intended indexable URLs, down from 253.
- The production canonical crawler reports 0 canonical violations and 0 redirecting sitemap URLs.
- Sitemap URLs resolve directly with HTTP 200 and self-canonicalize; canonical targets do not redirect.
- Untranslated localized routes are omitted from sitemap/hreflang and permanently redirect to the English canonical instead of competing as English-language clones.
- Homepage footer links no longer distribute sitewide authority to individual vendor comparison pages. One comparison hub link remains.
- The homepage directly links to Salon Booking, Tutor Booking, and Website Builder without redirect hops.
- Comparison and alternative pages remain available and contextually linked. They were not deleted or consolidated in this release.

## Organic traffic Wave 1 — implemented and deployed

Wave 1 intentionally improved existing URLs with demonstrated Search Console visibility. It did not create new landing pages, change Booking/Salon copy, or consolidate comparison pages.

### ROE, T4, and W-2 employer guide

Canonical URL: `https://www.schedulaa.com/en/blog/roe-t4-w2-year-end-guide`

- Title: `T4 vs W-2 vs ROE: Employer Year-End Guide | Schedulaa`
- Meta description: `Compare T4, W-2, and ROE forms, who receives each one, what employers report, and how Canadian and U.S. year-end payroll workflows differ.`
- H1: `T4 vs W-2 vs ROE: What Employers Need to Know`
- Expanded from approximately 145 to 1,542 source words.
- Added a direct answer, comparison table, individual form sections, T4-vs-W-2 and ROE-vs-T4 explanations, employer scenarios, and FAQ.
- Added direct canonical links to T4, W-2, and ROE tools plus Canada and USA Payroll.
- Factual employment/tax form statements link to current CRA, IRS, and Service Canada sources.

### HVAC scheduling article

Canonical URL: `https://www.schedulaa.com/en/blog/hvac-bad-scheduling-lost-money`

- Title: `HVAC Scheduling Problems That Cost You Money | Schedulaa`
- Added an above-the-fold “Where HVAC profit leaks” summary before the video.
- Added a practical scheduling checklist and canonical contextual links to Industries, Booking, Workforce, Invoices, and a related scheduling article.
- Preserved the existing substantial article and H1.

### T4 generator

Canonical URL: `https://www.schedulaa.com/en/payroll/tools/t4`

- Title: `T4 Generator for Canadian Payroll (PDF & CRA XML) | Schedulaa`
- Clarifies that the tool uses finalized Schedulaa payroll data and is not a free standalone public CRA form generator.
- Added source-data requirements, workflow, supported PDF/XML/CSV/ZIP outputs, review/correction boundaries, expanded FAQ, and a link to the year-end guide.
- Removed misleading free-price structured-data output.

### Features overview

Canonical URL: `https://www.schedulaa.com/en/features`

- Title: `Website, Booking & Payments for Service Businesses | Schedulaa`
- H1: `Website, booking, products, payments, and operations—in one platform`
- Added a useful opening capability map with direct links to Website Builder, Booking, Commerce, Invoices/Payments, and Workforce.

### Spa booking internal authority

Canonical URL: `https://www.schedulaa.com/en/booking/spa`

- Main copy and metadata were intentionally left unchanged.
- Added six contextual inlink sources from Booking, Industries, Website Builder, Pricing, and relevant salon/spa articles.
- Corrected outgoing links to direct canonical URLs and improved heading hierarchy.

## Verification completed after Wave 1

- Production build: passed.
- SEO test suite: 5/5 test files passed.
- Local and live canonical audits: 177 sitemap URLs and 0 violations.
- Priority-page internal-link audit: 0 redirecting links and 0 broken links across the five Wave 1 targets.
- Representative desktop and mobile user-agent checks: HTTP 200, exact expected title, one H1, and correct self-canonical on all targets.
- Spa internal-inlink crawl: six contextual sources verified.
- No database migration, new environment variable, application/backend change, or tenant-site change was required for Wave 1.

The broader site still contains some pre-existing redirecting links in older legal/resource pages and translated navigation fallbacks. These were outside Wave 1 and are not regressions on the priority pages.

## Search Console and GA4 baseline

The following values are the historical comparison baseline, not a forecast:

- Available long-range Search Console report: approximately 7.81K impressions, 80 clicks, 1% CTR, and average position 18.4.
- Recent 90-day report before the September 26 releases: approximately 2,027 impressions, 21 clicks, 1.04% CTR, and average position 17.3.
- Historical Crawled — currently not indexed: 182 URLs. Approximately 165 (91%) were non-English routes, so much of this count reflects the pre-cleanup locale architecture.
- Historical external links reported: 18. Off-site authority remains weak.
- Current production sitemap: 177 URLs.

Search Console data before September 26 mostly represents the old architecture. Do not attribute its duplicate URLs, internal authority pattern, or selected canonicals to the new release without checking current production and allowing a recrawl.

GA4 is connected for analysis and the marketing library remains live. A controlled signup was successfully accepted by the backend, but `registration_start` and `registration_complete` were not yet visible in the standard GA4 reporting view immediately afterward. Treat those two events as awaiting live DebugView/Realtime verification; do not count the older `ads_conversion_Book_appointment_1` event as a signup or customer conversion.

## Recrawl monitoring plan

Use September 26, 2026 as the architecture/content deployment boundary. Review at 7, 14, and 28 days. Normal Search Console lag is expected.

At every checkpoint compare pre/post periods while accounting for reporting delay:

- clicks, impressions, CTR, and position for non-branded queries;
- clicks and queries for the five Wave 1 URLs;
- HVAC scheduling, `t4 generator`, T4/W-2/ROE, service-business features, and spa-booking query groups;
- Google-selected canonical versus declared canonical on priority pages;
- indexed pages and exclusion movement, especially Crawled — currently not indexed and Page with redirect;
- organic landing-page sessions in GA4;
- `registration_start`, `registration_complete`, and `trial_activated` from Organic Search once event verification is complete.

Do not use total impressions alone as the success metric. Qualified non-branded clicks and useful organic landing sessions are the primary traffic measures; registrations and trials remain important secondary quality signals.

Avoid repeated Request Indexing submissions. The corrected sitemap has already been submitted and the priority pages were reported as indexed. Use URL Inspection only to diagnose a specific page or confirm Google-selected canonical behavior.

## Deferred work and Wave 2 decision rules

Do not begin Wave 2 simply because a page has not moved after a few days. Select it from post-recrawl evidence.

Potential work after the monitoring window:

1. Complete live GA4 DebugView/Realtime verification for registration and trial events and correct only proven instrumentation gaps.
2. Review remaining English commercial pages in Crawled — currently not indexed after locale redirects have been processed.
3. Fix remaining site-owned redirect hops in older legal/resource pages and translated navigation where the destination is unambiguous.
4. Re-evaluate comparison/alternative pages only after the reduced sitewide authority has been recrawled. Keep, improve, consolidate, or redirect them page by page using query and canonical evidence.
5. Choose the next content refresh from Search Console pages already ranking roughly positions 3–20 with meaningful impressions and low CTR.
6. Create a new landing page only when query evidence shows a distinct intent that no current canonical page can satisfy. Do not mass-generate industry, city, or comparison pages.
7. Build legitimate off-site authority through real customers, partners, directories, associations, integrations, interviews, and relevant publications. Do not buy spam links.
8. Consider a narrow future paid-search test only after analytics events are verified. Google Ads are not part of the current SEO release.

The long-term ambition may be materially more organic traffic, but no source-of-truth document should promise a fixed daily volume such as 1,000 visits. Growth depends on search demand, ranking gains, authority, content usefulness, and time. Each wave must be evaluated against actual Search Console and GA4 evidence.

## Search Console operating checklist

At each monitoring checkpoint, export or query **Performance → Search results** with:

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

Use URL Inspection selectively for:

- `https://www.schedulaa.com/en`
- `https://www.schedulaa.com/en/booking`
- `https://www.schedulaa.com/en/booking/salon`
- `https://www.schedulaa.com/en/booking/tutor`
- `https://www.schedulaa.com/en/website-builder`
- `https://www.schedulaa.com/en/pricing`
- one genuine translation, for example `https://www.schedulaa.com/fr/contact`
- one former duplicate, for example `https://www.schedulaa.com/fr/booking/salon`, to confirm the redirect to English
- `https://www.schedulaa.com/sitemap.xml`

For each important page, verify the user-declared and Google-selected canonicals, inspect rendered HTML when a discrepancy exists, and use **Test live URL** to distinguish a stale Google record from a live defect. Do not repeatedly request indexing.

## Rollback

Revert the marketing and application implementation commits independently, or redeploy the baseline SHAs above. The change has no database migration and no tenant data mutation. Removing `NEXT_PUBLIC_GA_MEASUREMENT_ID` disables marketing GA loading without affecting page rendering.

For the two September 26 marketing-only releases, redeploy `f843bd4c` to roll back Wave 1 while retaining the canonical correction, or redeploy `5c468b47` to roll back both Wave 1 and the canonical/internal-authority correction. Re-run the production canonical audit after any rollback.
