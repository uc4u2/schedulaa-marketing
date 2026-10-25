# Schedulaa Marketing Website Agent Guide

This repository owns `www.schedulaa.com`, marketing acquisition pages, locale eligibility, sitemap/canonical/hreflang behavior, GA4 acquisition measurement, Merchant Center landing pages, and read-only Search Console reporting tools.

Before editing:

1. Read the central [Schedulaa engineering handbook](https://github.com/uc4u2/scheduling-application/blob/main/docs/CURSOR_ENGINEERING_HANDBOOK.md).
2. Read `docs/seo/SEO_SOURCE_OF_TRUTH.md`, its Search Console/locale/GA4 companions, and the relevant product authority.
3. Inspect `git status --short --branch`; preserve unrelated work and use an isolated worktree for concurrent changes.
4. Verify current product capabilities and competitor facts before publishing claims.
5. Follow `.cursor/rules/release-completion.mdc`. A local commit is not completion.

Use npm and preserve `package-lock.json`. Never commit OAuth files/tokens or generated private reports, bulk-index weak translations, fabricate support/compliance claims, or change app billing/authentication from marketing code.

## Release completion

When a task authorizes a commit or push, the feature branch must be on the remote and the remote SHA must be verified. Do not merge to `main` or deploy unless that promotion was explicitly authorized. A push to `main` starts a Render deploy.
