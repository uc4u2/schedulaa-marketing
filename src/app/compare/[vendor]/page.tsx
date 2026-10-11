import Image from 'next/image';
import Link from 'next/link';
import TrackedLink from '@/components/shared/TrackedLink';
import { getCompareEntry, getCompareListForPageType } from '@/legacy-content/compare/config';
import { buildComparisonFaqJsonLd, getComparisonPageContent } from '@/lib/seo/comparisonPageContent';
import { buildLocalizedPageMetadata, getLocalizedCanonicalUrl } from '@/lib/seo/pageMetadata';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { getServerLocale } from '@/utils/serverLocale';
import { withLocalePath } from '@/utils/locale';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

const BOOK_DEMO_FALLBACK =
  'https://app.schedulaa.com/sale/meet/uzmTuuGPNNepce0r2vcx8WB4w3sJ2LA32Aqh7XIw9F8';

export const dynamicParams = false;

export function generateStaticParams() {
  return getCompareListForPageType('compare').map((entry) => ({
    vendor: entry.key.startsWith('schedulaa-vs-') ? entry.key : entry.slug,
  }));
}

function getContextCta(entry: any) {
  const competitor = String(entry?.competitor || '').toLowerCase();
  const haystack = [
    entry?.competitor,
    entry?.heroTitle,
    entry?.heroSubtitle,
    entry?.metaTitle,
    entry?.metaDescription,
    ...(entry?.intro || []),
    ...(entry?.contextBlock?.paragraphs || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  if (/(vagaro|acuity|square appointments|hubspot meetings|calendly|booksy|setmore|simplybook)/.test(competitor)) {
    return { href: '/booking', label: 'Explore booking' };
  }
  if (/(quickbooks|xero|freshbooks|wave|zoho books|stripe billing)/.test(competitor)) {
    return { href: '/business-finance/invoices', label: 'Explore invoices & payments' };
  }
  if (/(deputy|homebase|when i work|7shifts|sling)/.test(competitor)) {
    return { href: '/workforce', label: 'Explore staff scheduling' };
  }
  if (/(shopify|woocommerce|bigcommerce|lightspeed)/.test(competitor)) {
    return { href: '/commerce', label: 'Explore commerce' };
  }
  if (/(wix|squarespace|webflow|wordpress)/.test(competitor)) {
    return { href: '/website-builder', label: 'Explore website builder' };
  }
  if (/(gusto|adp|paychex|rippling|humi|ceridian|dayforce)/.test(competitor)) {
    return { href: '/payroll', label: 'See payroll coverage' };
  }

  if (/(website|domain|site builder|storefront builder|online presence|seo)/.test(haystack)) {
    return { href: '/website-builder', label: 'Explore website builder' };
  }
  if (/(booking|appointment|salon|spa|clinic|tutor|calendar)/.test(haystack)) {
    return { href: '/booking', label: 'Explore booking' };
  }
  if (/(invoice|estimate|quote|payment|deposit|billing|accounts receivable)/.test(haystack)) {
    return { href: '/business-finance/invoices', label: 'Explore invoices & payments' };
  }
  if (/(commerce|checkout|store|storefront|product|catalog|shipping|easypost|ecommerce|e-commerce)/.test(haystack)) {
    return { href: '/commerce', label: 'Explore commerce' };
  }
  if (/(staff|shift|schedule|scheduling|coverage|overtime|workforce|rota)/.test(haystack)) {
    return { href: '/workforce', label: 'Explore staff scheduling' };
  }
  if (/(payroll|payslip|w-2|t4|hris|payroll software|payroll platform)/.test(haystack)) {
    return { href: '/payroll', label: 'See payroll coverage' };
  }
  return { href: '/booking', label: 'Explore booking' };
}

function getValueTone(rawValue: string, label: string) {
  const value = String(rawValue || '').toLowerCase();
  const isSchedulaa = String(label || '').toLowerCase().includes('schedulaa');

  if (
    value.includes('✘') ||
    value.includes('not supported') ||
    value.includes('calendar only') ||
    value.includes('calendars only') ||
    value.includes('no shift') ||
    value.includes('no full pos') ||
    value.includes('not designed for') ||
    value === 'no'
  ) {
    return 'negative';
  }

  if (
    value.includes('✔') ||
    value.includes('advanced') ||
    value.includes('integrated') ||
    value.includes('built-in') ||
    value.includes('operations os') ||
    value.includes('us + canada') ||
    value.includes('w-2') ||
    value.includes('t4') ||
    value.includes('roe') ||
    value.includes('multi-location') ||
    value.includes('branch-aware') ||
    value.includes('clock-in') ||
    value.includes('analytics')
  ) {
    return 'positive';
  }

  if (value.includes('partial') || value.includes('limited') || value.includes('basic')) {
    return 'neutral';
  }

  if (isSchedulaa) {
    return 'positive';
  }
  return 'neutral';
}

function ComparisonValueCard({
  label,
  value,
  neutralLabel = 'Limited',
}: {
  label: string;
  value: string;
  neutralLabel?: string;
}) {
  const tone = getValueTone(value, label);
  const toneClass =
    tone === 'positive'
      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
      : tone === 'negative'
        ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
        : 'bg-sky-500/15 text-sky-600 dark:text-sky-400';

  const cleanValue = String(value || '').replace(/[✔✘]/g, '').trim();

  return (
    <div className="rounded-xl border border-stroke-2 bg-background-1/60 p-4 dark:border-stroke-7 dark:bg-background-6/40">
      <p className="text-xs uppercase tracking-[0.12em] text-secondary/60 dark:text-accent/60">{label}</p>
      <div className="mt-2 flex items-start gap-2">
        <span className={`rounded-full px-2 py-1 text-xs font-semibold ${toneClass}`}>
          {tone === 'positive' ? 'Strong' : tone === 'negative' ? 'Gap' : neutralLabel}
        </span>
        <p className="text-sm text-secondary/80 dark:text-accent/80">{cleanValue || 'N/A'}</p>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ vendor: string }> }): Promise<Metadata> {
  const { vendor } = await params;
  const storedEntry = getCompareEntry(vendor, 'compare');
  if (!storedEntry) {
    return notFound();
  }
  const locale = await getServerLocale();
  const override = getComparisonPageContent(vendor);
  const entry = storedEntry && override
    ? { ...storedEntry, ...override, testimonial: undefined, summaryTable: undefined }
    : storedEntry;
  const title = entry?.metaTitle || 'Comparison | Schedulaa';
  const description = entry?.metaDescription || 'Compare Schedulaa with alternative platforms for service teams.';
  return buildLocalizedPageMetadata({ locale, path: `/compare/${vendor}`, title, description });
}

export default async function CompareVendorPage({ params }: { params: Promise<{ vendor: string }> }) {
  const { vendor } = await params;
  const storedEntry = getCompareEntry(vendor, 'compare');
  if (!storedEntry) {
    return notFound();
  }
  const locale = await getServerLocale();
  const override = getComparisonPageContent(vendor);
  const entry = override
    ? { ...storedEntry, ...override, testimonial: undefined, summaryTable: undefined }
    : storedEntry;
  const pagePath = `/compare/${vendor}`;
  const isCompareOnly = entry.pageTypes?.length === 1 && entry.pageTypes.includes('compare');
  const startFreeHref = buildAppUrl('/register', {
    returnTo: marketingReturnTo(locale, pagePath),
  });
  const bookDemoHref = process.env.NEXT_PUBLIC_BOOK_DEMO_URL || BOOK_DEMO_FALLBACK;

  const rows = entry.executiveOverview?.rows || [];
  const summaryRows = entry.summaryTable?.rows || [];
  const fitMatrix = entry.fitMatrix || [];
  const contextTitle = entry.contextBlock?.title;
  const contextParagraphs = entry.contextBlock?.paragraphs || [];
  const testimonialQuote = entry.testimonial?.quote;
  const testimonialAttribution = entry.testimonial?.attribution;
  const contextCta = getContextCta(entry);
  const relatedLinks: Array<{ label: string; href: string }> = entry.relatedLinks || [];
  const faq = entry.faq || [];
  const quickDecision: Array<{ title: string; body: string }> = entry.quickDecision || [];
  const screenshots: Array<{
    src: string;
    alt: string;
    title: string;
    caption: string;
    width: number;
    height: number;
  }> = entry.screenshots || [];
  const setupChecklist: string[] = entry.setupChecklist || [];
  const sources: Array<{ label: string; href: string }> = entry.sources || [];
  const hasComparisonBreadcrumb =
    isCompareOnly ||
    entry.key === 'gusto' ||
    entry.key === 'adp' ||
    entry.key === 'when-i-work' ||
    entry.key === 'square-appointments' ||
    entry.key === 'xero';
  const breadcrumbScriptId =
    entry.key === 'gusto'
      ? 'compare-gusto-breadcrumb-jsonld'
      : entry.key === 'adp'
        ? 'compare-adp-breadcrumb-jsonld'
        : `compare-${entry.key}-breadcrumb-jsonld`;
  const comparisonBreadcrumbJsonLd =
    hasComparisonBreadcrumb
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Schedulaa', item: getLocalizedCanonicalUrl(locale, '/') },
            { '@type': 'ListItem', position: 2, name: 'Compare', item: getLocalizedCanonicalUrl(locale, '/compare') },
            {
              '@type': 'ListItem',
              position: 3,
              name: `Schedulaa vs ${entry.competitor}`,
              item: getLocalizedCanonicalUrl(locale, `/compare/${entry.altSlug}`),
            },
          ],
        }
      : null;

  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      {comparisonBreadcrumbJsonLd ? (
        <script
          id={breadcrumbScriptId}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonBreadcrumbJsonLd).replace(/</g, '\\u003c') }}
        />
      ) : null}
      {faq.length ? (
        <script
          id={`compare-${entry.key}-faq-jsonld`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildComparisonFaqJsonLd(faq)).replace(/</g, '\\u003c') }}
        />
      ) : null}
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Comparison guide</p>
          <h1 className="mt-5">{entry.heroTitle}</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">{entry.heroSubtitle}</p>
          {entry.hook ? (
            <p className="mt-6 max-w-[860px] text-2xl font-semibold leading-tight text-secondary dark:text-accent md:text-3xl">
              {entry.hook}
            </p>
          ) : null}
          {(entry.intro || []).map((paragraph: string, idx: number) => (
            <p key={`${idx}-${paragraph.slice(0, 24)}`} className="mt-4 text-secondary/70 dark:text-accent/70">
              {paragraph}
            </p>
          ))}
          {isCompareOnly ? (
            <div className="mt-8 flex flex-wrap gap-3">
              <TrackedLink
                href={startFreeHref}
                className="btn btn-primary btn-md min-w-[220px] justify-center"
                analyticsCta={{ name: `compare_${vendor}_start_trial`, pagePath: `/en${pagePath}`, placement: 'hero' }}
                eventName="Lead"
                eventParams={{ content_name: `${entry.competitor} comparison start trial`, page_path: `/en${pagePath}` }}
              >
                Start your 14-day free trial
              </TrackedLink>
              <TrackedLink
                href={bookDemoHref}
                className="btn btn-secondary btn-md min-w-[220px] justify-center"
                target="_blank"
                rel="noopener noreferrer"
                analyticsCta={{ name: `compare_${vendor}_book_demo`, pagePath: `/en${pagePath}`, placement: 'hero' }}
              >
                Book a personalized demo
              </TrackedLink>
            </div>
          ) : null}
        </div>

        {quickDecision.length ? (
          <div className="mt-8 rounded-[20px] bg-secondary p-6 text-white shadow-2 dark:bg-background-8 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-300">Quick decision</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Which path fits your operating model?</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {quickDecision.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/15 bg-white/8 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {contextParagraphs.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">{contextTitle || `${entry.competitor} vs Schedulaa context`}</h2>
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
          <h2 className="text-2xl font-semibold">Executive Overview</h2>
          <p className="mt-3 text-secondary/70 dark:text-accent/70">
            Quick high-level comparison of where Schedulaa and {entry.competitor} differ most.
          </p>
          <div className="mt-5 space-y-4">
            {rows.map((row: any) => (
              <div
                key={row.label}
                className="rounded-2xl border border-stroke-2 bg-linear-to-r from-background-1/80 to-background-2/50 p-4 dark:border-stroke-7 dark:from-background-6/40 dark:to-background-7/40 md:p-5"
              >
                <h3 className="text-lg font-semibold">{row.label}</h3>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <ComparisonValueCard label="Schedulaa" value={row.schedulaa} neutralLabel={isCompareOnly ? 'Different focus' : 'Limited'} />
                  <ComparisonValueCard label={entry.competitor} value={row.competitor} neutralLabel={isCompareOnly ? 'Different focus' : 'Limited'} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {screenshots.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">See the Schedulaa workflow</h2>
            <p className="mt-3 max-w-[850px] text-secondary/70 dark:text-accent/70">
              These are real Schedulaa interface views with no customer data. They show the booking and service-management surfaces used in the connected workflow.
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {screenshots.map((screenshot) => (
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

        <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <h2 className="text-2xl font-semibold">Key differentiators</h2>
          <div className="mt-4 space-y-4">
            {(entry.differentiators || []).map((item: any) => (
              <div key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-secondary/70 dark:text-accent/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {summaryRows.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">Feature group summary</h2>
            <p className="mt-3 text-secondary/70 dark:text-accent/70">
              Side-by-side capability checks for service teams evaluating {entry.competitor}.
            </p>
            <div className="mt-5 space-y-4">
              {summaryRows.map((row: any) => (
                <div
                  key={row.label}
                  className="rounded-2xl border border-stroke-2 bg-linear-to-r from-background-1/80 to-background-2/50 p-4 dark:border-stroke-7 dark:from-background-6/40 dark:to-background-7/40 md:p-5"
                >
                  <h3 className="text-lg font-semibold">{row.label}</h3>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <ComparisonValueCard label="Schedulaa" value={row.schedulaa} neutralLabel={isCompareOnly ? 'Different focus' : 'Limited'} />
                    <ComparisonValueCard label={entry.competitor} value={row.competitor} neutralLabel={isCompareOnly ? 'Different focus' : 'Limited'} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {setupChecklist.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">A practical switching and setup checklist</h2>
            <p className="mt-3 text-secondary/70 dark:text-accent/70">
              Schedulaa does not promise an automatic migration. Use this checklist to define a safe, testable setup before changing a live customer journey.
            </p>
            <ol className="mt-5 grid gap-3 md:grid-cols-2">
              {setupChecklist.map((item, index) => (
                <li key={item} className="flex gap-3 rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-6 text-secondary/75 dark:text-accent/75">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {fitMatrix.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">Who should choose what</h2>
            <div className="mt-4 space-y-3">
              {fitMatrix.map((item: any, idx: number) => (
                <div key={`${item.scenario}-${idx}`} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                  <p className="text-sm text-secondary/70 dark:text-accent/70">{item.scenario}</p>
                  <p className="mt-2 text-sm font-semibold">
                    Recommendation: <span className="text-primary-600 dark:text-primary-400">{item.recommendation}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {faq.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
            <div className="mt-4 space-y-4">
              {faq.map((item: { question: string; answer: string }) => (
                <div key={item.question} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="mt-2 text-secondary/70 dark:text-accent/70">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {testimonialQuote ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">Team voice</h2>
            <blockquote className="mt-4 text-secondary/70 dark:text-accent/70">"{testimonialQuote}"</blockquote>
            {testimonialAttribution ? (
              <p className="mt-3 text-sm font-medium text-secondary/70 dark:text-accent/70">{testimonialAttribution}</p>
            ) : null}
          </div>
        ) : null}

        {entry.conclusion ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">Conclusion</h2>
            <p className="mt-3 text-secondary/70 dark:text-accent/70">{entry.conclusion}</p>
          </div>
        ) : null}

        {sources.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">Competitor sources reviewed</h2>
            <p className="mt-3 text-sm leading-6 text-secondary/70 dark:text-accent/70">
              Material competitor statements on this page are based on the vendors' current first-party documentation. Plans and features can change, so verify purchase-critical requirements directly.
            </p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-4 dark:text-primary-400">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {isCompareOnly ? (
          <div className="mt-8 rounded-[20px] bg-linear-to-r from-primary-500 to-cyan-500 p-7 text-white shadow-2 md:p-10">
            <h2 className="max-w-[760px] text-3xl font-semibold text-white">Test the Schedulaa workflow with your real operating requirements</h2>
            <p className="mt-3 max-w-[760px] text-white/80">
              Start with the 14-day trial, or book a guided walkthrough tailored to the website, booking, staff, customer, and billing flows you need to verify.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <TrackedLink
                href={startFreeHref}
                className="btn btn-white btn-md min-w-[220px] justify-center"
                analyticsCta={{ name: `compare_${vendor}_start_trial`, pagePath: `/en${pagePath}`, placement: 'final' }}
                eventName="Lead"
                eventParams={{ content_name: `${entry.competitor} comparison final trial`, page_path: `/en${pagePath}` }}
              >
                Start your 14-day free trial
              </TrackedLink>
              <TrackedLink
                href={bookDemoHref}
                className="btn btn-secondary btn-md min-w-[220px] justify-center"
                target="_blank"
                rel="noopener noreferrer"
                analyticsCta={{ name: `compare_${vendor}_book_demo`, pagePath: `/en${pagePath}`, placement: 'final' }}
              >
                Book a personalized demo
              </TrackedLink>
            </div>
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href={withLocalePath('/pricing', locale)} className="btn btn-primary btn-md">View pricing plans</Link>
          <Link href={withLocalePath(contextCta.href, locale)} className="btn btn-secondary btn-md">{contextCta.label}</Link>
          <Link href={withLocalePath('/compare', locale)} className="text-primary-600 underline dark:text-primary-400">Back to compare hub</Link>
          {entry.pageTypes?.includes('alternatives') ? (
            <Link href={withLocalePath(`/alternatives/${entry.altSlug}`, locale)} className="text-primary-600 underline dark:text-primary-400">
              {entry.key === 'gusto'
                ? 'Explore Gusto alternatives'
                : entry.key === 'adp'
                  ? 'Explore ADP alternatives'
                  : `Explore ${entry.competitor} alternatives`}
            </Link>
          ) : null}
          {relatedLinks.map((link) => (
            <Link key={link.href} href={withLocalePath(link.href, locale)} className="text-primary-600 underline dark:text-primary-400">
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
