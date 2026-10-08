import sourceEn from '@/legacy-content/features/landing-features.json';
import RevealAnimation from '../animation/RevealAnimation';

type WorkflowCard = {
  icon: string;
  title: string;
  description: string[];
};

type FeatureSource = {
  testimonials?: { title?: string };
  featureShowcase?: { features?: WorkflowCard[] };
};

const Reviews = ({ source }: { source?: unknown }) => {
  const content = (source || sourceEn) as FeatureSource;
  const fallback = sourceEn as FeatureSource;
  const workflowCards = (content.featureShowcase?.features || fallback.featureShowcase?.features || []).slice(0, 6);
  const sectionTitle = content.testimonials?.title || fallback.testimonials?.title || 'Connected workflows';

  return (
    <section className="bg-background-3 dark:bg-background-8 space-y-[70px] py-[100px] lg:py-[140px]">
      <div className="main-container">
        <div className="mx-auto max-w-[804px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge !badge-cyan">Connected workflows</span>
          </RevealAnimation>

          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>{sectionTitle}</h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p>
                See how the live Schedulaa capabilities fit together across websites, bookings, billing, payments,
                staff scheduling, and customer operations.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="mt-[70px] grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {workflowCards.map((workflow) => (
              <article
                key={workflow.title}
                className="bg-background-1/90 dark:bg-background-5 dark:hover:bg-background-8 hover:shadow-1 rounded-[20px] p-8 transition-colors duration-300 ease-linear hover:bg-white">
                <span className="text-tagline-3 text-primary-500 font-semibold uppercase tracking-[0.14em]">
                  Workflow {workflow.icon}
                </span>
                <h3 className="text-heading-6 text-secondary dark:text-accent mt-3">{workflow.title}</h3>
                <p className="mt-4 text-wrap">{workflow.description?.[0]}</p>
              </article>
            ))}
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Reviews;
