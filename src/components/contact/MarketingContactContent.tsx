'use client';

import { FormEvent, useState } from 'react';
import PageShell from '@/components/shared/layout/PageShell';

const API_ORIGIN =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.NEXT_PUBLIC_API_ORIGIN ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://scheduling-application.onrender.com');

const HIGHLIGHTS = [
  {
    title: 'Sales & demos',
    description: 'Plan walkthroughs, pricing guidance, and migration timelines tailored to your team.',
  },
  {
    title: 'Partnerships',
    description: 'Reseller, integration, and co-marketing opportunities for platforms serving creatives.',
  },
  {
    title: 'Support',
    description: '24-hour ticket response, enterprise onboarding, and dedicated success managers on Pro.',
  },
  {
    title: 'Migration support',
    description: 'Data imports, template mapping, and sandbox reviews that de-risk your launch.',
  },
  {
    title: 'Customer success',
    description: 'Quarterly reviews, roadmap previews, and best-practice workshops keep teams ahead.',
  },
];

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

export default function MarketingContactContent() {
  const [form, setForm] = useState({
    name: '',
    email: '',
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

    const metaLines = [form.company.trim() && `Company: ${form.company.trim()}`, form.plan && `Plan interest: ${form.plan}`].filter(Boolean);
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
      setForm({ name: '', email: '', company: '', plan: PLAN_OPTIONS[0], message: '' });
    } catch (err: any) {
      setError(err?.message || "We couldn't send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageShell>
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Contact</p>
          <h1 className="mt-5">Let&apos;s talk about your rollout.</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">
            Looking for a custom implementation, partner program, or migration help? Our specialists respond within one
            business day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:admin@schedulaa.com" className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
              Email us
            </a>
            <a href="tel:+14155550198" className="btn btn-primary-v2 dark:btn-transparent">
              Call +1 (415) 555-0198
            </a>
          </div>
        </div>

        <div className="rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <h2 className="text-2xl font-semibold">Connect with the right team</h2>
          <p className="mt-3 text-secondary/70 dark:text-accent/70">
            Sales engineers, partner managers, and support leads collaborate so your rollout is effortless.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <div key={item.title} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-secondary/70 dark:text-accent/70">{item.description}</p>
              </div>
            ))}
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
          <h2 className="text-2xl font-semibold">Contact FAQ</h2>
          <div className="mt-4 space-y-4">
            {FAQ.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold">{item.question}</h3>
                <p className="mt-1 text-secondary/70 dark:text-accent/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
    </PageShell>
  );
}
