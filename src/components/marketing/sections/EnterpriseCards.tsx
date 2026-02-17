import Link from 'next/link';

type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
};

export const MetricCard = ({ label, value, detail }: MetricCardProps) => (
  <article className="rounded-[20px] border border-stroke-2 bg-white p-5 shadow-1 dark:border-stroke-7 dark:bg-background-8">
    <p className="text-tagline-3 uppercase tracking-[0.16em] text-primary-500">{label}</p>
    <p className="mt-3 text-3xl font-semibold text-secondary dark:text-accent">{value}</p>
    <p className="mt-2 text-tagline-2 text-secondary/70 dark:text-accent/70">{detail}</p>
  </article>
);

type PillarCardProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

export const PillarCard = ({ title, description, href, cta }: PillarCardProps) => (
  <article className="rounded-[20px] border border-stroke-2 bg-white p-6 shadow-1 transition hover:-translate-y-0.5 hover:shadow-2 dark:border-stroke-7 dark:bg-background-8">
    <h3 className="text-heading-6 font-semibold">{title}</h3>
    <p className="mt-3 text-tagline-1 text-secondary/70 dark:text-accent/70">{description}</p>
    <Link href={href} className="mt-4 inline-flex text-tagline-2 font-semibold text-primary-500">
      {cta}
    </Link>
  </article>
);

type MiniLinkCardProps = {
  title: string;
  description: string;
  href: string;
};

export const MiniLinkCard = ({ title, description, href }: MiniLinkCardProps) => (
  <Link
    href={href}
    className="block rounded-[20px] border border-stroke-2 bg-white p-5 shadow-1 transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-2 dark:border-stroke-7 dark:bg-background-8"
  >
    <h3 className="text-heading-6 font-semibold">{title}</h3>
    <p className="mt-2 text-tagline-2 text-secondary/70 dark:text-accent/70">{description}</p>
  </Link>
);
