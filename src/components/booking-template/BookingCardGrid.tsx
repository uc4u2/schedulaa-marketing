type BookingCard = {
  overline?: string;
  title: string;
  body?: string;
  points?: string[];
};

export default function BookingCardGrid({ id, heading, intro, cards }: { id: string; heading: string; intro?: string; cards: BookingCard[] }) {
  return (
    <section id={id} className="bg-background-1 dark:bg-background-6 rounded-[20px] p-6 sm:p-8">
      <h2>{heading}</h2>
      {intro ? <p className="mt-3 text-secondary/70 dark:text-accent/70">{intro}</p> : null}
      <div className="mt-6 grid grid-cols-12 gap-5">
        {cards.map((card) => (
          <article key={card.title} className="col-span-12 rounded-[16px] border border-stroke-2 p-5 dark:border-stroke-7 md:col-span-6">
            {card.overline ? <p className="text-tagline-3 text-primary-500 uppercase tracking-[0.12em]">{card.overline}</p> : null}
            <h3 className="text-heading-5 mt-2">{card.title}</h3>
            {card.body ? <p className="mt-3 text-secondary/72 dark:text-accent/72">{card.body}</p> : null}
            {card.points?.length ? (
              <ul className="mt-4 list-inside list-disc space-y-2 text-secondary/78 dark:text-accent/78">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

