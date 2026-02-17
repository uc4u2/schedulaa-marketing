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
      {eyebrow ? <p className="premium-eyebrow">{eyebrow}</p> : null}
      <h2 className="premium-heading mt-3 text-[2rem] leading-[1.12] font-semibold md:text-[2.6rem]">{title}</h2>
      {description ? <p className="mt-4 max-w-[760px] text-tagline-1 text-secondary/72 dark:text-accent/72">{description}</p> : null}
    </div>
  );
}
