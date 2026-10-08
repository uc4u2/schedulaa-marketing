import cardOneImg from '@public/images/ns-img-90.png';
import cardTwoImg from '@public/images/ns-img-91.png';
import cardThreeImg from '@public/images/ns-img-92.png';
import cardFourImg from '@public/images/ns-img-93.png';
import cardFiveImg from '@public/images/ns-img-94.png';
import cardOneImgDark from '@public/images/ns-img-dark-63.png';
import cardTwoImgDark from '@public/images/ns-img-dark-64.png';
import cardThreeImgDark from '@public/images/ns-img-dark-65.png';
import cardFourImgDark from '@public/images/ns-img-dark-66.png';
import cardFiveImgDark from '@public/images/ns-img-dark-67.png';
import Image from 'next/image';
import sourceEn from '@/legacy-content/features/landing-features.json';
import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';
import { AppLocale, withLocalePath } from '@/utils/locale';

const cardImages = [
  { light: cardOneImg, dark: cardOneImgDark },
  { light: cardTwoImg, dark: cardTwoImgDark },
  { light: cardThreeImg, dark: cardThreeImgDark },
  { light: cardFourImg, dark: cardFourImgDark },
  { light: cardFiveImg, dark: cardFiveImgDark },
];

const Features = ({ source, locale = 'en' }: { source?: any; locale?: AppLocale }) => {
  const content = source || sourceEn;
  const cards = [
    { ...((content.featureShowcase?.features || [])[2] || {}), href: '/website-builder', linkLabel: 'Explore Website Builder' },
    { ...((content.featureShowcase?.features || [])[0] || {}), href: '/booking', linkLabel: 'Explore Online Booking' },
    { ...(content.highlightCards?.commerce || {}), href: '/commerce', linkLabel: 'Explore Products and Commerce' },
    { ...((content.featureShowcase?.features || [])[1] || {}), href: '/business-finance/invoices', linkLabel: 'Explore Invoices and Payments' },
    { ...(content.highlightCards?.payroll || {}), href: '/workforce', linkLabel: 'Explore Workforce Scheduling' },
  ].filter((card) => card.title) as Array<{ title: string; description?: string; points?: string[]; href: string; linkLabel: string }>;

  return (
    <section className="pt-[100px] pb-[100px] md:pt-[160px]" aria-label="Features">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0} instant paintImmediately>
              <span className="badge badge-green">{content.hero.featureCard.eyebrow}</span>
            </RevealAnimation>
            <RevealAnimation delay={0} instant paintImmediately>
              <h1 className="mx-auto max-w-[980px]">{content.hero.featureCard.title}</h1>
            </RevealAnimation>
            <RevealAnimation delay={0} instant paintImmediately>
              <p className="mx-auto max-w-[734px]">{content.hero.featureCard.subtitle}</p>
            </RevealAnimation>
          </div>

          <div className="flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:gap-x-8">
            {cards.slice(0, 3).map((card, index) => (
              <RevealAnimation
                key={card.title}
                delay={index === 0 ? 0 : 0.55 + index * 0.1}
                instant={index === 0}
                paintImmediately={index === 0}
              >
                <div className="space-y-3">
                  <div className="dark:bg-background-5 w-full max-w-[409px] rounded-[20px] bg-white p-2.5">
                    <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-2">
                      <Image
                        src={cardImages[index].light}
                        alt={card.title}
                        className="h-full w-full object-cover dark:hidden"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        fetchPriority={index === 0 ? 'high' : 'auto'}
                        sizes="(min-width: 640px) 31vw, calc(100vw - 60px)"
                      />
                      <Image
                        src={cardImages[index].dark}
                        alt={card.title}
                        className="hidden h-full w-full object-cover dark:block"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        fetchPriority={index === 0 ? 'high' : 'auto'}
                        sizes="(min-width: 640px) 31vw, calc(100vw - 60px)"
                      />
                    </figure>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-heading-5">{card.title}</h3>
                    <p>{card.description || card.points?.[0] || ''}</p>
                    <Link href={withLocalePath(card.href, locale)} className="mt-3 inline-flex text-sm font-semibold text-primary-500 underline">
                      {card.linkLabel}
                    </Link>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:gap-x-8">
            {cards.slice(3, 5).map((card, index) => (
              <RevealAnimation key={card.title} delay={0.85 + index * 0.1}>
                <div className="space-y-3">
                  <div className="dark:bg-background-5 w-full max-w-[409px] rounded-[20px] bg-white p-2.5">
                    <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-2">
                      <Image
                        src={cardImages[index + 3].light}
                        alt={card.title}
                        className="h-full w-full object-cover dark:hidden"
                        loading="lazy"
                        sizes="(min-width: 640px) 31vw, calc(100vw - 60px)"
                      />
                      <Image
                        src={cardImages[index + 3].dark}
                        alt={card.title}
                        className="hidden h-full w-full object-cover dark:block"
                        loading="lazy"
                        sizes="(min-width: 640px) 31vw, calc(100vw - 60px)"
                      />
                    </figure>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-heading-5">{card.title}</h3>
                    <p>{card.description || card.points?.[0] || ''}</p>
                    <Link href={withLocalePath(card.href, locale)} className="mt-3 inline-flex text-sm font-semibold text-primary-500 underline">
                      {card.linkLabel}
                    </Link>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
Features.displayName = 'Features';
export default Features;
