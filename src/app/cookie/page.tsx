import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Cookie Policy | Schedulaa',
  description: 'How Schedulaa uses cookies and similar technologies on marketing pages.',
};

export default function CookiePolicyPage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold text-secondary dark:text-white">Cookie Policy</h1>
        <p className="mt-6 text-secondary/80 dark:text-accent/75">
          Schedulaa uses cookies and similar technologies to keep sessions stable, understand page performance, and improve user
          experience on public marketing pages.
        </p>
        <p className="mt-4 text-secondary/80 dark:text-accent/75">
          For legal definitions and broader policy commitments, review our privacy policy and terms.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/privacy" className="btn btn-primary btn-sm">Privacy policy</Link>
          <Link href="/terms" className="btn btn-secondary btn-sm">Terms</Link>
        </div>
      </div>
    </main>
  );
}
