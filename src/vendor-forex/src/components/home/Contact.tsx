'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { getBatch2Source } from '@/legacy-content/batch2/getBatch2Source';
import { AppLocale } from '@/utils/locale';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const API_ORIGIN =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  process.env.NEXT_PUBLIC_API_ORIGIN ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://scheduling-application.onrender.com');

const PLAN_OPTION_KEYS = ['starter', 'plus', 'pro', 'business', 'enterprise', 'partnership', 'migrationSupport'] as const;
type PlanOptionKey = (typeof PLAN_OPTION_KEYS)[number];

const planLabelsByLocale: Record<string, Record<PlanOptionKey, string>> = {
  en: {
    starter: 'Starter',
    plus: 'Plus',
    pro: 'Pro',
    business: 'Business',
    enterprise: 'Enterprise',
    partnership: 'Partnership',
    migrationSupport: 'Migration Support',
  },
  fa: {
    starter: '\u0627\u0633\u062a\u0627\u0631\u062a\u0631',
    plus: '\u067e\u0644\u0627\u0633',
    pro: '\u067e\u0631\u0648',
    business: '\u0628\u06cc\u0632\u0646\u0633',
    enterprise: '\u0627\u06cc\u0646\u062a\u0631\u067e\u0631\u0627\u06cc\u0632',
    partnership: '\u0634\u0631\u0627\u06a9\u062a',
    migrationSupport: '\u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u0647\u0627\u062c\u0631\u062a',
  },
  ru: {
    starter: '\u0421\u0442\u0430\u0440\u0442\u043e\u0432\u044b\u0439',
    plus: '\u041f\u043b\u044e\u0441',
    pro: '\u041f\u0440\u043e',
    business: '\u0411\u0438\u0437\u043d\u0435\u0441',
    enterprise: '\u041a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0439',
    partnership: '\u041f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u0442\u0432\u043e',
    migrationSupport: '\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438',
  },
  zh: {
    starter: '\u5165\u95e8\u7248',
    plus: '\u589e\u5f3a\u7248',
    pro: '\u4e13\u4e1a\u7248',
    business: '\u5546\u4e1a\u7248',
    enterprise: '\u4f01\u4e1a\u7248',
    partnership: '\u5408\u4f5c\u4f19\u4f34',
    migrationSupport: '\u8fc1\u79fb\u652f\u6301',
  },
};

const copyByLocale: Record<string, any> = {
  en: {
    supportCta: 'Contact support',
    fullName: 'Full Name',
    fullNamePlaceholder: 'Enter your name',
    email: 'Email address',
    emailPlaceholder: 'Enter your email',
    company: 'Company',
    companyPlaceholder: 'Company name',
    plan: 'Plan interest',
    message: 'Message',
    messagePlaceholder: 'Enter your message',
    agreePrefix: 'I agree with the',
    agreeLink: 'terms and conditions',
    submit: 'Submit',
    submitting: 'Submitting...',
    requiredError: 'Please include your name, email, and message.',
    success: "Thanks! We'll get back to you shortly.",
    failed: "We couldn't send your message. Please try again.",
    aria: 'Contact Information',
    supportAria: 'Contact Schedulaa',
    address: 'Schedulaa rollout team (North America)',
  },
  fa: {
    supportCta: '\u062a\u0645\u0627\u0633 \u0628\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc',
    fullName: '\u0646\u0627\u0645 \u06a9\u0627\u0645\u0644',
    fullNamePlaceholder: '\u0646\u0627\u0645 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f',
    email: '\u0627\u06cc\u0645\u06cc\u0644',
    emailPlaceholder: '\u0627\u06cc\u0645\u06cc\u0644 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f',
    company: '\u0634\u0631\u06a9\u062a',
    companyPlaceholder: '\u0646\u0627\u0645 \u0634\u0631\u06a9\u062a',
    plan: '\u067e\u0644\u0646 \u0645\u0648\u0631\u062f\u0646\u0638\u0631',
    message: '\u067e\u06cc\u0627\u0645',
    messagePlaceholder: '\u067e\u06cc\u0627\u0645 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f',
    agreePrefix: '\u0628\u0627',
    agreeLink: '\u0634\u0631\u0627\u06cc\u0637 \u0648 \u0642\u0648\u0627\u0646\u06cc\u0646',
    submit: '\u0627\u0631\u0633\u0627\u0644',
    submitting: '\u062f\u0631 \u062d\u0627\u0644 \u0627\u0631\u0633\u0627\u0644...',
    requiredError: '\u0646\u0627\u0645\u060c \u0627\u06cc\u0645\u06cc\u0644 \u0648 \u067e\u06cc\u0627\u0645 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f.',
    success: '\u0645\u062a\u0634\u06a9\u0631\u06cc\u0645! \u0628\u0647\u200c\u0632\u0648\u062f\u06cc \u0628\u0627 \u0634\u0645\u0627 \u062a\u0645\u0627\u0633 \u0645\u06cc\u200c\u06af\u06cc\u0631\u06cc\u0645.',
    failed: '\u0627\u0631\u0633\u0627\u0644 \u067e\u06cc\u0627\u0645 \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f.',
    aria: '\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062a\u0645\u0627\u0633',
    supportAria: '\u062a\u0645\u0627\u0633 \u0628\u0627 Schedulaa',
    address: '\u062a\u06cc\u0645 \u0627\u062c\u0631\u0627\u06cc\u06cc Schedulaa (\u0622\u0645\u0631\u06cc\u06a9\u0627\u06cc \u0634\u0645\u0627\u0644\u06cc)',
  },
  ru: {
    supportCta: '\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439',
    fullName: '\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f',
    fullNamePlaceholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f',
    email: 'Email',
    emailPlaceholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email',
    company: '\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f',
    companyPlaceholder: '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438',
    plan: '\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u0439 \u0442\u0430\u0440\u0438\u0444',
    message: '\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435',
    messagePlaceholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435',
    agreePrefix: '\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441',
    agreeLink: '\u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438',
    submit: '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c',
    submitting: '\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430...',
    requiredError: '\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043c\u044f, email \u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435.',
    success: '\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u041c\u044b \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f.',
    failed: '\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430.',
    aria: '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f',
    supportAria: '\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 Schedulaa',
    address: '\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u044f Schedulaa (\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u0410\u043c\u0435\u0440\u0438\u043a\u0430)',
  },
  zh: {
    supportCta: '\u8054\u7cfb\u652f\u6301\u56e2\u961f',
    fullName: '\u59d3\u540d',
    fullNamePlaceholder: '\u8bf7\u8f93\u5165\u59d3\u540d',
    email: '\u90ae\u7bb1\u5730\u5740',
    emailPlaceholder: '\u8bf7\u8f93\u5165\u90ae\u7bb1',
    company: '\u516c\u53f8',
    companyPlaceholder: '\u516c\u53f8\u540d\u79f0',
    plan: '\u610f\u5411\u65b9\u6848',
    message: '\u7559\u8a00',
    messagePlaceholder: '\u8bf7\u8f93\u5165\u7559\u8a00',
    agreePrefix: '\u6211\u540c\u610f',
    agreeLink: '\u6761\u6b3e\u548c\u6761\u4ef6',
    submit: '\u63d0\u4ea4',
    submitting: '\u63d0\u4ea4\u4e2d...',
    requiredError: '\u8bf7\u586b\u5199\u59d3\u540d\u3001\u90ae\u7bb1\u548c\u7559\u8a00\u3002',
    success: '\u611f\u8c22\u63d0\u4ea4\uff01\u6211\u4eec\u4f1a\u5c3d\u5feb\u8054\u7cfb\u60a8\u3002',
    failed: '\u53d1\u9001\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002',
    aria: '\u8054\u7cfb\u4fe1\u606f',
    supportAria: '\u8054\u7cfb Schedulaa',
    address: 'Schedulaa \u90e8\u7f72\u56e2\u961f\uff08\u5317\u7f8e\uff09',
  },
};

interface ContactInfo {
  id: number;
  type: 'email' | 'phone' | 'address';
  value: string;
  href?: string;
  ariaLabel?: string;
}

type ContactFormState = {
  name: string;
  email: string;
  company: string;
  plan: PlanOptionKey;
  message: string;
};

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" className="stroke-secondary dark:stroke-white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 6L12 13L2 6" className="stroke-secondary dark:stroke-white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M22 16.9201V19.9201C22.0011 20.1986 21.9441 20.4743 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.9201C16.7428 21.5857 13.787 20.5342 11.19 18.8501C8.77382 17.3148 6.72533 15.2663 5.18999 12.8501C3.49997 10.2413 2.44824 7.27109 2.11999 4.1801C2.095 3.90356 2.12787 3.62486 2.21649 3.36172C2.30512 3.09859 2.44756 2.85679 2.63476 2.65172C2.82196 2.44665 3.0498 2.28281 3.30379 2.17062C3.55777 2.05843 3.83233 2.00036 4.10999 2.0001H7.10999C7.5953 1.99532 8.06579 2.16718 8.43376 2.48363C8.80173 2.80008 9.04207 3.23954 9.10999 3.7201C9.23662 4.68016 9.47144 5.62282 9.80999 6.5301C9.94454 6.88802 9.97366 7.27701 9.8939 7.65098C9.81415 8.02494 9.62886 8.36821 9.35999 8.6401L8.08999 9.9101C9.51355 12.4136 11.5864 14.4865 14.09 15.9101L15.36 14.6401C15.6319 14.3712 15.9751 14.1859 16.3491 14.1062C16.7231 14.0264 17.1121 14.0556 17.47 14.1901C18.3773 14.5286 19.3199 14.7635 20.28 14.8901C20.7658 14.9586 21.2094 15.2033 21.5265 15.5776C21.8437 15.9519 22.0122 16.4297 22 16.9201Z" className="stroke-secondary dark:stroke-white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" className="stroke-secondary dark:stroke-white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" className="stroke-secondary dark:stroke-white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
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

const Contact = ({ locale = 'en' }: { locale?: AppLocale }) => {
  const copy = copyByLocale[locale] || copyByLocale.en;
  const planLabels = planLabelsByLocale[locale] || planLabelsByLocale.en;
  const planOptions = PLAN_OPTION_KEYS.map((key) => ({ key, label: planLabels[key] }));
  const batch2 = getBatch2Source(locale);
  const contactPage = batch2.contactPage;
  const contactInfo: ContactInfo[] = [
    { id: 1, type: 'email', value: 'admin@schedulaa.com', href: 'mailto:admin@schedulaa.com', ariaLabel: 'Email us at admin@schedulaa.com' },
    { id: 2, type: 'phone', value: '+1 (415) 555-0198', href: 'tel:+14155550198', ariaLabel: 'Call us at +1 (415) 555-0198' },
    { id: 3, type: 'address', value: copy.address },
  ];

  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    company: '',
    plan: PLAN_OPTION_KEYS[0],
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
      form.plan && `Plan interest: ${planLabels[form.plan as PlanOptionKey] || form.plan}`,
    ].filter(Boolean);
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      message: [...metaLines, metaLines.length ? '' : null, form.message.trim()].filter(Boolean).join('\n'),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setError(copy.requiredError);
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

      setSuccess(data?.success_msg || copy.success);
      setForm({ name: '', email: '', company: '', plan: PLAN_OPTION_KEYS[0], message: '' });
    } catch (err: any) {
      setError(err?.message || copy.failed);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-background-3 dark:bg-background-5 py-[100px]" aria-label={copy.supportAria}>
        <div className="main-container">
          <div className="flex flex-col space-y-18 lg:flex-row lg:justify-between lg:gap-10 lg:space-y-0">
            <div className="flex flex-1 flex-col justify-between space-y-9 md:flex-row md:gap-10 lg:flex-col lg:gap-0">
              <div className="flex-1 space-y-7">
                <div className="space-y-3">
                  <RevealAnimation delay={0.1}>
                    <h2 id="contact-heading" className="max-w-[517px]">{contactPage.hero.title}</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p className="max-w-[460px]">{contactPage.hero.subtitle}</p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.3}>
                  <div>
                    <LinkButton href="/client/support" className="btn hover:btn-green dark:btn-transparent btn-lg btn-white mx-auto w-[90%] font-medium md:mx-0 md:w-auto">
                      {copy.supportCta}
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
              <ul className="flex-1 space-y-4 md:space-y-6" aria-label={copy.aria}>
                {contactInfo.map((info, index) => (
                  <RevealAnimation key={info.id} delay={0.4 + index * 0.1}>
                    <li className="flex items-center gap-2">
                      <span className="dark:bg-background-8 flex size-10 items-center justify-center rounded-full bg-white" aria-hidden="true">{getIcon(info.type)}</span>
                      <p>{info.href ? <Link href={info.href} aria-label={info.ariaLabel}>{info.value}</Link> : info.value}</p>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
            </div>

            <RevealAnimation delay={0.4}>
              <div className="dark:bg-background-6 flex-1 rounded-[20px] bg-white p-7 md:p-[42px] lg:max-w-[605px]">
                <form onSubmit={onSubmit}>
                  <fieldset className="mb-5 flex w-full flex-col items-start justify-start gap-2 md:mb-8">
                    <label htmlFor="fullName" className="text-tagline-1 text-secondary dark:text-accent font-medium">{copy.fullName}</label>
                    <input type="text" name="fullName" id="fullName" required value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} placeholder={copy.fullNamePlaceholder} className="placeholder:text-tagline-1 border-stroke-3 dark:border-stroke-7 dark:bg-background-6 dark:placeholder:text-accent/60 dark:text-accent focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline" />
                  </fieldset>

                  <fieldset className="mb-5 flex w-full flex-col items-start justify-start gap-2 md:mb-8">
                    <label htmlFor="emailAddress" className="text-tagline-1 text-secondary dark:text-accent font-medium">{copy.email}</label>
                    <input type="email" required name="emailAddress" id="emailAddress" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} placeholder={copy.emailPlaceholder} className="placeholder:text-tagline-1 border-stroke-3 dark:border-stroke-7 dark:bg-background-6 dark:placeholder:text-accent/60 dark:text-accent focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline" />
                  </fieldset>

                  <fieldset className="mb-5 flex w-full flex-col items-start justify-start gap-2 md:mb-8">
                    <label htmlFor="company" className="text-tagline-1 text-secondary dark:text-accent font-medium">{copy.company}</label>
                    <input type="text" name="company" id="company" value={form.company} onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))} placeholder={copy.companyPlaceholder} className="placeholder:text-tagline-1 border-stroke-3 dark:border-stroke-7 dark:bg-background-6 dark:placeholder:text-accent/60 dark:text-accent focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline" />
                  </fieldset>

                  <fieldset className="mb-5 flex w-full flex-col items-start justify-start gap-2 md:mb-8">
                    <label htmlFor="plan" className="text-tagline-1 text-secondary dark:text-accent font-medium">{copy.plan}</label>
                    <select name="plan" id="plan" value={form.plan} onChange={(e) => setForm((prev) => ({ ...prev, plan: e.target.value as PlanOptionKey }))} className="border-stroke-3 dark:border-stroke-7 dark:bg-background-6 dark:text-accent focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal focus-visible:outline">
                      {planOptions.map((option) => <option key={option.key} value={option.key}>{option.label}</option>)}
                    </select>
                  </fieldset>

                  <fieldset className="mb-4 flex w-full flex-col items-start justify-start gap-2">
                    <label htmlFor="messages" className="text-tagline-1 text-secondary dark:text-accent font-medium">{copy.message}</label>
                    <textarea name="messages" id="messages" required value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))} placeholder={copy.messagePlaceholder} className="placeholder:text-tagline-1 border-stroke-3 dark:border-stroke-7 dark:bg-background-6 dark:placeholder:text-accent/60 dark:text-accent focus-visible:outline-primary-500 min-h-[120px] w-full resize-none rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline" />
                  </fieldset>

                  <fieldset className="mb-4 flex items-center gap-2">
                    <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                      <input id="agree-terms" type="checkbox" className="peer sr-only" required />
                      <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                    </label>
                    <label htmlFor="agree-terms" className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                      {copy.agreePrefix}{' '}
                      <Link href="/terms" className="text-primary-500 text-tagline-3 underline">{copy.agreeLink}</Link>
                    </label>
                  </fieldset>

                  {error ? <p className="mb-3 text-sm text-red-600">{error}</p> : null}
                  {success ? <p className="mb-3 text-sm text-green-600">{success}</p> : null}

                  <button type="submit" disabled={submitting} className="btn btn-secondary dark:btn-accent btn-md hover:btn-green w-full first-letter:uppercase before:content-none disabled:opacity-60" aria-label="Submit contact form">
                    {submitting ? copy.submitting : copy.submit}
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
