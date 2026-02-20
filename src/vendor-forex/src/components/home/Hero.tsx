import heroVectorImg from '@public/images/ns-img-296.svg';
import heroOverlayClientsImg from '@public/images/marketing/showcase/clients-pick2.png';
import heroOverlayEmployeeImg from '@public/images/marketing/showcase/employee-management.png';
import Image from 'next/image';
import source from '@/legacy-content/features/landing-features.json';
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

const Hero = () => {
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
                {source.hero.title.line1} {source.hero.title.line2}
              </span>
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-accent/60 mx-auto max-w-[380px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]">
              {source.hero.subtitle}
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
                {source.hero.primaryCta.label}
              </LinkButton>
            </li>
          </RevealAnimation>
          <RevealAnimation delay={0.7} direction="left" offset={50}>
            <li className="w-full text-center sm:w-auto sm:text-left">
              <LinkButton
                href="/pricing"
                className="btn btn-dark hover:btn-green bg-accent/22 btn-xl w-[90%] text-center text-white hover:border-0 md:w-auto">
                {source.hero.secondaryCta.label}
              </LinkButton>
            </li>
          </RevealAnimation>
        </ul>
        <RevealAnimation delay={0.8} instant>
          <div className="mt-[50px] lg:mt-[100px]">
            <div className="relative mx-auto max-w-[700px] lg:max-w-[900px] xl:max-w-[1240px]" style={{ transform: 'perspective(1400px) rotateX(3deg)' }}>
              <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-linear-[145deg,rgba(0,194,255,0.22)_0%,rgba(157,255,0,0.08)_45%,rgba(0,0,0,0.12)_100%] blur-xl" />
              <div className="pointer-events-none absolute -inset-x-10 -bottom-8 h-16 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,180,255,0.38)_0%,rgba(0,0,0,0)_72%)]" />
              <HeroShowcase />
              <figure
                className="absolute -left-3 top-[10%] hidden w-[clamp(170px,20vw,250px)] overflow-hidden rounded-xl border border-white/20 bg-[#0b1220]/55 p-1 shadow-[0_14px_36px_rgba(0,0,0,0.42)] backdrop-blur md:block lg:-left-7"
                style={{ animation: 'heroFloatLeft 8s ease-in-out infinite', transform: 'rotate(-8deg)' }}>
                <Image
                  src={heroOverlayEmployeeImg}
                  alt="Employee management preview"
                  className="h-full w-full rounded-lg object-cover opacity-90"
                />
              </figure>
              <figure
                className="absolute -right-2 bottom-[8%] hidden w-[clamp(180px,21vw,260px)] overflow-hidden rounded-xl border border-white/20 bg-[#0b1220]/55 p-1 shadow-[0_16px_34px_rgba(0,0,0,0.42)] backdrop-blur md:block lg:-right-6"
                style={{ animation: 'heroFloatRight 9s ease-in-out infinite', transform: 'rotate(8deg)' }}>
                <Image
                  src={heroOverlayClientsImg}
                  alt="Client booking preview"
                  className="h-full w-full rounded-lg object-cover opacity-90"
                />
              </figure>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;
