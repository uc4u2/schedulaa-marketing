'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { contactPage } from '@/legacy-content/batch2/config';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const API_ORIGIN =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.NEXT_PUBLIC_API_ORIGIN ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://scheduling-application.onrender.com');

const PLAN_OPTIONS = ['Starter', 'Plus', 'Pro', 'Business', 'Enterprise', 'Partnership', 'Migration Support'];

interface ContactInfo {
  id: number;
  type: 'email' | 'phone' | 'address';
  value: string;
  href?: string;
  ariaLabel?: string;
}

const contactInfo: ContactInfo[] = [
  {
    id: 1,
    type: 'email',
    value: 'admin@schedulaa.com',
    href: 'mailto:admin@schedulaa.com',
    ariaLabel: 'Email us at admin@schedulaa.com',
  },
  {
    id: 2,
    type: 'phone',
    value: '+1 (415) 555-0198',
    href: 'tel:+14155550198',
    ariaLabel: 'Call us at +1 (415) 555-0198',
  },
  {
    id: 3,
    type: 'address',
    value: 'Schedulaa rollout team (North America)',
  },
];

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
      className="stroke-secondary dark:stroke-white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 6L12 13L2 6"
      className="stroke-secondary dark:stroke-white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M22 16.9201V19.9201C22.0011 20.1986 21.9441 20.4743 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.9201C16.7428 21.5857 13.787 20.5342 11.19 18.8501C8.77382 17.3148 6.72533 15.2663 5.18999 12.8501C3.49997 10.2413 2.44824 7.27109 2.11999 4.1801C2.095 3.90356 2.12787 3.62486 2.21649 3.36172C2.30512 3.09859 2.44756 2.85679 2.63476 2.65172C2.82196 2.44665 3.0498 2.28281 3.30379 2.17062C3.55777 2.05843 3.83233 2.00036 4.10999 2.0001H7.10999C7.5953 1.99532 8.06579 2.16718 8.43376 2.48363C8.80173 2.80008 9.04207 3.23954 9.10999 3.7201C9.23662 4.68016 9.47144 5.62282 9.80999 6.5301C9.94454 6.88802 9.97366 7.27701 9.8939 7.65098C9.81415 8.02494 9.62886 8.36821 9.35999 8.6401L8.08999 9.9101C9.51355 12.4136 11.5864 14.4865 14.09 15.9101L15.36 14.6401C15.6319 14.3712 15.9751 14.1859 16.3491 14.1062C16.7231 14.0264 17.1121 14.0556 17.47 14.1901C18.3773 14.5286 19.3199 14.7635 20.28 14.8901C20.7658 14.9586 21.2094 15.2033 21.5265 15.5776C21.8437 15.9519 22.0122 16.4297 22 16.9201Z"
      className="stroke-secondary dark:stroke-white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
      className="stroke-secondary dark:stroke-white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
      className="stroke-secondary dark:stroke-white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const getIcon = (type: string) => {
  switch (type) {
    case 'email':
      return <EmailIcon />;
    case 'phone':
      return <PhoneIcon />;
    case 'address':
      return <LocationIcon />;
    default:
      return null;
  }
};

const Contact = () => {
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

    const metaLines = [form.company.trim() && `Company: ${form.company.trim()}`, form.plan && `Plan interest: ${form.plan}`].filter(
      Boolean,
    );

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
    <RevealAnimation delay={0.1}>
      <section className="bg-background-3 dark:bg-background-5 py-[100px]" aria-label="Contact Schedulaa">
        <div className="main-container">
          <div className="flex flex-col space-y-18 lg:flex-row lg:justify-between lg:gap-10 lg:space-y-0">
            <div className="flex flex-1 flex-col justify-between space-y-9 md:flex-row md:gap-10 lg:flex-col lg:gap-0">
              <div className="flex-1 space-y-7">
                <div className="space-y-3">
                  <RevealAnimation delay={0.1}>
                    <h2 id="contact-heading" className="max-w-[517px]">
                      {contactPage.hero.title}
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p className="max-w-[460px]">{contactPage.hero.subtitle}</p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.3}>
                  <div>
                    <LinkButton
                      href="/client/support"
                      className="btn hover:btn-green dark:btn-transparent btn-lg btn-white mx-auto w-[90%] font-medium md:mx-0 md:w-auto">
                      Contact support
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
              <ul className="flex-1 space-y-4 md:space-y-6" aria-label="Contact Information">
                {contactInfo.map((info, index) => (
                  <RevealAnimation key={info.id} delay={0.4 + index * 0.1}>
                    <li className="flex items-center gap-2">
                      <span className="dark:bg-background-8 flex size-10 items-center justify-center rounded-full bg-white" aria-hidden="true">
                        {getIcon(info.type)}
                      </span>
                      <p>
                        {info.href ? (
                          <Link href={info.href} aria-label={info.ariaLabel}>
                            {info.value}
                          </Link>
                        ) : (
                          info.value
                        )}
                      </p>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
            </div>

            <RevealAnimation delay={0.4}>
              <div className="dark:bg-background-6 flex-1 rounded-[20px] bg-white p-7 md:p-[42px] lg:max-w-[605px]">
                <form onSubmit={onSubmit}>
                  <fieldset className="mb-5 flex w-full flex-col items-start justify-start gap-2 md:mb-8">
                    <label htmlFor="fullName" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      required
                      value={form.name}
                      onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your name"
                      className="placeholder:text-tagline-1 border-stroke-3 dark:border-stroke-7 dark:bg-background-6 dark:placeholder:text-accent/60 dark:text-accent focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                    />
                  </fieldset>

                  <fieldset className="mb-5 flex w-full flex-col items-start justify-start gap-2 md:mb-8">
                    <label htmlFor="emailAddress" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      name="emailAddress"
                      id="emailAddress"
                      value={form.email}
                      onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter your email"
                      className="placeholder:text-tagline-1 border-stroke-3 dark:border-stroke-7 dark:bg-background-6 dark:placeholder:text-accent/60 dark:text-accent focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                    />
                  </fieldset>

                  <fieldset className="mb-5 flex w-full flex-col items-start justify-start gap-2 md:mb-8">
                    <label htmlFor="company" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={form.company}
                      onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
                      placeholder="Company name"
                      className="placeholder:text-tagline-1 border-stroke-3 dark:border-stroke-7 dark:bg-background-6 dark:placeholder:text-accent/60 dark:text-accent focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                    />
                  </fieldset>

                  <fieldset className="mb-5 flex w-full flex-col items-start justify-start gap-2 md:mb-8">
                    <label htmlFor="plan" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                      Plan interest
                    </label>
                    <select
                      name="plan"
                      id="plan"
                      value={form.plan}
                      onChange={(e) => setForm((prev) => ({ ...prev, plan: e.target.value }))}
                      className="border-stroke-3 dark:border-stroke-7 dark:bg-background-6 dark:text-accent focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal focus-visible:outline">
                      {PLAN_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </fieldset>

                  <fieldset className="mb-4 flex w-full flex-col items-start justify-start gap-2">
                    <label htmlFor="messages" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                      Message
                    </label>
                    <textarea
                      name="messages"
                      id="messages"
                      required
                      value={form.message}
                      onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Enter your message"
                      className="placeholder:text-tagline-1 border-stroke-3 dark:border-stroke-7 dark:bg-background-6 dark:placeholder:text-accent/60 dark:text-accent focus-visible:outline-primary-500 min-h-[120px] w-full resize-none rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                    />
                  </fieldset>

                  <fieldset className="mb-4 flex items-center gap-2">
                    <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                      <input id="agree-terms" type="checkbox" className="peer sr-only" required />
                      <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                    </label>
                    <label htmlFor="agree-terms" className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                      I agree with the{' '}
                      <Link href="/terms" className="text-primary-500 text-tagline-3 underline">
                        terms and conditions
                      </Link>
                    </label>
                  </fieldset>

                  {error ? <p className="mb-3 text-sm text-red-600">{error}</p> : null}
                  {success ? <p className="mb-3 text-sm text-green-600">{success}</p> : null}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-secondary dark:btn-accent btn-md hover:btn-green w-full first-letter:uppercase before:content-none disabled:opacity-60"
                    aria-label="Submit contact form">
                    {submitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Contact;
