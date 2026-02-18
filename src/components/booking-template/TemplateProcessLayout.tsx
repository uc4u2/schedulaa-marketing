import CTA from '@/components/shared/cta/CTA';

type ProcessStepItem = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type TemplateProcessLayoutProps = {
  process?: {
    overline?: string;
    title: string;
    intro?: string;
    steps: ProcessStepItem[];
  };
  faq?: {
    heading?: string;
    title?: string;
    intro?: string;
    items: FaqItem[];
  };
  cta?: {
    title?: string;
    body?: string;
    overline?: string;
    primaryLabel?: string;
  };
};

function TemplateProcessStep({ process }: { process?: TemplateProcessLayoutProps['process'] }) {
  if (!process) return null;
  return (
    <section className="pt-[120px] pb-[120px] lg:pt-[160px] xl:pb-[200px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <span className="badge badge-green">{process.overline || 'Process'}</span>
          <div className="space-y-3">
            <h2>{process.title}</h2>
            {process.intro ? <p className="mx-auto max-w-[610px]">{process.intro}</p> : null}
          </div>
        </div>
        <div className="grid grid-cols-12 justify-center gap-8">
          {process.steps.map((step, index) => (
            <article key={`${step.title}-${index}`} className="shadow-7 dark:bg-background-5 col-span-12 space-y-8 rounded-[20px] p-8 md:col-span-6 lg:col-span-4">
              <div className="flex items-center justify-between">
                <span className="text-tagline-2 dark:text-accent">Step {index + 1}</span>
                <span className="text-secondary dark:text-accent text-[52px]">{index + 1}</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-heading-5">{step.title}</h3>
                <p className="max-w-[344px]">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TemplateProcessFaq({ faq }: { faq?: TemplateProcessLayoutProps['faq'] }) {
  if (!faq) return null;
  return (
    <section className="bg-background-1 dark:bg-background-6 space-y-[70px] py-[100px]">
      <div className="main-container space-y-[70px]">
        <div className="mx-auto max-w-[804px] space-y-5 text-center">
          <span className="badge badge-cyan-v2">{faq.heading || 'FAQ'}</span>
          <div className="space-y-3 text-center">
            {faq.title ? <h2 className="mx-auto max-w-[624px]">{faq.title}</h2> : null}
            {faq.intro ? <p className="mx-auto max-w-[802px]">{faq.intro}</p> : null}
          </div>
        </div>
        <div className="grid grid-cols-12 items-center gap-y-14 md:gap-y-20 lg:gap-20 xl:gap-[100px]">
          <div className="col-span-12">
            <div className="space-y-5">
              {faq.items.map((item, index) => (
                <div key={`${item.question}-${index}`} className="bg-background-3 dark:bg-background-7 mx-auto flex items-start gap-4 rounded-2xl px-7 py-5 sm:max-w-[596px] sm:gap-[22px] sm:rounded-[20px] sm:px-[34px] sm:py-6 lg:max-w-full lg:mx-0">
                  <div className="bg-ns-yellow text-tagline-1 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-semibold">
                    {index + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-secondary dark:text-accent text-lg leading-[27px] font-medium">{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TemplateProcessLayout({ process, faq, cta }: TemplateProcessLayoutProps) {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <TemplateProcessStep process={process} />
      <TemplateProcessFaq faq={faq} />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeText={cta?.overline || 'Get started'}
        badgeClass="!badge-yellow-v2"
        ctaHeading={cta?.title || 'Build a complete booking workflow'}
        description={cta?.body || 'Start your free trial today and see your ideas come to life easily and creatively.'}
        ctaBtnText={cta?.primaryLabel || 'Get started'}
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
}
