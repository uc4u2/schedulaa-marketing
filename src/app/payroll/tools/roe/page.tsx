import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { getPayrollSource } from '@/legacy-content/payroll/getPayrollSource';
import { getServerLocale } from '@/utils/serverLocale';
import { buildLocalizedPageMetadata } from '@/lib/seo/pageMetadata';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const meta = getPayrollSource(locale).roe.meta;
  return buildLocalizedPageMetadata({
    locale,
    path: '/payroll/tools/roe',
    title: meta.title,
    description: meta.description,
    image: meta.og.image,
    openGraphTitle: meta.og.title,
    openGraphDescription: meta.og.description,
    twitterTitle: meta.twitter.title,
    twitterDescription: meta.twitter.description,
  });
}

export default async function PayrollRoePage() {
  const locale = await getServerLocale();
  const payrollPages = getPayrollSource(locale);
  return <FeatureStyleContentPage config={payrollPages.roe as any} routePath="/payroll/tools/roe" />;
}
