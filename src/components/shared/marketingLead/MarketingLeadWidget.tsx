"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import navbarLogo from "@public/images/shared/schedulaa-logo-navbar.webp";
import {
  MARKETING_LEAD_AUTO_OPEN_MS,
  MARKETING_LEAD_OPEN_EVENT,
  isMarketingHomepage,
  marketingLeadCopy,
} from "@/components/shared/marketingLead/marketingLeadPopup";
import { trackAnalyticsEvent } from "@/utils/analytics";

type LeadState = {
  business_type: string;
  employees_count: string;
  current_crm: string;
  needs_booking: boolean;
  needs_estimates: boolean;
  needs_invoices: boolean;
  city: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  consent_to_contact: boolean;
};

const INITIAL_STATE: LeadState = {
  business_type: "",
  employees_count: "",
  current_crm: "",
  needs_booking: true,
  needs_estimates: true,
  needs_invoices: true,
  city: "",
  name: "",
  email: "",
  phone: "",
  message: "",
  consent_to_contact: false,
};

const STEPS = [
  "Business type",
  "Team size",
  "Current system",
  "Priorities",
  "Location",
  "Contact",
  "Consent",
];

const BUSINESS_OPTIONS = [
  "HVAC",
  "Cleaning",
  "Plumbing",
  "Roofing",
  "Electrical",
  "Landscaping",
  "General contracting",
  "Handyman",
  "Pest control",
  "Moving",
  "Appliance repair",
  "Auto detailing",
  "Pool service",
  "Pet grooming",
  "Salon",
  "Barbershop",
  "Spa",
  "Med spa",
  "Dental clinic",
  "Medical clinic",
  "Fitness studio",
  "Tutoring",
  "General service business",
];

export default function MarketingLeadWidget() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<LeadState>(INITIAL_STATE);
  const [announcement, setAnnouncement] = useState("");
  const suppressAutoOpenRef = useRef(false);

  const hidden = pathname.includes("/login") || pathname.includes("/signup");
  const progress = ((step + 1) / STEPS.length) * 100;
  const canSubmit =
    form.name.trim() && form.email.trim() && form.consent_to_contact;

  const stepLabel = useMemo(() => STEPS[step] || STEPS[0], [step]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        suppressAutoOpenRef.current = true;
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (hidden || !isMarketingHomepage(pathname)) {
      return;
    }

    const timer = window.setTimeout(() => {
      if (suppressAutoOpenRef.current) {
        return;
      }
      setAnnouncement(marketingLeadCopy.autoOpenAnnouncement);
      setOpen(true);
    }, MARKETING_LEAD_AUTO_OPEN_MS);

    return () => window.clearTimeout(timer);
  }, [hidden, pathname]);

  useEffect(() => {
    const onOpenRequest = () => {
      suppressAutoOpenRef.current = true;
      setAnnouncement(marketingLeadCopy.autoOpenAnnouncement);
      setOpen(true);
      setSubmitted(false);
      setStep(0);
      setError("");
    };
    window.addEventListener(MARKETING_LEAD_OPEN_EVENT, onOpenRequest);
    return () =>
      window.removeEventListener(MARKETING_LEAD_OPEN_EVENT, onOpenRequest);
  }, []);

  const closeWidget = () => {
    suppressAutoOpenRef.current = true;
    setOpen(false);
  };

  const openWidget = () => {
    suppressAutoOpenRef.current = true;
    setOpen(true);
    setSubmitted(false);
    setStep(0);
    setError("");
  };

  if (hidden) {
    return null;
  }

  const submitLead = async () => {
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
          ...form,
          page_url: typeof window !== "undefined" ? window.location.href : "",
          utm_source:
            typeof window !== "undefined"
              ? new URLSearchParams(window.location.search).get("utm_source") ||
                ""
              : "",
          utm_campaign:
            typeof window !== "undefined"
              ? new URLSearchParams(window.location.search).get(
                  "utm_campaign",
                ) || ""
              : "",
          utm_medium:
            typeof window !== "undefined"
              ? new URLSearchParams(window.location.search).get("utm_medium") ||
                ""
              : "",
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data?.error || "Unable to send your request right now.");
        return;
      }
      trackAnalyticsEvent("demo_request_submit", {
        form_name: "homepage_qualification",
        page_path: window.location.pathname,
        has_phone: Boolean(form.phone.trim()),
      });
      setSubmitted(true);
    } catch (fetchError) {
      if (fetchError instanceof Error && fetchError.name === "AbortError") {
        setError(
          "Still trying to reach the server took too long. Please try again in a moment.",
        );
      } else {
        setError("Connection issue. Please try again in a moment.");
      }
    } finally {
      window.clearTimeout(timeout);
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="sr-only" aria-live="polite">
        {announcement}
      </div>
      {!open ? (
        <button
          type="button"
          onClick={openWidget}
          className="fixed bottom-20 left-3 z-[118] inline-flex max-w-[calc(100vw-1.5rem)] items-center gap-2 rounded-full border border-sky-900/20 bg-[#123b5d] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5 hover:bg-[#17486f] sm:bottom-5 sm:left-5"
          aria-haspopup="dialog"
          aria-label={marketingLeadCopy.launcher}
        >
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#123b5d]">
            S
          </span>
          <span>{marketingLeadCopy.launcher}</span>
        </button>
      ) : (
        <div
          className="fixed bottom-2 left-2 z-[125] flex max-h-[calc(100vh-16px)] w-[min(420px,calc(100vw-16px))] flex-col overflow-hidden rounded-[28px] border border-sky-950/10 bg-white shadow-[0_32px_80px_rgba(15,23,42,0.24)] sm:bottom-3 sm:left-3 sm:h-[min(680px,calc(100vh-24px))] sm:w-[min(420px,calc(100vw-24px))]"
          role="dialog"
          aria-modal="false"
          aria-labelledby="marketing-lead-title"
          aria-describedby="marketing-lead-description"
        >
          <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.28),transparent_42%),linear-gradient(145deg,#0b2f4c_0%,#164f78_100%)] px-6 py-5 text-white">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="inline-flex rounded-2xl border border-white/20 bg-white px-3 py-2 shadow-sm">
                <Image
                  src={navbarLogo}
                  alt="Schedulaa"
                  width={112}
                  sizes="112px"
                  className="h-auto w-28"
                  priority
                />
              </div>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-sky-50">
                Personalized demo
              </span>
            </div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p
                  id="marketing-lead-title"
                  className="text-xl font-semibold tracking-[-0.02em] text-white"
                >
                  {marketingLeadCopy.title}
                </p>
                <p
                  id="marketing-lead-description"
                  className="mt-1.5 max-w-[31rem] text-sm leading-6 text-sky-100"
                >
                  {marketingLeadCopy.description}
                </p>
              </div>
              <button
                type="button"
                onClick={closeWidget}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white/80 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close demo request"
              >
                ×
              </button>
            </div>
            <div className="mt-4">
              <div className="h-2 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#84cc16_0%,#22c55e_100%)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-sky-100/85">
                Step {step + 1} of {STEPS.length} · {stepLabel}
              </p>
            </div>
          </div>

          <div className="min-h-[180px] flex-1 overflow-y-auto bg-[linear-gradient(180deg,#fffdf9_0%,#ffffff_100%)] px-6 py-6 sm:min-h-0">
            {submitted ? (
              <div className="space-y-4">
                <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                  Received
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {marketingLeadCopy.successTitle}
                </h3>
                <p className="text-sm leading-7 text-slate-600">
                  {marketingLeadCopy.successBody}
                </p>
                <button
                  type="button"
                  onClick={closeWidget}
                  className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
                  aria-label="Close demo request"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="flex min-h-full flex-col gap-5">
                {submitting ? (
                  <div className="rounded-3xl border border-sky-200 bg-sky-50/80 px-4 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-200 bg-white text-[#123b5d]"
                        aria-hidden="true"
                      >
                        <svg
                          className="h-5 w-5 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 3V6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M18.364 5.636L16.243 7.757"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M21 12H18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M18.364 18.364L16.243 16.243"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M12 21V18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M7.757 16.243L5.636 18.364"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M6 12H3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M7.757 7.757L5.636 5.636"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            opacity="0.45"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {marketingLeadCopy.sendingTitle}
                        </p>
                        <p className="text-xs leading-6 text-slate-600">
                          {marketingLeadCopy.sendingBody}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
                {step === 0 && (
                  <div className="space-y-3">
                    <label htmlFor="demo-business-type" className="text-sm font-semibold text-slate-900">
                      What type of business do you operate?
                    </label>
                    <select
                      id="demo-business-type"
                      value={form.business_type}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          business_type: event.target.value,
                        }))
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                    >
                      <option value="">Choose your industry</option>
                      {BUSINESS_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-3">
                    <label htmlFor="demo-team-size" className="text-sm font-semibold text-slate-900">
                      How many people are on your team?
                    </label>
                    <input
                      id="demo-team-size"
                      value={form.employees_count}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          employees_count: event.target.value,
                        }))
                      }
                      placeholder="Example: 5"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-3">
                    <label htmlFor="demo-current-system" className="text-sm font-semibold text-slate-900">
                      Which booking or CRM system do you use today?
                    </label>
                    <input
                      id="demo-current-system"
                      value={form.current_crm}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          current_crm: event.target.value,
                        }))
                      }
                      placeholder="Example: Jobber, Housecall Pro, spreadsheets, or none"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-slate-900">Which workflows matter most to your business?</p>
                    {[
                      ["needs_booking", "Online booking"],
                      ["needs_estimates", "Estimates and quotes"],
                      ["needs_invoices", "Invoices and payment links"],
                    ].map(([field, label]) => (
                      <label
                        key={field}
                        className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                      >
                        <span>{label}</span>
                        <input
                          type="checkbox"
                          checked={Boolean(form[field as keyof LeadState])}
                          onChange={(event) =>
                            setForm((prev) => ({
                              ...prev,
                              [field]: event.target.checked,
                            }))
                          }
                          className="h-4 w-4"
                        />
                      </label>
                    ))}
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-3">
                    <label htmlFor="demo-business-location" className="text-sm font-semibold text-slate-900">
                      Where is your business located?
                    </label>
                    <input
                      id="demo-business-location"
                      value={form.city}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          city: event.target.value,
                        }))
                      }
                      placeholder="City or service area"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                    />
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-slate-900">
                      Where should we send your tailored demo details?
                    </p>
                    <label htmlFor="demo-contact-name" className="sr-only">Your name</label>
                    <input
                      id="demo-contact-name"
                      value={form.name}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          name: event.target.value,
                        }))
                      }
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                    />
                    <label htmlFor="demo-contact-email" className="sr-only">Work email</label>
                    <input
                      id="demo-contact-email"
                      value={form.email}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          email: event.target.value,
                        }))
                      }
                      placeholder="Work email"
                      type="email"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                    />
                    <label htmlFor="demo-contact-phone" className="sr-only">Phone or WhatsApp (optional)</label>
                    <input
                      id="demo-contact-phone"
                      value={form.phone}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          phone: event.target.value,
                        }))
                      }
                      placeholder="Phone or WhatsApp (optional)"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                    />
                    <label htmlFor="demo-contact-message" className="pt-1 text-sm font-semibold text-slate-900">
                      What would you like us to focus on? <span className="font-normal text-slate-500">(optional)</span>
                    </label>
                    <textarea
                      id="demo-contact-message"
                      value={form.message}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          message: event.target.value,
                        }))
                      }
                      placeholder="Tell us about your workflow, goals, or questions."
                      maxLength={2000}
                      rows={4}
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                    <p className="text-right text-xs text-slate-400" aria-live="polite">
                      {form.message.length}/2000
                    </p>
                  </div>
                )}

                {step === 6 && (
                  <div className="space-y-4">
                    <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900">
                      <input
                        type="checkbox"
                        checked={form.consent_to_contact}
                        onChange={(event) =>
                          setForm((prev) => ({
                            ...prev,
                            consent_to_contact: event.target.checked,
                          }))
                        }
                        className="mt-1 h-4 w-4"
                      />
                      <span>
                        I agree to receive follow-up from Schedulaa about this
                        demo request and relevant product information.
                      </span>
                    </label>
                    <p className="text-xs leading-6 text-slate-500">
                      We use these details to respond to your request. You can
                      ask us to stop contacting you at any time.
                    </p>
                  </div>
                )}

                {error ? (
                  <p className="text-sm text-rose-600">{error}</p>
                ) : null}
                {step <= 4 && !submitting ? (
                  <div className="mt-auto rounded-3xl border border-sky-100 bg-sky-50/70 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
                      A more relevant walkthrough
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Your answers help us focus the demo on the workflows that matter to your team and leave time for your questions.
                    </p>
                  </div>
                ) : null}
              </div>
            )}
          </div>

          {!submitted && (
            <div className="border-t border-slate-200 bg-white px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep((prev) => Math.max(0, prev - 1))}
                  disabled={step === 0 || submitting}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 disabled:opacity-40"
                  aria-label="Go back one step"
                >
                  Back
                </button>
                {step < STEPS.length - 1 ? (
                  <button
                    type="button"
                    onClick={() =>
                      setStep((prev) => Math.min(STEPS.length - 1, prev + 1))
                    }
                    disabled={submitting}
                    className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
                    aria-label="Continue to next step"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={submitLead}
                    disabled={!canSubmit || submitting}
                    className="inline-flex items-center gap-2 rounded-full bg-[#123b5d] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#17486f] disabled:opacity-50"
                    aria-label={marketingLeadCopy.submit}
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M12 4V7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M18 12H15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M12 20V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            opacity="0.5"
                          />
                          <path
                            d="M4 12H7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            opacity="0.5"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      marketingLeadCopy.submit
                    )}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
