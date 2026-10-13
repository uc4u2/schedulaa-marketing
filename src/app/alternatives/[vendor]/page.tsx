import Image from 'next/image';
import Link from 'next/link';
import TrackedLink from '@/components/shared/TrackedLink';
import { getCompareEntry, getCompareListForPageType } from '@/legacy-content/compare/config';
import { buildAlternativeFaqJsonLd, getAlternativePageContent, type AlternativeComparisonRow } from '@/lib/seo/alternativePageContent';
import { buildLocalizedPageMetadata, getLocalizedCanonicalUrl } from '@/lib/seo/pageMetadata';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { getServerLocale } from '@/utils/serverLocale';
import { withLocalePath } from '@/utils/locale';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

const BOOK_DEMO_FALLBACK =
  'https://app.schedulaa.com/sale/meet/uzmTuuGPNNepce0r2vcx8WB4w3sJ2LA32Aqh7XIw9F8';

export const dynamicParams = false;

export function generateStaticParams() {
  return getCompareListForPageType('alternatives').map((entry) => ({ vendor: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ vendor: string }> }): Promise<Metadata> {
  const { vendor } = await params;
  const entry = getCompareEntry(vendor, 'alternatives');
  if (!entry) {
    return notFound();
  }
  const locale = await getServerLocale();
  const competitor = entry.competitor;
  const content = getAlternativePageContent(vendor);
  const title = content?.title || `Best ${competitor} alternatives for service teams | Schedulaa`;
  const description =
    content?.description ||
    entry.metaDescription ||
    `Looking for ${competitor} alternatives? Compare Schedulaa with ${competitor} for service operations and payroll workflows.`;
  return buildLocalizedPageMetadata({
    locale,
    path: `/alternatives/${vendor}`,
    title,
    description,
  });
}

export default async function AlternativesVendorPage({ params }: { params: Promise<{ vendor: string }> }) {
  const { vendor } = await params;
  const entry = getCompareEntry(vendor, 'alternatives');
  if (!entry) {
    return notFound();
  }
  const locale = await getServerLocale();
  const content = getAlternativePageContent(vendor);
  const rows: AlternativeComparisonRow[] = content?.comparisonRows || entry.executiveOverview?.rows || [];
  const summaryRows: AlternativeComparisonRow[] = content ? [] : entry.summaryTable?.rows || [];
  const fitMatrix: Array<{ scenario: string; recommendation: string }> = content?.fitMatrix || entry.fitMatrix || [];
  const contextTitle = content?.contextHeading || entry.contextBlock?.title;
  const contextParagraphs = content?.contextParagraphs || entry.contextBlock?.paragraphs || [];
  const differentiators: Array<{ title: string; body: string }> = content?.differentiators || entry.differentiators || [];
  const canonical = getLocalizedCanonicalUrl(locale, `/alternatives/${vendor}`);
  const isAcquisitionPage = Boolean(content?.screenshots?.length);
  const pagePath = `/alternatives/${vendor}`;
  const startFreeHref = buildAppUrl('/register', {
    returnTo: marketingReturnTo(locale, pagePath),
  });
  const bookDemoHref = process.env.NEXT_PUBLIC_BOOK_DEMO_URL || BOOK_DEMO_FALLBACK;
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Schedulaa',
        item: getLocalizedCanonicalUrl(locale, '/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Alternatives',
        item: getLocalizedCanonicalUrl(locale, '/alternatives'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${entry.competitor} alternatives`,
        item: canonical,
      },
    ],
  };

  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <Script id={`alternatives-${vendor}-breadcrumb-jsonld`} type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>
      {content ? (
        <Script id={`alternatives-${vendor}-faq-jsonld`} type="application/ld+json">
          {JSON.stringify(buildAlternativeFaqJsonLd(content))}
        </Script>
      ) : null}
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <div className={content?.heroImage ? 'grid items-center gap-9 xl:grid-cols-[1.05fr_0.95fr]' : undefined}>
            <div>
              <p className="badge badge-yellow-v2">Alternatives guide</p>
              <h1 className="mt-5">{content?.h1 || `${entry.competitor} alternatives for modern service teams`}</h1>
              <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">
                {content?.hook || content?.lead ||
                  `Looking for ${entry.competitor} alternatives? This guide compares Schedulaa and ${entry.competitor} across booking, scheduling, payroll, and compliance for service teams.`}
              </p>
              {content?.hook ? (
                <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">{content.lead}</p>
              ) : null}
              {(content?.intro || entry.intro || []).map((paragraph: string, idx: number) => (
                <p key={`${idx}-${paragraph.slice(0, 24)}`} className="mt-4 text-secondary/70 dark:text-accent/70">
                  {paragraph}
                </p>
              ))}
              {isAcquisitionPage ? (
                <div className="mt-7 flex flex-wrap gap-3">
                  <TrackedLink
                    href={startFreeHref}
                    className="btn btn-primary btn-md min-w-[220px] justify-center"
                    analyticsCta={{ name: `alternatives_${vendor}_start_trial`, pagePath: `/en${pagePath}`, placement: 'hero' }}
                    eventName="Lead"
                    eventParams={{ content_name: `${entry.competitor} alternatives hero trial`, page_path: `/en${pagePath}` }}
                  >
                    Start your 14-day free trial
                  </TrackedLink>
                  <TrackedLink
                    href={bookDemoHref}
                    className="btn btn-secondary btn-md min-w-[220px] justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    analyticsCta={{ name: `alternatives_${vendor}_book_demo`, pagePath: `/en${pagePath}`, placement: 'hero' }}
                  >
                    Book a personalized demo
                  </TrackedLink>
                </div>
              ) : null}
            </div>
            {content?.heroImage ? (
              <figure className="overflow-hidden rounded-[22px] border border-stroke-2 bg-background-1 shadow-2 dark:border-stroke-7 dark:bg-background-6/40">
                <Image
                  src={content.heroImage.src}
                  alt={content.heroImage.alt}
                  width={content.heroImage.width}
                  height={content.heroImage.height}
                  sizes="(max-width: 1279px) 100vw, 42vw"
                  priority
                  fetchPriority="high"
                  className="aspect-[8/5] w-full object-cover"
                />
                <figcaption className="border-t border-stroke-2 px-4 py-3 text-xs leading-5 text-secondary/60 dark:border-stroke-7 dark:text-accent/60">
                  Illustrative salon operations scene. Real Schedulaa interface views appear below.
                </figcaption>
              </figure>
            ) : null}
          </div>
        </div>

        {content?.quickDecision?.length ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {content.quickDecision.map((item) => (
              <article key={item.title} className="rounded-[20px] border border-stroke-2 bg-white p-6 shadow-2 dark:border-stroke-7 dark:bg-background-8 md:p-8">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 leading-7 text-secondary/70 dark:text-accent/70">{item.body}</p>
              </article>
            ))}
          </div>
        ) : null}

        {contextParagraphs.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">{contextTitle || `Why teams replace ${entry.competitor}`}</h2>
            <div className="mt-4 space-y-3">
              {contextParagraphs.map((paragraph: string, idx: number) => (
                <p key={`${idx}-${paragraph.slice(0, 24)}`} className="text-secondary/70 dark:text-accent/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <h2 className="text-2xl font-semibold">{content?.differentiatorsHeading || 'Why teams choose Schedulaa'}</h2>
          <div className="mt-4 space-y-4">
            {differentiators.map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-secondary/70 dark:text-accent/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {content?.pricingRows?.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">Published pricing, with the important qualifications</h2>
            <div className="mt-5 space-y-4">
              {content.pricingRows.map((row) => (
                <div key={row.label} className="rounded-2xl border border-stroke-2 p-4 dark:border-stroke-7 md:p-5">
                  <h3 className="font-semibold">{row.label}</h3>
                  <div className="mt-3 grid gap-3 text-sm leading-6 md:grid-cols-2">
                    <p className="text-secondary/75 dark:text-accent/75"><strong>Schedulaa:</strong> {row.schedulaa}</p>
                    <p className="text-secondary/75 dark:text-accent/75"><strong>{entry.competitor}:</strong> {row.competitor}</p>
                  </div>
                </div>
              ))}
            </div>
            {content.pricingNote ? (
              <p className="mt-5 text-sm leading-6 text-secondary/65 dark:text-accent/65">{content.pricingNote}</p>
            ) : null}
          </div>
        ) : null}

        {content?.screenshots?.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">See the Schedulaa booking workflow</h2>
            <p className="mt-3 max-w-[850px] text-secondary/70 dark:text-accent/70">
              These are real Schedulaa interface views with no customer data. They show the manager surfaces used to configure services and manage appointments.
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {content.screenshots.map((screenshot) => (
                <figure key={screenshot.src} className="overflow-hidden rounded-2xl border border-stroke-2 bg-background-1 dark:border-stroke-7 dark:bg-background-6/40">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={screenshot.width}
                    height={screenshot.height}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    className="h-auto w-full"
                  />
                  <figcaption className="p-5">
                    <h3 className="font-semibold">{screenshot.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-secondary/70 dark:text-accent/70">{screenshot.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ) : null}

        {content?.setupChecklist?.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">A practical switching checklist</h2>
            <p className="mt-3 text-secondary/70 dark:text-accent/70">
              Define and test the cutover before changing the booking path your clients already use.
            </p>
            <ol className="mt-5 grid gap-3 md:grid-cols-2">
              {content.setupChecklist.map((item, index) => (
                <li key={item} className="flex gap-3 rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-semibold text-white">{index + 1}</span>
                  <span className="text-sm leading-6 text-secondary/75 dark:text-accent/75">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <h2 className="text-2xl font-semibold">{content?.comparisonHeading || 'Quick comparison highlights'}</h2>
          <div className="mt-4 space-y-3">
            {rows.slice(0, 10).map((row) => (
              <div key={row.label} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                <h3 className="font-semibold">{row.label}</h3>
                <p className="mt-1 text-sm text-secondary/70 dark:text-accent/70">
                  <strong>Schedulaa:</strong> {row.schedulaa}
                </p>
                <p className="mt-1 text-sm text-secondary/70 dark:text-accent/70">
                  <strong>{entry.competitor}:</strong> {row.competitor}
                </p>
              </div>
            ))}
          </div>
        </div>

        {summaryRows.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">Feature group summary</h2>
            <div className="mt-4 space-y-4">
              {summaryRows.map((row) => (
                <div key={row.label} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                  <h3 className="font-semibold">{row.label}</h3>
                  <p className="mt-1 text-sm text-secondary/70 dark:text-accent/70">
                    <strong>Schedulaa:</strong> {row.schedulaa}
                  </p>
                  <p className="mt-1 text-sm text-secondary/70 dark:text-accent/70">
                    <strong>{entry.competitor}:</strong> {row.competitor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {fitMatrix.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">{content?.fitHeading || 'When to choose each platform'}</h2>
            <div className="mt-4 space-y-3">
              {fitMatrix.map((item, idx: number) => (
                <div key={`${item.scenario}-${idx}`} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                  <p className="text-sm text-secondary/70 dark:text-accent/70">{item.scenario}</p>
                  <p className="mt-2 text-sm font-semibold">
                    Recommendation: <span className="text-primary-500">{item.recommendation}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {content?.faq.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">{content.faqHeading}</h2>
            <div className="mt-4 space-y-4">
              {content.faq.map((item) => (
                <div key={item.question} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="mt-2 text-secondary/70 dark:text-accent/70">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {content?.conclusion || entry.conclusion ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">{content?.conclusionHeading || 'Conclusion'}</h2>
            <p className="mt-3 text-secondary/70 dark:text-accent/70">{content?.conclusion || entry.conclusion}</p>
          </div>
        ) : null}

        {content?.sources?.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">GlossGenius sources reviewed</h2>
            <p className="mt-3 text-sm leading-6 text-secondary/70 dark:text-accent/70">
              Material competitor statements use current first-party documentation. Products, plans, and prices can change, so verify purchase-critical requirements directly.
            </p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {content.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-4 dark:text-primary-400">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {content && isAcquisitionPage ? (
          <div className="mt-8 rounded-[20px] bg-linear-to-r from-primary-500 to-cyan-500 p-7 text-white shadow-2 md:p-10">
            <h2 className="max-w-[760px] text-3xl font-semibold text-white">Test Schedulaa with your real salon workflow</h2>
            <p className="mt-3 max-w-[760px] text-white/80">
              Use the 14-day trial to test your services, availability, booking, customer, staff, invoice, and product requirements—or book a guided walkthrough.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <TrackedLink
                href={startFreeHref}
                className="btn btn-white btn-md min-w-[220px] justify-center"
                analyticsCta={{ name: `alternatives_${vendor}_start_trial`, pagePath: `/en${pagePath}`, placement: 'final' }}
                eventName="Lead"
                eventParams={{ content_name: `${entry.competitor} alternatives final trial`, page_path: `/en${pagePath}` }}
              >
                Start your 14-day free trial
              </TrackedLink>
              <TrackedLink
                href={bookDemoHref}
                className="btn btn-secondary btn-md min-w-[220px] justify-center"
                target="_blank"
                rel="noopener noreferrer"
                analyticsCta={{ name: `alternatives_${vendor}_book_demo`, pagePath: `/en${pagePath}`, placement: 'final' }}
              >
                Book a personalized demo
              </TrackedLink>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              {content.relatedLinks.map((link) => (
                <Link key={link.href} href={withLocalePath(link.href, locale)} className="font-semibold text-white underline underline-offset-4">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ) : content ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">Explore the relevant Schedulaa workflows</h2>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link href={withLocalePath(content.primaryCta.href, locale)} className="btn btn-primary btn-md">
                {content.primaryCta.label}
              </Link>
              {content.relatedLinks.map((link) => (
                <Link key={link.href} href={withLocalePath(link.href, locale)} className="text-primary-500 underline">
                  {link.label}
                </Link>
              ))}
              <Link href={withLocalePath('/alternatives', locale)} className="text-primary-500 underline">
                Browse all alternatives
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={withLocalePath('/pricing', locale)} className="btn btn-primary btn-md">
              View pricing plans
            </Link>
            <Link href={withLocalePath('/payroll', locale)} className="btn btn-secondary btn-md">
              See payroll coverage
            </Link>
            <Link href={withLocalePath('/alternatives', locale)} className="text-primary-500 underline">
              Back to alternatives hub
            </Link>
            <Link href={withLocalePath(`/compare/${entry.key}`, locale)} className="text-primary-500 underline">
              View full comparison
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
