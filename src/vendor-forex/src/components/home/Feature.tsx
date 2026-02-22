import { cn } from '@/utils/cn';
import gradient28Img from '@public/images/ns-img-516.png';
import Image from 'next/image';
import sourceEn from '@/legacy-content/features/landing-features.json';
import { AppLocale } from '@/utils/locale';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

type ShowcaseItem = { title: string; description: string };

const copyByLocale: Record<string, { view: string; compare: string }> = {
  en: { view: 'View feature', compare: 'Compare Schedulaa' },
  fa: { view: '\u0645\u0634\u0627\u0647\u062f\u0647 \u0642\u0627\u0628\u0644\u06cc\u062a', compare: '\u0645\u0642\u0627\u06cc\u0633\u0647 Schedulaa' },
  ru: { view: '\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e', compare: '\u0421\u0440\u0430\u0432\u043d\u0438\u0442\u044c Schedulaa' },
  zh: { view: '\u67e5\u770b\u529f\u80fd', compare: '\u5bf9\u6bd4 Schedulaa' },
};

const Feature = ({ source, locale = 'en' }: { source?: any; locale?: AppLocale }) => {
  const content = source || sourceEn;
  const copy = copyByLocale[locale] || copyByLocale.en;
  const showcaseData =
    (content.featureShowcase?.features || []).map((feature: { title: string; description: string[] | string }) => ({
      title: feature.title,
      description: Array.isArray(feature.description)
        ? feature.description[0]
        : String(feature.description || ''),
    })) as ShowcaseItem[];

  const fallbackData = (Object.values(content.highlightCards || {}) as Array<{
    title: string;
    description: string;
  }>).map((feature): ShowcaseItem => ({
    title: feature.title,
    description: feature.description,
  }));

  const data: ShowcaseItem[] = (showcaseData.length ? showcaseData : fallbackData).slice(0, 4);

  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-[url('/images/ns-img-527.png')] bg-cover bg-bottom bg-no-repeat py-20 md:py-[100px]">
        <div className="main-container">
          <div className="space-y-10 md:space-y-14">
            <div className="mb-2 space-y-3 text-center md:mb-0">
              <RevealAnimation delay={0.1}>
                <h2 className="text-heading dark:text-accent">{content.featureShowcase.title}</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="text-heading/70 dark:text-accent/60 mx-auto max-w-[472px]">
                  {content.featureShowcase.subtitle}
                </p>
              </RevealAnimation>
            </div>
            <div className="grid grid-cols-12 gap-5 md:gap-6">
              {data.map((feature, index) => (
                <RevealAnimation key={`${feature.title}-${index}`} delay={0.25 + index * 0.06}>
                  <div
                    className={cn(
                      'col-span-12 md:col-span-6 lg:col-span-4',
                      index === 0 && 'lg:col-span-8',
                      (index === 2 || index === 3) && 'lg:col-span-6',
                    )}>
                    <div className="bg-secondary hover:bg-background-2 dark:bg-background-8 hover:dark:bg-background-5 group relative z-0 flex h-full min-h-[260px] flex-col justify-between gap-y-8 overflow-hidden rounded-[20px] p-8 transition-all duration-700 ease-in-out hover:-translate-y-1">
                      <figure className="pointer-events-none absolute inset-0 -top-[210%] -right-[160%] -z-10 rotate-[-78deg] transform opacity-100 transition-all duration-1000 ease-in-out select-none group-hover:scale-110 group-hover:opacity-0">
                        <Image src={gradient28Img} alt="feature-glow" className="h-full w-full object-cover" />
                      </figure>
                      <div className="space-y-4 lg:space-y-6">
                        <span
                          className={cn(
                            'text-ns-yellow text-4xl transition-colors duration-700 group-hover:text-secondary dark:group-hover:text-accent lg:text-[52px]',
                            'ns-shape-8',
                          )}></span>
                        <div className="space-y-2">
                          <h3 className="text-white transition-colors duration-700 group-hover:text-secondary dark:group-hover:text-accent lg:text-heading-5 text-heading-6">
                            {feature.title}
                          </h3>
                          <p className="text-white/70 transition-colors duration-700 group-hover:text-secondary/70 dark:group-hover:text-accent/70">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      <div>
                        <LinkButton
                          href="/features"
                          className="btn btn-white hover:btn-secondary btn-md dark:btn-transparent dark:hover:btn-accent mx-auto w-[90%] md:mx-0 md:w-auto">
                          {copy.view}
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            <RevealAnimation delay={0.7}>
              <div className="text-center">
                <LinkButton
                  href="/compare"
                  className="btn btn-md btn-green hover:btn-secondary mx-auto w-[90%] border-0 md:mx-0 md:w-auto">
                  {copy.compare}
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Feature;
