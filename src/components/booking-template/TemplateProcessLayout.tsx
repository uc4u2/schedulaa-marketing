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
    <section className="pb-20 md:pb-24">
      <div className="main-container rounded-[24px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-8 shadow-box md:p-10">
        <p className="premium-eyebrow">{process.overline || 'Process'}</p>
        <h2 className="mt-3 text-white">{process.title}</h2>
        {process.intro ? <p className="mt-4 text-accent/72">{process.intro}</p> : null}
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {process.steps.map((step, index) => (
            <article key={`${step.title}-${index}`} className="rounded-xl border border-stroke-7 bg-background-8 p-5">
              <p className="text-tagline-3 font-semibold tracking-[0.12em] text-primary-400">STEP {index + 1}</p>
              <h3 className="mt-2 text-heading-6 text-white">{step.title}</h3>
              <p className="mt-2 text-tagline-2 text-accent/72">{step.description}</p>
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
    <section className="pb-20 md:pb-24">
      <div className="main-container rounded-[24px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-8 shadow-box md:p-10">
        <p className="premium-eyebrow">{faq.heading || 'FAQ'}</p>
        {faq.title ? <h2 className="mt-3 text-white">{faq.title}</h2> : null}
        {faq.intro ? <p className="mt-4 text-accent/72">{faq.intro}</p> : null}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faq.items.map((item, index) => (
            <article key={`${item.question}-${index}`} className="rounded-xl border border-stroke-7 bg-background-8 p-5">
              <h3 className="text-heading-6 text-white">{item.question}</h3>
              <p className="mt-2 text-tagline-2 text-accent/72">{item.answer}</p>
            </article>
          ))}
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
