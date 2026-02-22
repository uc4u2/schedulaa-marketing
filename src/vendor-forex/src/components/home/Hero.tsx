import heroVectorImg from '@public/images/ns-img-296.svg';
import Image from 'next/image';
import sourceEn from '@/legacy-content/features/landing-features.json';
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

const Hero = ({ source }: { source?: any }) => {
  const content = source || sourceEn;
  const returnTo = marketingReturnTo(DEFAULT_LOCALE, '/');
  return (
    <section className="relative z-20 max-h-[900px] bg-[url('/images/ns-img-295.jpg')] bg-cover bg-top bg-no-repeat pt-[170px] pb-[50px] md:pt-[206px] md:pb-[100px] xl:max-h-[1126px]">
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#040914]/52 via-[#030814]/36 to-[#01040b]/28" />
      <div className="absolute top-[10%] left-1/2 -z-10 mx-auto max-w-[1365px] -translate-x-1/2">
        <figure>
          <Image src={heroVectorImg} alt="hero" />
        </figure>
      </div>
      <div className="main-container relative z-10">
        <div className="mx-auto max-w-[980px] rounded-3xl border border-white/10 bg-black/22 px-4 py-7 shadow-[0_16px_44px_rgba(2,8,20,0.35)] backdrop-blur-[2px] md:px-8 md:py-9">
          <div className="space-y-5 md:space-y-4 md:text-center">
          <RevealAnimation delay={0.1}>
            <h1 className="mx-auto max-w-[380px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[776px]">
              <span className="block text-white">The Operations OS for</span>
              <span className="hero-text-gradient hero-text-color-2 block">Service-Based Teams</span>
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
          <ul className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
            <RevealAnimation delay={0.6} direction="left" offset={50}>
              <li className="w-full text-center sm:w-auto sm:text-left">
                <LinkButton
                  href={buildAppUrl('/register', { returnTo })}
                  className="btn hover:btn-secondary dark:hover:btn-accent btn-green btn-xl w-[90%] rounded-xl border-0 text-center shadow-[0_14px_30px_rgba(157,255,0,0.18)] transition-shadow duration-300 hover:shadow-[0_18px_38px_rgba(157,255,0,0.28)] md:w-auto">
                  {content.hero.primaryCta.label}
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.7} direction="left" offset={50}>
              <li className="w-full text-center sm:w-auto sm:text-left">
                <LinkButton
                  href="/pricing"
                  className="btn btn-dark hover:btn-green bg-accent/22 btn-xl w-[90%] rounded-xl text-center text-white hover:border-0 md:w-auto">
                  {content.hero.secondaryCta.label}
                </LinkButton>
              </li>
            </RevealAnimation>
          </ul>
          <p className="mt-4 text-center text-xs text-white/68">No credit card required · Cancel anytime</p>
          <div className="mt-4 space-y-2.5">
            <p className="text-center text-sm text-white/80">Built for payroll integrity across US + Canada.</p>
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {['Role-based access', 'Audit-ready reports', 'QuickBooks/Xero exports', 'Stripe billing'].map((item) => (
                <li key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/82">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <RevealAnimation delay={0.8} instant>
          <div className="mt-[50px] lg:mt-[100px]">
            <div className="mx-auto max-w-[760px] lg:max-w-[1040px] xl:max-w-[1360px]">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-orange-400/20 shadow-lg">
                <p className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[12rem] font-bold tracking-[0.08em] text-white/5 md:text-[16rem]">
                  OPERATIONS
                </p>
                <div className="relative h-16 w-full" />
              </div>
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
