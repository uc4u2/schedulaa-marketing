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

type Props = {
  locale: AppLocale;
};

// Forex skin homepage composition in vendor section order.
export default function HomeForexLayout({ locale }: Props) {
  const source = getLandingSource(locale, 'home');
  const youtubeEmbedSrc =
    process.env.NEXT_PUBLIC_DEMO_YOUTUBE_EMBED || 'https://www.youtube.com/embed/y7kygIhnZm8';
  return (
    <main>
      <Hero source={source} locale={locale} />
      <Clients locale={locale} />
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
