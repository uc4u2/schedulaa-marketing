import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { DEFAULT_LOCALE, isSupportedLocale } from '@/utils/locale';

const PUBLIC_FILE = /\.(.*)$/;
const KNOWN_BUT_UNSUPPORTED = new Set(['ru', 'zh']);
const LEGACY_REDIRECTS: Record<string, string> = {
  '/platform': '/features',
  '/about': '/features',
  '/help/domains': '/docs',
  '/marketing/email-campaigns': '/marketing',
  '/marketing/analytics-dashboard': '/marketing',
  '/marketing/clients-360': '/marketing',
  '/booking/salon': '/booking',
  '/booking/spa': '/booking',
  '/booking/tutor': '/booking',
  '/booking/doctor': '/booking',
  '/payroll/adp': '/compare/adp',
  '/payroll/gusto': '/compare/gusto',
  '/cookie': '/privacy',
  '/acceptable-use': '/terms',
  '/data-processing': '/privacy',
  '/security': '/terms',
  '/user-agreement': '/terms',
  '/legal/support-access-consent': '/terms',
};

const normalizePath = (pathname: string) => {
  if (!pathname) return '/';
  if (pathname === '/') return pathname;
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
};

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const internalLocale = request.headers.get('x-locale');

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap.xml') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);
  const maybeLocale = segments[0];

  if (isSupportedLocale(maybeLocale)) {
    const rest = segments.slice(1).join('/');
    const rewritePath = rest ? `/${rest}` : '/';
    const normalizedPath = normalizePath(rewritePath);
    const legacyTarget = LEGACY_REDIRECTS[normalizedPath];

    if (legacyTarget) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = `/${maybeLocale}${legacyTarget}`;
      redirectUrl.search = search;
      return NextResponse.redirect(redirectUrl);
    }

    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = normalizedPath;

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', maybeLocale);
    const response = NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
    response.cookies.set('NEXT_LOCALE', maybeLocale, { path: '/', sameSite: 'lax' });
    return response;
  }

  if (maybeLocale && KNOWN_BUT_UNSUPPORTED.has(maybeLocale)) {
    const rest = segments.slice(1).join('/');
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = rest ? `/${DEFAULT_LOCALE}/${rest}` : `/${DEFAULT_LOCALE}`;
    redirectUrl.search = search;
    return NextResponse.redirect(redirectUrl);
  }

  // Prevent rewrite->redirect loops: locale-prefixed URLs are rewritten to
  // non-prefixed internal routes with x-locale set.
  if (internalLocale && isSupportedLocale(internalLocale)) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const locale = isSupportedLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;
  const normalizedPath = normalizePath(pathname);
  const legacyTarget = LEGACY_REDIRECTS[normalizedPath];

  if (legacyTarget) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${locale}${legacyTarget}`;
    redirectUrl.search = search;
    return NextResponse.redirect(redirectUrl);
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
  redirectUrl.search = search;
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
