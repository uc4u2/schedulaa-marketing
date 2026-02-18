import Link from 'next/link';
import { AppLocale, withLocalePath } from '@/utils/locale';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';

type Props = {
  locale: AppLocale;
};

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

export default function HomeAiApplicationLayout({ locale }: Props) {
  return (
    <main className="space-y-10 bg-white dark:bg-background-7">
      <section className="pt-23 max-[1920px]:px-5">
        <div className="bg-background-12 border-background-12 relative mx-auto -mb-2 max-w-[1880px] overflow-hidden rounded-3xl border pt-20 md:pt-30 xl:rounded-4xl">
          <div className="main-container relative z-30">
            <div className="mb-12 text-center lg:mb-20 xl:mb-33">
              <AnimatedSection>
                <h1 className="mb-3 font-medium">Run booking, shifts, payroll-ready exports, and website ops from one command center.</h1>
              </AnimatedSection>
              <AnimatedSection>
                <p className="mx-auto mb-7 max-w-[750px] md:mb-14">
                  Schedulaa keeps demand capture, staffing execution, and payroll workflows connected so managers can run operations with fewer handoffs and cleaner audits.
                </p>
              </AnimatedSection>
              <ul className="flex flex-col items-center justify-center gap-x-4 gap-y-3 md:flex-row md:gap-y-0">
                <li>
                  <a href={`${APP_ORIGIN}/register`} className="btn btn-xl-v2 btn-secondary-v2 border group-hover/btn-v2:btn-v2-white">
                    View pricing
                  </a>
                </li>
                <li>
                  <Link href={withLocalePath('/demo', locale)} className="btn btn-xl-v2 btn-v2-white group-hover/btn-v2:btn-secondary-v2">
                    Book demo
                  </Link>
                </li>
              </ul>
            </div>

            <AnimatedSection>
              <div className="mx-auto -mb-3 max-w-[1100px] rounded-[20px] border border-stroke-2 bg-white p-4 shadow-2 dark:border-stroke-7 dark:bg-background-8">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-4 rounded-2xl bg-background-3 p-4 dark:bg-background-7">
                    <p className="text-tagline-3 uppercase text-secondary/60 dark:text-accent/60">Bookings</p>
                    <p className="mt-2 text-heading-5">+34%</p>
                  </div>
                  <div className="col-span-12 md:col-span-4 rounded-2xl bg-background-3 p-4 dark:bg-background-7">
                    <p className="text-tagline-3 uppercase text-secondary/60 dark:text-accent/60">Payroll accuracy</p>
                    <p className="mt-2 text-heading-5">99.8%</p>
                  </div>
                  <div className="col-span-12 md:col-span-4 rounded-2xl bg-background-3 p-4 dark:bg-background-7">
                    <p className="text-tagline-3 uppercase text-secondary/60 dark:text-accent/60">Time saved</p>
                    <p className="mt-2 text-heading-5">18 hrs/wk</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="pt-[100px] pb-[100px] md:pt-[160px]">
        <div className="main-container space-y-[70px]">
          <AnimatedSection>
            <div className="space-y-3 text-center">
              <h2 className="mx-auto max-w-[814px]">Everything you need to manage service operations smarter</h2>
              <p className="mx-auto max-w-[734px]">
                Schedulaa gives service teams one operating system for booking, workforce scheduling, payroll-ready exports, and website commerce.
              </p>
            </div>
          </AnimatedSection>

          <StaggerGrid className="grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
            {[
              { title: 'Booking', body: 'Publish services and capture appointments with real-time availability.' },
              { title: 'Scheduling', body: 'Align shifts, leaves, and department capacity in one calendar.' },
              { title: 'Time tracking', body: 'Keep worked-time records tied to booking and shift execution.' },
              { title: 'Payroll workflows', body: 'Prepare payroll runs with audit-ready operational context.' },
              { title: 'Websites & commerce', body: 'Run a branded website with booking and Stripe checkout built in.' },
            ].map((card) => (
              <article key={card.title} data-stagger-item className="col-span-12 md:col-span-6 lg:col-span-4 rounded-[20px] bg-background-3 p-5 dark:bg-background-8">
                <h3 className="text-heading-5">{card.title}</h3>
                <p className="mt-2">{card.body}</p>
              </article>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="bg-background-1 dark:bg-background-6 py-[100px]">
        <div className="main-container grid gap-6 lg:grid-cols-2">
          <article className="rounded-[20px] border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8 md:p-8">
            <span className="badge badge-green-v2">Compare</span>
            <h3 className="mt-5">Evaluate Schedulaa side-by-side</h3>
            <p className="mt-2">Compare booking, scheduling, payroll workflows, and operating visibility before migration.</p>
            <div className="mt-6 grid gap-3">
              <Link href={withLocalePath('/compare/vagaro', locale)} className="footer-link-v2 w-fit">Schedulaa vs Vagaro</Link>
              <Link href={withLocalePath('/compare/square-appointments', locale)} className="footer-link-v2 w-fit">Schedulaa vs Square Appointments</Link>
              <Link href={withLocalePath('/compare/quickbooks-payroll', locale)} className="footer-link-v2 w-fit">Schedulaa vs QuickBooks Payroll</Link>
            </div>
            <Link href={withLocalePath('/compare', locale)} className="btn btn-secondary btn-md mt-7 inline-block">View compare hub</Link>
          </article>

          <article className="rounded-[20px] border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8 md:p-8">
            <span className="badge badge-green-v2">Industry pages</span>
            <h3 className="mt-5">Explore booking use-cases</h3>
            <p className="mt-2">Choose the workflow guide that matches your service model.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link href={withLocalePath('/booking/spa', locale)} className="footer-link-v2 w-fit">Spa booking</Link>
              <Link href={withLocalePath('/booking/salon', locale)} className="footer-link-v2 w-fit">Salon booking</Link>
              <Link href={withLocalePath('/booking/doctor', locale)} className="footer-link-v2 w-fit">Doctor booking</Link>
              <Link href={withLocalePath('/booking/tutor', locale)} className="footer-link-v2 w-fit">Tutor booking</Link>
            </div>
            <Link href={withLocalePath('/booking', locale)} className="btn btn-secondary btn-md mt-7 inline-block">View booking hub</Link>
          </article>
        </div>
      </section>
    </main>
  );
}
