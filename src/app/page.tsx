import { Metadata } from 'next';
import HomeForexLayout from '@/components/forex-skin/home/HomeForexLayout';
import { defaultMetadata } from '@/utils/generateMetaData';
import { getServerLocale } from '@/utils/serverLocale';

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
  const locale = await getServerLocale();

  return <HomeForexLayout locale={locale} />;
}
