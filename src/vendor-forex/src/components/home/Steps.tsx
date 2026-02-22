import step1Img from '@public/images/marketing/showcase/employee-management.png';
import step2Img from '@public/images/marketing/showcase/clients-pick2.png';
import step3Img from '@public/images/marketing/showcase/checkout.png';
import step4Img from '@public/images/marketing/showcase/manager-dashboards1.png';
import gradient9Img from '@public/images/ns-img-501.png';
import gradient32Img from '@public/images/ns-img-520.png';
import gradient33Img from '@public/images/ns-img-521.png';
import gradient34Img from '@public/images/ns-img-522.png';
import step2DarkImg from '@public/images/ns-img-dark-200.png';
import step3DarkImg from '@public/images/ns-img-dark-201.png';
import step4DarkImg from '@public/images/ns-img-dark-202.png';
import Image, { StaticImageData } from 'next/image';
import { getBookingSource } from '@/legacy-content/booking/getBookingSource';
import { AppLocale } from '@/utils/locale';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

interface StepCard {
  id: number;
  title: string;
  description: string;
  gradientSrc: StaticImageData;
  stepImg: StaticImageData;
  stepDarkImg?: StaticImageData;
  maxDescriptionWidth: string;
}

const Steps = ({ locale = 'en' }: { locale?: AppLocale }) => {
  const bookingSource = getBookingSource(locale);
  const localizedCtaByLocale: Record<string, string> = {
    en: 'Explore all features',
    fa: '\u0645\u0634\u0627\u0647\u062f\u0647 \u0647\u0645\u0647 \u0642\u0627\u0628\u0644\u06cc\u062a\u200c\u0647\u0627',
    ru: '\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438',
    zh: '\u67e5\u770b\u5168\u90e8\u529f\u80fd',
  };
  const fallbackStepByLocale: Record<string, { title: string; description: string }> = {
    en: { title: 'Manager and employee dashboards update live', description: 'Bookings, shifts, and payouts appear in real time across manager and employee views.' },
    fa: { title: '\u062f\u0627\u0634\u0628\u0648\u0631\u062f \u0645\u062f\u06cc\u0631 \u0648 \u06a9\u0627\u0631\u0645\u0646\u062f \u062f\u0631 \u0644\u062d\u0638\u0647 \u0628\u0647\u200c\u0631\u0648\u0632 \u0645\u06cc\u200c\u0634\u0648\u062f', description: '\u0631\u0632\u0631\u0648\u0647\u0627\u060c \u0634\u06cc\u0641\u062a\u200c\u0647\u0627 \u0648 \u0648\u0636\u0639\u06cc\u062a \u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0647\u200c\u0635\u0648\u0631\u062a \u0632\u0646\u062f\u0647 \u062f\u0631 \u062f\u0627\u0634\u0628\u0648\u0631\u062f\u0647\u0627 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.' },
    ru: { title: '\u041f\u0430\u043d\u0435\u043b\u0438 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u0438 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438', description: '\u0411\u0440\u043e\u043d\u0438, \u0441\u043c\u0435\u043d\u044b \u0438 \u0432\u044b\u043f\u043b\u0430\u0442\u044b \u0441\u0440\u0430\u0437\u0443 \u0432\u0438\u0434\u043d\u044b \u0432 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b.' },
    zh: { title: '\u7ecf\u7406\u4e0e\u5458\u5de5\u770b\u677f\u5b9e\u65f6\u66f4\u65b0', description: '\u9884\u7ea6\u3001\u73ed\u6b21\u4e0e\u4ed8\u6b3e\u72b6\u6001\u4f1a\u5728\u7ecf\u7406\u548c\u5458\u5de5\u89c6\u56fe\u4e2d\u540c\u6b65\u663e\u793a\u3002' },
  };
  const fallbackStep = fallbackStepByLocale[locale] || fallbackStepByLocale.en;
  const howItWorks = {
    title: bookingSource.hub.howItWorks.title,
    intro: bookingSource.hub.howItWorks.intro,
    cta: localizedCtaByLocale[locale] || localizedCtaByLocale.en,
    steps: [
      bookingSource.hub.howItWorks.steps[0],
      bookingSource.hub.howItWorks.steps[1],
      bookingSource.hub.howItWorks.steps[2],
      bookingSource.hub.howItWorks.steps[3] || fallbackStep,
    ],
  };

  const stepCards: StepCard[] = [
    {
      id: 1,
      title: howItWorks.steps[0]?.title || 'Publish services and providers',
      description:
        howItWorks.steps[0]?.description ||
        'Define services, durations, pricing, and assign providers.',
      gradientSrc: gradient32Img,
      stepImg: step1Img,
      maxDescriptionWidth: 'max-w-[281px]',
    },
    {
      id: 2,
      title: howItWorks.steps[1]?.title || 'Clients pick time and provider',
      description:
        howItWorks.steps[1]?.description ||
        'Clients choose day, time, and provider from live availability.',
      gradientSrc: gradient33Img,
      stepImg: step2Img,
      stepDarkImg: step2DarkImg,
      maxDescriptionWidth: 'max-w-[250px]',
    },
    {
      id: 3,
      title: howItWorks.steps[2]?.title || 'Checkout and notifications',
      description:
        howItWorks.steps[2]?.description ||
        'Payments, receipts, and notifications sync instantly.',
      gradientSrc: gradient34Img,
      stepImg: step3Img,
      stepDarkImg: step3DarkImg,
      maxDescriptionWidth: 'max-w-[250px]',
    },
    {
      id: 4,
      title: howItWorks.steps[3]?.title || 'Manager and employee dashboards update live',
      description:
        howItWorks.steps[3]?.description ||
        'Bookings, shifts, and payouts appear in real time across manager and employee views.',
      gradientSrc: gradient9Img,
      stepImg: step4Img,
      stepDarkImg: step4DarkImg,
      maxDescriptionWidth: 'max-w-[280px]',
    },
  ];

  return (
    <RevealAnimation delay={0.1}>
      <section
        className="relative bg-[linear-gradient(180deg,#f4f6f9_0%,#e9edf3_100%)] py-16 md:py-20 lg:py-[100px] dark:bg-[#0f172a]"
        aria-label="Hero section">
        <div className="main-container bg-transparent">
          <div className="grid grid-cols-12 items-start justify-items-center gap-y-14 bg-transparent xl:gap-[60px]">
            <div className="col-span-12 lg:sticky lg:top-28 lg:col-span-6">
              <div className="space-y-10 text-center md:space-y-14 lg:text-left">
                <div className="space-y-3">
                  <RevealAnimation delay={0.1}>
                    <h2 className="mx-auto w-full xl:mx-0 xl:max-w-[479px]">{howItWorks.title}</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p>{howItWorks.intro}</p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.3}>
                  <div>
                    <LinkButton
                      href="/features"
                      className="btn dark:btn-transparent btn-secondary btn-md hover:btn-green mx-auto w-[90%] md:mx-0 md:w-auto">
                      {howItWorks.cta}
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <StackCardWrapper
                topOffset="11vh"
                gap="24px"
                initDelay={100}
                className="order-2 w-full flex-none bg-transparent sm:order-1 sm:flex-1">
                {stepCards.map((step, index) => (
                  <RevealAnimation key={step.id} delay={0.4 + index * 0.1}>
                    <StackCardItem>
                      <div className="relative z-20 mx-auto flex w-full max-w-full items-center justify-center overflow-hidden rounded-[20px] p-2 sm:mx-0 sm:max-w-[483px]">
                        <figure className="pointer-events-none absolute -top-[99%] -left-[88%] -z-10 size-[1000px] rotate-[307deg] opacity-50 select-none">
                          <Image src={step.gradientSrc} alt="step" />
                        </figure>
                        <div className="group relative z-10 w-full max-w-full space-y-6 rounded-[14px] bg-white p-8 sm:max-w-[467px] dark:bg-black">
                          <div className="space-y-1">
                            <p className="text-heading-5 text-secondary dark:text-accent">{step.title}</p>
                            <p className={`${step.maxDescriptionWidth} w-full`}>{step.description}</p>
                          </div>
                          <figure className="w-full max-w-[385px] overflow-hidden rounded-2xl">
                            {step.stepDarkImg ? (
                              <>
                                <Image
                                  src={step.stepImg}
                                  alt="step"
                                  className="block transition-transform duration-500 ease-out group-hover:scale-110 md:max-h-[300px] md:min-h-[300px] dark:hidden"
                                />
                                <Image
                                  src={step.stepDarkImg}
                                  alt="step"
                                  className="hidden transition-transform duration-500 ease-out group-hover:scale-110 md:max-h-[300px] md:min-h-[300px] dark:block"
                                />
                              </>
                            ) : (
                              <Image
                                src={step.stepImg}
                                alt="step"
                                className="transition-transform duration-500 ease-out group-hover:scale-110 md:max-h-[300px] md:min-h-[300px]"
                              />
                            )}
                          </figure>
                        </div>
                      </div>
                    </StackCardItem>
                  </RevealAnimation>
                ))}
              </StackCardWrapper>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Steps;
