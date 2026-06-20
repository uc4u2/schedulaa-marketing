import heroVectorImg from '@public/images/ns-img-296.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { AppLocale } from '@/utils/locale';
import HeroWorkflowHexShowcase from './HeroWorkflowHexShowcase';
import PredictionChallengeGuidePopup from '@/components/home/PredictionChallengeGuidePopup';

type HeroProps = {
  source?: any;
  locale?: AppLocale;
};

type HeroFeatureItem = { id: number; text: string };
type HeroCopy = {
  line1: string;
  line2: string;
  line3?: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
};

const heroCopyEn: HeroCopy = {
  line1: 'Websites, booking,',
  line2: 'invoices, and scheduling',
  line3: 'for service businesses',
  subtitle:
    'Launch your website, take bookings, send estimates and invoices, manage shifts, and collect payments from one system.',
  primaryCta: 'Start free trial',
  secondaryCta: 'Compare plans',
};

const featureItemsEn: HeroFeatureItem[] = [
  { id: 1, text: 'Website builder with custom domain support.' },
  { id: 2, text: 'Online booking and staff scheduling in one place.' },
  { id: 3, text: 'Estimates, invoices, and payments without extra tools.' },
  { id: 4, text: 'Live staff shifts and availability for daily operations.' },
];

const ANDROID_APK_URL =
  process.env.NEXT_PUBLIC_ANDROID_APK_URL ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/apk/schedulaa-staff-latest.apk';

const heroCopyByLocale: Record<string, HeroCopy> = {
  en: heroCopyEn,
  fa: {
    ...heroCopyEn,
  },
  ru: {
    ...heroCopyEn,
  },
  zh: {
    ...heroCopyEn,
  },
  es: {
    ...heroCopyEn,
  },
  fr: {
    ...heroCopyEn,
  },
  de: {
    ...heroCopyEn,
  },
  ar: {
    ...heroCopyEn,
  },
  pt: {
    ...heroCopyEn,
  },
};

const featureItemsByLocale: Record<string, HeroFeatureItem[]> = {
  en: featureItemsEn,
  fa: [
    ...featureItemsEn,
  ],
  ru: [
    ...featureItemsEn,
  ],
  zh: [
    ...featureItemsEn,
  ],
  es: [
    ...featureItemsEn,
  ],
  fr: [
    ...featureItemsEn,
  ],
  de: [
    ...featureItemsEn,
  ],
  ar: [
    ...featureItemsEn,
  ],
  pt: [
    ...featureItemsEn,
  ],
};

const Hero = ({ source, locale = 'en' }: HeroProps) => {
  const returnTo = marketingReturnTo(locale, '/');
  const hero = source?.hero || {};
  const heroCopy = heroCopyByLocale[locale] || heroCopyByLocale.en;
  const featureItems = featureItemsByLocale[locale] || featureItemsByLocale.en;
  const isEnglishHero = locale === 'en';

  return (
    <section className="relative z-20 overflow-hidden bg-[url('/images/ns-img-295.jpg')] bg-cover bg-top bg-no-repeat pt-[144px] pb-[72px] md:pt-[206px] md:pb-[112px]">
      <div className="absolute top-[10%] left-1/2 -z-10 mx-auto max-w-[1365px] -translate-x-1/2">
        <figure>
          <Image src={heroVectorImg} alt="hero" />
        </figure>
      </div>
      <div className="main-container">
        <div className="grid items-center gap-7 md:gap-8 xl:grid-cols-[minmax(0,560px)_minmax(0,740px)] xl:justify-between xl:gap-16">
          <div className="space-y-4 text-center md:space-y-4 xl:space-y-4 xl:pt-1 xl:text-left">
            <RevealAnimation delay={0.1}>
              <h1 className="mx-auto max-w-[320px] text-center text-[clamp(30px,8.7vw,42px)] leading-[1.02] tracking-[-0.04em] sm:max-w-[420px] sm:text-[clamp(36px,7.2vw,50px)] md:max-w-[620px] md:text-[clamp(42px,6vw,56px)] xl:mx-0 xl:max-w-[560px] xl:text-[clamp(48px,3.7vw,60px)]">
                {isEnglishHero ? (
                  <>
                    <span className="block whitespace-nowrap text-white">Websites, booking,</span>
                    <span className="block pt-1 whitespace-nowrap text-white md:pt-1.5">invoices, and scheduling</span>
                    <span className="hero-text-gradient hero-text-color-2 block pt-1 whitespace-nowrap md:pt-1.5">
                      for service businesses
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block text-white">{heroCopy.line1 || hero.title?.line1 || heroCopyByLocale.en.line1}</span>
                    <span className="hero-text-gradient hero-text-color-2 block pt-1 whitespace-nowrap md:pt-1.5">
                      {heroCopy.line2 || hero.title?.line2 || heroCopyByLocale.en.line2}
                    </span>
                  </>
                )}
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-accent/60 mx-auto max-w-[310px] text-sm leading-6 sm:max-w-[430px] sm:text-base sm:leading-7 md:max-w-[600px] xl:mx-0 xl:max-w-[500px]">
                {heroCopy.subtitle || hero.subtitle || heroCopyByLocale.en.subtitle}
              </p>
            </RevealAnimation>
            <ul className="flex flex-col items-start gap-3 mx-auto max-w-[320px] sm:max-w-[430px] sm:items-center sm:gap-4 md:max-w-[600px] md:flex-row md:flex-wrap md:justify-center md:gap-6 xl:mx-0 xl:max-w-none xl:items-center xl:justify-start xl:gap-5">
              {featureItems.map((item, index) => (
                <RevealAnimation key={item.id} delay={0.3 + index * 0.1}>
                  <li className="flex items-start gap-1.5 text-left sm:items-center">
                    <span className="bg-accent/20 inline-flex size-[18px] items-center justify-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width={11} height={8} viewBox="0 0 11 8" fill="none" className="shrink-0">
                        <path d="M4.81661 7.25605L10.2491 1.92144C10.5836 1.5959 10.5836 1.0697 10.2491 0.744158C9.91446 0.418614 9.37363 0.418614 9.03904 0.744158L4.2116 5.49012L1.96096 3.28807C1.62636 2.96253 1.08554 2.96253 0.750945 3.28807C0.416352 3.61362 0.416352 4.13982 0.750945 4.46536L3.6066 7.25605C3.77347 7.41841 3.99253 7.5 4.2116 7.5C4.43067 7.5 4.64974 7.41841 4.81661 7.25605Z" fill="white" />
                      </svg>
                    </span>
                    <span className="text-accent/60 text-tagline-2 max-w-[280px] sm:max-w-none">{item.text}</span>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
            <ul className="flex flex-col items-center justify-center gap-3 pt-3 sm:gap-3.5 md:flex-row xl:justify-start">
              <RevealAnimation delay={0.6} direction="left" offset={50}>
                <li className="w-full max-w-[280px] text-center sm:max-w-[300px] sm:text-left md:w-auto md:max-w-none">
                  <LinkButton
                    href={buildAppUrl('/register', { returnTo })}
                    className="btn hover:btn-secondary dark:hover:btn-accent btn-green btn-xl w-full border-0 text-center md:w-auto">
                    {heroCopy.primaryCta || hero.primaryCta?.label || heroCopyByLocale.en.primaryCta}
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.7} direction="left" offset={50}>
                <li className="w-full max-w-[280px] text-center sm:max-w-[300px] sm:text-left md:w-auto md:max-w-none">
                  <LinkButton
                    href="/pricing"
                    className="btn btn-dark hover:btn-green bg-accent/22 btn-xl w-full text-center text-white hover:border-0 md:w-auto">
                    {heroCopy.secondaryCta || hero.secondaryCta?.label || heroCopyByLocale.en.secondaryCta}
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
            <p className="mx-auto max-w-[320px] text-xs leading-5 text-white/58 sm:max-w-[430px] sm:text-sm md:text-center xl:mx-0 xl:max-w-none xl:text-left">
              <a href={ANDROID_APK_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-white/78 transition-colors hover:text-[#d9ff6a]">
                Android app available now
              </a>
              <span className="px-1.5 sm:px-2 text-white/28">·</span>
              <span>iPhone coming soon</span>
            </p>
          </div>
          <RevealAnimation delay={0.8} instant>
            <div className="pt-2 sm:pt-3 xl:pt-0">
              <HeroWorkflowHexShowcase locale={locale} />
            </div>
          </RevealAnimation>
        </div>
      </div>
      <PredictionChallengeGuidePopup locale={locale} />
    </section>
  );
};

export default Hero;
