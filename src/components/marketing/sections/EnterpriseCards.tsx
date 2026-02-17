import Link from 'next/link';

type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
};

export const MetricCard = ({ label, value, detail }: MetricCardProps) => (
  <article className="premium-card rounded-[20px] p-6 dark:border-stroke-7 dark:bg-background-8">
    <p className="premium-eyebrow">{label}</p>
    <p className="premium-heading mt-3 text-[2rem] leading-[1.05] font-semibold text-secondary dark:text-accent">{value}</p>
    <p className="mt-3 text-tagline-2 text-secondary/72 dark:text-accent/72">{detail}</p>
  </article>
);

type PillarCardProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

export const PillarCard = ({ title, description, href, cta }: PillarCardProps) => (
  <article className="premium-card rounded-[20px] p-6 transition hover:-translate-y-1 hover:shadow-3 dark:border-stroke-7 dark:bg-background-8">
    <h3 className="premium-heading text-[1.26rem] leading-[1.2] font-semibold">{title}</h3>
    <p className="mt-3 text-tagline-1 text-secondary/72 dark:text-accent/72">{description}</p>
    <Link href={href} className="premium-link mt-5 inline-flex text-tagline-2">
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
    className="premium-card block rounded-[20px] p-5 transition hover:-translate-y-1 hover:border-primary-300 hover:shadow-3 dark:border-stroke-7 dark:bg-background-8"
  >
    <h3 className="premium-heading text-[1.18rem] font-semibold">{title}</h3>
    <p className="mt-2 text-tagline-2 text-secondary/72 dark:text-accent/72">{description}</p>
  </Link>
);
