import Link from 'next/link';
import Image from 'next/image';
import CTA from '@/components/shared/cta/CTA';
import analyticsMain from '@public/images/marketing/analytics-main.png';
import analyticsA from '@public/images/marketing/analytics-side-a.png';
import analyticsB from '@public/images/marketing/analytics-side-b.png';

type CtaLink = { label: string; href: string };

type ContentCard = {
  overline?: string;
  title: string;
  body: string;
  points?: string[];
  link?: CtaLink;
};

type TemplateServicesLayoutProps = {
  hero: {
    badge?: string;
    title: string;
    subtitle?: string;
    bullets?: string[];
    primaryCta?: CtaLink;
    secondaryCta?: CtaLink;
  };
  featuresHeading?: string;
  featuresTitle?: string;
  featuresIntro?: string;
  features: ContentCard[];
  highlights?: ContentCard[];
  useCasesTitle?: string;
  useCasesIntro?: string;
  useCases?: string[];
  compareLinks?: CtaLink[];
  nextLinks?: CtaLink[];
  cta?: {
    overline?: string;
    title: string;
    body?: string;
    primary?: CtaLink;
  };
};

function BookingHero({ hero, featuresHeading, featuresTitle, featuresIntro }: {
  hero: TemplateServicesLayoutProps['hero'];
  featuresHeading?: string;
  featuresTitle?: string;
  featuresIntro?: string;
}) {
  return (
    <section className="pt-30 pb-20 md:pt-38 md:pb-24">
      <div className="main-container">
        <div className="grid gap-6 rounded-[28px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-8 shadow-box lg:grid-cols-12 md:p-10">
          <div className="space-y-5 lg:col-span-8">
            {hero.badge ? <span className="badge badge-cyan">{hero.badge}</span> : null}
            <h1 className="text-white">{hero.title}</h1>
            {hero.subtitle ? <p className="text-accent/72">{hero.subtitle}</p> : null}
            {hero.bullets?.length ? (
              <ul className="grid list-none gap-3 p-0 md:grid-cols-2">
                {hero.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 rounded-xl border border-stroke-7 bg-background-8 px-4 py-3 text-tagline-2 text-accent/80">
                    <span className="mt-[7px] size-[6px] shrink-0 rounded-full bg-primary-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {(hero.primaryCta || hero.secondaryCta) && (
              <div className="flex flex-wrap gap-3">
                {hero.primaryCta ? (
                  <Link href={hero.primaryCta.href} className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent">
                    {hero.primaryCta.label}
                  </Link>
                ) : null}
                {hero.secondaryCta ? (
                  <Link href={hero.secondaryCta.href} className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    {hero.secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            )}
            {featuresHeading ? <p className="text-tagline-2 text-accent/62">{featuresHeading}</p> : null}
            {featuresTitle ? <h3 className="text-white">{featuresTitle}</h3> : null}
            {featuresIntro ? <p className="text-accent/72">{featuresIntro}</p> : null}
          </div>
          <div className="space-y-3 lg:col-span-4">
            <div className="rounded-[18px] border border-stroke-7 bg-background-8 p-3">
              <Image src={analyticsMain} alt="Booking operations dashboard" className="h-[230px] w-full rounded-[12px] object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <figure className="overflow-hidden rounded-xl border border-stroke-7 bg-background-8 p-2">
                <Image src={analyticsA} alt="Booking panel" className="h-[92px] w-full rounded-lg object-cover" />
              </figure>
              <figure className="overflow-hidden rounded-xl border border-stroke-7 bg-background-8 p-2">
                <Image src={analyticsB} alt="Booking panel" className="h-[92px] w-full rounded-lg object-cover" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingCards({ features }: { features: ContentCard[] }) {
  return (
    <section className="pb-20 md:pb-24">
      <div className="main-container grid gap-5 md:grid-cols-2">
        {features.map((feature, index) => (
          <article key={`${feature.title}-${index}`} className="rounded-[22px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-6 shadow-box">
            {feature.overline ? <p className="premium-eyebrow">{feature.overline}</p> : null}
            <h3 className="mt-2 text-heading-5 text-white">{feature.title}</h3>
            <p className="mt-3 text-accent/72">{feature.body}</p>
            {feature.points?.length ? (
              <ul className="mt-4 space-y-2">
                {feature.points.map((point) => (
                  <li key={point} className="text-tagline-2 text-accent/72">• {point}</li>
                ))}
              </ul>
            ) : null}
            {feature.link ? (
              <div className="mt-5">
                <Link href={feature.link.href} className="text-tagline-2 font-medium text-primary-300 hover:text-primary-200">
                  {feature.link.label}
                </Link>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function BookingHighlights({ highlights = [], compareLinks }: { highlights?: ContentCard[]; compareLinks?: CtaLink[] }) {
  return (
    <section className="pb-20 md:pb-24">
      <div className="main-container grid gap-5 md:grid-cols-2">
        {highlights.map((item, index) => (
          <article key={`${item.title}-${index}`} className="rounded-[20px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-6 shadow-box">
            {item.overline ? <p className="premium-eyebrow">{item.overline}</p> : null}
            <h3 className="mt-2 text-heading-5 text-white">{item.title}</h3>
            <p className="mt-3 text-accent/72">{item.body}</p>
            {item.points?.length ? (
              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="text-tagline-2 text-accent/72">• {point}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
      {compareLinks?.length ? (
        <div className="main-container mt-6 flex flex-wrap gap-3">
          {compareLinks.map((link) => (
            <Link key={link.href} href={link.href} className="btn btn-primary btn-sm hover:btn-white dark:hover:btn-accent">
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function BookingNextLinks({ useCasesTitle, useCasesIntro, useCases, nextLinks }: {
  useCasesTitle?: string;
  useCasesIntro?: string;
  useCases?: string[];
  nextLinks?: CtaLink[];
}) {
  return (
    <section className="pb-20 md:pb-24">
      <div className="main-container rounded-[24px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-8 shadow-box md:p-10">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            {useCasesTitle ? <h3 className="text-white">{useCasesTitle}</h3> : null}
            {useCasesIntro ? <p className="mt-3 text-accent/72">{useCasesIntro}</p> : null}
            {nextLinks?.[0] ? (
              <Link href={nextLinks[0].href} className="btn btn-primary btn-md mt-6 hover:btn-white dark:hover:btn-accent">
                {nextLinks[0].label}
              </Link>
            ) : null}
          </div>
          <div>
            {useCases?.length ? (
              <ul className="space-y-3">
                {useCases.map((text) => (
                  <li key={text} className="text-tagline-2 text-accent/80">• {text}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TemplateServicesLayout({
  hero,
  featuresHeading,
  featuresTitle,
  featuresIntro,
  features,
  highlights = [],
  useCasesTitle,
  useCasesIntro,
  useCases = [],
  compareLinks,
  nextLinks,
  cta,
}: TemplateServicesLayoutProps) {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <BookingHero hero={hero} featuresHeading={featuresHeading} featuresTitle={featuresTitle} featuresIntro={featuresIntro} />
      <BookingCards features={features} />
      <BookingHighlights highlights={highlights} compareLinks={compareLinks} />
      <BookingNextLinks useCasesTitle={useCasesTitle} useCasesIntro={useCasesIntro} useCases={useCases} nextLinks={nextLinks} />
      <CTA
        className="dark:bg-background-6 bg-white"
        badgeClass="hidden"
        ctaHeading={cta?.title || 'Start your booking workflow'}
        spanText={cta?.overline}
        description={cta?.body || 'Launch online booking, publish availability, and connect payments in one platform.'}
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText={cta?.primary?.label || 'Get started'}
      />
    </main>
  );
}
