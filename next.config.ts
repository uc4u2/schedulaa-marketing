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
      { source: '/services', destination: '/features' },
      { source: '/contact-us', destination: '/contact' },
      { source: '/support', destination: '/client/support' },
      { source: '/terms-conditions', destination: '/terms' },
      { source: '/en/services', destination: '/features' },
      { source: '/en/contact-us', destination: '/contact' },
      { source: '/en/support', destination: '/client/support' },
      { source: '/en/terms-conditions', destination: '/terms' },
      { source: '/fa/services', destination: '/features' },
      { source: '/fa/contact-us', destination: '/contact' },
      { source: '/fa/support', destination: '/client/support' },
      { source: '/fa/terms-conditions', destination: '/terms' },
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
