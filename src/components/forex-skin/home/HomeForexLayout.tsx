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
  return (
    <main>
      <Hero source={source} locale={locale} />
      <Clients locale={locale} />
      <Steps locale={locale} />
      <Feature source={source} locale={locale} />
      <About locale={locale} />
      <Services locale={locale} />
      <Pricing locale={locale} />
      <Reviews locale={locale} />
      <Blog source={source} locale={locale} />
      <Contact locale={locale} />
      <CTA source={source} />
    </main>
  );
}
