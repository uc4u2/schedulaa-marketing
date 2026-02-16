import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  images: {
    qualities: [25, 50, 75, 100],
  },
};

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

export default withNextIntl(nextConfig);
