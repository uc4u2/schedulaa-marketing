'use client';

import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { detectLocaleFromPath } from '@/utils/locale';
import attendanceSummaryImg from '@public/images/marketing/mobile-app/attendance-summary.png';
import employeeDayImg from '@public/images/marketing/mobile-app/employee-day.png';
import managerHubImg from '@public/images/marketing/mobile-app/manager-hub.png';
import operationsOverviewImg from '@public/images/marketing/mobile-app/operations-overview.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ANDROID_APK_URL =
  process.env.NEXT_PUBLIC_ANDROID_APK_URL ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/apk/schedulaa-staff-latest.apk';

const BOOK_DEMO_URL =
  process.env.NEXT_PUBLIC_BOOK_DEMO_URL ||
  'https://app.schedulaa.com/sale/meet/uzmTuuGPNNepce0r2vcx8WB4w3sJ2LA32Aqh7XIw9F8';

const heroPoints = [
  'Approve time-off requests, shift swaps, and attendance issues without leaving the floor.',
  'Give employees schedules, clock-in, announcements, and task visibility in the same app.',
  'Keep managers and teams on the same Schedulaa system across desktop and mobile.',
];

const managerFeatures = [
  'Pending approvals, shift swaps, and punch reviews in one manager hub',
  'Labor visibility with attendance risk, missing breaks, and payroll-ready status',
  'Fast team notifications, exceptions, and daily oversight without spreadsheets',
];

const employeeFeatures = [
  'Clock in, review the next shift, and track upcoming time off in seconds',
  'See schedule changes, open shifts, announcements, and assigned tasks from one view',
  'Stay aligned with operations even when the team is distributed across locations',
];

const proofChips = [
  'Android APK available now',
  'Manager and employee workflows',
  'Built on the same live Schedulaa system',
  'iPhone release planned next',
];

function DownloadCard({
  active,
  label,
  title,
  href,
}: {
  active?: boolean;
  label: string;
  title: string;
  href?: string;
}) {
  const content = (
    <>
      <span
        className={`flex size-13 shrink-0 items-center justify-center rounded-2xl border ${
          active ? 'border-white/40 bg-white/92 text-secondary' : 'border-white/10 bg-white/8 text-white'
        } shadow-sm`}
      >
        {active ? (
          <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
            <path fill="#34A853" d="M3.9 3.5 13.8 13.4l-9.8 9.8A2.2 2.2 0 0 1 3 21.3V5.7c0-.8.4-1.6.9-2.2Z" />
            <path fill="#4285F4" d="m16.8 10.5-2.9 2.9 2.9 2.9 3.8-2.2c1.3-.8 1.3-2.6 0-3.4l-3.8-2.2Z" />
            <path fill="#FBBC04" d="m3.9 3.5 12.9 7-2.9 2.9L3.9 3.5Z" />
            <path fill="#EA4335" d="m3.9 23.2 10-9.8 2.9 2.9-12.9 7c-.6-.6-.9-1.4-.9-2.1Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
            <path d="M16.365 1.43c0 1.14-.465 2.24-1.237 3.036-.816.84-2.147 1.487-3.3 1.392-.145-1.123.42-2.328 1.207-3.138.817-.847 2.222-1.466 3.33-1.29Zm4.144 16.33c-.452 1.036-.993 1.99-1.664 2.915-.917 1.25-1.67 2.516-3.13 2.516-1.462 0-1.84-.84-3.507-.84-1.667 0-2.09.867-3.534.867-1.445 0-2.448-1.143-3.366-2.392C3.66 18.567 2.4 14.494 4.09 11.515c1.194-2.114 3.28-3.443 5.551-3.443 1.46 0 2.835.9 3.507.9.671 0 2.35-1.112 3.96-.948.674.03 2.567.272 3.784 2.003-3.328 1.82-2.807 6.438.617 7.734Z" />
          </svg>
        )}
      </span>
      <span className="min-w-0">
        <span className={`block text-[11px] uppercase tracking-[0.22em] ${active ? 'text-white/55' : 'text-white/45'}`}>
          {label}
        </span>
        <span className={`block text-lg font-semibold ${active ? 'text-white' : 'text-white/82'}`}>{title}</span>
      </span>
    </>
  );

  const className = `flex min-w-[220px] items-center gap-3 rounded-[20px] border px-4 py-3.5 backdrop-blur-md transition-all duration-300 ${
    active
      ? 'border-white/16 bg-white/10 shadow-[0_16px_40px_rgba(3,8,20,0.22)] hover:-translate-y-0.5 hover:border-[#7fe36c]/45 hover:bg-white/14 hover:shadow-[0_22px_44px_rgba(8,20,45,0.28)]'
      : 'cursor-default border-dashed border-white/12 bg-white/[0.05] opacity-90'
  }`;

  return active && href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

export default function MobileAppLandingPage() {
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const returnTo = marketingReturnTo(locale, '/mobile-app');

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="overflow-hidden bg-[#050914] pb-20 pt-[116px] text-white md:pb-24 md:pt-[144px]">
        <div className="main-container relative">
          <div className="pointer-events-none absolute left-1/2 top-12 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#1f7ae0]/18 blur-[120px]" />
          <div className="pointer-events-none absolute -right-16 top-1/3 h-[360px] w-[360px] rounded-full bg-[#7fe36c]/10 blur-[130px]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <AnimatedSection>
              <div className="space-y-6">
                <span className="badge badge-cyan !bg-white/10 !text-white/88">Mobile App</span>
                <div className="space-y-4">
                  <h1 className="max-w-[680px] text-heading-2 text-white md:text-[56px] md:leading-[1.05]">
                    Keep managers and employees running on the same operating system.
                  </h1>
                  <p className="max-w-[620px] text-[17px] leading-8 text-white/72">
                    Schedulaa mobile brings scheduling, clock-in, approvals, shift changes, time-off, tasks, and live
                    team updates into one secure workflow. Managers stay in control, and employees stay aligned away
                    from the desk.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {heroPoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm leading-6 text-white/82 backdrop-blur-sm"
                    >
                      {point}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary-v2 btn-md min-w-[170px]">
                    Book a demo
                  </a>
                  <Link href={buildAppUrl('/register', { returnTo })} className="btn btn-white btn-md min-w-[170px] dark:btn-transparent">
                    Start free
                  </Link>
                </div>
                <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:flex-wrap">
                  <DownloadCard active label="Android app" title="Download APK" href={ANDROID_APK_URL} />
                  <DownloadCard label="iPhone app" title="Coming soon" />
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {proofChips.map((chip) => (
                    <span key={chip} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium tracking-[0.01em] text-white/68">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="relative mx-auto w-full max-w-[780px]">
                <div className="absolute inset-x-[10%] top-[12%] h-[62%] rounded-full bg-[#2b93ff]/18 blur-[90px]" />
                <div className="grid gap-4 md:grid-cols-[0.78fr_0.22fr]">
                  <article className="rounded-[28px] border border-white/10 bg-white/[0.07] p-3 shadow-[0_28px_65px_rgba(0,0,0,0.28)] backdrop-blur-md">
                    <Image src={operationsOverviewImg} alt="Schedulaa mobile operations overview" className="h-auto w-full rounded-[22px] object-contain" priority />
                  </article>
                  <div className="grid gap-4 md:grid-rows-2">
                    <article className="rounded-[24px] border border-white/10 bg-white/[0.07] p-2.5 shadow-[0_20px_45px_rgba(0,0,0,0.22)] backdrop-blur-md">
                      <Image src={managerHubImg} alt="Schedulaa manager mobile approvals dashboard" className="h-full w-full rounded-[18px] object-cover" />
                    </article>
                    <article className="rounded-[24px] border border-white/10 bg-white/[0.07] p-2.5 shadow-[0_20px_45px_rgba(0,0,0,0.22)] backdrop-blur-md">
                      <Image src={employeeDayImg} alt="Schedulaa employee mobile daily workflow" className="h-full w-full rounded-[18px] object-cover" />
                    </article>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="main-container">
          <AnimatedSection>
            <div className="mx-auto max-w-[760px] text-center">
              <span className="badge badge-yellow-v2">Built for real operations</span>
              <h2 className="mt-4 text-heading-3 text-secondary dark:text-white">
                Mobile workflows for the people running shifts and the people managing them.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-secondary/72 dark:text-accent/70">
                This is not a disconnected companion app. It extends the same Schedulaa operating system managers use on
                desktop, with live scheduling, approvals, attendance, and payroll-ready visibility.
              </p>
            </div>
          </AnimatedSection>
          <StaggerGrid className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[28px] border border-stroke-2 bg-white p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 md:p-7">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/12 dark:text-blue-300">
                  <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M7 5h10v14H7z" />
                    <path d="M10 8h4M9 18h6" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary/45 dark:text-accent/45">For managers</p>
                  <h3 className="text-heading-6 text-secondary dark:text-white">Approvals, labor visibility, and live response</h3>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-[15px] leading-7 text-secondary/78 dark:text-accent/72">
                {managerFeatures.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[24px] border border-stroke-2 bg-background-3 p-3 dark:border-stroke-7 dark:bg-background-7">
                <Image src={managerHubImg} alt="Manager approvals and mobile alerts" className="h-auto w-full rounded-[18px] object-contain" />
              </div>
            </article>
            <article className="rounded-[28px] border border-stroke-2 bg-white p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 md:p-7">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/12 dark:text-emerald-300">
                  <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M4 6h16v12H4z" />
                    <path d="M8 10h8M8 14h5" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary/45 dark:text-accent/45">For employees</p>
                  <h3 className="text-heading-6 text-secondary dark:text-white">Schedules, clock-in, and day-to-day execution</h3>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-[15px] leading-7 text-secondary/78 dark:text-accent/72">
                {employeeFeatures.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#14b8a6]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[24px] border border-stroke-2 bg-background-3 p-3 dark:border-stroke-7 dark:bg-background-7">
                <Image src={employeeDayImg} alt="Employee mobile schedule and clock-in workflow" className="h-auto w-full rounded-[18px] object-contain" />
              </div>
            </article>
          </StaggerGrid>
        </div>
      </section>

      <section className="pb-14 md:pb-18">
        <div className="main-container">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <AnimatedSection>
              <div className="rounded-[28px] border border-stroke-2 bg-white p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8 md:p-7">
                <span className="badge badge-cyan">Attendance + payroll readiness</span>
                <h2 className="mt-4 text-heading-4 text-secondary dark:text-white">
                  Keep attendance signals and payroll readiness in the same mobile loop.
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-secondary/75 dark:text-accent/70">
                  Managers can review scheduled vs worked hours, catch overtime risk, monitor exceptions, and move
                  faster on payroll review without waiting for end-of-week rollups.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    'Scheduled vs worked hours at a glance',
                    'Overtime risk and missing-break visibility',
                    'Payroll-ready percentages and exception queues',
                    'Faster daily decisions before payroll closes',
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-stroke-2 bg-background-3 px-4 py-3 text-sm leading-6 text-secondary/78 dark:border-stroke-7 dark:bg-background-7 dark:text-accent/74">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="rounded-[28px] border border-stroke-2 bg-gradient-to-br from-[#f8fbff] via-white to-[#eef5ff] p-4 shadow-[0_28px_70px_rgba(30,64,175,0.12)] dark:border-stroke-7 dark:from-background-7 dark:via-background-8 dark:to-background-7 md:p-5">
                <Image src={attendanceSummaryImg} alt="Mobile attendance summary and payroll readiness" className="h-auto w-full rounded-[22px] object-contain" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="pb-18 md:pb-24">
        <div className="main-container">
          <AnimatedSection>
            <article className="overflow-hidden rounded-[32px] bg-secondary px-6 py-8 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:px-8 md:py-10 lg:px-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-4">
                  <span className="badge badge-yellow-v2 !bg-[#d7efb2] !text-secondary">Direct download</span>
                  <h2 className="max-w-[760px] text-heading-4 text-white md:text-heading-3">
                    Roll out Schedulaa mobile without waiting for a separate store launch.
                  </h2>
                  <p className="max-w-[720px] text-[15px] leading-7 text-white/78">
                    Download the signed Android APK directly today. iPhone delivery is planned next, with the same
                    operating workflows and team controls carried forward.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <DownloadCard active label="Android app" title="Download APK" href={ANDROID_APK_URL} />
                  <DownloadCard label="iPhone app" title="Coming soon" />
                </div>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
