# Schedulaa marketing SEO source of truth

Last reviewed: 2026-10-08 (America/Toronto)

Scope: the public Schedulaa marketing property at `https://www.schedulaa.com/`.

This is the canonical entry point for marketing SEO strategy, current implementation state, measurement decisions, and priorities. When another document conflicts with this file, use this file and the current production code, then record the reconciliation in the change log.

Tenant websites have separate SEO contracts. See [Related authorities](#related-authorities); do not apply tenant-renderer behavior to the Schedulaa marketing site or vice versa.

## Business goals

1. Grow qualified, non-branded organic visits from service businesses that can use Schedulaa.
2. Convert useful organic landings into registrations, trials, demos where authoritatively measurable, and paid customers.
3. Improve pages and queries already showing demand before creating large volumes of new content.
4. Maintain one indexable canonical URL per intent, accurate localized content, clean sitemap membership, and supportable structured data.
5. Protect measurement quality: do not send PII to analytics, invent conversions, or treat impressions alone as success.

Primary success measures are qualified non-branded clicks and useful organic landing sessions. Registration, trial, and subscription outcomes are secondary quality measures once their GA4 events are verified. No document should promise a fixed organic-traffic volume.

## Authority map

| Concern | Authority | Notes |
| --- | --- | --- |
| Marketing SEO strategy, current state, priorities | This file | Canonical marketing SEO authority. |
| Search Console authentication and reporting | [SEARCH_CONSOLE_RUNBOOK.md](SEARCH_CONSOLE_RUNBOOK.md) | Read-only CLI and report-retention procedure. |
| Durable Search Console baselines | [`reports/`](reports/) | Only deliberate, sanitized checkpoints are versioned. |
| Locale eligibility, sitemap and hreflang | [`../SEO_LOCALE_MATRIX.md`](../SEO_LOCALE_MATRIX.md) | Production-verified route matrix; update only after complete visible-content review. |
| GA4 events and verification | [`../GA4_MEASUREMENT_AND_VERIFICATION.md`](../GA4_MEASUREMENT_AND_VERIFICATION.md) | Measurement/event contract; this file controls SEO goals and interpretation. |
| Marketing domain and route ownership | [`../MARKETING_PLATFORM_MIGRATION_SOURCE_OF_TRUTH_2026.md`](../MARKETING_PLATFORM_MIGRATION_SOURCE_OF_TRUTH_2026.md) | Architecture boundary for `www` versus application and tenant surfaces. |
| September 2026 implementation history | [`../SEO_ACQUISITION_FOUNDATION_2026-09-25.md`](../SEO_ACQUISITION_FOUNDATION_2026-09-25.md) | Historical implementation and rollback evidence, not the current backlog. |
| Generated route-policy output | [`../SEO_ACTION_LIST.md`](../SEO_ACTION_LIST.md) | Generated; do not hand-edit or treat as growth strategy. |
| Generated runtime crawl output | [`../SEO_RUNTIME_AUDIT.md`](../SEO_RUNTIME_AUDIT.md) | Historical output; its recorded fetch failures are not production-health evidence. |

## Related authorities

These documents are authoritative only for their narrower surfaces:

- Backend tenant domains and host routing: `backend/docs/CUSTOM_DOMAINS_SOURCE_OF_TRUTH_V2.md`.
- Backend tenant Website Builder SEO storage and publication: `backend/docs/website-builder.md`.
- Tenant Next.js articles, metadata, JSON-LD, robots, and sitemap behavior: `tenant-web-next/docs/WEBSITE_BLOG_PUBLISHING_AND_SEO.md`.
- Forge Motion's theme-specific projection of the shared tenant SEO contract: `tenant-web-next/docs/FORGE_MOTION_CONTENT_AND_BLOG_SEO.md`.
- Planned tenant external-content consent and analytics guard: `backend/docs/NEXTJS_COOKIE_CONSENT_SOURCE_OF_TRUTH.md`; its status is planned/not implemented and it does not change marketing GA4 behavior.
- `backend/docs/seo-custom-domains-og-chatbot-report.md` is historical implementation context. Prefer the two current backend authorities above when they differ.

Copies in `schedulaa-marketing-backup/`, broken worktrees, vendor templates, and archive branches are not current authority.

## Documentation inventory and status

| Document | Status and scope |
| --- | --- |
| `docs/seo/SEO_SOURCE_OF_TRUTH.md` | Current canonical marketing SEO authority. |
| `docs/seo/SEARCH_CONSOLE_RUNBOOK.md` | Current Search Console operating authority. |
| `docs/seo/reports/2026-10-05_SEARCH_CONSOLE_BASELINE.md` | Current durable baseline. |
| `docs/SEO_SOURCE_OF_TRUTH.md` | Compatibility pointer from the former canonical path. |
| `docs/SEO_ACQUISITION_FOUNDATION_2026-09-25.md` | Historical production implementation, monitoring, and rollback evidence; its older Search Console numbers are not current. |
| `docs/SEO_LOCALE_MATRIX.md` | Current delegated authority for route locale, hreflang, and sitemap eligibility. |
| `docs/GA4_MEASUREMENT_AND_VERIFICATION.md` | Current delegated authority for marketing/application GA4 events and verification. |
| `docs/MARKETING_PLATFORM_MIGRATION_SOURCE_OF_TRUTH_2026.md` | Current marketing/app domain and routing architecture. |
| `docs/PLATFORM_SOURCE_OF_TRUTH_TEMPLATE_MIGRATION_2026.md` | Historical template-migration architecture; superseded for SEO strategy and locale detail by this file and the locale matrix. |
| `docs/SEO_ACTION_LIST.md` | Generated route-policy output, not a strategy backlog. |
| `docs/SEO_RUNTIME_AUDIT.md` | Historical failed-fetch run, not live-health evidence. |
| `docs/LEGACY_ROUTE_PARITY_REPORT.md` | Historical generated route-migration evidence. |
| `tools/search-console/README.md` | Versioned standalone CLI usage notes; the runbook here remains the operating authority. |
| `backend/docs/CUSTOM_DOMAINS_SOURCE_OF_TRUTH_V2.md` | Current tenant custom-domain authority, not marketing SEO. |
| `backend/docs/website-builder.md` | Current tenant Website Builder SEO storage/publication authority. |
| `backend/docs/seo-custom-domains-og-chatbot-report.md` | Historical tenant implementation report. |
| `backend/docs/NEXTJS_COOKIE_CONSENT_SOURCE_OF_TRUTH.md` | Planned tenant consent/analytics design, explicitly not implemented. |
| `tenant-web-next/docs/WEBSITE_BLOG_PUBLISHING_AND_SEO.md` | Current tenant article/metadata/structured-data/sitemap authority. |
| `tenant-web-next/docs/FORGE_MOTION_CONTENT_AND_BLOG_SEO.md` | Theme-specific supporting guidance; the shared tenant blog document wins on conflicts. |

Theme capability audits and generic template/vendor content that merely mention SEO or metadata are implementation evidence, not system-wide SEO authorities.

## Completed technical SEO work

The September 25–26, 2026 foundation is deployed and documented in the acquisition history:

- GA4 loading is environment-configured; no production measurement ID is hardcoded.
- Marketing page views are explicit and deduplicated, and only allowlisted campaign parameters cross to `app.schedulaa.com`.
- Conversion events exclude email, name, phone, message, payment, invite-token, and checkout-session data.
- Canonical conflicts in the production sitemap were reduced to zero at the recorded release checkpoint.
- Untranslated locale clones redirect to English and are excluded from sitemap and hreflang. Genuine translations use reciprocal alternates according to the locale matrix.
- Sitemap URLs are absolute and deduplicated and do not use deployment-time `lastmod` values.
- Booking, salon, tutor, and other priority pages received distinct metadata and commercial positioning.
- Wave 1 improved the year-end payroll guide, HVAC scheduling article, T4 generator, features overview, and Spa internal linking.
- Production verification at that checkpoint reported 177 intended sitemap URLs, zero canonical violations, and zero redirecting sitemap URLs.

The historical release SHAs, deployment evidence, detailed page changes, and rollback instructions remain in `SEO_ACQUISITION_FOUNDATION_2026-09-25.md`.

## Current sitemap and indexing architecture

- Marketing sitemap: `https://www.schedulaa.com/sitemap.xml`.
- The marketing repository owns marketing-route generation and locale eligibility.
- `src/lib/seo/localization.ts` enforces which locale routes may be indexed and advertised through hreflang.
- Non-indexable application routes such as `/admin`, `/app`, `/client`, `/dashboard`, `/employee`, `/manager`, `/recruiter`, and `/sales` remain outside the marketing index contract.
- `www.schedulaa.com`, `app.schedulaa.com`, and tenant custom domains are different SEO surfaces with different owners.

Confirmed Search Console sitemap state on 2026-10-08:

| Field | API result |
| --- | --- |
| Sitemap | `https://www.schedulaa.com/sitemap.xml` |
| Submitted URLs | 177 |
| Warnings | 0 |
| Errors | 0 |
| Indexed-URL field | 0 |

The API returning zero in its indexed-URL field is **not evidence that zero pages are indexed**. Search results and page-level performance show indexed URLs. Use Search Console Indexing and URL Inspection for actual index diagnostics.

## Measurement and reporting methodology

- Search Console property: `https://www.schedulaa.com/`.
- Confirmed permission: `siteOwner`.
- OAuth scope: `https://www.googleapis.com/auth/webmasters.readonly` only.
- Default report: latest 28 complete days ending three days before execution, compared with the immediately preceding 28 days.
- Data type: final web search data.
- Standard views: totals, queries, pages, countries, devices, period comparison, sitemap status, ranking queries, and opportunities.
- Default opportunity rule: average position 4–20, at least 20 impressions, and CTR at or below 2%.
- Search Console dimensions can omit anonymized query data and dimension totals need not equal property totals. Preserve the API results; do not manufacture missing query attribution.

Use the runbook for exact commands, credential rules, and export policy.

## Current validated baseline

Durable report: [`reports/2026-10-05_SEARCH_CONSOLE_BASELINE.md`](reports/2026-10-05_SEARCH_CONSOLE_BASELINE.md).

| Metric | 2026-09-08–2026-10-05 | 2026-08-11–2026-09-07 |
| --- | ---: | ---: |
| Clicks | 13 | 6 |
| Impressions | 717 | 654 |
| CTR | 1.81% | 0.92% |
| Average position | 11.74 | 17.19 |

This is a measurement baseline, not proof that any single release caused the change.

## Prioritized backlog

Priorities below come from the validated Search Console report. Recheck the live canonical target before changing a URL because Search Console may retain historical URL forms.

1. Review `/alternatives/vagaro`: 77 page impressions, average position 8.81, 0% CTR. Improve search snippet and opening-page alignment without unsupported claims.
2. Improve alignment for query `vagaro alternatives`: 39 impressions, average position 6.92, 0% CTR.
3. Review `/alternatives/quickbooks` for query `programs like quickbooks`: 31 query impressions, average position 15.94, 0% CTR.
4. Review `/alternatives/paychex`: 42 page impressions, average position 6.90, 0% CTR.
5. Investigate period-over-period visibility declines affecting the Gusto alternative page, Persian Business Finance page, and T4 page. Confirm current canonical/indexing state and recent internal-link/content changes before editing.

Do not respond with mass page generation, broad metadata churn, repeated indexing requests, or another architecture rewrite. Select changes from current query/page evidence and validate them separately.

## Known limitations and open verification

- The GA4 contract exists, but registration/trial events must be verified in the current Realtime/DebugView state before they are used as dependable organic conversion measures.
- Search Console's sitemap indexed count is inconclusive as described above.
- Older Search Console baselines in the acquisition history predate the September architecture/content changes and are historical comparisons only.
- `SEO_RUNTIME_AUDIT.md` captured a run where every fetch failed. It must not be cited as evidence that production routes were down.

## Report retention policy

- Commit only deliberate baselines that support a dated decision, major release, or periodic comparison. Store them under `docs/seo/reports/` as sanitized Markdown.
- Do not commit routine Markdown, CSV, or JSON generated by the CLI. Those remain in `tools/search-console/output/`, which is ignored.
- Never commit OAuth client files, tokens, refresh tokens, `.env` files, virtual environments, caches, or raw credential-bearing logs.
- A baseline report should state the property, periods, query settings, totals, material opportunities, sitemap result, limitations, and why the snapshot was retained.

## Safe continuation for future agents

1. Read this file, the Search Console runbook, locale matrix, GA4 contract, and workspace `AGENTS.md`.
2. Inspect current Git state and preserve unrelated work.
3. Run the read-only CLI; do not create a new OAuth client, property, or broader token.
4. Compare the new complete period with the immediately preceding equal period. Do not compare incomplete days.
5. Verify a target's current canonical, HTTP status, metadata, internal links, sitemap membership, and locale eligibility before changing content.
6. Prefer the smallest evidence-backed improvement. Do not treat generated audits as strategy.
7. Run the marketing SEO tests/build appropriate to the changed implementation. A local build is not proof of deployment.
8. After an explicitly authorized production deployment, wait for recrawl and preserve a new durable baseline only when it informs a decision.
9. Update this file's backlog, decision history, and review date when the production SEO contract or priorities materially change.

## Decision history and change log

| Date | Decision |
| --- | --- |
| 2026-09-25 | Established measurement, attribution, locale eligibility, sitemap cleanup, distinct booking metadata, and initial salon landing-page foundation. |
| 2026-09-26 | Reduced the sitemap to 177 intended URLs, eliminated recorded canonical violations/redirecting sitemap entries, adjusted internal authority, and deployed evidence-led Wave 1 content work. |
| 2026-10-08 | Verified read-only Search Console API access for the existing property and OAuth client; generated the first automated 28-day comparison baseline. |
| 2026-10-08 | Consolidated marketing SEO authority under `docs/seo/`, made generated report retention explicit, and selected the current opportunity backlog from live Search Console data. |
