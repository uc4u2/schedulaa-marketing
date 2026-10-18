"use client";

import { FormEvent, useState } from "react";

import { openMarketingLeadWidget } from "@/components/shared/marketingLead/marketingLeadPopup";
import { trackAnalyticsEvent } from "@/utils/analytics";

const INITIAL_FORM = {
  name: "",
  email: "",
  first_job: "",
  consent_to_contact: false,
};

export default function OwnAiEarlyAccessForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const canSubmit =
    form.name.trim() &&
    form.email.trim() &&
    form.first_job.trim() &&
    form.consent_to_contact;

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit || submitting) {
      return;
    }

    setSubmitting(true);
    setError("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch("/api/marketing-leads/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          business_type: "AI assistant early access",
          employees_count: "",
          current_crm: "",
          needs_booking: false,
          needs_estimates: false,
          needs_invoices: false,
          city: "",
          name: form.name.trim(),
          email: form.email.trim(),
          phone: "",
          message: `AI assistant early-access request. First job: ${form.first_job.trim()}`,
          consent_to_contact: true,
          page_url: window.location.href,
          utm_source:
            new URLSearchParams(window.location.search).get("utm_source") || "",
          utm_campaign:
            new URLSearchParams(window.location.search).get("utm_campaign") ||
            "",
          utm_medium:
            new URLSearchParams(window.location.search).get("utm_medium") || "",
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data?.error || "Unable to join the waitlist right now.");
        return;
      }

      trackAnalyticsEvent("demo_request_submit", {
        form_name: "ai_assistant_early_access",
        page_path: window.location.pathname,
        has_phone: false,
      });
      setSubmitted(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error && submitError.name === "AbortError"
          ? "The request took too long. Please try again in a moment."
          : "Connection issue. Please try again in a moment.",
      );
    } finally {
      window.clearTimeout(timeout);
      setSubmitting(false);
    }
  };

  return (
    <section
      id="early-access"
      aria-labelledby="early-access-title"
      className="mt-8 scroll-mt-32 rounded-[24px] border border-primary-500/30 bg-white p-6 shadow-2 dark:bg-background-8 md:p-10"
    >
      <p className="badge badge-yellow-v2">Early access</p>
      <h2 id="early-access-title" className="mt-4 text-2xl font-semibold">
        Join the owner-assistant early-access waitlist
      </h2>
      <p className="mt-3 max-w-3xl text-secondary/70 dark:text-accent/70">
        We are opening access in tested batches. Tell us which job would save
        you the most time, and we will use that answer to prioritize the right
        workflows.
      </p>

      {submitted ? (
        <div
          className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900"
          role="status"
        >
          <p className="font-semibold">You are on the early-access list.</p>
          <p className="mt-1 text-sm">
            We will follow up when a suitable testing batch is ready.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="early-access-name"
              className="text-sm font-semibold"
            >
              Name
            </label>
            <input
              id="early-access-name"
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              autoComplete="name"
              required
              className="mt-2 w-full rounded-xl border border-stroke-2 bg-white px-4 py-3 text-secondary dark:border-stroke-7 dark:bg-background-7 dark:text-accent"
            />
          </div>
          <div>
            <label
              htmlFor="early-access-email"
              className="text-sm font-semibold"
            >
              Work email
            </label>
            <input
              id="early-access-email"
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  email: event.target.value,
                }))
              }
              autoComplete="email"
              required
              className="mt-2 w-full rounded-xl border border-stroke-2 bg-white px-4 py-3 text-secondary dark:border-stroke-7 dark:bg-background-7 dark:text-accent"
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="early-access-first-job"
              className="text-sm font-semibold"
            >
              What is the one job you would hand your assistant first?
            </label>
            <textarea
              id="early-access-first-job"
              value={form.first_job}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  first_job: event.target.value,
                }))
              }
              rows={4}
              maxLength={1000}
              required
              className="mt-2 w-full resize-y rounded-xl border border-stroke-2 bg-white px-4 py-3 text-secondary dark:border-stroke-7 dark:bg-background-7 dark:text-accent"
            />
          </div>
          <label className="flex items-start gap-3 text-sm text-secondary/75 dark:text-accent/75 md:col-span-2">
            <input
              type="checkbox"
              checked={form.consent_to_contact}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  consent_to_contact: event.target.checked,
                }))
              }
              required
              className="mt-1 size-4"
            />
            <span>
              I agree to receive follow-up from Schedulaa about this
              early-access request and relevant product information.
            </span>
          </label>
          {error ? (
            <p className="text-sm text-rose-600 md:col-span-2" role="alert">
              {error}
            </p>
          ) : null}
          <div className="flex flex-wrap items-center gap-4 md:col-span-2">
            <button
              type="submit"
              disabled={!canSubmit || submitting}
              className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? "Joining…" : "Join early access"}
            </button>
            <button
              type="button"
              onClick={() => openMarketingLeadWidget("ai_early_access")}
              className="text-sm font-semibold text-primary-500 underline"
            >
              Prefer a personalized walkthrough?
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
