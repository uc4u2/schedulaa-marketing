'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const SITE_URL = 'https://www.schedulaa.com';

const normalizePathname = (pathname: string) => {
  if (!pathname) return '/en';
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname;
};

export default function CanonicalLink() {
  const pathname = usePathname() || '/en';

  useEffect(() => {
    const canonicalHref = `${SITE_URL}${normalizePathname(pathname)}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalHref);
  }, [pathname]);

  return null;
}
