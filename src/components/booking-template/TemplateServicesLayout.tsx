import Link from 'next/link';
import CTA from '@/components/shared/cta/CTA';

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

function TemplateBookingServices({
  hero,
  featuresHeading,
  featuresTitle,
  featuresIntro,
  features,
}: {
  hero: TemplateServicesLayoutProps['hero'];
  featuresHeading?: string;
  featuresTitle?: string;
  featuresIntro?: string;
  features: ContentCard[];
}) {
  return (
    <section className="pt-32 pb-24 sm:pt-36 md:pt-42 md:pb-32 lg:pb-44 xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          {hero.badge ? <span className="badge badge-green">{hero.badge}</span> : null}
          <h2>{hero.title}</h2>
          {hero.subtitle ? <p className="mx-auto max-w-[760px]">{hero.subtitle}</p> : null}
          {hero.bullets?.length ? (
            <ul className="mx-auto max-w-[760px] space-y-2 text-left">
              {hero.bullets.map((bullet) => (
                <li key={bullet} className="list-inside list-disc">
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}
          {(hero.primaryCta || hero.secondaryCta) && (
            <div className="flex flex-wrap justify-center gap-3">
              {hero.primaryCta ? (
                <Link href={hero.primaryCta.href} className="btn btn-primary btn-md hover:btn-secondary dark:hover:btn-accent">
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
          {featuresHeading ? <p className="text-tagline-2 text-secondary/70 dark:text-accent/70">{featuresHeading}</p> : null}
          {featuresTitle ? <h3>{featuresTitle}</h3> : null}
          {featuresIntro ? <p className="mx-auto max-w-[760px]">{featuresIntro}</p> : null}
        </div>

        <div className="flex flex-wrap gap-4 space-y-[42px]">
          {features.map((feature, index) => (
            <div key={`${feature.title}-${index}`} className="border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6 rounded-[20px] border p-7 lg:max-w-full lg:p-[42px] w-full">
              <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-20 xl:gap-[100px]">
                <div className="col-span-12 lg:col-span-8">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      {feature.overline ? <p className="text-tagline-2 text-primary-500">{feature.overline}</p> : null}
                      <h3>{feature.title}</h3>
                      <p className="w-full max-w-[760px]">{feature.body}</p>
                    </div>
                    {feature.points?.length ? (
                      <ul className="space-y-2">
                        {feature.points.map((point) => (
                          <li key={point} className="list-inside list-disc text-secondary/80 dark:text-accent/80">
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {feature.link ? (
                      <div>
                        <Link href={feature.link.href} className="btn hover:btn-primary btn-white dark:btn-transparent btn-md">
                          {feature.link.label}
                        </Link>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <div className="dark:bg-background-8 rounded-2xl bg-white p-6">
                    <p className="text-tagline-1 text-secondary/70 dark:text-accent/70">Booking signal</p>
                    <h5 className="mt-2 text-secondary dark:text-accent">{index + 1}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TemplateBookingIntegration({
  highlights,
  compareLinks,
}: {
  highlights: ContentCard[];
  compareLinks?: CtaLink[];
}) {
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[160px]" aria-label="Integration Partners">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="mx-auto max-w-[1028px] space-y-5 text-center">
            <span className="badge badge-green">Highlights</span>
            <div className="space-y-3">
              <h2>Booking flow highlights</h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5">
            {highlights.map((item, index) => (
              <article key={`${item.title}-${index}`} className="border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6 rounded-[20px] border p-7 col-span-12 md:col-span-6">
                {item.overline ? <p className="text-tagline-2 text-primary-500 mb-2">{item.overline}</p> : null}
                <h3>{item.title}</h3>
                <p className="mt-3">{item.body}</p>
                {item.points?.length ? (
                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="list-inside list-disc text-secondary/80 dark:text-accent/80">
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>

          {compareLinks?.length ? (
            <div className="flex flex-wrap justify-center gap-3">
              {compareLinks.map((link) => (
                <Link key={link.href} href={link.href} className="btn btn-white btn-sm hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  {link.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function TemplateBookingUseCases({
  useCasesTitle,
  useCasesIntro,
  useCases,
  nextLinks,
}: {
  useCasesTitle?: string;
  useCasesIntro?: string;
  useCases?: string[];
  nextLinks?: CtaLink[];
}) {
  return (
    <section>
      <div className="main-container">
        <div className="relative z-10">
          <div className="grid grid-cols-2 gap-5 px-6 py-14 max-lg:grid-cols-1 max-sm:gap-10 md:px-11 bg-background-1 dark:bg-background-6 rounded-[20px]">
            <div className="max-w-[500px]">
              {useCasesTitle ? <h5 className="text-secondary dark:text-accent mb-4">{useCasesTitle}</h5> : null}
              {useCasesIntro ? <p className="mb-8">{useCasesIntro}</p> : null}
              {nextLinks?.[0] ? (
                <Link href={nextLinks[0].href} className="btn btn-md hover:btn-primary btn-accent">
                  {nextLinks[0].label}
                </Link>
              ) : null}
            </div>
            <div>
              {useCases?.length ? (
                <ul className="space-y-5">
                  {useCases.map((text) => (
                    <li key={text} className="flex items-center gap-2">
                      <span className="bg-accent/17 size-5 shrink-0 rounded-full" />
                      <span className="text-secondary dark:text-accent">{text}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TemplateBookingFeature({ nextLinks }: { nextLinks?: CtaLink[] }) {
  if (!nextLinks?.length) return null;
  return (
    <section className="relative overflow-hidden pt-14 pb-24 md:pt-16 md:pb-36 lg:pt-[88px] lg:pb-40 xl:pt-[100px] xl:pb-[200px]">
      <div className="main-container">
        <div className="flex flex-wrap items-center gap-y-8 lg:flex-nowrap lg:gap-4 xl:gap-8">
          <div className="w-full lg:w-1/2">
            <div className="text-center lg:text-left">
              <span className="badge badge-yellow-v2 mb-5">Next links</span>
              <h2 className="mx-auto mb-8 max-w-[520px] lg:mx-0">Explore booking routes</h2>
              <ul className="mb-14 space-y-4">
                {nextLinks.map((link) => (
                  <li key={link.href} className="flex items-center justify-center gap-2 lg:justify-start">
                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="shrink-0">
                      <rect width={18} height={18} rx={9} className="fill-secondary/10 dark:fill-accent/10" />
                    </svg>
                    <Link href={link.href} className="text-secondary/80 dark:text-accent/80 hover:text-primary-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-auto w-full max-w-max lg:mx-0 lg:w-1/2">
            <div className="bg-background-3 dark:bg-background-5 relative overflow-hidden rounded-[20px] p-5 lg:p-8">
              <div className="dark:bg-background-8 w-full rounded-2xl bg-white p-6">
                <h5 className="mb-4">Booking coverage</h5>
                <p className="text-secondary/70 dark:text-accent/70">Salon, spa, doctor, and tutor workflows are available with the same booking core.</p>
              </div>
            </div>
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
      <TemplateBookingServices
        hero={hero}
        featuresHeading={featuresHeading}
        featuresTitle={featuresTitle}
        featuresIntro={featuresIntro}
        features={features}
      />
      <TemplateBookingIntegration highlights={highlights} compareLinks={compareLinks} />
      <TemplateBookingUseCases
        useCasesTitle={useCasesTitle}
        useCasesIntro={useCasesIntro}
        useCases={useCases}
        nextLinks={nextLinks}
      />
      <TemplateBookingFeature nextLinks={nextLinks} />
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
