import { cn } from '@/utils/cn';
import { AppLocale } from '@/utils/locale';
import driveLogo from '@public/images/icons/drive-google.svg';
import googleLogo from '@public/images/icons/google.svg';
import googleMeetLogo from '@public/images/icons/google-meet.svg';
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
    alt: 'Stripe integration',
  },
  {
    id: 2,
    lightSrc: googleLogo,
    darkSrc: googleLogo,
    alt: 'Google integration',
  },
  {
    id: 3,
    lightSrc: googleMeetLogo,
    darkSrc: googleMeetLogo,
    alt: 'Google Meet integration',
  },
  {
    id: 4,
    lightSrc: driveLogo,
    darkSrc: driveLogo,
    alt: 'Google Drive integration',
  },
  {
    id: 5,
    lightSrc: quickbooksLogo,
    darkSrc: quickbooksLogo,
    alt: 'QuickBooks integration',
  },
  {
    id: 6,
    lightSrc: xeroLogo,
    darkSrc: xeroLogo,
    alt: 'Xero integration',
  },
  {
    id: 7,
    lightSrc: zapierLogo,
    darkSrc: zapierLogo,
    alt: 'Zapier integration',
  },
];

const Clients = ({ locale = 'en' }: { locale?: AppLocale }) => {
  const ariaLabel = locale === 'ru' ? 'Логотип интеграции' : locale === 'zh' ? '集成品牌标识' : 'Client brand logo';
  return (
    <RevealAnimation delay={0.1}>
      <section className="lg:py-[150px] py-10 md:py-[75px] mt-14 xl:mt-[250px] lg:mt-[200px] sm:mt-[150px]">
        <div className="main-container">
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
                    <Image src={logo.lightSrc} alt="" className="block h-9 w-auto md:h-11 dark:hidden" />
                    <Image src={logo.darkSrc} alt="" className="hidden h-9 w-auto md:h-11 dark:block" />
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
