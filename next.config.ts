import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  async rewrites() {
    return [
      { source: '/en', destination: '/' },
      { source: '/fa', destination: '/' },
      { source: '/en/:path*', destination: '/:path*' },
      { source: '/fa/:path*', destination: '/:path*' },
    ];
  },
  images: {
    qualities: [25, 50, 75, 100],
  },
};

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

export default withNextIntl(nextConfig);
