import Link from 'next/link';
import posts from '@/legacy-content/blog/posts';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'The Future of Business Automation | Schedulaa Blog',
  description:
    'How Schedulaa is redefining all-in-one management with unified booking, payroll, websites, analytics, and deep integrations to Zapier, QuickBooks, and Xero.',
};

export default function BlogPage() {
  const sortedPosts = [...(posts as any[])].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );

  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Blog</p>
          <h1 className="mt-5">The future of business automation.</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">
            How Schedulaa is redefining all-in-one management for modern teams with unified booking, payroll,
            websites, analytics, and integrations to Zapier, QuickBooks, and Xero.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/blog/category/automation" className="text-primary-500 underline">
              Automation insights
            </Link>
            <Link href="/blog/category/payroll" className="text-primary-500 underline">
              Payroll operations
            </Link>
            <Link href="/blog/client-journey" className="text-primary-500 underline">
              Client journey guide
            </Link>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {sortedPosts.map((post: any) => (
            <div key={post.slug} className="rounded-xl border border-stroke-2 bg-white p-5 dark:border-stroke-7 dark:bg-background-8">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-primary-500">
                {post.category ? <span>{post.category}</span> : null}
                <span>{new Date(post.datePublished).toLocaleDateString('en-US')}</span>
              </div>
              <h2 className="mt-2 text-xl font-semibold">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary-500">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-secondary/70 dark:text-accent/70">{post.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(post.tags || []).slice(0, 4).map((tag: string) => (
                  <span key={`${post.slug}-${tag}`} className="rounded-full border border-stroke-2 px-2 py-0.5 text-xs dark:border-stroke-7">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
