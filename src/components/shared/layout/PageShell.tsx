import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

type PageHeaderProps = {
  badge?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
};

type PageShellProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  sectionClassName?: string;
  header?: PageHeaderProps;
};

const PageHeader = ({ badge, title, description, actions, className }: PageHeaderProps) => (
  <div className={cn('rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12', className)}>
    {badge ? <div>{badge}</div> : null}
    {title ? <div className="mt-5">{title}</div> : null}
    {description ? <div className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">{description}</div> : null}
    {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
  </div>
);

export default function PageShell({
  children,
  className,
  containerClassName,
  sectionClassName,
  header,
}: PageShellProps) {
  return (
    <main className={cn('bg-background-3 pt-44 pb-24 dark:bg-background-7', className)}>
      <section className={cn('main-container px-5', containerClassName)}>
        {header ? <PageHeader {...header} /> : null}
        <div className={cn(header ? 'mt-8 space-y-8' : 'space-y-8', sectionClassName)}>{children}</div>
      </section>
    </main>
  );
}
