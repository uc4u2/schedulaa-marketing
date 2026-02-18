import Link from 'next/link';
import posts from '@/legacy-content/blog/posts';
import { generateMetadata as buildPageMetadata } from '@/utils/generateMetaData';
import { buildAppUrl } from '@/utils/appLinks';
import { Metadata } from 'next';

const CATEGORY_COPY: Record<string, { title: string; subtitle: string }> = {
  automation: {
    title: 'Automation playbooks.',
    subtitle:
      'Use these guides to connect scheduling, marketing, analytics, and websites into a single automated flow.',
  },
  payroll: {
    title: 'Payroll & compliance.',
    subtitle: 'Deep dives on US and Canadian payroll, ROE workflows, tax automations, and card-on-file best practices.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const copy = CATEGORY_COPY[slug] || CATEGORY_COPY.automation;
  return buildPageMetadata(
    `${copy.title} | Schedulaa Blog`,
    copy.subtitle,
    `https://www.schedulaa.com/blog/category/${slug}`,
  );
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const copy = CATEGORY_COPY[slug] || CATEGORY_COPY.automation;

  const categoryPosts = (posts as any[])
    .filter((post) => (post.category || '').toLowerCase() === slug.toLowerCase())
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());

  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Blog category</p>
          <h1 className="mt-5">{copy.title}</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">{copy.subtitle}</p>
        </div>

        <div className="mt-8 space-y-4">
          {categoryPosts.length === 0 ? (
            <div className="rounded-xl border border-stroke-2 bg-white p-5 dark:border-stroke-7 dark:bg-background-8">
              <p className="text-secondary/70 dark:text-accent/70">No posts in this category yet.</p>
            </div>
          ) : (
            categoryPosts.map((post: any) => (
              <div key={post.slug} className="rounded-xl border border-stroke-2 bg-white p-5 dark:border-stroke-7 dark:bg-background-8">
                <h2 className="text-lg font-semibold">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary-500">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">{post.description}</p>
              </div>
            ))
          )}
        </div>

        <div className="mt-8 flex gap-4">
          <Link href="/blog" className="text-primary-500 underline">
            Back to blog
          </Link>
          <Link href={buildAppUrl('/register')} className="text-primary-500 underline">
            Start free
          </Link>
        </div>
      </section>
    </main>
  );
}
