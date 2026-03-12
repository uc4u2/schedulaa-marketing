import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { DEFAULT_LOCALE, isSupportedLocale } from '@/utils/locale';

const PUBLIC_FILE = /\.(.*)$/;
const LEGACY_REDIRECTS: Record<string, string> = {
  '/payroll/adp': '/compare/adp',
  '/payroll/gusto': '/compare/gusto',
  '/legal/support-access-consent': '/terms',
};

const normalizePath = (pathname: string) => {
  if (!pathname) return '/';
  if (pathname === '/') return pathname;
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
};

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

const buildAppLegacyRedirect = (request: NextRequest, slug: string, kind: 'review' | 'tip', appointmentId: string) => {
  const redirectUrl = new URL(`${APP_ORIGIN.replace(/\/$/, '')}/${slug}/${kind}/${appointmentId}`);
  request.nextUrl.searchParams.forEach((value, key) => {
    redirectUrl.searchParams.set(key, value);
  });
  if (!redirectUrl.searchParams.has('source')) {
    redirectUrl.searchParams.set('source', 'marketing-legacy');
  }
  return redirectUrl;
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
    if (
      segments.length === 4 &&
      (segments[2] === 'review' || segments[2] === 'tip')
    ) {
      return NextResponse.redirect(
        buildAppLegacyRedirect(
          request,
          segments[1],
          segments[2] as 'review' | 'tip',
          segments[3]
        )
      );
    }

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
    requestHeaders.set('x-canonical-path', normalizedPath);
    const response = NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
    response.cookies.set('NEXT_LOCALE', maybeLocale, { path: '/', sameSite: 'lax' });
    return response;
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
