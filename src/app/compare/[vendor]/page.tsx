import Link from 'next/link';
import { getCompareEntry } from '@/legacy-content/compare/config';
import { generateMetadata as buildPageMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

function getValueTone(rawValue: string) {
  const value = String(rawValue || '').toLowerCase();
  if (value.includes('✘') || value.includes(' no ') || value === 'no') return 'negative';
  if (value.includes('partial') || value.includes('limited') || value.includes('basic')) return 'neutral';
  if (value.includes('✔') || value.includes('advanced') || value.includes('integrated') || value === 'yes') return 'positive';
  return 'neutral';
}

function ComparisonValueCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const tone = getValueTone(value);
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
          {tone === 'positive' ? 'Strong' : tone === 'negative' ? 'Gap' : 'Limited'}
        </span>
        <p className="text-sm text-secondary/80 dark:text-accent/80">{cleanValue || 'N/A'}</p>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ vendor: string }> }): Promise<Metadata> {
  const { vendor } = await params;
  const entry = getCompareEntry(vendor, 'compare');
  const title = entry?.metaTitle || 'Comparison | Schedulaa';
  const description = entry?.metaDescription || 'Compare Schedulaa with alternative platforms for service teams.';
  return buildPageMetadata(title, description, `https://www.schedulaa.com/compare/${vendor}`);
}

export default async function CompareVendorPage({ params }: { params: Promise<{ vendor: string }> }) {
  const { vendor } = await params;
  const entry = getCompareEntry(vendor, 'compare');
  if (!entry) return notFound();

  const rows = entry.executiveOverview?.rows || [];
  const summaryRows = entry.summaryTable?.rows || [];
  const fitMatrix = entry.fitMatrix || [];
  const contextTitle = entry.contextBlock?.title;
  const contextParagraphs = entry.contextBlock?.paragraphs || [];
  const testimonialQuote = entry.testimonial?.quote;
  const testimonialAttribution = entry.testimonial?.attribution;

  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Comparison guide</p>
          <h1 className="mt-5">{entry.heroTitle}</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">{entry.heroSubtitle}</p>
          {(entry.intro || []).map((paragraph: string, idx: number) => (
            <p key={`${idx}-${paragraph.slice(0, 24)}`} className="mt-4 text-secondary/70 dark:text-accent/70">
              {paragraph}
            </p>
          ))}
        </div>

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
                  <ComparisonValueCard label="Schedulaa" value={row.schedulaa} />
                  <ComparisonValueCard label={entry.competitor} value={row.competitor} />
                </div>
              </div>
            ))}
          </div>
        </div>

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
                    <ComparisonValueCard label="Schedulaa" value={row.schedulaa} />
                    <ComparisonValueCard label={entry.competitor} value={row.competitor} />
                  </div>
                </div>
              ))}
            </div>
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
                    Recommendation: <span className="text-primary-500">{item.recommendation}</span>
                  </p>
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

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/pricing" className="btn btn-primary btn-md">View pricing plans</Link>
          <Link href="/payroll" className="btn btn-secondary btn-md">See payroll coverage</Link>
          <Link href="/compare" className="text-primary-500 underline">Back to compare hub</Link>
          <Link href={`/alternatives/${entry.altSlug}`} className="text-primary-500 underline">View alternatives</Link>
        </div>
      </section>
    </main>
  );
}
