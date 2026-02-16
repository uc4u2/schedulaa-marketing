import Link from 'next/link';
import { getCompareEntry } from '@/legacy-content/compare/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ vendor: string }> }): Promise<Metadata> {
  const { vendor } = await params;
  const entry = getCompareEntry(vendor, 'compare');
  return {
    ...defaultMetadata,
    title: entry?.metaTitle || 'Comparison | Schedulaa',
    description: entry?.metaDescription,
  };
}

export default async function CompareVendorPage({ params }: { params: Promise<{ vendor: string }> }) {
  const { vendor } = await params;
  const entry = getCompareEntry(vendor, 'compare');
  if (!entry) return notFound();

  const rows = entry.executiveOverview?.rows || [];

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

        <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <h2 className="text-2xl font-semibold">Executive Overview</h2>
          <div className="mt-4 space-y-4">
            {rows.map((row: any) => (
              <div key={row.label} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                <h3 className="font-semibold">{row.label}</h3>
                <p className="mt-1 text-sm text-secondary/70 dark:text-accent/70"><strong>Schedulaa:</strong> {row.schedulaa}</p>
                <p className="mt-1 text-sm text-secondary/70 dark:text-accent/70"><strong>{entry.competitor}:</strong> {row.competitor}</p>
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

        {entry.conclusion ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            <h2 className="text-2xl font-semibold">Conclusion</h2>
            <p className="mt-3 text-secondary/70 dark:text-accent/70">{entry.conclusion}</p>
          </div>
        ) : null}

        <div className="mt-8 flex gap-4">
          <Link href="/compare" className="text-primary-500 underline">Back to compare hub</Link>
          <Link href={`/alternatives/${entry.altSlug}`} className="text-primary-500 underline">View alternatives</Link>
        </div>
      </section>
    </main>
  );
}
