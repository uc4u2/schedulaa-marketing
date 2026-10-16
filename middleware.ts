import { NextResponse, type NextRequest } from 'next/server';

import { DEFAULT_LOCALE, isSupportedLocale } from '@/utils/locale';
import { hasTranslatedRoute } from '@/lib/seo/localization';

const PUBLIC_FILE = /\.(.*)$/;
const LEGACY_REDIRECTS: Record<string, string> = {
  '/payroll/adp': '/compare/adp',
  '/payroll/gusto': '/compare/gusto',
  '/legal/support-access-consent': '/terms',
  '/return-policy': '/refund-policy',
};

const normalizePath = (pathname: string) => {
  if (!pathname) {
    return '/';
  }
  if (pathname === '/') {
    return pathname;
  }
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
};

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

// Next can stream a noindex not-found shell with a 200 status for dynamic
// segments. Keep single-page route exclusions lightweight here so the
// intentionally absent counterpart returns an explicit 404 without bundling
// the full comparison catalog into middleware.
const COMPARE_ONLY_ALTERNATIVE_PATHS = new Set([
  '/alternatives/wix-bookings',
  '/alternatives/wordpress-booking-plugins',
  '/alternatives/squarespace-scheduling',
]);

const ALTERNATIVES_ONLY_COMPARE_PATHS = new Set([
  '/compare/glossgenius',
]);

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
  const segments = pathname.split('/').filter(Boolean);
  const maybeLocale = segments[0];

  // A locale-prefixed sitemap is a legacy duplicate of the one marketing
  // sitemap. Redirect it before the public-file short circuit so search
  // engines only discover the canonical sitemap URL.
  if (
    segments.length === 2 &&
    isSupportedLocale(maybeLocale) &&
    segments[1] === 'sitemap.xml'
  ) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/sitemap.xml';
    redirectUrl.search = '';
    return NextResponse.redirect(redirectUrl, 308);
  }

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

    if (
      COMPARE_ONLY_ALTERNATIVE_PATHS.has(normalizedPath) ||
      ALTERNATIVES_ONLY_COMPARE_PATHS.has(normalizedPath)
    ) {
      return new NextResponse('Not Found', { status: 404 });
    }

    if (legacyTarget) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = `/${maybeLocale}${legacyTarget}`;
      redirectUrl.search = search;
      return NextResponse.redirect(redirectUrl, 308);
    }

    if (maybeLocale !== 'en' && !hasTranslatedRoute(normalizedPath, maybeLocale)) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = `/en${normalizedPath === '/' ? '' : normalizedPath}`;
      redirectUrl.search = search;
      const response = NextResponse.redirect(redirectUrl, 308);
      response.cookies.set('NEXT_LOCALE', 'en', { path: '/', sameSite: 'lax' });
      return response;
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
    redirectUrl.pathname = `/en${legacyTarget}`;
    redirectUrl.search = search;
    return NextResponse.redirect(redirectUrl, 308);
  }

  const redirectUrl = request.nextUrl.clone();
  if (pathname === '/') {
    redirectUrl.pathname = `/${locale}`;
    redirectUrl.search = search;
    return NextResponse.redirect(redirectUrl);
  }

  // Non-prefixed content paths are permanent legacy aliases. Public search
  // URLs always use an explicit locale, with English as the stable default.
  redirectUrl.pathname = `/en${pathname}`;
  redirectUrl.search = search;
  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
