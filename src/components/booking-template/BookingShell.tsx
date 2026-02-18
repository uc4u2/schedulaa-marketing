import { ReactNode } from 'react';
import Link from 'next/link';

type MenuItem = {
  id: string;
  label: string;
};

type CtaLink = {
  label: string;
  href: string;
};

type BookingShellProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  notice?: string;
  menuItems: MenuItem[];
  children: ReactNode;
};

export default function BookingShell({
  badge,
  title,
  subtitle,
  bullets = [],
  primaryCta,
  secondaryCta,
  notice,
  menuItems,
  children,
}: BookingShellProps) {
  return (
    <main className="bg-background-3 dark:bg-background-7 overflow-x-hidden pt-30 pb-20 md:pt-38 md:pb-24">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-12 lg:col-span-3">
            <div className="bg-background-1 dark:bg-background-6 sticky top-28 rounded-[20px] p-5 sm:p-6">
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-tagline-2 text-secondary dark:text-accent hover:text-primary-500 block rounded-[12px] px-3 py-2 transition"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-9">
            <section className="bg-background-1 dark:bg-background-6 rounded-[20px] p-6 sm:p-8">
              {badge ? <span className="badge badge-cyan">{badge}</span> : null}
              <h1 className="mt-5">{title}</h1>
              {subtitle ? <p className="mt-4 text-secondary/70 dark:text-accent/70">{subtitle}</p> : null}
              {bullets.length ? (
                <ul className="mt-6 list-inside list-disc space-y-2 text-secondary/80 dark:text-accent/80">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              {(primaryCta || secondaryCta) ? (
                <div className="mt-7 flex flex-wrap gap-3">
                  {primaryCta ? (
                    <Link href={primaryCta.href} className="btn btn-primary btn-md hover:btn-secondary dark:hover:btn-accent">
                      {primaryCta.label}
                    </Link>
                  ) : null}
                  {secondaryCta ? (
                    <Link href={secondaryCta.href} className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                      {secondaryCta.label}
                    </Link>
                  ) : null}
                </div>
              ) : null}
              {notice ? <p className="mt-5 text-tagline-2 text-secondary/65 dark:text-accent/65">{notice}</p> : null}
            </section>

            <div className="mt-6 space-y-6">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
