import Link from 'next/link';
import PageShell from '@/components/shared/layout/PageShell';
import Image from 'next/image';
import analyticsMain from '@public/images/marketing/analytics-main.png';
import analyticsA from '@public/images/marketing/analytics-side-a.png';
import analyticsB from '@public/images/marketing/analytics-side-b.png';

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

type Cfg = Record<string, any>;

const asArray = (v: any) => (Array.isArray(v) ? v : []);
const isPrimitive = (v: any) => ['string', 'number', 'boolean'].includes(typeof v);

const valueToDisplay = (value: any): string => {
  if (value == null) return '';
  if (isPrimitive(value)) return String(value);
  if (Array.isArray(value)) return value.map((entry) => valueToDisplay(entry)).filter(Boolean).join(', ');
  if (typeof value === 'object') {
    if (isPrimitive(value.label)) return String(value.label);
    const primitivePairs = Object.entries(value).filter(([, v]) => isPrimitive(v));
    if (primitivePairs.length) {
      return primitivePairs.map(([k, v]) => `${k}: ${String(v)}`).join(' | ');
    }
    try {
      return JSON.stringify(value);
    } catch {
      return '';
    }
  }
  return '';
};

const arrayToDisplay = (value: any): string[] =>
  asArray(value)
    .map((entry) => valueToDisplay(entry))
    .filter(Boolean);

const mapHref = (href: string) => {
  if (href === '/login') return `${APP_ORIGIN}/login`;
  if (href === '/register') return `${APP_ORIGIN}/register`;
  return href;
};

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
    <PageShell>
      <div className="grid gap-6 rounded-[24px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-8 shadow-box md:grid-cols-12 md:p-10">
        <div className="space-y-3 md:col-span-8">
          {hero.badge ? <p className="badge badge-yellow-v2">{valueToDisplay(hero.badge)}</p> : null}
          {hero.title ? <h1 className="mt-5 text-white">{valueToDisplay(hero.title)}</h1> : null}
          {hero.subtitle ? (
            <p className="mt-4 max-w-[900px] text-accent/70">{valueToDisplay(hero.subtitle)}</p>
          ) : null}
          {arrayToDisplay(hero.bullets).length > 0 ? (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-accent/80">
              {arrayToDisplay(hero.bullets).map((b: string) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            {hero.primaryCta?.href ? (
              <Link href={mapHref(hero.primaryCta.href)} className="btn btn-primary hover:btn-white dark:hover:btn-accent">
                {hero.primaryCta.label}
              </Link>
            ) : null}
            {hero.secondaryCta?.href ? (
              <Link href={mapHref(hero.secondaryCta.href)} className="btn btn-white dark:btn-transparent">
                {hero.secondaryCta.label}
              </Link>
            ) : null}
          </div>
          {notice ? <p className="mt-4 text-sm text-accent/70">{notice}</p> : null}
        </div>
        <div className="space-y-3 md:col-span-4">
          <figure className="overflow-hidden rounded-xl border border-stroke-7 bg-background-8 p-2">
            <Image src={analyticsMain} alt="Dashboard preview" className="h-[180px] w-full rounded-lg object-cover" />
          </figure>
          <div className="grid grid-cols-2 gap-3">
            <figure className="overflow-hidden rounded-xl border border-stroke-7 bg-background-8 p-2">
              <Image src={analyticsA} alt="Analytics panel" className="h-[92px] w-full rounded-lg object-cover" />
            </figure>
            <figure className="overflow-hidden rounded-xl border border-stroke-7 bg-background-8 p-2">
              <Image src={analyticsB} alt="Analytics panel" className="h-[92px] w-full rounded-lg object-cover" />
            </figure>
          </div>
        </div>
      </div>

        {sections.map((s: any, idx: number) => (
          <div key={`${s.title || s.label || 'section'}-${idx}`} className="rounded-[20px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-6 shadow-box md:p-8">
            {s.overline ? <p className="premium-eyebrow">{valueToDisplay(s.overline)}</p> : null}
            {s.title ? <h2 className="mt-2 text-2xl font-semibold text-white">{valueToDisplay(s.title)}</h2> : null}
            {s.body ? <p className="mt-3 text-accent/70">{valueToDisplay(s.body)}</p> : null}
            {s.description ? <p className="mt-3 text-accent/70">{valueToDisplay(s.description)}</p> : null}
            {s.content ? <p className="mt-3 text-accent/70">{valueToDisplay(s.content)}</p> : null}
            {arrayToDisplay(s.points).length > 0 ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-accent/80">
                {arrayToDisplay(s.points).map((p: string) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            ) : null}
            {asArray(s.items).length > 0 ? (
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {asArray(s.items).map((item: any, itemIdx: number) => (
                  <div key={`${item.title || 'item'}-${itemIdx}`} className="rounded-xl border border-stroke-7 bg-background-8 p-4">
                    {item.label ? <p className="text-xs uppercase tracking-wide text-primary-500">{item.label}</p> : null}
                    {item.title ? <h3 className="mt-2 text-lg font-semibold text-white">{valueToDisplay(item.title)}</h3> : null}
                    {item.body ? <p className="mt-2 text-sm text-accent/70">{valueToDisplay(item.body)}</p> : null}
                    {arrayToDisplay(item.points).length > 0 ? (
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-accent/80">
                        {arrayToDisplay(item.points).map((p: string) => (
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
                  <Link key={`${l.href}-${linkIdx}`} href={mapHref(l.href)} className="text-primary-300 underline">
                    {l.label}
                  </Link>
                ))}
              </div>
            ) : null}
            {asArray(s.actions).length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-3">
                {asArray(s.actions).map((l: any, linkIdx: number) => (
                  <Link key={`${l.href}-${linkIdx}`} href={mapHref(l.href)} className="text-primary-300 underline">
                    {l.label}
                  </Link>
                ))}
              </div>
            ) : null}
            {asArray(s.buttons).length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-3">
                {asArray(s.buttons).map((l: any, linkIdx: number) => (
                  <Link key={`${l.href}-${linkIdx}`} href={mapHref(l.href)} className="text-primary-300 underline">
                    {l.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        ))}

        {asArray(config?.steps).length > 0 ? (
          <div className="rounded-[20px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-6 shadow-box md:p-8">
            {config.stepsTitle ? <h2 className="text-2xl font-semibold text-white">{config.stepsTitle}</h2> : null}
            {config.stepsIntro ? <p className="mt-3 text-accent/70">{config.stepsIntro}</p> : null}
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-accent/80">
              {asArray(config.steps).map((step: any) => (
                <li key={valueToDisplay(step.title)}>
                  <strong>{valueToDisplay(step.title)}</strong>
                  {step.description ? ` - ${valueToDisplay(step.description)}` : ''}
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {asArray(config?.faq).length > 0 ? (
          <div className="rounded-[20px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-6 shadow-box md:p-8">
            {config.faqTitle ? <h2 className="text-2xl font-semibold text-white">{config.faqTitle}</h2> : null}
            <div className="mt-4 space-y-4">
              {asArray(config.faq).map((entry: any) => (
                <div key={valueToDisplay(entry.question)}>
                  <h3 className="font-semibold text-white">{valueToDisplay(entry.question)}</h3>
                  <p className="mt-1 text-accent/70">{valueToDisplay(entry.answer)}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {config?.cta ? (
          <div className="rounded-[20px] border border-stroke-7 bg-linear-[145deg,#12151f_0%,#171d2f_55%,#1f2c1d_100%] p-6 shadow-box md:p-8">
            {config.cta.overline ? <p className="text-sm uppercase tracking-wide text-primary-500">{config.cta.overline}</p> : null}
            {config.cta.title ? <h2 className="mt-2 text-2xl font-semibold text-white">{config.cta.title}</h2> : null}
            {config.cta.body ? <p className="mt-3 text-accent/70">{config.cta.body}</p> : null}
            <div className="mt-5 flex flex-wrap gap-3">
              {config.cta.primary?.href ? (
                <Link href={mapHref(config.cta.primary.href)} className="btn btn-primary hover:btn-white dark:hover:btn-accent">
                  {config.cta.primary.label}
                </Link>
              ) : null}
              {config.cta.secondary?.href ? (
                <Link href={mapHref(config.cta.secondary.href)} className="btn btn-white dark:btn-transparent">
                  {config.cta.secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        ) : null}
    </PageShell>
  );
}
