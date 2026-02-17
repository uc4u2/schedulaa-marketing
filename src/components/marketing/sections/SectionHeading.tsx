import { ReactNode } from 'react';

import { cn } from '@/utils/cn';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export default function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-[860px]', className)}>
      {eyebrow ? <p className="text-tagline-3 font-semibold tracking-[0.2em] text-primary-500 uppercase">{eyebrow}</p> : null}
      <h2 className="mt-3 text-heading-4 md:text-heading-3">{title}</h2>
      {description ? <p className="mt-3 text-tagline-1 text-secondary/70 dark:text-accent/70">{description}</p> : null}
    </div>
  );
}
