import Link from 'next/link';
import { getCompareEntry } from '@/legacy-content/compare/config';
import { buildAlternativeFaqJsonLd, getAlternativePageContent, type AlternativeComparisonRow } from '@/lib/seo/alternativePageContent';
import { buildLocalizedPageMetadata, getLocalizedCanonicalUrl } from '@/lib/seo/pageMetadata';
import { getServerLocale } from '@/utils/serverLocale';
import { withLocalePath } from '@/utils/locale';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

export async function generateMetadata({ params }: { params: Promise<{ vendor: string }> }): Promise<Metadata> {
  const { vendor } = await params;
  const locale = await getServerLocale();
  const entry = getCompareEntry(vendor, 'alternatives');
  const competitor = entry?.competitor || vendor;
  const content = getAlternativePageContent(vendor);
  const title = content?.title || `Best ${competitor} alternatives for service teams | Schedulaa`;
  const description =
    content?.description ||
    entry?.metaDescription ||
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
  const locale = await getServerLocale();
  const entry = getCompareEntry(vendor, 'alternatives');
  if (!entry) {
    return notFound();
  }
  const content = getAlternativePageContent(vendor);
  const rows: AlternativeComparisonRow[] = content?.comparisonRows || entry.executiveOverview?.rows || [];
  const summaryRows: AlternativeComparisonRow[] = content ? [] : entry.summaryTable?.rows || [];
  const fitMatrix: Array<{ scenario: string; recommendation: string }> = content?.fitMatrix || entry.fitMatrix || [];
  const contextTitle = content?.contextHeading || entry.contextBlock?.title;
  const contextParagraphs = content?.contextParagraphs || entry.contextBlock?.paragraphs || [];
  const differentiators: Array<{ title: string; body: string }> = content?.differentiators || entry.differentiators || [];
  const canonical = getLocalizedCanonicalUrl(locale, `/alternatives/${vendor}`);
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
          <p className="badge badge-yellow-v2">Alternatives guide</p>
          <h1 className="mt-5">{content?.h1 || `${entry.competitor} alternatives for modern service teams`}</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">
            {content?.lead ||
              `Looking for ${entry.competitor} alternatives? This guide compares Schedulaa and ${entry.competitor} across booking, scheduling, payroll, and compliance for service teams.`}
          </p>
          {(content?.intro || entry.intro || []).map((paragraph: string, idx: number) => (
            <p key={`${idx}-${paragraph.slice(0, 24)}`} className="mt-4 text-secondary/70 dark:text-accent/70">
              {paragraph}
            </p>
          ))}
        </div>

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

        {content ? (
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
