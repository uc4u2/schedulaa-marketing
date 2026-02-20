import { IBlogPost } from '@/interface';
import blogPosts from '@/legacy-content/blog/posts';
import source from '@/legacy-content/features/landing-features.json';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV2 from '../shared/card/BlogCardV2';
import BlogCardV3 from '../shared/card/BlogCardV3';
import LinkButton from '../ui/button/LinkButton';

const formatDate = (dateInput?: string) => {
  if (!dateInput) return 'Jan 01, 2025';
  const date = new Date(dateInput);
  if (Number.isNaN(date.getTime())) return 'Jan 01, 2025';
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
};

const blogImages = [
  '/images/marketing/showcase/job-posting-4d.png',
  '/images/marketing/showcase/w2.png',
  '/images/marketing/t4-screen.png',
];

const blogs = (blogPosts || []).slice(0, 3).map((post, index) => {
  const wordCount = (post.description || '').split(/\s+/).filter(Boolean).length;
  const minRead = Math.max(3, Math.round(wordCount / 40));
  return {
    tag: post.category || 'Blog',
    author: 'Schedulaa Team',
    authorImage: '',
    publishDate: formatDate(post.datePublished),
    title: post.title,
    description: post.description,
    thumbnail: blogImages[index] || '/images/marketing/analytics-main.png',
    readTime: `${minRead} min read`,
    slug: post.slug,
    content: '',
  } as IBlogPost;
});

const Blog = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-background-2 dark:bg-background-5 py-20 sm:py-24 lg:py-[100px]">
        <div className="main-container">
          <div className="mb-10 space-y-5 text-center md:mb-[70px]">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Education &amp; Insights</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>{source.insight.title}</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[492px]">{source.insight.subtitle}</p>
              </RevealAnimation>
            </div>
          </div>
          <div className="grid grid-cols-12 items-start gap-y-12 lg:gap-8">
            <RevealAnimation delay={0.5}>
              <div className="col-span-12 lg:col-span-5 xl:col-span-6">
                <BlogCardV2 blog={blogs[0]} className="dark:bg-background-8 bg-white" />
              </div>
            </RevealAnimation>

            <div className="col-span-12 space-y-8 lg:col-span-7 xl:col-span-6">
              <RevealAnimation delay={0.6}>
                <BlogCardV3 blog={blogs[1]} className="dark:bg-background-8 bg-white" />
              </RevealAnimation>

              <RevealAnimation delay={0.7}>
                <BlogCardV3 blog={blogs[2]} className="dark:bg-background-8 bg-white" />
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.6}>
            <div className="mt-14 flex justify-center">
              <LinkButton
                href="/blog"
                className="btn btn-secondary dark:btn-transparent btn-md hover:btn-green mx-auto w-[90%] md:mx-0 md:w-auto">
                Explore insights
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Blog;
