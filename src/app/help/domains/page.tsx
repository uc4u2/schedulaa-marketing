import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Custom Domain Help | Schedulaa',
  description:
    'Domain setup guide for Schedulaa websites, including DNS basics, SSL expectations, and troubleshooting flow.',
};

export default function HelpDomainsPage() {
  return (
    <main className="section-padding-x pb-24 pt-20">
      <div className="mx-auto max-w-4xl">
        <p className="badge badge-yellow-v2">Help: Domains</p>
        <h1 className="mt-4 text-4xl font-semibold text-secondary dark:text-white">Custom domain setup for your Schedulaa site</h1>
        <div className="mt-6 space-y-4 text-secondary/80 dark:text-accent/75">
          <p>Use this page as a quick reference for connecting a custom domain to your published website.</p>
          <p>Most setups require updating a `CNAME` for `www` and confirming DNS propagation before SSL becomes active.</p>
          <p>If your domain points correctly but content does not update, clear CDN cache and re-check the target host value.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/docs" className="btn btn-primary btn-md">Open docs</Link>
          <Link href="/client/support" className="btn btn-secondary btn-md">Contact support</Link>
        </div>
      </div>
    </main>
  );
}
