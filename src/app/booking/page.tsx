import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { bookingPages } from '@/legacy-content/booking/config';

export default function BookingPage() {
  return <LegacyConfigPage config={bookingPages.hub} />;
}
