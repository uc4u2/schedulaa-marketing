# Schedulaa marketing repository handoff

Before changing marketing SEO, sitemap generation, indexing, metadata, structured data, Search Console reporting, or organic analytics, read:

1. [`docs/seo/SEO_SOURCE_OF_TRUTH.md`](docs/seo/SEO_SOURCE_OF_TRUTH.md)
2. [`docs/seo/SEARCH_CONSOLE_RUNBOOK.md`](docs/seo/SEARCH_CONSOLE_RUNBOOK.md)

The reusable read-only Search Console CLI is owned by this repository at [`tools/search-console/`](tools/search-console/README.md). Never add OAuth client files, tokens, credentials, `.env` files, generated `output/`, virtual environments, caches, or raw private exports to Git.

Tenant custom-domain and tenant Website Builder SEO have separate backend and tenant-renderer authorities. Do not apply those contracts to `https://www.schedulaa.com/` unless the canonical marketing SEO source explicitly says to do so.
