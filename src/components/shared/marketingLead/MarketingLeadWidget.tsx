'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

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
  consent_to_contact: boolean;
};

const INITIAL_STATE: LeadState = {
  business_type: '',
  employees_count: '',
  current_crm: '',
  needs_booking: true,
  needs_estimates: true,
  needs_invoices: true,
  city: '',
  name: '',
  email: '',
  phone: '',
  consent_to_contact: false,
};

const STEPS = [
  'Business',
  'Team',
  'Current tools',
  'Needs',
  'Location',
  'Contact',
  'Consent',
];

const BUSINESS_OPTIONS = [
  'HVAC',
  'Cleaning',
  'Plumbing',
  'Roofing',
  'Electrical',
  'Landscaping',
  'General contracting',
  'Handyman',
  'Pest control',
  'Moving',
  'Appliance repair',
  'Auto detailing',
  'Pool service',
  'Pet grooming',
  'Salon',
  'Barbershop',
  'Spa',
  'Med spa',
  'Dental clinic',
  'Medical clinic',
  'Fitness studio',
  'Tutoring',
  'General service business',
];

export default function MarketingLeadWidget() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState<LeadState>(INITIAL_STATE);

  const hidden = pathname.includes('/login') || pathname.includes('/signup');
  const progress = ((step + 1) / STEPS.length) * 100;
  const canSubmit = form.name.trim() && form.email.trim() && form.consent_to_contact;

  const stepLabel = useMemo(() => STEPS[step] || STEPS[0], [step]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  if (hidden) {
    return null;
  }

  const submitLead = async () => {
    if (!canSubmit || submitting) {
      return;
    }
    setSubmitting(true);
    setError('');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch('/api/marketing-leads/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          ...form,
          page_url: typeof window !== 'undefined' ? window.location.href : '',
          utm_source: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_source') || '' : '',
          utm_campaign: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_campaign') || '' : '',
          utm_medium: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_medium') || '' : '',
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data?.error || 'Unable to send your request right now.');
        return;
      }
      setSubmitted(true);
    } catch (fetchError) {
      if (fetchError instanceof Error && fetchError.name === 'AbortError') {
        setError('Still trying to reach the server took too long. Please try again in a moment.');
      } else {
        setError('Connection issue. Please try again in a moment.');
      }
    } finally {
      window.clearTimeout(timeout);
      setSubmitting(false);
    }
  };

  return (
    <>
      {!open ? (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            setSubmitted(false);
            setStep(0);
            setError('');
          }}
          className="fixed bottom-20 left-3 z-[118] inline-flex items-center gap-2 rounded-full border border-sky-900/20 bg-[#123b5d] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5 hover:bg-[#17486f] sm:bottom-5 sm:left-5"
          aria-label="Open business advisor"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-[#123b5d]">
            S
          </span>
          <span className="sm:hidden">Find your setup</span>
          <span className="hidden sm:inline">Get your Schedulaa business setup</span>
        </button>
      ) : (
        <div className="fixed bottom-2 left-2 z-[125] flex h-[min(82vh,720px)] w-[min(420px,calc(100vw-16px))] flex-col overflow-hidden rounded-[28px] border border-sky-950/10 bg-white shadow-[0_32px_80px_rgba(15,23,42,0.22)] sm:bottom-3 sm:left-3 sm:w-[min(420px,calc(100vw-24px))]">
          <div className="bg-[linear-gradient(180deg,#123b5d_0%,#1b4f78_100%)] px-5 py-5 text-white">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[1.05rem] font-semibold text-white">Schedulaa Business Advisor</p>
                <p className="mt-1 text-sm text-sky-100">Answer a few quick questions and we’ll send you a practical example for your business setup.</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-lg text-white/80 transition hover:bg-white/10"
                aria-label="Close business advisor"
              >
                ×
              </button>
            </div>
            <div className="mt-4">
              <div className="h-2 overflow-hidden rounded-full bg-white/15">
                <div className="h-full rounded-full bg-[linear-gradient(90deg,#84cc16_0%,#22c55e_100%)]" style={{ width: `${progress}%` }} />
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-sky-100/85">
                Step {step + 1} of {STEPS.length}: {stepLabel}
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-[#fffdf9] px-5 py-5">
            {submitted ? (
              <div className="space-y-4">
                <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                  Received
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">Thanks — we’ll send you a quick example.</h3>
                <p className="text-sm leading-7 text-slate-600">
                  A lead was added to our Sales CRM and the team can route it into Email SDR, hot leads, and follow-up from there.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
                  aria-label="Close business advisor"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-5">
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
                        <p className="text-sm font-semibold text-slate-900">Sending your request…</p>
                        <p className="text-xs leading-6 text-slate-600">
                          We are saving your answers and sending them into the Sales CRM now.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
                {step === 0 && (
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-900">What type of business do you run?</label>
                    <select
                      value={form.business_type}
                      onChange={(event) => setForm((prev) => ({ ...prev, business_type: event.target.value }))}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                    >
                      <option value="">Select one</option>
                      {BUSINESS_OPTIONS.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-900">How many staff do you have?</label>
                    <input
                      value={form.employees_count}
                      onChange={(event) => setForm((prev) => ({ ...prev, employees_count: event.target.value }))}
                      placeholder="Example: 5"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-900">Are you using any booking or CRM tool now?</label>
                    <input
                      value={form.current_crm}
                      onChange={(event) => setForm((prev) => ({ ...prev, current_crm: event.target.value }))}
                      placeholder="Example: Jobber, Housecall Pro, spreadsheets, none"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    {[
                      ['needs_booking', 'Do you need online booking?'],
                      ['needs_estimates', 'Do you send estimates?'],
                      ['needs_invoices', 'Do you send invoices?'],
                    ].map(([field, label]) => (
                      <label key={field} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900">
                        <span>{label}</span>
                        <input
                          type="checkbox"
                          checked={Boolean(form[field as keyof LeadState])}
                          onChange={(event) => setForm((prev) => ({ ...prev, [field]: event.target.checked }))}
                          className="h-4 w-4"
                        />
                      </label>
                    ))}
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-900">What city are you in?</label>
                    <input
                      value={form.city}
                      onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
                      placeholder="Toronto, Newmarket, Bradford..."
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                    />
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-900">What name and email should we use?</label>
                    <input
                      value={form.name}
                      onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                    />
                    <input
                      value={form.email}
                      onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                      placeholder="Email"
                      type="email"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                    />
                    <input
                      value={form.phone}
                      onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                      placeholder="Phone (optional)"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                    />
                  </div>
                )}

                {step === 6 && (
                  <div className="space-y-4">
                    <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900">
                      <input
                        type="checkbox"
                        checked={form.consent_to_contact}
                        onChange={(event) => setForm((prev) => ({ ...prev, consent_to_contact: event.target.checked }))}
                        className="mt-1 h-4 w-4"
                      />
                      <span>
                        I agree to receive follow-up from Schedulaa about booking, CRM, estimates, invoices, and related workflow setup.
                      </span>
                    </label>
                    <p className="text-xs leading-6 text-slate-500">
                      We use this consent to decide whether the lead is eligible for Email SDR outreach. Without it, we can still store the lead for manual review.
                    </p>
                  </div>
                )}

                {error ? <p className="text-sm text-rose-600">{error}</p> : null}
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
                    onClick={() => setStep((prev) => Math.min(STEPS.length - 1, prev + 1))}
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
                    aria-label="Submit marketing lead request"
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
                          <path d="M12 4V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M18 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M12 20V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                          <path d="M4 12H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                        </svg>
                        Sending…
                      </>
                    ) : 'Send request'}
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
