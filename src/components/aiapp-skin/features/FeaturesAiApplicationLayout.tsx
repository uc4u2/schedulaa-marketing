import Link from 'next/link';
import { AppLocale, withLocalePath } from '@/utils/locale';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

type Props = { locale: AppLocale };

export default function FeaturesAiApplicationLayout({ locale }: Props) {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="pt-[100px] pb-[100px] md:pt-[160px]">
        <div className="main-container space-y-[70px]">
          <AnimatedSection>
            <div className="space-y-3 text-center">
              <h2 className="mx-auto max-w-[814px]">Features built for enterprise service teams.</h2>
              <p className="mx-auto max-w-[734px]">
                Schedulaa unifies scheduling, payroll, hiring, website building, and eCommerce for teams.
              </p>
            </div>
          </AnimatedSection>

          <StaggerGrid className="grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
            {[
              { title: 'Booking workflows', body: 'Capture bookings with real-time availability, provider choice, and checkout.' },
              { title: 'Workforce scheduling', body: 'Coordinate shift coverage, leave, and department-level planning.' },
              { title: 'Payroll operations', body: 'Prepare payroll with structured inputs and auditable snapshots.' },
              { title: 'Website + commerce', body: 'Run service pages with booking and Stripe-connected checkout.' },
              { title: 'Manager analytics', body: 'Track bookings, revenue, utilization, and retention from one command center.' },
            ].map((card) => (
              <article key={card.title} data-stagger-item className="col-span-12 md:col-span-6 lg:col-span-4 rounded-[20px] bg-white p-5 shadow-1 dark:bg-background-8">
                <h3 className="text-heading-5">{card.title}</h3>
                <p className="mt-2">{card.body}</p>
              </article>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="bg-background-1 dark:bg-background-6 py-[100px]">
        <div className="main-container space-y-[70px]">
          <AnimatedSection>
            <div className="mx-auto max-w-[1028px] space-y-5 text-center">
              <span className="badge badge-green">Integrations</span>
              <h2>Connect your existing finance and automation stack</h2>
            </div>
          </AnimatedSection>
          <StaggerGrid className="grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
            {['Stripe', 'QuickBooks', 'Xero', 'Zapier'].map((name) => (
              <article key={name} data-stagger-item className="col-span-12 md:col-span-6 lg:col-span-3 rounded-[20px] border border-stroke-2 bg-white p-6 text-center dark:border-stroke-7 dark:bg-background-8">
                <h3 className="text-heading-6">{name}</h3>
              </article>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="bg-background-2 dark:bg-background-5 py-20 lg:py-[110px]">
        <div className="main-container grid gap-6 lg:grid-cols-2">
          <article className="dark:bg-background-8 rounded-[20px] bg-white p-6 md:p-8">
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

          <article className="dark:bg-background-8 rounded-[20px] bg-white p-6 md:p-8">
            <span className="badge badge-green-v2">Next step</span>
            <h3 className="mt-5">Start your rollout with your current team</h3>
            <p className="mt-2">Move from disconnected tools to a unified operations stack with a phased launch plan.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`${APP_ORIGIN}/register`} className="btn btn-primary hover:btn-white dark:hover:btn-accent">Start free trial</a>
              <Link href={withLocalePath('/demo', locale)} className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">Book demo</Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
