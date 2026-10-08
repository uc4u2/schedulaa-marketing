# Search Console reporting runbook

Last validated: 2026-10-08 (America/Toronto)

Canonical strategy: [SEO_SOURCE_OF_TRUTH.md](SEO_SOURCE_OF_TRUTH.md).

## Confirmed access model

- Property: `https://www.schedulaa.com/`
- Permission: `siteOwner`
- OAuth scope: `https://www.googleapis.com/auth/webmasters.readonly`
- OAuth client: the existing secured Desktop/installed client
- Billing: not required for this reporting workflow
- No new OAuth client or Search Console property was created

The CLI may read Search Console performance and sitemap data. It cannot mutate the property and rejects a stored token whose scopes are broader than the one read-only scope above.

## CLI location

Canonical repository location:

```text
/home/uc4u2/work/scheduler2/schedulaa-marketing-techwind/tools/search-console/
```

Entrypoint:

```text
/home/uc4u2/work/scheduler2/schedulaa-marketing-techwind/tools/search-console/search_console_cli.py
```

The CLI is owned and versioned by `schedulaa-marketing-techwind`. Track only:

- `.gitignore`
- `README.md`
- `requirements.txt`
- `search_console_cli.py`
- `tests/test_search_console_cli.py`

Never track:

- `output/`
- `.venv/`
- `__pycache__/` or test caches
- OAuth client JSON
- token JSON, access tokens, or refresh tokens
- `.env` or credential-bearing logs

The former workspace-root `search-console-reports/` directory is not canonical. It may temporarily retain ignored private output from the first report, but no source or credential should be maintained there.

## Credential storage and permissions

The existing files are outside Git:

```text
~/.config/schedulaa/search-console/client_secret.json
~/.config/schedulaa/search-console/token.json
```

Required permissions:

- directory: `700`
- both files: `600` or stricter

The CLI checks that credential files are regular non-symlink files, rejects group/world access, requires a refresh token, and requires exactly the read-only scope. It never prints secret or token contents.

Do not create another client or property if authorization fails. First confirm the stored token belongs to `admin@schedulaa.com`, which is the verified owner, and reauthorize that existing client only if the token is genuinely invalid.

## Environment setup

```bash
cd /home/uc4u2/work/scheduler2/schedulaa-marketing-techwind/tools/search-console
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

The existing system or virtual environment may already contain the dependencies. Never place credentials inside the virtual environment or project directory.

## Standard report

```bash
cd /home/uc4u2/work/scheduler2/schedulaa-marketing-techwind/tools/search-console
python3 search_console_cli.py full
```

Defaults:

- property: `https://www.schedulaa.com/`
- latest 28 complete days ending three days ago
- comparison: immediately preceding 28 days
- final web search data
- top 20 display limit
- opportunity positions 4–20
- minimum 20 impressions
- maximum 2% CTR

Use an explicit end date for a reproducible checkpoint:

```bash
python3 search_console_cli.py full --end-date 2026-10-05
```

## Individual views

```bash
python3 search_console_cli.py summary --formats markdown
python3 search_console_cli.py queries --top-limit 20 --formats markdown
python3 search_console_cli.py pages --top-limit 20 --formats json
python3 search_console_cli.py countries --formats csv
python3 search_console_cli.py devices --formats markdown
python3 search_console_cli.py compare --formats markdown
python3 search_console_cli.py opportunities --formats markdown
python3 search_console_cli.py sitemaps --formats markdown
```

Supported exports are Markdown, CSV, and JSON. Full reports write all requested formats; individual commands print the selected view. Customize thresholds only when the report explicitly records the changed methodology.

## Output security and retention

- Generated files use `600` permissions.
- Generated output directories use `700` permissions.
- Routine output is written below `tools/search-console/output/` and is ignored by the CLI directory's `.gitignore`.
- Routine reports are working data, not source-of-truth documents.
- To retain a durable checkpoint, create a concise sanitized Markdown summary under `schedulaa-marketing-techwind/docs/seo/reports/` and link it from the canonical SEO source of truth.
- Do not version raw recurring CSV/JSON exports. They create noise and can contain more detailed operational data than a durable decision requires.

## Validation procedure

1. Confirm credential and output permissions without printing file contents.
2. Run `python3 -m py_compile search_console_cli.py tests/test_search_console_cli.py`.
3. Run `python3 -m unittest discover -s tests -v`.
4. Run the standard live report and confirm the property reports `siteOwner`.
5. Confirm the periods are complete, contiguous, equal length, and non-overlapping.
6. Confirm summary, queries, pages, countries, devices, opportunities, comparison, and sitemap outputs exist.
7. Review the results before promoting any generated result to a durable baseline.

Search Console query/page dimension totals may differ from aggregate totals because of privacy/anonymization and aggregation behavior. Do not infer or fabricate missing query attribution.

## Failure handling

- `OAuth ... missing`: confirm the documented paths; do not paste credentials into chat or source files.
- permission error: restore owner-only permissions (`700` directory, `600` files).
- broader-scope rejection: do not weaken the check; reauthorize the existing client with read-only scope.
- zero properties: confirm the stored token's Google account and reauthorize only with the verified owner if needed.
- API error: report the controlled HTTP status; never print request authorization headers or token JSON.
- sitemap indexed field is zero: record it as the API field only. Use Indexing and URL Inspection before drawing conclusions about indexed pages.

## Baseline created by this workflow

The first validated automated baseline covers 2026-09-08 through 2026-10-05 versus 2026-08-11 through 2026-09-07. See [`reports/2026-10-05_SEARCH_CONSOLE_BASELINE.md`](reports/2026-10-05_SEARCH_CONSOLE_BASELINE.md).
