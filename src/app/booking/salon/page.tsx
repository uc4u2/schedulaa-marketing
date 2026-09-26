import SalonBookingLandingPage from '@/components/booking/SalonBookingLandingPage';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { salonBookingMetadata } from '@/lib/seo/bookingMetadata';

export const metadata: Metadata = {
  ...defaultMetadata,
  ...salonBookingMetadata,
};

export default function SalonBookingPage() {
  return <SalonBookingLandingPage />;
}
