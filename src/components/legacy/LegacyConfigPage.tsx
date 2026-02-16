import Link from 'next/link';

type Cfg = Record<string, any>;

const asArray = (v: any) => (Array.isArray(v) ? v : []);

export default function LegacyConfigPage({ config }: { config: Cfg }) {
  const hero = config?.hero || {};
  const notice = config?.notice;
  const sections = [
    ...asArray(config?.features),
    ...asArray(config?.sections),
    ...asArray(config?.highlights),
    ...asArray(config?.lists),
    ...asArray(config?.callouts),
  ];

  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          {hero.badge ? <p className="badge badge-yellow-v2">{hero.badge}</p> : null}
          {hero.title ? <h1 className="mt-5">{hero.title}</h1> : null}
          {hero.subtitle ? (
            <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">{hero.subtitle}</p>
          ) : null}
          {asArray(hero.bullets).length > 0 ? (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-secondary/80 dark:text-accent/80">
              {asArray(hero.bullets).map((b: string) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            {hero.primaryCta?.href ? (
              <Link href={hero.primaryCta.href} className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
                {hero.primaryCta.label}
              </Link>
            ) : null}
            {hero.secondaryCta?.href ? (
              <Link href={hero.secondaryCta.href} className="btn btn-primary-v2 dark:btn-transparent">
                {hero.secondaryCta.label}
              </Link>
            ) : null}
          </div>
          {notice ? <p className="mt-4 text-sm text-secondary/70 dark:text-accent/70">{notice}</p> : null}
        </div>

        {sections.map((s: any, idx: number) => (
          <div key={`${s.title || s.label || 'section'}-${idx}`} className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            {s.overline ? <p className="text-sm uppercase tracking-wide text-primary-500">{s.overline}</p> : null}
            {s.title ? <h2 className="mt-2 text-2xl font-semibold">{s.title}</h2> : null}
            {s.body ? <p className="mt-3 text-secondary/70 dark:text-accent/70">{s.body}</p> : null}
            {s.description ? <p className="mt-3 text-secondary/70 dark:text-accent/70">{s.description}</p> : null}
            {s.content ? <p className="mt-3 text-secondary/70 dark:text-accent/70">{s.content}</p> : null}
            {asArray(s.points).length > 0 ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-secondary/80 dark:text-accent/80">
                {asArray(s.points).map((p: string) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            ) : null}
            {asArray(s.items).length > 0 ? (
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {asArray(s.items).map((item: any, itemIdx: number) => (
                  <div key={`${item.title || 'item'}-${itemIdx}`} className="rounded-xl border border-stroke-2 p-4 dark:border-stroke-7">
                    {item.label ? <p className="text-xs uppercase tracking-wide text-primary-500">{item.label}</p> : null}
                    {item.title ? <h3 className="mt-2 text-lg font-semibold">{item.title}</h3> : null}
                    {item.body ? <p className="mt-2 text-sm text-secondary/70 dark:text-accent/70">{item.body}</p> : null}
                    {asArray(item.points).length > 0 ? (
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-secondary/80 dark:text-accent/80">
                        {asArray(item.points).map((p: string) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
            {asArray(s.links).length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-3">
                {asArray(s.links).map((l: any, linkIdx: number) => (
                  <Link key={`${l.href}-${linkIdx}`} href={l.href} className="text-primary-500 underline">
                    {l.label}
                  </Link>
                ))}
              </div>
            ) : null}
            {asArray(s.actions).length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-3">
                {asArray(s.actions).map((l: any, linkIdx: number) => (
                  <Link key={`${l.href}-${linkIdx}`} href={l.href} className="text-primary-500 underline">
                    {l.label}
                  </Link>
                ))}
              </div>
            ) : null}
            {asArray(s.buttons).length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-3">
                {asArray(s.buttons).map((l: any, linkIdx: number) => (
                  <Link key={`${l.href}-${linkIdx}`} href={l.href} className="text-primary-500 underline">
                    {l.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        ))}

        {asArray(config?.steps).length > 0 ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            {config.stepsTitle ? <h2 className="text-2xl font-semibold">{config.stepsTitle}</h2> : null}
            {config.stepsIntro ? <p className="mt-3 text-secondary/70 dark:text-accent/70">{config.stepsIntro}</p> : null}
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-secondary/80 dark:text-accent/80">
              {asArray(config.steps).map((step: any) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  {step.description ? ` - ${step.description}` : ''}
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {asArray(config?.faq).length > 0 ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            {config.faqTitle ? <h2 className="text-2xl font-semibold">{config.faqTitle}</h2> : null}
            <div className="mt-4 space-y-4">
              {asArray(config.faq).map((entry: any) => (
                <div key={entry.question}>
                  <h3 className="font-semibold">{entry.question}</h3>
                  <p className="mt-1 text-secondary/70 dark:text-accent/70">{entry.answer}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {config?.cta ? (
          <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
            {config.cta.overline ? <p className="text-sm uppercase tracking-wide text-primary-500">{config.cta.overline}</p> : null}
            {config.cta.title ? <h2 className="mt-2 text-2xl font-semibold">{config.cta.title}</h2> : null}
            {config.cta.body ? <p className="mt-3 text-secondary/70 dark:text-accent/70">{config.cta.body}</p> : null}
            <div className="mt-5 flex flex-wrap gap-3">
              {config.cta.primary?.href ? (
                <Link href={config.cta.primary.href} className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
                  {config.cta.primary.label}
                </Link>
              ) : null}
              {config.cta.secondary?.href ? (
                <Link href={config.cta.secondary.href} className="btn btn-primary-v2 dark:btn-transparent">
                  {config.cta.secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}
