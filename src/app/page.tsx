import { headers } from 'next/headers';
import { Metadata } from 'next';
import HomeForexLayout from '@/components/forex-skin/home/HomeForexLayout';
import { defaultMetadata } from '@/utils/generateMetaData';
import { AppLocale } from '@/utils/locale';

const getLocale = async (): Promise<AppLocale> => {
  const h = await headers();
  return h.get('x-locale') === 'fa' ? 'fa' : 'en';
};

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Schedulaa | Scheduling, Booking, Payroll and Websites',
  description:
    'Schedulaa gives service teams one operating system for booking, workforce scheduling, payroll-ready exports, and website commerce.',
  openGraph: {
    title: 'Schedulaa | Scheduling, Booking, Payroll and Websites',
    description:
      'Schedulaa gives service teams one operating system for booking, workforce scheduling, payroll-ready exports, and website commerce.',
    url: 'https://www.schedulaa.com/en',
  },
  twitter: {
    title: 'Schedulaa | Scheduling, Booking, Payroll and Websites',
    description:
      'Schedulaa gives service teams one operating system for booking, workforce scheduling, payroll-ready exports, and website commerce.',
  },
};

export default async function Homepage() {
  const locale = await getLocale();

  return <HomeForexLayout locale={locale} />;
}
