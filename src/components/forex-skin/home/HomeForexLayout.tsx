import About from '@/vendor-forex/src/components/home/About';
import Blog from '@/vendor-forex/src/components/home/Blog';
import Clients from '@/vendor-forex/src/components/home/Clients';
import Contact from '@/vendor-forex/src/components/home/Contact';
import CTA from '@/vendor-forex/src/components/home/CTA';
import Feature from '@/vendor-forex/src/components/home/Feature';
import Hero from '@/vendor-forex/src/components/home/Hero';
import Pricing from '@/vendor-forex/src/components/home/Pricing';
import Reviews from '@/vendor-forex/src/components/home/Reviews';
import Services from '@/vendor-forex/src/components/home/Services';
import Steps from '@/vendor-forex/src/components/home/Steps';
import { getLandingSource } from '@/legacy-content/features/getLandingSource';
import { AppLocale } from '@/utils/locale';
import TrackedLink from '@/components/shared/TrackedLink';

type Props = {
  locale: AppLocale;
};

// Forex skin homepage composition in vendor section order.
export default function HomeForexLayout({ locale }: Props) {
  const source = getLandingSource(locale, 'home');
  const youtubeEmbedSrc =
    process.env.NEXT_PUBLIC_DEMO_YOUTUBE_EMBED || 'https://www.youtube.com/embed/y7kygIhnZm8';
  const bookDemoHref =
    process.env.NEXT_PUBLIC_BOOK_DEMO_URL ||
    'https://app.schedulaa.com/sale/meet/uzmTuuGPNNepce0r2vcx8WB4w3sJ2LA32Aqh7XIw9F8';
  return (
    <main>
      <Hero source={source} locale={locale} />
      <Clients locale={locale} />
      <section className="py-12 md:py-16">
        <div className="main-container">
          <article className="rounded-3xl border border-stroke-2 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:border-stroke-7 dark:bg-background-8 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div className="space-y-4">
                <span className="badge badge-yellow-v2">Why teams switch</span>
                <h2 className="text-heading-4 md:text-heading-3">Managers need labor cost visibility, not just a schedule.</h2>
                <p className="max-w-[760px] text-secondary/70 dark:text-accent/70">
                  Most scheduling tools stop at shifts and clock-ins. Schedulaa helps service teams see labor cost,
                  overtime pressure, and payroll-ready hours before payroll day.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'See daily and weekly labor cost in one dashboard',
                    'Catch overtime risk before it becomes payroll pain',
                    'Track worked hours, leave, and payroll-ready totals',
                    'Replace scattered spreadsheets and manual rollups',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-stroke-2 bg-background-3 px-4 py-3 text-sm font-medium dark:border-stroke-7 dark:bg-background-6"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  ['Today Labor Cost', '$2,340', 'Know what staffing cost looks like before payroll closes.'],
                  ['Overtime Risk', '2 employees', 'Spot schedule pressure early and adjust before it compounds.'],
                  ['Payroll Ready', '112 hours', 'Review approved hours, paid leave, and exceptions in one place.'],
                ].map(([label, value, note]) => (
                  <div key={label} className="rounded-2xl border border-stroke-2 p-4 dark:border-stroke-7">
                    <p className="text-tagline-2 uppercase text-secondary/55 dark:text-accent/55">{label}</p>
                    <p className="mt-2 text-heading-5">{value}</p>
                    <p className="mt-2 text-sm text-secondary/70 dark:text-accent/70">{note}</p>
                  </div>
                ))}
                <div className="pt-2">
                  <TrackedLink
                    href={bookDemoHref}
                    className="btn btn-primary btn-md w-full"
                    eventName="Lead"
                    eventParams={{
                      content_name: 'Homepage Proof Book Demo',
                      page_path: '/',
                    }}
                  >
                    Book a demo
                  </TrackedLink>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <Steps locale={locale} />
      <section className="py-12 md:py-16">
        <div className="main-container">
          <article className="rounded-3xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
            <div className="space-y-3">
              <h2 className="text-heading-4 md:text-heading-3">One Platform. One Source of Truth</h2>
              <div className="relative w-full overflow-hidden rounded-2xl border border-stroke-2 pb-[56.25%] dark:border-stroke-7">
                <iframe
                  className="absolute top-0 left-0 h-full w-full"
                  src={youtubeEmbedSrc}
                  title="Schedulaa platform walkthrough"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </article>
        </div>
      </section>
      <Feature source={source} locale={locale} />
      <About locale={locale} />
      <Services locale={locale} />
      <Pricing locale={locale} />
      <Reviews locale={locale} />
      <Blog source={source} locale={locale} />
      <Contact locale={locale} />
      <CTA source={source} locale={locale} />
    </main>
  );
}
