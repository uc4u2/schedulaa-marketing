# SEO locale availability matrix

This matrix records whether the visible route content has a real locale-specific source. A locale prefix by itself does not count as a translation. `Y` routes may be indexed and advertised through hreflang. `N` requests are redirected permanently to the English equivalent and are omitted from hreflang and the sitemap.

| Route | EN | FA | FR | RU | ES | DE | ZH | AR | PT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/features` | Y | N | N | N | N | N | N | N | N |
| `/workforce` | Y | Y | N | Y | N | N | Y | N | N |
| `/marketing` | Y | Y | N | Y | N | N | Y | N | N |
| `/payroll` | Y | Y | N | Y | N | N | Y | N | N |
| `/website-builder` | Y | Y | N | Y | N | N | Y | N | N |
| `/business-finance` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/mobile-app` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/industries` | Y | Y | N | Y | N | N | Y | N | N |
| `/status` | Y | N | N | N | N | N | N | N | N |
| `/roadmap` | Y | N | N | N | N | N | N | N | N |
| `/demo` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/faq` | Y | N | N | N | N | N | N | N | N |
| `/client/support` | Y | N | N | N | N | N | N | N | N |
| `/docs` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/contact` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/pricing` | Y | Y | N | Y | N | N | Y | N | N |
| `/zapier` | Y | Y | N | Y | N | N | Y | N | N |
| `/` | Y | N | N | N | N | N | N | N | N |
| `/booking` | Y | N | N | N | N | N | N | N | N |
| `/booking/salon` | Y | N | N | N | N | N | N | N | N |
| `/booking/spa` | Y | N | N | N | N | N | N | N | N |
| `/booking/tutor` | Y | N | N | N | N | N | N | N | N |
| `/booking/doctor` | Y | N | N | N | N | N | N | N | N |
| `/platform`, `/about` | Y | N | N | N | N | N | N | N | N |
| marketing subpages | Y | N | N | N | N | N | N | N | N |
| payroll country/tool subpages | Y | N | N | N | N | N | N | N | N |
| finance invoice subpage | Y | N | N | N | N | N | N | N | N |
| legal/policy routes | Y | N | N | N | N | N | N | N | N |
| resources, webinar and domain-help routes | Y | N | N | N | N | N | N | N | N |
| compare and alternative routes | Y | N | N | N | N | N | N | N | N |
| blog index, posts and category routes | Y | N | N | N | N | N | N | N | N |

Notes:

- The home page is intentionally English-only for SEO because its current composed layout still includes English-only visible sections in every non-English route.
- The booking hub has localized source fragments, but its current composed sections include English-only visible copy. It remains English-only until the whole page is translated.
- Industry booking pages currently render the same English component props for every locale and are therefore English-only.
- Placeholder-style translations (for example, pages whose primary heading only says that a section explains a feature) are not eligible for sitemap or hreflang publication. They redirect to English until substantive copy is approved.
- Persian, Russian, and Chinese remain eligible on the partially localized product routes listed above because their title, H1, and primary visible content were reviewed. Other languages can be restored route-by-route after the same review.
- This matrix is enforced by `src/lib/seo/localization.ts`; update that registry only when the complete visible route has been reviewed.
