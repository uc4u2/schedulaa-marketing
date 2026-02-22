import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const LOCALES = ['en', 'fa', 'ru', 'zh', 'es', 'fr', 'de', 'ar', 'pt'];
const LEGACY_ALIAS_ROUTES = [
  { source: '/services', destination: '/features' },
  { source: '/contact-us', destination: '/contact' },
  { source: '/support', destination: '/client/support' },
  { source: '/terms-conditions', destination: '/terms' },
];

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  async rewrites() {
    const localeRewrites = LOCALES.flatMap((locale) => [
      ...LEGACY_ALIAS_ROUTES.map((route) => ({
        source: `/${locale}${route.source}`,
        destination: route.destination,
      })),
      { source: `/${locale}`, destination: '/' },
      { source: `/${locale}/:path*`, destination: '/:path*' },
    ]);

    return [
      ...LEGACY_ALIAS_ROUTES,
      ...localeRewrites,
    ];
  },
  images: {
    qualities: [25, 50, 75, 100],
  },
};

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

export default withNextIntl(nextConfig);
