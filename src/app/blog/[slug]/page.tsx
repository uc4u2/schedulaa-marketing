import BlogContent from '@/components/blog-details/BlogContent';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownContent from '@/utils/getMarkDownContent';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const blogs = getMarkDownData('src/data/blogs');
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog Details | Schedulaa',
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const blogContent = getMarkDownContent('src/data/blogs/', slug);

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <BlogContent blog={blogContent} />
      <CTA
        className="dark:bg-background-7 bg-white"
        badgeClass="!badge-yellow-v2"
        badgeText="Get started"
        ctaHeading="Scale operations with Schedulaa"
        description="Unify scheduling, payroll, and public booking with one platform."
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
