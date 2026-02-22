import heroVectorImg from '@public/images/ns-img-296.svg';
import Image from 'next/image';
import sourceEn from '@/legacy-content/features/landing-features.json';
import type { ReactNode } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { DEFAULT_LOCALE } from '@/utils/locale';
import HeroShowcase from './HeroShowcase';

interface FeatureItem {
  id: number;
  text: string;
}

const featureItems: FeatureItem[] = [
  { id: 1, text: 'Real-time booking and provider availability.' },
  { id: 2, text: 'Payroll-ready exports for US + Canada.' },
  { id: 3, text: 'Websites, checkout, and automation in one OS.' },
];

const workflowLayers: Array<{ title: string; subtitle: string; icon: ReactNode }> = [
  {
    title: 'Booking',
    subtitle: 'Client intake + slots',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3.5" y="5.5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.5 10.5h17M8 3.8v3.4M16 3.8v3.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Scheduling',
    subtitle: 'Shift orchestration',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="5.5" y="5.5" width="13" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Time Tracking',
    subtitle: 'Clock + compliance logs',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Payroll',
    subtitle: 'Runs, slips, and exports',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M5 7.5h14M7.5 4.5v6M16.5 4.5v6M6 19.5h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Reports',
    subtitle: 'Ops + finance analytics',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M5 18V9m7 9V6m7 12v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 20h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const Hero = ({ source }: { source?: any }) => {
  const content = source || sourceEn;
  const returnTo = marketingReturnTo(DEFAULT_LOCALE, '/');
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
                The Operations OS for Service-Based Teams
              </span>
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-accent/60 mx-auto max-w-[380px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]">
              Booking, scheduling, time tracking, and payroll — unified in one workflow.
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
            <div className="mx-auto max-w-[760px] lg:max-w-[1040px] xl:max-w-[1360px]">
              <ul className="mb-5 flex flex-wrap items-center justify-center gap-2.5 md:flex-nowrap md:gap-3 lg:mb-6">
                {workflowLayers.map((layer, index) => (
                  <li key={layer.title} className="flex items-center gap-2">
                    <article className="flex h-[68px] min-w-[168px] items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/20">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-orange-400/30 to-cyan-400/20 text-white/90">
                        {layer.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-base font-semibold tracking-tight leading-none text-white/95">{layer.title}</p>
                        <p className="mt-1 truncate text-xs leading-none text-white/60">{layer.subtitle}</p>
                        </div>
                    </article>
                    {index !== workflowLayers.length - 1 && (
                      <div className="hidden h-px w-10 bg-gradient-to-r from-white/20 via-white/40 to-white/20 md:block" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mx-auto max-w-[760px] lg:max-w-[1040px] xl:max-w-[1360px]" style={{ transform: 'perspective(1400px) rotateX(2.2deg)' }}>
              <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-linear-[145deg,rgba(0,194,255,0.22)_0%,rgba(157,255,0,0.08)_45%,rgba(0,0,0,0.12)_100%] blur-xl" />
              <div className="pointer-events-none absolute -inset-x-10 -bottom-8 h-16 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,180,255,0.38)_0%,rgba(0,0,0,0)_72%)]" />
              <HeroShowcase />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;
