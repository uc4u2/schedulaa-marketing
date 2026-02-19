'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { detectLocaleFromPath, withLocalePath } from '@/utils/locale';

const DEMO_EMAIL = process.env.NEXT_PUBLIC_DEMO_EMAIL || 'testschedulaa@gmail.com';
const DEMO_PASSWORD = process.env.NEXT_PUBLIC_DEMO_PASSWORD || 'Test!12345';
const DEMO_OTP = process.env.NEXT_PUBLIC_DEMO_OTP || '0000';
const DEMO_ENV = process.env.NEXT_PUBLIC_DEMO_ENV || 'Staging';

const DEMO_VIDEO_SRC =
  process.env.NEXT_PUBLIC_DEMO_VIDEO ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/videos/manager-demo.mp4';
const DEMO_VIDEO_BUILDER_SRC =
  process.env.NEXT_PUBLIC_DEMO_VIDEO_BUILDER ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/videos/website-builder-demo.mp4';
const DEMO_VIDEO_TIME_SRC =
  process.env.NEXT_PUBLIC_DEMO_VIDEO_TIME ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/videos/schedulaa-time-tracking.mp4';
const DEMO_VIDEO_SHIFT_SRC =
  process.env.NEXT_PUBLIC_DEMO_VIDEO_SHIFT ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/videos/Schedulaa.shift.management.mp4';
const DEMO_VIDEO_PAYROLL_SRC =
  process.env.NEXT_PUBLIC_DEMO_VIDEO_PAYROLL ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/videos/Schedulaa.Payroll.Under1Min.mp4';
const DEMO_VIDEO_SERVICE_SRC =
  process.env.NEXT_PUBLIC_DEMO_VIDEO_SERVICE ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/videos/Schedulaa.Service.Management.mp4';
const DEMO_VIDEO_INVITES_SRC =
  process.env.NEXT_PUBLIC_DEMO_VIDEO_INVITES ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/videos/invitations.schedulaa.mp4';

const demoVideos = [
  {
    title: 'Watch the 9-minute walkthrough',
    description: '',
    src: DEMO_VIDEO_SRC,
  },
  {
    title: 'Edit the website step-by-step',
    description: 'Short guide to using the Visual Site Builder: change themes, edit sections, and publish.',
    src: DEMO_VIDEO_BUILDER_SRC,
  },
  {
    title: 'Clock in/out & approvals',
    description: 'How employees clock in/out and how managers review, approve, or adjust punches.',
    src: DEMO_VIDEO_TIME_SRC,
  },
  {
    title: 'Shift management overview',
    description: 'Assign shifts, review coverage, and manage the roster in a single view.',
    src: DEMO_VIDEO_SHIFT_SRC,
  },
  {
    title: 'Payroll in under a minute',
    description: 'Generate, finalize, and send payroll to employees in about a minute.',
    src: DEMO_VIDEO_PAYROLL_SRC,
  },
  {
    title: 'Service management + client booking',
    description: 'Add services, assign them to artists, and let clients book (Stripe off for demo checkout).',
    src: DEMO_VIDEO_SERVICE_SRC,
  },
  {
    title: 'Send invitations in minutes',
    description:
      'Send client/candidate invitations with the right templates, self-booking, and auto-confirmations.',
    src: DEMO_VIDEO_INVITES_SRC,
  },
];

export default function DemoLandingPage() {
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const returnTo = marketingReturnTo(locale, '/demo');
  const loginHref = buildAppUrl('/login', { returnTo });
  const contactHref = withLocalePath('/contact', locale);

  return (
    <section className="relative pt-[110px] pb-18 md:pt-[150px] md:pb-24">
      <div className="main-container space-y-10">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="badge badge-cyan mb-4">Test drive - {DEMO_ENV}</span>
          <h1 className="mb-4">Experience the Schedulaa manager dashboard in minutes</h1>
          <p className="mx-auto mb-6 max-w-[800px]">
            Use the shared staging login to explore scheduling, time tracking, payroll, compliance, Zapier
            automations, and accounting exports end-to-end. OTP checks are bypassed for the demo inbox so you can
            jump straight into the product.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
            <a href={loginHref} className="btn btn-primary btn-md">
              Go to login
            </a>
            <Link href={contactHref} className="btn btn-white btn-md dark:btn-white-dark">
              Talk to our rollout team
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <article className="rounded-3xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8 lg:col-span-2">
            <h2 className="mb-4">Demo credentials</h2>
            <ul className="space-y-4">
              <li>
                <p className="text-tagline-2 uppercase">Email</p>
                <div className="rounded-xl border border-stroke-2 px-4 py-2 dark:border-stroke-7">{DEMO_EMAIL}</div>
              </li>
              <li>
                <p className="text-tagline-2 uppercase">Password</p>
                <div className="rounded-xl border border-stroke-2 px-4 py-2 dark:border-stroke-7">{DEMO_PASSWORD}</div>
              </li>
              <li>
                <p className="text-tagline-2 uppercase">OTP code</p>
                <div className="rounded-xl border border-stroke-2 px-4 py-2 dark:border-stroke-7">{DEMO_OTP}</div>
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8 lg:col-span-3">
            <h2 className="mb-4">3-step quick start</h2>
            <ul className="space-y-3">
              <li>
                <p className="font-semibold">1. Login at app.schedulaa.com/login</p>
                <p className="text-tagline-2">Enter the demo email + password above.</p>
              </li>
              <li>
                <p className="font-semibold">2. Use OTP code {DEMO_OTP}</p>
                <p className="text-tagline-2">
                  The test inbox is allowlisted in staging so the fixed code signs you in instantly.
                </p>
              </li>
              <li>
                <p className="font-semibold">3. Explore manager workflows</p>
                <p className="text-tagline-2">Open Scheduling, Payroll, Websites, and Analytics to see connected data.</p>
              </li>
              <li>
                <p className="font-semibold">4. Visit Settings {'>'} Zapier and Payroll {'>'} Preview</p>
                <p className="text-tagline-2">
                  Trigger test events, inspect Zapier payload samples, and review how finalized payroll exports map to
                  QuickBooks and Xero.
                </p>
              </li>
            </ul>
          </article>
        </div>

        <article className="rounded-3xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
          <div className="space-y-8">
            {demoVideos.map((video) => (
              <div key={video.title} className="space-y-3">
                <h3>{video.title}</h3>
                {video.description ? <p className="text-tagline-2">{video.description}</p> : null}
                <video
                  controls
                  preload="metadata"
                  className="w-full rounded-2xl border border-stroke-2 dark:border-stroke-7"
                  src={video.src}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </article>
      </div>

      <a
        href={loginHref}
        className="btn btn-accent btn-md fixed right-4 bottom-5 z-50 md:right-8 md:bottom-8"
      >
        Try the demo
      </a>
    </section>
  );
}
