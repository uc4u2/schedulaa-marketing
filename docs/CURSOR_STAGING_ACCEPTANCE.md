# Cursor disposable staging acceptance

This repository contains a manual, staging-only acceptance workflow at
`.github/workflows/cursor-staging-acceptance.yml`. It does not run on pushes or
pull requests and must never receive a production deploy hook.

## Owner setup

1. Create a disposable Render web service in an isolated staging project or
   workspace. Link it to this repository's `main` branch and turn auto-deploy
   off when the service is created.
2. Do not copy production secrets or connect production/customer resources.
3. In this repository, create a GitHub environment named `cursor-staging`.
4. Restrict that environment to `main` and add a required reviewer when the
   repository plan exposes that control.
5. Add environment secret `RENDER_DISPOSABLE_STAGING_DEPLOY_HOOK`.
6. Add environment variables:
   - `CURSOR_STAGING_ENABLED=true`
   - `STAGING_RENDER_SERVICE_ID=<disposable srv-... ID>`
   - `STAGING_REVISION_URL=https://<disposable-host>`

The workflow validates that the hook belongs to the configured disposable
service and rejects every production service ID known when the workflow was
created. The hook remains a secret. The service ID and revision URL are not
secrets.

## Acceptance run

After the workflow is reviewed and safely merged with a `[skip render]` commit:

1. Copy the full 40-character SHA of `main`.
2. Run **Cursor Disposable Staging Acceptance** manually.
3. Enter the SHA and confirmation `DEPLOY DISPOSABLE STAGING`.
4. Approve the `cursor-staging` environment gate, if configured.
5. Confirm that validation passes and `/api/revision` reports the exact SHA.
6. Review the disposable service's logs in the Render dashboard or through an
   approved staging-only integration.

Wrong confirmations, non-head SHAs, known production service IDs, mismatched
hooks, missing configuration, failed builds, and revision mismatches fail
closed. The workflow does not hold a Render API key and cannot read environment
values or production logs.

## Production boundary

This workflow is not a production release mechanism. Production services still
auto-deploy from their configured branches. Do not copy this workflow to a
production environment until the separately documented production activation
gates, exact-SHA runtime checks, ordered backend staging exercise, and owner
authorization are complete.
