# SEO locale availability matrix

This matrix records whether the visible route content has a real locale-specific source. A locale prefix by itself does not count as a translation. `Y` routes may be indexed and advertised through hreflang. `N` requests are redirected permanently to the English equivalent and are omitted from hreflang and the sitemap.

| Route | EN | FA | FR | RU | ES | DE | ZH | AR | PT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/features` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/workforce` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/marketing` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/payroll` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/website-builder` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/business-finance` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/mobile-app` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/industries` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/status` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/roadmap` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/demo` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/faq` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/client/support` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/docs` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/contact` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/pricing` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| `/zapier` | Y | Y | Y | Y | Y | Y | Y | Y | Y |
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
- This matrix is enforced by `src/lib/seo/localization.ts`; update that registry only when the complete visible route has been reviewed.

