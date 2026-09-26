'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { GA_MEASUREMENT_ID, isGoogleAnalyticsEnabled } from '@/utils/analytics';
import {
  appendAttributionToAppUrl,
  ATTRIBUTION_KEYS,
  captureCampaignAttribution,
} from '@/utils/attribution';

const safePageLocation = (pathname: string, searchParams: URLSearchParams) => {
  const url = new URL(pathname, window.location.origin);
  for (const key of ATTRIBUTION_KEYS) {
    const value = searchParams.get(key);
    if (value) {
      url.searchParams.set(key, value.slice(0, 300));
    }
  }
  return url.toString();
};

export default function GoogleAnalytics() {
  const pathname = usePathname() || '/';
  const searchParams = useSearchParams();
  const lastPageRef = useRef('');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    captureCampaignAttribution(window.location.search);
  }, [pathname, searchParams]);

  useEffect(() => {
    const onAppLinkClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }
      const anchor = target.closest('a[href]');
      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }
      anchor.href = appendAttributionToAppUrl(anchor.href);
    };
    document.addEventListener('click', onAppLinkClick, true);
    return () => document.removeEventListener('click', onAppLinkClick, true);
  }, []);

  useEffect(() => {
    if (!ready || !isGoogleAnalyticsEnabled() || typeof window.gtag !== 'function') {
      return;
    }
    const pageKey = pathname;
    if (lastPageRef.current === pageKey) {
      return;
    }
    lastPageRef.current = pageKey;
    window.gtag('event', 'page_view', {
      page_path: pathname,
      page_location: safePageLocation(pathname, searchParams),
      page_title: document.title,
    });
  }, [pathname, ready, searchParams]);

  if (!isGoogleAnalyticsEnabled()) {
    return null;
  }

  return (
    <>
      <Script
        id="google-analytics-library"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-config"
        strategy="afterInteractive"
        onReady={() => setReady(true)}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){dataLayer.push(arguments);};
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false,
            cookie_domain: 'auto'
          });
        `}
      </Script>
    </>
  );
}
