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
        </div>

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
            {(entry.executiveOverview?.rows || []).slice(0, 8).map((row: any) => (
              <div key={row.label} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                <h3 className="font-semibold">{row.label}</h3>
                <p className="mt-1 text-sm text-secondary/70 dark:text-accent/70"><strong>Schedulaa:</strong> {row.schedulaa}</p>
                <p className="mt-1 text-sm text-secondary/70 dark:text-accent/70"><strong>{entry.competitor}:</strong> {row.competitor}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <Link href="/alternatives" className="text-primary-500 underline">Back to alternatives hub</Link>
          <Link href={`/compare/${entry.key}`} className="text-primary-500 underline">View full comparison</Link>
        </div>
      </section>
    </main>
  );
}
