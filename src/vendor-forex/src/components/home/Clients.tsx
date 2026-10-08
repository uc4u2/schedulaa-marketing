import { cn } from '@/utils/cn';
import { AppLocale } from '@/utils/locale';
import googleLogo from '@public/images/icons/google.svg';
import quickbooksLogo from '@public/images/icons/quickbooks-wordmark.svg';
import stripeLogo from '@public/images/icons/stripe.svg';
import stripeDarkLogo from '@public/images/icons/stripe-dark.svg';
import xeroLogo from '@public/images/icons/xero-wordmark.svg';
import zapierLogo from '@public/images/icons/zapier-wordmark.svg';
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface ClientLogo {
  id: number;
  lightSrc: StaticImageData;
  darkSrc: StaticImageData;
  alt: string;
}

const clientLogos: ClientLogo[] = [
  {
    id: 1,
    lightSrc: stripeLogo,
    darkSrc: stripeDarkLogo,
    alt: 'Stripe payment provider',
  },
  {
    id: 2,
    lightSrc: googleLogo,
    darkSrc: googleLogo,
    alt: 'Google Calendar integration',
  },
  {
    id: 3,
    lightSrc: quickbooksLogo,
    darkSrc: quickbooksLogo,
    alt: 'QuickBooks Online accounting integration',
  },
  {
    id: 4,
    lightSrc: xeroLogo,
    darkSrc: xeroLogo,
    alt: 'Xero accounting integration',
  },
  {
    id: 5,
    lightSrc: zapierLogo,
    darkSrc: zapierLogo,
    alt: 'Zapier automation integration',
  },
];

const ariaLabelByLocale: Record<string, string> = {
  en: 'Supported Schedulaa integration',
  fa: '\u0646\u0634\u0627\u0646 \u0628\u0631\u0646\u062f \u06cc\u06a9\u067e\u0627\u0631\u0686\u0647\u200c\u0633\u0627\u0632\u06cc',
  ru: '\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438',
  zh: '\u96c6\u6210\u54c1\u724c\u6807\u8bc6',
};

const Clients = ({ locale = 'en' }: { locale?: AppLocale }) => {
  const ariaLabel = ariaLabelByLocale[locale] || ariaLabelByLocale.en;
  return (
    <RevealAnimation delay={0.1}>
      <section className="py-10 md:py-[75px] lg:py-[120px] mt-0">
        <div className="main-container">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-secondary/60 dark:text-accent/60">
            Supported integrations and payment providers
          </p>
          <div className="relative max-w-[1000px] mx-auto">
            <div className="absolute left-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-r from-background-2 to-transparent dark:from-background-5 z-40" />
            <div className="absolute right-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-l from-background-2 to-transparent dark:from-background-5 z-40" />
            <Marquee>
              <div className="flex items-center justify-center gap-8">
                {clientLogos.map((logo, index) => (
                  <figure
                    key={logo.id}
                    aria-label={ariaLabel}
                    className={cn('min-w-[160px] md:min-w-[230px]', index === 0 && 'ml-8')}>
                    <Image src={logo.lightSrc} alt={logo.alt} className="block h-9 w-auto md:h-11 dark:hidden" />
                    <Image src={logo.darkSrc} alt={logo.alt} className="hidden h-9 w-auto md:h-11 dark:block" />
                  </figure>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Clients;
