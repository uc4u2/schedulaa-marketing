import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="md:mt-4 lg:mt-6 xl:mt-[30px]">
      <div className="relative mx-auto max-h-[940px] max-w-[1860px] overflow-hidden pt-[170px] pb-[80px] sm:pt-[190px] sm:pb-[100px] md:rounded-[30px] md:pt-[210px] lg:pt-[220px] lg:pb-[200px] xl:rounded-[50px]">
        <video className="absolute top-0 left-0 size-full min-h-[100%] scale-[1.1] object-cover object-center" autoPlay muted loop>
          <source src="/video/getty-watch.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="main-container">
          <div className="space-y-3 text-center max-lg:max-w-[640px] md:space-y-5 md:text-left">
            <RevealAnimation delay={0.1}>
              <span className="text-tagline-2 bg-accent/10 text-primary-50 inline-block rounded-full px-5 py-1.5 font-medium backdrop-blur-[18px]">
                Unified operations platform
              </span>
            </RevealAnimation>
            <div className="space-y-2.5 md:space-y-4">
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[760px] leading-[1.2]">
                  <span className="hero-text-gradient hero-text-color-2 block">
                    Scheduling, payroll, and website booking for modern service teams.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-accent/70 max-w-[620px]">
                  Schedulaa brings team scheduling, payroll workflows, and public website booking into one system so
                  you can run operations faster and with fewer tools.
                </p>
              </RevealAnimation>
              <ul className="mt-8 flex flex-col flex-wrap items-start gap-x-9 gap-y-3 sm:flex-row md:mt-[54px] md:items-center">
                {['Smart scheduling workflows', 'Payroll-ready time tracking', 'Website builder with booking'].map((item, idx) => (
                  <RevealAnimation key={item} delay={0.4 + idx * 0.1}>
                    <li className="flex items-center gap-2">
                      <span className="bg-accent/20 inline-flex size-[18px] items-center justify-center rounded-full">
                        <CheckIcon className="fill-white dark:fill-accent" />
                      </span>
                      <span className="text-accent/70 text-tagline-2">{item}</span>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
            </div>
          </div>
          <ul className="mt-12 flex flex-col items-center justify-center gap-y-4 md:mt-14 md:flex-row md:items-start md:justify-start md:gap-x-4 lg:mb-[100px]">
            <RevealAnimation delay={0.7} direction="left" offset={50}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/signup"
                  className="btn btn-primary hover:btn-white dark:hover:btn-accent btn-lg md:btn-xl mx-auto block w-[90%] border-0 sm:mx-0 md:inline-block md:w-auto">
                  Get started
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.9} direction="left" offset={50}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/login"
                  className="btn btn-lg md:btn-xl dark:btn-transparent btn-dark bg-accent/20 hover:btn-primary mx-auto block w-[90%] sm:mx-0 md:inline-block md:w-auto dark:border">
                  Log in
                </LinkButton>
              </li>
            </RevealAnimation>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
