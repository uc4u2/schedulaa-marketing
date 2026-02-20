'use client';

import { FormEvent, useState } from 'react';
import PageShell from '@/components/shared/layout/PageShell';

const API_ORIGIN =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.NEXT_PUBLIC_API_ORIGIN ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://scheduling-application.onrender.com');

const FAQ = [
  {
    question: 'How fast will someone reply?',
    answer: 'Enterprise rollout specialists respond within one business day for scheduling, payroll, and migration requests.',
  },
  {
    question: 'Do you offer implementation services?',
    answer: 'Yes. Our team handles data imports, template mapping, staff onboarding, and payroll validation for every location.',
  },
  {
    question: 'How do partners or resellers reach you?',
    answer: 'Email admin@schedulaa.com and we will route your note to our partnership, integration, or reseller teams.',
  },
];

const PLAN_OPTIONS = ['Starter', 'Plus', 'Pro', 'Enterprise', 'Partnership', 'Migration Support'];
const SUPPORT_ACCORDION = [
  {
    title: 'How do these rollout tracks support growth?',
    body: 'Schedulaa combines booking, payroll, staffing, and website operations so teams can scale without tool sprawl.',
    points: [
      'Operational workflows in one command center',
      'Cross-team visibility for managers and staff',
      'Faster launches with guided rollout milestones',
      'Lower maintenance across booking, payroll, and website ops',
    ],
  },
  {
    title: 'Are the workflows flexible for different businesses?',
    body: 'Yes. We tailor onboarding for salons, clinics, tutors, agencies, and multi-location service teams.',
    points: [
      'Industry-aware setup playbooks',
      'Role-based process mapping',
      'Migration support for legacy data',
    ],
  },
  {
    title: 'Can Schedulaa handle higher traffic and workload?',
    body: 'The platform is built for operational growth with reusable templates, automation triggers, and analytics.',
    points: [
      'Template-driven rollout at scale',
      'Automation for reminders, compliance, and follow-ups',
      'Live visibility into workload and throughput',
    ],
  },
  {
    title: 'Do I need technical skills to launch?',
    body: 'No. Teams can launch quickly with implementation support, guided setup, and operational checklists.',
    points: ['Guided onboarding sessions', 'Rollout checklists', 'Support coverage during launch windows'],
  },
  {
    title: 'Can this integrate with current software?',
    body: 'Yes. We support Zapier, QuickBooks, Xero, and operational integrations for reporting and finance handoffs.',
    points: ['QuickBooks/Xero payroll exports', 'Zapier automation hooks', 'API-friendly operations workflows'],
  },
];
const DIRECT_LINES = ['Sales: +1 (647) 849-4913', 'Admin: admin@schedulaa.com'];
const HQ_ADDRESS = '171 Harbord Street, Toronto, ON M5S 1H3';
const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=171%20Harbord%20Street%2C%20Toronto%2C%20ON%20M5S%201H3&t=&z=15&ie=UTF8&iwloc=&output=embed';
const MAP_DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=171+Harbord+Street+Toronto+ON+M5S+1H3';

export default function MarketingContactContent() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    plan: PLAN_OPTIONS[0],
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const metaLines = [
      form.company.trim() && `Company: ${form.company.trim()}`,
      form.phone.trim() && `Phone: ${form.phone.trim()}`,
      form.plan && `Plan interest: ${form.plan}`,
    ].filter(Boolean);
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      message: [...metaLines, metaLines.length ? '' : null, form.message.trim()].filter(Boolean).join('\n'),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setError('Please include your name, email, and message.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(`${API_ORIGIN}/api/public/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data?.ok !== true) {
        throw new Error(data?.error || 'Unable to submit message.');
      }
      setSuccess(data?.success_msg || "Thanks! We'll get back to you shortly.");
      setForm({ name: '', email: '', phone: '', company: '', plan: PLAN_OPTIONS[0], message: '' });
    } catch (err: any) {
      setError(err?.message || "We couldn't send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageShell className="bg-[linear-gradient(180deg,#f7f9ff_0%,#ffffff_38%,#f6fbff_66%,#edf6ff_100%)] dark:bg-[linear-gradient(180deg,#0b1324_0%,#0f1b2d_44%,#101f34_100%)]">
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-linear-[160deg,#050b1f_0%,#0a1a39_55%,#093760_100%] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          />
          <div className="relative">
          <p className="badge badge-green">Contact</p>
          <h1 className="mt-5 text-white">Let&apos;s talk about your rollout.</h1>
          <p className="mt-4 max-w-[900px] text-accent/80">
            Looking for a custom implementation, partner program, or migration help? Our specialists respond within one
            business day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:admin@schedulaa.com" className="btn btn-green hover:btn-white">
              Email us
            </a>
            <a href="tel:+16478494913" className="btn bg-white/18 text-white hover:bg-white/28 dark:btn-transparent">
              Call +1 (647) 849-4913
            </a>
          </div>
          </div>
        </div>

        <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <h2 className="text-2xl font-semibold">Send a message</h2>
          <form className="mt-5 grid gap-4" onSubmit={onSubmit}>
            <input
              className="rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              required
            />
            <input
              className="rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              required
            />
            <input
              className="rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            />
            <input
              className="rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              placeholder="Company"
              value={form.company}
              onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
            />
            <select
              className="rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              value={form.plan}
              onChange={(e) => setForm((prev) => ({ ...prev, plan: e.target.value }))}
            >
              {PLAN_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <textarea
              className="min-h-[140px] rounded-xl border border-stroke-2 px-4 py-3 dark:border-stroke-7 dark:bg-background-7"
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              required
            />
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            {success ? <p className="text-sm text-green-600">{success}</p> : null}
            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary hover:btn-secondary dark:hover:btn-accent disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>

        <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <h2 className="text-2xl font-semibold">Direct lines</h2>
          <div className="mt-4 space-y-2">
            {DIRECT_LINES.map((line) => (
              <p key={line} className="text-secondary/70 dark:text-accent/70">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="badge badge-cyan-v2">Visit our HQ</p>
              <h2 className="mt-4 text-2xl font-semibold">Toronto headquarters</h2>
              <p className="mt-3 text-secondary/70 dark:text-accent/70">{HQ_ADDRESS}</p>
              <p className="mt-2 text-secondary/70 dark:text-accent/70">
                Book a meeting in advance and we&apos;ll guide you through rollout labs and demo suites used for enterprise implementations.
              </p>
              <a
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-5 hover:btn-secondary dark:hover:btn-accent"
              >
                Get directions
              </a>
            </div>
            <iframe
              title="Schedulaa HQ map"
              src={MAP_EMBED_URL}
              loading="lazy"
              className="h-[280px] w-full rounded-[16px] border border-stroke-2 dark:border-stroke-7"
              style={{ border: 0 }}
            />
          </div>
        </div>

        <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <h2 className="text-4xl font-semibold leading-tight">Build &amp; grow with scalable tools</h2>
          <p className="mt-2 text-secondary/70 dark:text-accent/70">Need quick answers?</p>
          <div className="mt-4 space-y-3">
            {SUPPORT_ACCORDION.map((item, index) => (
              <details
                key={item.title}
                open={index === 0}
                className="group overflow-hidden rounded-[18px] border border-stroke-2 bg-background-1 p-5 dark:border-stroke-7 dark:bg-background-7"
              >
                <summary className="cursor-pointer list-none text-xl font-semibold [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center justify-between gap-4">
                    <span>{item.title}</span>
                    <span className="text-xl leading-none text-secondary/60 transition-transform group-open:rotate-180 dark:text-accent/60">
                      ⌃
                    </span>
                  </div>
                </summary>
                <p className="mt-3 text-secondary/70 dark:text-accent/70">{item.body}</p>
                <ul className="mt-3 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-tagline-2 text-secondary/70 dark:text-accent/70">
                      <span className="mt-[7px] inline-flex h-[6px] w-[6px] rounded-full bg-primary-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
          <div className="mt-4 space-y-4">
            {FAQ.map((item) => (
              <div key={item.question} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                <h3 className="font-semibold">{item.question}</h3>
                <p className="mt-1 text-secondary/70 dark:text-accent/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
    </PageShell>
  );
}
