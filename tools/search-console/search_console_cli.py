#!/usr/bin/env python3
"""Read-only Google Search Console reporting CLI for Schedulaa marketing."""

from __future__ import annotations

import argparse
import csv
import io
import json
import os
import stat
import sys
from dataclasses import dataclass
from datetime import date, timedelta
from pathlib import Path
from typing import Any, Iterable, Sequence

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError


DEFAULT_SITE_URL = "https://www.schedulaa.com/"
DEFAULT_CONFIG_DIR = Path.home() / ".config" / "schedulaa" / "search-console"
DEFAULT_CLIENT_FILE = DEFAULT_CONFIG_DIR / "client_secret.json"
DEFAULT_TOKEN_FILE = DEFAULT_CONFIG_DIR / "token.json"
READ_ONLY_SCOPE = "https://www.googleapis.com/auth/webmasters.readonly"
API_PAGE_SIZE = 25_000
PROJECT_DIR = Path(__file__).resolve().parent


class CliError(RuntimeError):
    """Controlled CLI error that is safe to show to the operator."""


@dataclass(frozen=True)
class DateWindow:
    start: date
    end: date

    def as_dict(self) -> dict[str, str]:
        return {"start": self.start.isoformat(), "end": self.end.isoformat()}


def parse_iso_date(value: str) -> date:
    try:
        return date.fromisoformat(value)
    except ValueError as exc:
        raise argparse.ArgumentTypeError(f"Invalid ISO date: {value}") from exc


def comparison_windows(
    *, days: int, lag_days: int, end_date: date | None = None, today: date | None = None
) -> tuple[DateWindow, DateWindow]:
    if days < 1:
        raise CliError("--days must be at least 1")
    if lag_days < 0:
        raise CliError("--lag-days cannot be negative")
    effective_today = today or date.today()
    current_end = end_date or (effective_today - timedelta(days=lag_days))
    current_start = current_end - timedelta(days=days - 1)
    previous_end = current_start - timedelta(days=1)
    previous_start = previous_end - timedelta(days=days - 1)
    return DateWindow(current_start, current_end), DateWindow(previous_start, previous_end)


def ensure_private_file(path: Path, label: str) -> None:
    if not path.exists() or not path.is_file():
        raise CliError(f"{label} is missing: {path}")
    if path.is_symlink():
        raise CliError(f"{label} must not be a symbolic link: {path}")
    mode = stat.S_IMODE(path.stat().st_mode)
    if mode & 0o077:
        raise CliError(f"{label} permissions must be 600 or stricter: {path}")


def validate_oauth_files(client_file: Path, token_file: Path) -> None:
    ensure_private_file(client_file, "OAuth client file")
    ensure_private_file(token_file, "OAuth token file")

    try:
        client_data = json.loads(client_file.read_text(encoding="utf-8"))
        token_data = json.loads(token_file.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        raise CliError("OAuth files could not be parsed") from exc

    if "installed" not in client_data:
        raise CliError("OAuth client must be a Desktop/installed application")
    scopes = set(token_data.get("scopes") or [])
    if scopes != {READ_ONLY_SCOPE}:
        raise CliError("Stored OAuth token must contain only the read-only Search Console scope")
    if not token_data.get("refresh_token"):
        raise CliError("Stored OAuth token does not contain a refresh token")


def secure_write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True, mode=0o700)
    os.chmod(path.parent, 0o700)
    temp_path = path.with_name(f".{path.name}.tmp")
    descriptor = os.open(temp_path, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
    with os.fdopen(descriptor, "w", encoding="utf-8", newline="") as handle:
        handle.write(content)
    os.replace(temp_path, path)
    os.chmod(path, 0o600)


def load_credentials(client_file: Path, token_file: Path) -> Credentials:
    validate_oauth_files(client_file, token_file)
    credentials = Credentials.from_authorized_user_file(str(token_file), [READ_ONLY_SCOPE])
    if credentials.expired and credentials.refresh_token:
        credentials.refresh(Request())
        secure_write_text(token_file, credentials.to_json() + "\n")
    if not credentials.valid:
        raise CliError("Stored OAuth credentials are not valid")
    return credentials


def metric_row(row: dict[str, Any], dimensions: Sequence[str]) -> dict[str, Any]:
    keys = row.get("keys") or []
    result: dict[str, Any] = {
        dimension: keys[index] if index < len(keys) else ""
        for index, dimension in enumerate(dimensions)
    }
    result.update(
        {
            "clicks": float(row.get("clicks", 0)),
            "impressions": float(row.get("impressions", 0)),
            "ctr": float(row.get("ctr", 0)),
            "position": float(row.get("position", 0)),
        }
    )
    return result


class SearchConsoleReader:
    def __init__(self, credentials: Credentials, site_url: str) -> None:
        self.site_url = site_url
        self.service = build(
            "searchconsole", "v1", credentials=credentials, cache_discovery=False
        )

    def verify_property(self) -> dict[str, Any]:
        entries = self.service.sites().list().execute().get("siteEntry", [])
        for entry in entries:
            if entry.get("siteUrl") == self.site_url:
                return {
                    "site_url": entry.get("siteUrl"),
                    "permission_level": entry.get("permissionLevel"),
                }
        raise CliError(f"Authorized account cannot access Search Console property: {self.site_url}")

    def query(
        self,
        window: DateWindow,
        dimensions: Sequence[str] = (),
        *,
        max_rows: int = API_PAGE_SIZE,
    ) -> list[dict[str, Any]]:
        if not dimensions:
            response = (
                self.service.searchanalytics()
                .query(
                    siteUrl=self.site_url,
                    body={
                        "startDate": window.start.isoformat(),
                        "endDate": window.end.isoformat(),
                        "type": "web",
                        "dataState": "final",
                        "rowLimit": 1,
                    },
                )
                .execute()
            )
            return [metric_row(row, dimensions) for row in response.get("rows", [])]

        collected: list[dict[str, Any]] = []
        start_row = 0
        while len(collected) < max_rows:
            page_size = min(API_PAGE_SIZE, max_rows - len(collected))
            response = (
                self.service.searchanalytics()
                .query(
                    siteUrl=self.site_url,
                    body={
                        "startDate": window.start.isoformat(),
                        "endDate": window.end.isoformat(),
                        "type": "web",
                        "dataState": "final",
                        "dimensions": list(dimensions),
                        "rowLimit": page_size,
                        "startRow": start_row,
                    },
                )
                .execute()
            )
            rows = response.get("rows", [])
            collected.extend(metric_row(row, dimensions) for row in rows)
            if len(rows) < page_size:
                break
            start_row += len(rows)
        return collected

    def sitemaps(self) -> list[dict[str, Any]]:
        entries = (
            self.service.sitemaps().list(siteUrl=self.site_url).execute().get("sitemap", [])
        )
        results: list[dict[str, Any]] = []
        for entry in entries:
            contents = entry.get("contents") or []
            results.append(
                {
                    "path": entry.get("path", ""),
                    "last_submitted": entry.get("lastSubmitted", ""),
                    "last_downloaded": entry.get("lastDownloaded", ""),
                    "pending": bool(entry.get("isPending", False)),
                    "is_index": bool(entry.get("isSitemapsIndex", False)),
                    "warnings": int(entry.get("warnings", 0)),
                    "errors": int(entry.get("errors", 0)),
                    "submitted_urls": sum(int(item.get("submitted", 0)) for item in contents),
                    "indexed_urls": sum(int(item.get("indexed", 0)) for item in contents),
                }
            )
        return sorted(results, key=lambda item: item["path"])


def empty_summary() -> dict[str, float]:
    return {"clicks": 0.0, "impressions": 0.0, "ctr": 0.0, "position": 0.0}


def summary_for(reader: SearchConsoleReader, window: DateWindow) -> dict[str, float]:
    rows = reader.query(window)
    return rows[0] if rows else empty_summary()


def percent_change(current: float, previous: float) -> float | None:
    if previous == 0:
        return None
    return ((current - previous) / previous) * 100


def comparison(current: dict[str, float], previous: dict[str, float]) -> list[dict[str, Any]]:
    rows: list[dict[str, Any]] = []
    for metric in ("clicks", "impressions", "ctr", "position"):
        current_value = float(current.get(metric, 0))
        previous_value = float(previous.get(metric, 0))
        change = current_value - previous_value
        if metric == "position":
            direction = "improved" if change < 0 else "declined" if change > 0 else "unchanged"
        else:
            direction = "increased" if change > 0 else "decreased" if change < 0 else "unchanged"
        rows.append(
            {
                "metric": metric,
                "current": current_value,
                "previous": previous_value,
                "change": change,
                "percent_change": percent_change(current_value, previous_value),
                "direction": direction,
            }
        )
    return rows


def ranking_rows(
    rows: Iterable[dict[str, Any]], *, position_min: float, position_max: float
) -> list[dict[str, Any]]:
    selected = [
        dict(row)
        for row in rows
        if position_min <= float(row.get("position", 0)) <= position_max
    ]
    return sorted(selected, key=lambda row: (-row["impressions"], row["position"]))


def top_metric_rows(rows: Iterable[dict[str, Any]]) -> list[dict[str, Any]]:
    """Order dimension rows by clicks, then impressions, with stable tie-breakers."""
    return sorted(
        (dict(row) for row in rows),
        key=lambda row: (
            -float(row.get("clicks", 0)),
            -float(row.get("impressions", 0)),
            str(row.get("query") or row.get("page") or row.get("country") or row.get("device") or ""),
        ),
    )


def opportunity_rows(
    rows: Iterable[dict[str, Any]],
    *,
    position_min: float,
    position_max: float,
    min_impressions: float,
    max_ctr: float,
) -> list[dict[str, Any]]:
    opportunities: list[dict[str, Any]] = []
    for source in rows:
        position = float(source.get("position", 0))
        impressions = float(source.get("impressions", 0))
        ctr = float(source.get("ctr", 0))
        if not (
            position_min <= position <= position_max
            and impressions >= min_impressions
            and ctr <= max_ctr
        ):
            continue
        row = dict(source)
        row["ctr_threshold"] = max_ctr
        row["estimated_clicks_at_threshold"] = round(impressions * max_ctr, 2)
        row["estimated_click_gain"] = round(max(0.0, impressions * (max_ctr - ctr)), 2)
        opportunities.append(row)
    return sorted(
        opportunities,
        key=lambda row: (-row["estimated_click_gain"], -row["impressions"], row["position"]),
    )


def strongest_page_by_query(pair_rows: Iterable[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    mapping: dict[str, dict[str, Any]] = {}
    for row in pair_rows:
        query = str(row.get("query", ""))
        if not query:
            continue
        current = mapping.get(query)
        if current is None or row["impressions"] > current["impressions"]:
            mapping[query] = row
    return mapping


def page_visibility_losses(
    current_rows: Iterable[dict[str, Any]],
    previous_rows: Iterable[dict[str, Any]],
    *,
    min_previous_impressions: float,
) -> list[dict[str, Any]]:
    current_map = {row["page"]: row for row in current_rows}
    losses: list[dict[str, Any]] = []
    for previous in previous_rows:
        if previous["impressions"] < min_previous_impressions:
            continue
        current = current_map.get(previous["page"], empty_summary() | {"page": previous["page"]})
        impression_change = current["impressions"] - previous["impressions"]
        if impression_change >= 0:
            continue
        losses.append(
            {
                "page": previous["page"],
                "current_impressions": current["impressions"],
                "previous_impressions": previous["impressions"],
                "impression_change": impression_change,
                "current_clicks": current["clicks"],
                "previous_clicks": previous["clicks"],
            }
        )
    return sorted(losses, key=lambda row: row["impression_change"])


def prioritized_actions(
    *,
    query_opportunities: Sequence[dict[str, Any]],
    page_opportunities: Sequence[dict[str, Any]],
    pair_rows: Sequence[dict[str, Any]],
    page_losses: Sequence[dict[str, Any]],
    sitemaps: Sequence[dict[str, Any]],
) -> list[dict[str, Any]]:
    actions: list[dict[str, Any]] = []
    priority = 1

    for sitemap in sitemaps:
        if sitemap["errors"] or sitemap["warnings"]:
            actions.append(
                {
                    "priority": priority,
                    "category": "sitemap",
                    "target": sitemap["path"],
                    "action": "Resolve the reported sitemap errors and warnings, then resubmit only if the sitemap content changed.",
                    "evidence": f"{sitemap['errors']} errors and {sitemap['warnings']} warnings.",
                }
            )
            priority += 1

    query_pages = strongest_page_by_query(pair_rows)
    for opportunity in query_opportunities[:5]:
        query = opportunity["query"]
        page = query_pages.get(query, {}).get("page", "the strongest ranking page")
        actions.append(
            {
                "priority": priority,
                "category": "query_ctr",
                "target": query,
                "action": f"Improve title, description, and on-page alignment for this query on {page}.",
                "evidence": (
                    f"{opportunity['impressions']:.0f} impressions, "
                    f"{opportunity['ctr'] * 100:.2f}% CTR, "
                    f"average position {opportunity['position']:.2f}."
                ),
            }
        )
        priority += 1

    for opportunity in page_opportunities[:3]:
        actions.append(
            {
                "priority": priority,
                "category": "page_ctr",
                "target": opportunity["page"],
                "action": "Review the search snippet and opening page copy for closer alignment with the queries already producing impressions.",
                "evidence": (
                    f"{opportunity['impressions']:.0f} impressions, "
                    f"{opportunity['ctr'] * 100:.2f}% CTR, "
                    f"average position {opportunity['position']:.2f}."
                ),
            }
        )
        priority += 1

    for loss in page_losses[:3]:
        actions.append(
            {
                "priority": priority,
                "category": "visibility_loss",
                "target": loss["page"],
                "action": "Review this page's current queries, indexing state, and recent content or internal-link changes.",
                "evidence": (
                    f"Impressions changed from {loss['previous_impressions']:.0f} "
                    f"to {loss['current_impressions']:.0f} "
                    f"({loss['impression_change']:.0f})."
                ),
            }
        )
        priority += 1

    if not actions:
        actions.append(
            {
                "priority": 1,
                "category": "monitor",
                "target": "Search Console",
                "action": "Continue monitoring; no sitemap issue, visibility loss, or configured position/CTR opportunity met the report thresholds.",
                "evidence": "No report row met the configured action rules.",
            }
        )
    return actions


def build_report(
    reader: SearchConsoleReader,
    *,
    current_window: DateWindow,
    previous_window: DateWindow,
    top_limit: int,
    max_rows: int,
    position_min: float,
    position_max: float,
    min_impressions: float,
    max_ctr: float,
) -> dict[str, Any]:
    property_info = reader.verify_property()
    current_summary = summary_for(reader, current_window)
    previous_summary = summary_for(reader, previous_window)

    current_queries = reader.query(current_window, ["query"], max_rows=max_rows)
    current_pages = reader.query(current_window, ["page"], max_rows=max_rows)
    previous_pages = reader.query(previous_window, ["page"], max_rows=max_rows)
    pair_rows = reader.query(current_window, ["query", "page"], max_rows=max_rows)
    countries = reader.query(current_window, ["country"], max_rows=1_000)
    devices = reader.query(current_window, ["device"], max_rows=100)
    sitemap_rows = reader.sitemaps()

    ranking_queries = ranking_rows(
        current_queries, position_min=position_min, position_max=position_max
    )
    query_opportunities = opportunity_rows(
        current_queries,
        position_min=position_min,
        position_max=position_max,
        min_impressions=min_impressions,
        max_ctr=max_ctr,
    )
    page_opportunities = opportunity_rows(
        current_pages,
        position_min=position_min,
        position_max=position_max,
        min_impressions=min_impressions,
        max_ctr=max_ctr,
    )
    losses = page_visibility_losses(
        current_pages,
        previous_pages,
        min_previous_impressions=min_impressions,
    )
    actions = prioritized_actions(
        query_opportunities=query_opportunities,
        page_opportunities=page_opportunities,
        pair_rows=pair_rows,
        page_losses=losses,
        sitemaps=sitemap_rows,
    )

    return {
        "generated_at": date.today().isoformat(),
        "property": property_info,
        "current_window": current_window.as_dict(),
        "previous_window": previous_window.as_dict(),
        "settings": {
            "top_limit": top_limit,
            "max_rows": max_rows,
            "position_min": position_min,
            "position_max": position_max,
            "min_impressions": min_impressions,
            "max_ctr": max_ctr,
            "data_state": "final",
            "search_type": "web",
        },
        "summary": {
            "current": current_summary,
            "previous": previous_summary,
            "comparison": comparison(current_summary, previous_summary),
        },
        "top_queries": top_metric_rows(current_queries)[:top_limit],
        "top_pages": top_metric_rows(current_pages)[:top_limit],
        "countries": top_metric_rows(countries),
        "devices": top_metric_rows(devices),
        "ranking_queries": ranking_queries[: max(top_limit, 50)],
        "query_opportunities": query_opportunities[: max(top_limit, 50)],
        "page_opportunities": page_opportunities[: max(top_limit, 50)],
        "page_visibility_losses": losses[: max(top_limit, 50)],
        "sitemaps": sitemap_rows,
        "prioritized_actions": actions,
    }


def display_number(value: float) -> str:
    return f"{value:,.0f}"


def display_percent(value: float) -> str:
    return f"{value * 100:.2f}%"


def md_escape(value: Any) -> str:
    return str(value).replace("|", "\\|").replace("\n", " ")


def markdown_table(headers: Sequence[str], rows: Iterable[Sequence[Any]]) -> str:
    lines = [
        "| " + " | ".join(headers) + " |",
        "| " + " | ".join("---" for _ in headers) + " |",
    ]
    lines.extend("| " + " | ".join(md_escape(value) for value in row) + " |" for row in rows)
    return "\n".join(lines)


def metrics_table(rows: Sequence[dict[str, Any]], key_name: str) -> str:
    return markdown_table(
        [key_name.title(), "Clicks", "Impressions", "CTR", "Position"],
        (
            [
                row.get(key_name, ""),
                display_number(row["clicks"]),
                display_number(row["impressions"]),
                display_percent(row["ctr"]),
                f"{row['position']:.2f}",
            ]
            for row in rows
        ),
    )


def render_markdown(report: dict[str, Any]) -> str:
    current = report["summary"]["current"]
    previous = report["summary"]["previous"]
    current_window = report["current_window"]
    previous_window = report["previous_window"]
    settings = report["settings"]

    sections = [
        "# Schedulaa Search Console Report",
        "",
        f"- Property: `{report['property']['site_url']}`",
        f"- Permission: `{report['property']['permission_level']}`",
        f"- Current period: {current_window['start']} to {current_window['end']}",
        f"- Previous period: {previous_window['start']} to {previous_window['end']}",
        "- Data: final Google Search Console web results",
        "",
        "## Summary: Last Period vs Previous Period",
        "",
        markdown_table(
            ["Metric", "Current", "Previous", "Change"],
            [
                ["Clicks", display_number(current["clicks"]), display_number(previous["clicks"]), f"{current['clicks'] - previous['clicks']:+.0f}"],
                ["Impressions", display_number(current["impressions"]), display_number(previous["impressions"]), f"{current['impressions'] - previous['impressions']:+.0f}"],
                ["CTR", display_percent(current["ctr"]), display_percent(previous["ctr"]), f"{(current['ctr'] - previous['ctr']) * 100:+.2f} pp"],
                ["Average position", f"{current['position']:.2f}", f"{previous['position']:.2f}", f"{current['position'] - previous['position']:+.2f}"],
            ],
        ),
        "",
        "## Top Queries",
        "",
        metrics_table(report["top_queries"], "query"),
        "",
        "## Top Pages",
        "",
        metrics_table(report["top_pages"], "page"),
        "",
        f"## Queries Ranking Between Positions {settings['position_min']:g}–{settings['position_max']:g}",
        "",
        metrics_table(report["ranking_queries"], "query"),
        "",
        "## High-Impression / Low-CTR Query Opportunities",
        "",
        f"Thresholds: at least {settings['min_impressions']:g} impressions, CTR at or below {settings['max_ctr'] * 100:.2f}%, position {settings['position_min']:g}–{settings['position_max']:g}.",
        "",
        metrics_table(report["query_opportunities"], "query"),
        "",
        "## High-Impression / Low-CTR Page Opportunities",
        "",
        metrics_table(report["page_opportunities"], "page"),
        "",
        "## Countries",
        "",
        metrics_table(report["countries"], "country"),
        "",
        "## Devices",
        "",
        metrics_table(report["devices"], "device"),
        "",
        "## Sitemap Status",
        "",
        markdown_table(
            ["Sitemap", "Submitted", "Downloaded", "Pending", "Warnings", "Errors", "Submitted URLs", "Indexed URLs"],
            (
                [
                    row["path"],
                    row["last_submitted"],
                    row["last_downloaded"],
                    row["pending"],
                    row["warnings"],
                    row["errors"],
                    row["submitted_urls"],
                    row["indexed_urls"],
                ]
                for row in report["sitemaps"]
            ),
        ),
        "",
        "## Prioritized Actions",
        "",
    ]
    for action in report["prioritized_actions"]:
        sections.extend(
            [
                f"{action['priority']}. **{action['action']}**",
                f"   - Target: `{action['target']}`",
                f"   - Evidence: {action['evidence']}",
            ]
        )
    sections.append("")
    return "\n".join(sections)


def csv_text(rows: Sequence[dict[str, Any]], fields: Sequence[str] | None = None) -> str:
    if not rows:
        return ""
    fieldnames = list(fields or rows[0].keys())
    buffer = io.StringIO()
    writer = csv.DictWriter(buffer, fieldnames=fieldnames, extrasaction="ignore")
    writer.writeheader()
    writer.writerows(rows)
    return buffer.getvalue()


def summary_csv_rows(report: dict[str, Any]) -> list[dict[str, Any]]:
    return report["summary"]["comparison"]


def export_report(report: dict[str, Any], output_dir: Path, formats: set[str]) -> list[Path]:
    output_dir.mkdir(parents=True, exist_ok=True, mode=0o700)
    os.chmod(output_dir, 0o700)
    written: list[Path] = []
    if "markdown" in formats:
        path = output_dir / "schedulaa-search-console-report.md"
        secure_write_text(path, render_markdown(report))
        written.append(path)
    if "json" in formats:
        path = output_dir / "schedulaa-search-console-report.json"
        secure_write_text(path, json.dumps(report, indent=2, sort_keys=True) + "\n")
        written.append(path)
    if "csv" in formats:
        datasets: dict[str, Sequence[dict[str, Any]]] = {
            "summary": summary_csv_rows(report),
            "top-queries": report["top_queries"],
            "top-pages": report["top_pages"],
            "countries": report["countries"],
            "devices": report["devices"],
            "ranking-queries-4-20": report["ranking_queries"],
            "query-opportunities": report["query_opportunities"],
            "page-opportunities": report["page_opportunities"],
            "page-visibility-losses": report["page_visibility_losses"],
            "sitemaps": report["sitemaps"],
            "prioritized-actions": report["prioritized_actions"],
        }
        for name, rows in datasets.items():
            path = output_dir / f"{name}.csv"
            secure_write_text(path, csv_text(list(rows)))
            written.append(path)
    return written


def render_section(report: dict[str, Any], command: str, output_format: str) -> str:
    mapping: dict[str, Any] = {
        "summary": report["summary"],
        "queries": report["top_queries"],
        "pages": report["top_pages"],
        "countries": report["countries"],
        "devices": report["devices"],
        "compare": report["summary"]["comparison"],
        "opportunities": {
            "queries": report["query_opportunities"],
            "pages": report["page_opportunities"],
        },
        "sitemaps": report["sitemaps"],
    }
    data = mapping[command]
    if output_format == "json":
        return json.dumps(data, indent=2, sort_keys=True)
    if output_format == "csv":
        if isinstance(data, list):
            return csv_text(data)
        if command == "opportunities":
            return csv_text(data["queries"])
        return csv_text(report["summary"]["comparison"])
    if command == "queries":
        return metrics_table(data, "query")
    if command == "pages":
        return metrics_table(data, "page")
    if command == "countries":
        return metrics_table(data, "country")
    if command == "devices":
        return metrics_table(data, "device")
    if command == "sitemaps":
        return markdown_table(
            ["Sitemap", "Pending", "Warnings", "Errors", "Submitted URLs", "Indexed URLs"],
            ([row["path"], row["pending"], row["warnings"], row["errors"], row["submitted_urls"], row["indexed_urls"]] for row in data),
        )
    if command == "opportunities":
        return "## Queries\n\n" + metrics_table(data["queries"], "query") + "\n\n## Pages\n\n" + metrics_table(data["pages"], "page")
    return markdown_table(
        ["Metric", "Current", "Previous", "Change", "Direction"],
        ([row["metric"], row["current"], row["previous"], row["change"], row["direction"]] for row in report["summary"]["comparison"]),
    )


def parse_formats(value: str) -> set[str]:
    formats = {item.strip().lower() for item in value.split(",") if item.strip()}
    allowed = {"markdown", "csv", "json"}
    invalid = formats - allowed
    if not formats or invalid:
        raise argparse.ArgumentTypeError(
            f"Formats must be a comma-separated subset of: {', '.join(sorted(allowed))}"
        )
    return formats


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Read-only Google Search Console reporting for Schedulaa."
    )
    parser.add_argument(
        "command",
        nargs="?",
        default="full",
        choices=["full", "summary", "queries", "pages", "countries", "devices", "compare", "opportunities", "sitemaps"],
    )
    parser.add_argument("--site-url", default=DEFAULT_SITE_URL)
    parser.add_argument("--days", type=int, default=28)
    parser.add_argument("--lag-days", type=int, default=3)
    parser.add_argument("--end-date", type=parse_iso_date)
    parser.add_argument("--top-limit", type=int, default=20)
    parser.add_argument("--max-rows", type=int, default=25_000)
    parser.add_argument("--position-min", type=float, default=4.0)
    parser.add_argument("--position-max", type=float, default=20.0)
    parser.add_argument("--min-impressions", type=float, default=20.0)
    parser.add_argument("--max-ctr", type=float, default=0.02)
    parser.add_argument("--client-file", type=Path, default=DEFAULT_CLIENT_FILE)
    parser.add_argument("--token-file", type=Path, default=DEFAULT_TOKEN_FILE)
    parser.add_argument("--formats", type=parse_formats, default={"markdown", "csv", "json"})
    parser.add_argument("--output-dir", type=Path)
    return parser


def run(args: argparse.Namespace) -> int:
    if args.top_limit < 1 or args.max_rows < 1:
        raise CliError("--top-limit and --max-rows must be positive")
    if args.position_min > args.position_max:
        raise CliError("--position-min cannot exceed --position-max")
    if not 0 <= args.max_ctr <= 1:
        raise CliError("--max-ctr must be between 0 and 1")

    current_window, previous_window = comparison_windows(
        days=args.days, lag_days=args.lag_days, end_date=args.end_date
    )
    credentials = load_credentials(args.client_file, args.token_file)
    reader = SearchConsoleReader(credentials, args.site_url)
    report = build_report(
        reader,
        current_window=current_window,
        previous_window=previous_window,
        top_limit=args.top_limit,
        max_rows=args.max_rows,
        position_min=args.position_min,
        position_max=args.position_max,
        min_impressions=args.min_impressions,
        max_ctr=args.max_ctr,
    )

    if args.command == "full":
        output_dir = args.output_dir or (
            PROJECT_DIR / "output" / f"{current_window.start.isoformat()}_to_{current_window.end.isoformat()}"
        )
        paths = export_report(report, output_dir, args.formats)
        print(f"Property: {report['property']['site_url']} [{report['property']['permission_level']}]")
        print(f"Current: {current_window.start} to {current_window.end}")
        print(f"Previous: {previous_window.start} to {previous_window.end}")
        for path in paths:
            print(f"Wrote: {path}")
        return 0

    output_format = "markdown"
    if len(args.formats) == 1:
        output_format = next(iter(args.formats))
    print(render_section(report, args.command, output_format))
    return 0


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()
    try:
        return run(args)
    except CliError as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 2
    except HttpError as exc:
        status = getattr(exc.resp, "status", "unknown")
        print(f"error: Google Search Console API request failed (HTTP {status})", file=sys.stderr)
        return 3


if __name__ == "__main__":
    raise SystemExit(main())
