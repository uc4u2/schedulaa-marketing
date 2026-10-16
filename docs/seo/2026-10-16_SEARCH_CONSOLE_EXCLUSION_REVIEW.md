# Search Console exclusion review — 2026-10-16

Source: manually exported Google Search Console URL samples for the
`https://www.schedulaa.com/` property. The exports are retained outside the
repository because URL-level Search Console exports are operational data.

## Findings

| Report | Count | Interpretation | Action |
| --- | ---: | --- | --- |
| Crawled — currently not indexed | 209 URLs | 183 are legacy locale-prefixed pages, mostly older `de`, `es`, `fr`, `pt`, and `ru` payroll, marketing, resource, legal, and support routes. They are intentionally outside the current locale eligibility matrix. | Do not mass-request indexing or publish unreviewed locale copies. Their current requests redirect to the English canonical where the route is not approved for that locale. |
| Crawled — currently not indexed | 5 English URLs | `/en/website-builder`, `/en/payroll/usa`, `/en/booking/spa`, and `/en/blog/smarter-invoice-system-service-businesses` are live self-canonical public pages. Google must decide whether to index them after recrawl. `/en/sitemap.xml` is a duplicate sitemap URL. | Preserve the four content pages; redirect every locale sitemap alias to `/sitemap.xml`. |
| Duplicate, Google chose different canonical | 31 URLs | 30 are locale variants, mainly legacy compare/alternatives and partially localized routes. The current locale gate already redirects unapproved variants. | Keep the existing route-level locale policy. Review a locale only before adding it back to sitemap and hreflang. |
| Duplicate, Google chose different canonical | 1 English URL | `/en/alternatives/quickbooks` remains self-canonical and is an intentional, distinct alternatives-intent page. | Recheck after recrawl; do not merge it into the direct-comparison route without new query evidence. |

## Verified live behavior

- `/zh/alternatives` returns a permanent redirect to `/en/alternatives`.
- `/ar/business-finance` remains a live approved localized route under the locale matrix.
- The four English content URLs listed above return HTTP 200 and self-canonicalize.
- Before this change, locale sitemap aliases such as `/en/sitemap.xml` returned duplicate XML content. The middleware now permanently redirects them to the canonical `/sitemap.xml`.

## Video indexing

The Video indexing report shows 23 pages under “Video isn't on a watch page.”
The current YouTube facade defers creating the embedded player until a user
activates it and the marketing routes do not publish `VideoObject` markup.
That is appropriate for supporting videos on product pages, but it is not a
video-result strategy. Do not add video markup to every embed. A future video
release should use one dedicated, public watch page per selected video with a
prominent player, accurate title/description, verified upload date and
duration, stable thumbnail, `embedUrl`, transcript/summary, and `VideoObject`
markup. No upload date, duration, or video metadata was invented in this
review.

## Follow-up

1. Wait for Google to recrawl the legacy redirects and sitemap aliases before
   using the aggregate exclusion total as a release score.
2. Export the Video report URL list and select only commercially useful videos
   for dedicated watch pages.
3. Re-evaluate the four English “crawled — currently not indexed” pages after
   a complete Search Console reporting period; improve content only where
   current query/page evidence identifies a gap.
