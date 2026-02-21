import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const LOCALES = ['en', 'fa', 'ru', 'zh', 'es', 'fr', 'de', 'ar', 'pt'] as const;
const LEGACY_ALIASES: Array<{ from: string; to: string }> = [
  { from: '/services', to: '/features' },
  { from: '/contact-us', to: '/contact' },
  { from: '/support', to: '/client/support' },
  { from: '/terms-conditions', to: '/terms' },
];

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  async rewrites() {
    return [
      ...LEGACY_ALIASES.map((alias) => ({ source: alias.from, destination: alias.to })),
      ...LOCALES.flatMap((locale) =>
        LEGACY_ALIASES.map((alias) => ({
          source: `/${locale}${alias.from}`,
          destination: alias.to,
        })),
      ),
      ...LOCALES.map((locale) => ({ source: `/${locale}`, destination: '/' })),
      ...LOCALES.map((locale) => ({ source: `/${locale}/:path*`, destination: '/:path*' })),
    ];
  },
  images: {
    qualities: [25, 50, 75, 100],
  },
};

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

export default withNextIntl(nextConfig);
