import EnterpriseFeaturesPage from '@/components/features/EnterpriseFeaturesPage';
import { defaultMetadata } from '@/utils/generateMetaData';
import { AppLocale } from '@/utils/locale';
import { headers } from 'next/headers';
import { Metadata } from 'next';

const getLocale = async (): Promise<AppLocale> => {
  const h = await headers();
  return h.get('x-locale') === 'fa' ? 'fa' : 'en';
};

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Features | Schedulaa',
  description: 'Explore Schedulaa features for scheduling, booking, payroll workflows, websites, and enterprise operations.',
  openGraph: {
    title: 'Features | Schedulaa',
    description: 'Explore Schedulaa features for scheduling, booking, payroll workflows, websites, and enterprise operations.',
    url: 'https://www.schedulaa.com/en/features',
  },
  twitter: {
    title: 'Features | Schedulaa',
    description: 'Explore Schedulaa features for scheduling, booking, payroll workflows, websites, and enterprise operations.',
  },
};

export default async function FeaturesPage() {
  const locale = await getLocale();
  return <EnterpriseFeaturesPage locale={locale} />;
}
