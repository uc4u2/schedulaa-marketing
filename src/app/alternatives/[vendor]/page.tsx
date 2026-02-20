import Link from 'next/link';
import { getCompareEntry } from '@/legacy-content/compare/config';
import { generateMetadata as buildPageMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ vendor: string }> }): Promise<Metadata> {
  const { vendor } = await params;
  const entry = getCompareEntry(vendor, 'alternatives');
  const competitor = entry?.competitor || vendor;
  const title = `Best ${competitor} alternatives for service teams | Schedulaa`;
  const description =
    entry?.metaDescription ||
    `Looking for ${competitor} alternatives? Compare Schedulaa with ${competitor} for service operations and payroll workflows.`;
  return buildPageMetadata(title, description, `https://www.schedulaa.com/alternatives/${vendor}`);
}

export default async function AlternativesVendorPage({ params }: { params: Promise<{ vendor: string }> }) {
  const { vendor } = await params;
  const entry = getCompareEntry(vendor, 'alternatives');
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
          <p className="badge badge-yellow-v2">Alternatives guide</p>
          <h1 className="mt-5">{entry.competitor} alternatives for modern service teams</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">
            Looking for {entry.competitor} alternatives? This guide compares Schedulaa and {entry.competitor} across
            booking, scheduling, payroll, and compliance for service teams.
          </p>
          <p className="mt-4 text-secondary/70 dark:text-accent/70">
            Schedulaa replaces disconnected tools with an operations OS that unifies service delivery, payroll, and
            billing in one workflow.
          </p>
          {(entry.intro || []).map((paragraph: string, idx: number) => (
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
          <h2 className="text-2xl font-semibold">Why teams choose Schedulaa</h2>
          <div className="mt-4 space-y-4">
            {(entry.differentiators || []).map((item: any) => (
              <div key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-secondary/70 dark:text-accent/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <h2 className="text-2xl font-semibold">Quick comparison highlights</h2>
          <div className="mt-4 space-y-3">
            {rows.slice(0, 10).map((row: any) => (
              <div key={row.label} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                <h3 className="font-semibold">{row.label}</h3>
                <p className="mt-1 text-sm text-secondary/70 dark:text-accent/70"><strong>Schedulaa:</strong> {row.schedulaa}</p>
                <p className="mt-1 text-sm text-secondary/70 dark:text-accent/70"><strong>{entry.competitor}:</strong> {row.competitor}</p>
              </div>
            ))}
          </div>
        </div>

        {summaryRows.length ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">Feature group summary</h2>
            <div className="mt-4 space-y-4">
              {summaryRows.map((row: any) => (
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
            <h2 className="text-2xl font-semibold">When to choose each platform</h2>
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
          <Link href="/alternatives" className="text-primary-500 underline">Back to alternatives hub</Link>
          <Link href={`/compare/${entry.key}`} className="text-primary-500 underline">View full comparison</Link>
        </div>
      </section>
    </main>
  );
}
