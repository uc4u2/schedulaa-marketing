"""Focused tests for the read-only Search Console reporting CLI."""

from __future__ import annotations

import json
import os
import tempfile
import unittest
from datetime import date
from pathlib import Path

from search_console_cli import (
    CliError,
    comparison_windows,
    opportunity_rows,
    page_visibility_losses,
    prioritized_actions,
    secure_write_text,
    top_metric_rows,
    validate_oauth_files,
)


class DateWindowTests(unittest.TestCase):
    def test_default_28_day_windows_are_contiguous_and_non_overlapping(self) -> None:
        current, previous = comparison_windows(
            days=28, lag_days=3, today=date(2026, 10, 8)
        )
        self.assertEqual(current.start.isoformat(), "2026-09-08")
        self.assertEqual(current.end.isoformat(), "2026-10-05")
        self.assertEqual(previous.start.isoformat(), "2026-08-11")
        self.assertEqual(previous.end.isoformat(), "2026-09-07")


class OpportunityTests(unittest.TestCase):
    def test_top_rows_break_equal_clicks_by_impressions(self) -> None:
        rows = [
            {"query": "low", "clicks": 0, "impressions": 2},
            {"query": "high", "clicks": 0, "impressions": 50},
            {"query": "clicked", "clicks": 1, "impressions": 1},
        ]
        self.assertEqual(
            [row["query"] for row in top_metric_rows(rows)],
            ["clicked", "high", "low"],
        )

    def test_opportunities_require_position_impressions_and_weak_ctr(self) -> None:
        rows = [
            {"query": "good", "impressions": 100, "ctr": 0.01, "position": 8, "clicks": 1},
            {"query": "too-low-position", "impressions": 100, "ctr": 0.01, "position": 2, "clicks": 1},
            {"query": "too-few-impressions", "impressions": 10, "ctr": 0, "position": 8, "clicks": 0},
            {"query": "ctr-healthy", "impressions": 100, "ctr": 0.05, "position": 8, "clicks": 5},
        ]
        result = opportunity_rows(
            rows,
            position_min=4,
            position_max=20,
            min_impressions=20,
            max_ctr=0.02,
        )
        self.assertEqual([row["query"] for row in result], ["good"])
        self.assertEqual(result[0]["estimated_click_gain"], 1.0)

    def test_page_losses_compare_matching_urls(self) -> None:
        current = [
            {"page": "https://example.test/a", "impressions": 40, "clicks": 2, "ctr": 0.05, "position": 8}
        ]
        previous = [
            {"page": "https://example.test/a", "impressions": 100, "clicks": 5, "ctr": 0.05, "position": 8}
        ]
        result = page_visibility_losses(
            current, previous, min_previous_impressions=20
        )
        self.assertEqual(result[0]["impression_change"], -60)

    def test_actions_include_actual_query_page_and_metrics(self) -> None:
        query_opportunities = [
            {"query": "salon booking", "impressions": 80, "ctr": 0.01, "position": 9}
        ]
        pair_rows = [
            {
                "query": "salon booking",
                "page": "https://example.test/salon",
                "impressions": 70,
                "clicks": 1,
                "ctr": 0.01,
                "position": 9,
            }
        ]
        actions = prioritized_actions(
            query_opportunities=query_opportunities,
            page_opportunities=[],
            pair_rows=pair_rows,
            page_losses=[],
            sitemaps=[],
        )
        self.assertIn("salon booking", actions[0]["target"])
        self.assertIn("https://example.test/salon", actions[0]["action"])
        self.assertIn("80 impressions", actions[0]["evidence"])


class SecurityTests(unittest.TestCase):
    def test_secure_write_uses_owner_only_permissions(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "report.json"
            secure_write_text(path, "{}\n")
            self.assertEqual(path.stat().st_mode & 0o777, 0o600)

    def test_broader_token_scope_is_rejected(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            client = root / "client.json"
            token = root / "token.json"
            client.write_text(json.dumps({"installed": {"client_id": "test"}}))
            token.write_text(
                json.dumps(
                    {
                        "refresh_token": "not-a-real-token",
                        "scopes": ["https://www.googleapis.com/auth/webmasters"],
                    }
                )
            )
            os.chmod(client, 0o600)
            os.chmod(token, 0o600)
            with self.assertRaises(CliError):
                validate_oauth_files(client, token)


if __name__ == "__main__":
    unittest.main()
