import heroVectorImg from '@public/images/ns-img-296.svg';
import heroOverlayClientsImg from '@public/images/marketing/payroll-manage.png';
import heroOverlayEmployeeImg from '@public/images/marketing/showcase/employee-management.png';
import heroOverlayShiftImg from '@public/images/marketing/shift-pre.png';
import heroOverlayBookingImg from '@public/images/marketing/showcase/clients-pick2.png';
import heroOverlayWebsiteBuilderImg from '@public/images/marketing/showcase/website-builder3d.png';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import sourceEn from '@/legacy-content/features/landing-features.json';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { AppLocale, DEFAULT_LOCALE } from '@/utils/locale';
import HeroShowcase from './HeroShowcase';

interface FeatureItem {
  id: number;
  text: string;
}

const featureItemsByLocale: Record<string, FeatureItem[]> = {
  en: [
    { id: 1, text: 'Real-time booking and provider availability.' },
    { id: 2, text: 'Payroll-ready exports for US + Canada.' },
    { id: 3, text: 'Websites, checkout, and automation in one OS.' },
  ],
  fa: [
    { id: 1, text: 'رزرو لحظه‌ای و ظرفیت زنده ارائه‌دهنده‌ها.' },
    { id: 2, text: 'خروجی آماده حقوق برای آمریکا و کانادا.' },
    { id: 3, text: 'وب‌سایت، پرداخت و اتوماسیون در یک سیستم.' },
  ],
  ru: [
    { id: 1, text: 'Бронирование в реальном времени и доступность специалистов.' },
    { id: 2, text: 'Выгрузки payroll для США и Канады.' },
    { id: 3, text: 'Сайты, checkout и автоматизация в одной OS.' },
  ],
  zh: [
    { id: 1, text: '实时预约与服务人员可用性。' },
    { id: 2, text: '支持美国和加拿大的薪资导出。' },
    { id: 3, text: '网站、结账与自动化在同一套系统中。' },
  ],
};

const Hero = ({ source, locale = DEFAULT_LOCALE }: { source?: any; locale?: AppLocale }) => {
  const content = source || sourceEn;
  const returnTo = marketingReturnTo(locale, '/');
  const featureItems = featureItemsByLocale[locale] || featureItemsByLocale.en;
  const popularLabel = locale === 'fa' ? 'محبوب' : locale === 'ru' ? 'Популярно' : locale === 'zh' ? '热门' : 'Popular';
  return (
    <section className="relative z-20 max-h-[900px] bg-[url('/images/ns-img-295.jpg')] bg-cover bg-top bg-no-repeat pt-[170px] pb-[50px] md:pt-[206px] md:pb-[100px] xl:max-h-[1126px]">
      <div className="absolute top-[10%] left-1/2 -z-10 mx-auto max-w-[1365px] -translate-x-1/2">
        <figure>
          <Image src={heroVectorImg} alt="hero" />
        </figure>
      </div>
      <div className="main-container">
        <div className="space-y-5 md:space-y-4 md:text-center">
          <RevealAnimation delay={0.1}>
            <h1 className="mx-auto max-w-[380px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[776px]">
              <span className="hero-text-gradient hero-text-color-2 block">
                {content.hero.title.line1} {content.hero.title.line2}
              </span>
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-accent/60 mx-auto max-w-[380px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]">
              {content.hero.subtitle}
            </p>
          </RevealAnimation>
          <ul className="flex flex-wrap items-center gap-5 sm:justify-center md:gap-9">
            {featureItems.map((item, index) => (
              <RevealAnimation key={item.id} delay={0.3 + index * 0.1}>
                <li className="flex items-center gap-1.5">
                  <span className="bg-accent/20 inline-flex size-[18px] items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={8}
                      viewBox="0 0 11 8"
                      fill="none"
                      className="shrink-0">
                      <path
                        d="M4.81661 7.25605L10.2491 1.92144C10.5836 1.5959 10.5836 1.0697 10.2491 0.744158C9.91446 0.418614 9.37363 0.418614 9.03904 0.744158L4.2116 5.49012L1.96096 3.28807C1.62636 2.96253 1.08554 2.96253 0.750945 3.28807C0.416352 3.61362 0.416352 4.13982 0.750945 4.46536L3.6066 7.25605C3.77347 7.41841 3.99253 7.5 4.2116 7.5C4.43067 7.5 4.64974 7.41841 4.81661 7.25605Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="text-accent/60 text-tagline-2">{item.text}</span>
                </li>
              </RevealAnimation>
            ))}
          </ul>
        </div>
        <ul className="mt-14 flex flex-col items-center justify-center gap-4 md:flex-row">
          <RevealAnimation delay={0.6} direction="left" offset={50}>
            <li className="w-full text-center sm:w-auto sm:text-left">
              <LinkButton
                href={buildAppUrl('/register', { returnTo })}
                className="btn hover:btn-secondary dark:hover:btn-accent btn-green btn-xl w-[90%] border-0 text-center md:w-auto">
                {content.hero.primaryCta.label}
              </LinkButton>
            </li>
          </RevealAnimation>
          <RevealAnimation delay={0.7} direction="left" offset={50}>
            <li className="w-full text-center sm:w-auto sm:text-left">
              <LinkButton
                href="/pricing"
                className="btn btn-dark hover:btn-green bg-accent/22 btn-xl w-[90%] text-center text-white hover:border-0 md:w-auto">
                {content.hero.secondaryCta.label}
              </LinkButton>
            </li>
          </RevealAnimation>
        </ul>
        <RevealAnimation delay={0.8} instant>
          <div className="mt-[50px] lg:mt-[100px]">
            <div className="mx-auto max-w-[700px] lg:max-w-[900px] xl:max-w-[1240px]">
              <div className="mb-5 hidden grid-cols-2 gap-3 md:grid lg:mb-6 lg:grid-cols-5">
                <figure
                  className="relative overflow-hidden rounded-xl border border-white/20 bg-[#0b1220]/55 p-1 shadow-[0_14px_32px_rgba(0,0,0,0.4)] backdrop-blur transition-transform duration-300 hover:z-30 hover:scale-[2]"
                  style={{
                    '--card-rotate-start': '-16deg',
                    '--card-rotate-end': '-2deg',
                    animation:
                      'heroCardDrop 900ms cubic-bezier(0.23,1,0.32,1) 120ms both, heroCardDrift 7.4s ease-in-out 1.15s infinite',
                  } as CSSProperties}>
                  <Image
                    src={heroOverlayEmployeeImg}
                    alt=""
                    quality={100}
                    unoptimized
                    className="h-full w-full rounded-lg object-cover opacity-95"
                  />
                </figure>
                <figure
                  className="relative overflow-hidden rounded-xl border border-white/20 bg-[#0b1220]/55 p-1 shadow-[0_14px_32px_rgba(0,0,0,0.4)] backdrop-blur transition-transform duration-300 hover:z-30 hover:scale-[2]"
                  style={{
                    '--card-rotate-start': '12deg',
                    '--card-rotate-end': '1deg',
                    animation:
                      'heroCardDrop 900ms cubic-bezier(0.23,1,0.32,1) 420ms both, heroCardDrift 7.8s ease-in-out 1.45s infinite',
                  } as CSSProperties}>
                  <Link href="/payroll" className="group relative block overflow-hidden rounded-lg">
                    <span className="absolute top-2 right-2 z-10 inline-flex items-center rounded-full border border-lime-200/30 bg-lime-300/95 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-slate-900 shadow-[0_8px_20px_rgba(157,255,0,0.28)]">
                      {popularLabel}
                    </span>
                    <span className="pointer-events-none absolute inset-0 z-[1] rounded-lg ring-1 ring-lime-300/35 transition-all duration-300 group-hover:ring-lime-300/55" />
                    <Image
                      src={heroOverlayClientsImg}
                      alt=""
                      quality={100}
                      unoptimized
                      className="h-full w-full rounded-lg object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>
                </figure>
                <figure
                  className="relative overflow-hidden rounded-xl border border-white/20 bg-[#0b1220]/55 p-1 shadow-[0_14px_32px_rgba(0,0,0,0.4)] backdrop-blur transition-transform duration-300 hover:z-30 hover:scale-[2]"
                  style={{
                    '--card-rotate-start': '-10deg',
                    '--card-rotate-end': '-1deg',
                    animation:
                      'heroCardDrop 900ms cubic-bezier(0.23,1,0.32,1) 720ms both, heroCardDrift 7.2s ease-in-out 1.75s infinite',
                  } as CSSProperties}>
                  <Image
                    src={heroOverlayBookingImg}
                    alt=""
                    quality={100}
                    unoptimized
                    className="h-full w-full rounded-lg object-cover opacity-95"
                  />
                </figure>
                <figure
                  className="relative overflow-hidden rounded-xl border border-white/20 bg-[#0b1220]/55 p-1 shadow-[0_14px_32px_rgba(0,0,0,0.4)] backdrop-blur transition-transform duration-300 hover:z-30 hover:scale-[2]"
                  style={{
                    '--card-rotate-start': '15deg',
                    '--card-rotate-end': '2deg',
                    animation:
                      'heroCardDrop 900ms cubic-bezier(0.23,1,0.32,1) 1020ms both, heroCardDrift 7.9s ease-in-out 2.05s infinite',
                  } as CSSProperties}>
                  <Image
                    src={heroOverlayShiftImg}
                    alt=""
                    quality={100}
                    unoptimized
                    className="h-full w-full rounded-lg object-cover opacity-95"
                  />
                </figure>
                <figure
                  className="relative overflow-hidden rounded-xl border border-white/20 bg-[#0b1220]/55 p-1 shadow-[0_14px_32px_rgba(0,0,0,0.4)] backdrop-blur transition-transform duration-300 hover:z-30 hover:scale-[2]"
                  style={{
                    '--card-rotate-start': '-14deg',
                    '--card-rotate-end': '-1deg',
                    animation:
                      'heroCardDrop 900ms cubic-bezier(0.23,1,0.32,1) 1300ms both, heroCardDrift 8.1s ease-in-out 2.25s infinite',
                  } as CSSProperties}>
                  <Image
                    src={heroOverlayWebsiteBuilderImg}
                    alt=""
                    quality={100}
                    unoptimized
                    className="h-full w-full rounded-lg object-cover opacity-95"
                  />
                </figure>
              </div>
            </div>
            <div className="relative mx-auto max-w-[700px] lg:max-w-[900px] xl:max-w-[1240px]" style={{ transform: 'perspective(1400px) rotateX(3deg)' }}>
              <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-linear-[145deg,rgba(0,194,255,0.22)_0%,rgba(157,255,0,0.08)_45%,rgba(0,0,0,0.12)_100%] blur-xl" />
              <div className="pointer-events-none absolute -inset-x-10 -bottom-8 h-16 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,180,255,0.38)_0%,rgba(0,0,0,0)_72%)]" />
              <HeroShowcase locale={locale} />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;
