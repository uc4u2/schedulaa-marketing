import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import sourceEn from '@/legacy-content/features/landing-features.json';
import { AppLocale } from '@/utils/locale';

const badgeByLocale: Record<string, string> = {
  en: "Let's start",
  fa: '\u0628\u06cc\u0627\u06cc\u06cc\u062f \u0634\u0631\u0648\u0639 \u06a9\u0646\u06cc\u0645',
  ru: '\u041d\u0430\u0447\u043d\u0451\u043c',
  zh: '\u5f00\u59cb\u4f53\u9a8c',
};

const CTA = ({ source, locale = 'en' }: { source?: any; locale?: AppLocale }) => {
  const content = source || sourceEn;
  const badge = badgeByLocale[locale] || badgeByLocale.en;
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-secondary dark:bg-background-6 py-20 md:py-16 lg:py-[76px]">
        <div className="main-container">
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur text-ns-yellow mb-5">{badge}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3 text-white">{content.cta.title}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-6 text-white/60">{content.cta.description}</p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="text-center">
                <LinkButton
                  href="/pricing"
                  className="btn btn-primary btn-md hover:btn-green mx-auto w-[90%] md:mx-0 md:w-auto">
                  {content.cta.primaryCta.label}
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default CTA;
