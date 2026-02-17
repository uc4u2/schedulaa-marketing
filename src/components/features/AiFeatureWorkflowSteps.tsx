import Link from 'next/link';

type WorkflowStep = {
  title: string;
  description: string;
};

type AiFeatureWorkflowStepsProps = {
  steps: WorkflowStep[];
  ctaHref: string;
  ctaLabel: string;
};

const AiFeatureWorkflowSteps = ({ steps, ctaHref, ctaLabel }: AiFeatureWorkflowStepsProps) => {
  return (
    <section className="py-20 md:py-28 lg:py-34 xl:py-39">
      <div className="main-container">
        <div className="mb-10 text-center md:mb-11 lg:mx-auto lg:max-w-[760px]">
          <span className="badge badge-gray-light-v2 mb-4">How It Works</span>
          <h2 className="mb-3">Generate operational outcomes with one connected system</h2>
          <p>Move from demand capture to audited outputs without switching between disconnected tools.</p>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-8 lg:flex-row">
          {steps.slice(0, 3).map((step, idx) => (
            <article
              key={step.title}
              className={`flex w-full max-w-[408px] flex-col justify-between rounded-[20px] p-11 max-sm:space-y-8 sm:min-h-[350px] ${
                idx % 2 === 0 ? 'bg-ns-green' : 'bg-background-3'
              }`}
            >
              <div className="text-center">
                <span className="text-secondary text-[52px]">{idx + 1}</span>
              </div>
              <div className="space-y-1 text-center max-md:space-y-0.5">
                <h3 className="text-heading-6 md:text-heading-5">{step.title}</h3>
                <p className="text-tagline-1 text-secondary/60">{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="group mt-14 text-center">
          <Link href={ctaHref} className="btn btn-xl btn-secondary hover:btn-primary dark:btn-transparent dark:hover:btn-accent">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AiFeatureWorkflowSteps;

