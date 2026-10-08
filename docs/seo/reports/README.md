# Durable SEO report policy

This directory contains only sanitized, decision-relevant SEO baselines that are intentionally versioned.

Commit a report here only when it records a major release boundary, a periodic baseline used for a decision, or a material change in Search Console state. Include the property, complete comparison periods, methodology, material findings, limitations, and the decision the report supports.

Do not copy routine generated Markdown, CSV, or JSON here. Keep those under `/home/uc4u2/work/scheduler2/schedulaa-marketing-techwind/tools/search-console/output/`, where they are ignored and protected with owner-only permissions. Never commit OAuth client files, access or refresh tokens, credential content, `.env` files, or raw authentication logs.

Current baseline:

- [`2026-10-05_SEARCH_CONSOLE_BASELINE.md`](2026-10-05_SEARCH_CONSOLE_BASELINE.md)
