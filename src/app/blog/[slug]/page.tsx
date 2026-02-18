import Link from 'next/link';
import posts from '@/legacy-content/blog/posts';
import { generateMetadata as buildPageMetadata } from '@/utils/generateMetaData';
import { buildAppUrl } from '@/utils/appLinks';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return (posts as any[]).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = (posts as any[]).find((item) => item.slug === slug);
  const title = post ? `${post.title} | Schedulaa` : 'Blog Details | Schedulaa';
  const description = post?.description || 'Read the latest Schedulaa article.';
  const image = post?.image?.src || post?.heroImage || undefined;
  return buildPageMetadata(title, description, `https://www.schedulaa.com/blog/${slug}`, image);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (posts as any[]).find((item) => item.slug === slug);
  if (!post) return notFound();

  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">{post.heroOverline || 'Blog'}</p>
          <h1 className="mt-5">{post.title}</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">{post.description}</p>
          <p className="mt-3 text-sm text-secondary/60 dark:text-accent/60">
            {new Date(post.datePublished).toLocaleDateString('en-US')} {post.category ? `• ${post.category}` : ''}
          </p>
        </div>

        <div className="mt-8 space-y-8">
          {(post.sections || []).map((section: any, idx: number) => (
            <div key={`${post.slug}-section-${idx}`} className="rounded-xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
              {section.heading ? <h2 className="text-xl font-semibold">{section.heading}</h2> : null}
              {section.image?.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={section.image.src} alt={section.image.alt || section.heading || 'Blog visual'} className="mt-3 w-full rounded-lg" />
              ) : null}
              <div className="mt-3 space-y-3 text-secondary/70 dark:text-accent/70">
                {(section.paragraphs || []).map((paragraph: string, pidx: number) => (
                  <p key={`${post.slug}-${idx}-${pidx}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/blog" className="text-primary-500 underline">
            Back to blog
          </Link>
          <Link href={buildAppUrl('/register')} className="text-primary-500 underline">
            Start free
          </Link>
          <Link href="/contact" className="text-primary-500 underline">
            Talk to sales
          </Link>
        </div>
      </section>
    </main>
  );
}
