'use client';

import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { trackMetaPixel } from '@/utils/metaPixel';

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  eventName?: string;
  eventParams?: Record<string, unknown>;
};

export default function TrackedLink({
  href,
  children,
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      onClick={(event) => {
        if (eventName) {
          trackMetaPixel(eventName, eventParams);
        }
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
