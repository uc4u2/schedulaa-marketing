# Search Console baseline — period ending 2026-10-05

Retained: 2026-10-08

Purpose: first validated automated Search Console checkpoint after the September 2026 SEO foundation. This is a sanitized durable summary; routine raw Markdown, CSV, and JSON exports remain outside Git.

## Method

- Property: `https://www.schedulaa.com/`
- Permission at validation: `siteOwner`
- Search type/data state: web/final
- Current period: 2026-09-08 through 2026-10-05
- Previous period: 2026-08-11 through 2026-09-07
- Opportunity rule: average position 4–20, at least 20 impressions, CTR at or below 2%

## Period comparison

| Metric | Current | Previous | Change |
| --- | ---: | ---: | ---: |
| Clicks | 13 | 6 | +7 |
| Impressions | 717 | 654 | +63 |
| CTR | 1.81% | 0.92% | +0.90 percentage points |
| Average position | 11.74 | 17.19 | improved by 5.45 positions |

These are observed Search Console values, not causal attribution to a particular release.

## Priority opportunities

1. `/alternatives/vagaro`: 77 page impressions, average position 8.81, 0% CTR.
2. Query `vagaro alternatives`: 39 impressions, average position 6.92, 0% CTR.
3. `/alternatives/quickbooks` and query `programs like quickbooks`: 31 query impressions, average position 15.94, 0% CTR.
4. `/alternatives/paychex`: 42 page impressions, average position 6.90, 0% CTR.
5. Investigate visibility declines affecting the Gusto alternative page, Persian Business Finance page, and T4 page before choosing a correction.

Search Console may report historical URL forms. Confirm the current live canonical target before editing, redirecting, or linking to an opportunity page.

## Sitemap result

| Field | Result |
| --- | --- |
| Sitemap | `https://www.schedulaa.com/sitemap.xml` |
| Submitted URLs | 177 |
| Warnings | 0 |
| Errors | 0 |
| API indexed-URL field | 0 |

The zero returned in the API's indexed-URL field is not evidence that zero pages are indexed. It must not be presented as an indexed-page count without separate Search Console Indexing or URL Inspection evidence.

## Data limitations

- Search Console can omit anonymized query rows.
- Dimension totals can differ from property totals.
- Average position is impression-weighted and is not a fixed rank.
- The reporting lag intentionally excludes the most recent three days.

## Decision supported by this baseline

Prioritize targeted snippet/on-page alignment and diagnosis on pages already earning impressions. Do not start a mass content program, broad metadata rewrite, or repeated indexing campaign from this report.
