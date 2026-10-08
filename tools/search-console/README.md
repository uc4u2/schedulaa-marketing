# Schedulaa Search Console Reports

Canonical location: `schedulaa-marketing-techwind/tools/search-console/`.

Standalone, read-only reporting CLI for the `https://www.schedulaa.com/` Google Search Console property.

The CLI does not modify the production application and never stores OAuth credentials in this directory. It expects the existing owner-only files:

- `~/.config/schedulaa/search-console/client_secret.json`
- `~/.config/schedulaa/search-console/token.json`

Both files must be regular files with permissions `600` or stricter. The stored token must contain only:

`https://www.googleapis.com/auth/webmasters.readonly`

## Setup

Use Python 3.11 or newer. The required Google packages are listed in `requirements.txt`.

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Complete report

The default period is the latest 28 complete days ending three days ago, compared with the immediately preceding 28 days.

```bash
python3 search_console_cli.py full
```

The command writes a private (`600`) Markdown report, JSON report, and CSV datasets under a Git-ignored `output/` directory.

Use an explicit end date when reproducibility matters:

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

## Opportunity thresholds

Defaults select rows with:

- at least 20 impressions;
- average position between 4 and 20;
- CTR at or below 2%.

They are configurable:

```bash
python3 search_console_cli.py opportunities \
  --min-impressions 50 \
  --max-ctr 0.015 \
  --position-min 4 \
  --position-max 20
```

## Security

- The CLI is read-only and rejects tokens containing broader scopes.
- It refuses credential files with group or world permissions.
- It never prints OAuth client secrets, access tokens, refresh tokens, or token-file contents.
- Report output is owner-only and ignored by Git.
- No billing, new OAuth client, Search Console property, or production configuration is required.
