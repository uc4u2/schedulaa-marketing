'use client';

import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { trackMetaPixel } from '@/utils/metaPixel';
import { trackAnalyticsEvent } from '@/utils/analytics';

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  eventName?: string;
  eventParams?: Record<string, unknown>;
  analyticsCta?: {
    name: string;
    pagePath: string;
    placement: string;
  };
};

export default function TrackedLink({
  href,
  children,
  eventName,
  eventParams,
  analyticsCta,
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
        if (analyticsCta) {
          trackAnalyticsEvent('primary_cta_click', {
            cta_name: analyticsCta.name,
            page_path: analyticsCta.pagePath,
            destination: href,
            placement: analyticsCta.placement,
          });
        }
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
