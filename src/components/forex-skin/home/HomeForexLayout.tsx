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
import gradient28Img from '@public/images/ns-img-516.png';
import Image from 'next/image';

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
          <article className="group relative overflow-hidden rounded-[28px] bg-secondary p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:p-8 lg:p-10">
            <figure className="pointer-events-none absolute inset-0 -right-[38%] -bottom-[62%] z-0 opacity-100">
              <Image src={gradient28Img} alt="labor-cost-glow" className="h-full w-full object-cover opacity-80" />
            </figure>
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-start">
              <div className="space-y-5 rounded-3xl bg-black/16 p-4 backdrop-blur-[1px] md:p-5">
                <span className="badge badge-yellow-v2 !bg-[#d7efb2] !text-secondary">Labor cost visibility</span>
                <h2 className="max-w-[560px] text-heading-4 text-white md:text-heading-3">
                  Schedule your team and see labor cost pressure before payroll closes.
                </h2>
                <p className="max-w-[620px] text-[15px] leading-7 text-white/82">
                  Schedulaa gives service managers one place to track worked hours, overtime risk, payroll-ready totals,
                  and staffing pressure without waiting for spreadsheets or end-of-week rollups.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <TrackedLink
                    href={bookDemoHref}
                    className="btn btn-white btn-md min-w-[170px] !border-0"
                    eventName="Lead"
                    eventParams={{
                      content_name: 'Homepage Proof Book Demo',
                      page_path: '/',
                    }}
                  >
                    Book a demo
                  </TrackedLink>
                  <TrackedLink
                    href="/pricing"
                    className="btn btn-transparent btn-md min-w-[170px] !border-white/25 !text-white hover:!bg-white hover:!text-secondary"
                  >
                    See pricing
                  </TrackedLink>
                </div>
              </div>
              <div className="grid gap-3 lg:pt-1">
                {[
                  'Today Labor Cost: know what staffing cost looks like before payroll day.',
                  'Overtime Risk: spot employees approaching overtime before it compounds.',
                  'Payroll Ready Hours: review approved hours, leave, and exceptions in one place.',
                  'Daily and weekly labor visibility for managers, operators, and accountants.',
                  'Replace scattered spreadsheets and manual rollups with one operating view.',
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/12 bg-black/18 px-4 py-3 text-white backdrop-blur-sm"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3f6a5e] text-[11px] text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-white/90 md:text-[15px]">{item}</p>
                  </div>
                ))}
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
