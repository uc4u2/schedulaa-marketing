type BookingStep = {
  title: string;
  description: string;
};

export default function BookingSteps({
  id,
  heading,
  intro,
  steps,
}: {
  id: string;
  heading: string;
  intro?: string;
  steps: BookingStep[];
}) {
  return (
    <section id={id} className="bg-background-1 dark:bg-background-6 rounded-[20px] p-6 sm:p-8">
      <h2>{heading}</h2>
      {intro ? <p className="mt-3 text-secondary/70 dark:text-accent/70">{intro}</p> : null}
      <div className="mt-6 grid grid-cols-12 gap-5">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="bg-background-3 dark:bg-background-8 col-span-12 rounded-[16px] p-5 md:col-span-6"
          >
            <p className="text-tagline-3 text-primary-500 uppercase tracking-[0.12em]">Step {index + 1}</p>
            <h3 className="text-heading-6 mt-2">{step.title}</h3>
            <p className="mt-3 text-secondary/72 dark:text-accent/72">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

