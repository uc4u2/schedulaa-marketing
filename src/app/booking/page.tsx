import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { bookingPages } from '@/legacy-content/booking/config';

export default function BookingPage() {
  const source = bookingPages.hub as any;
  const page = {
    ...source,
    highlights: [
      ...(source.highlights || []),
      source.managerControls,
      source.invitations,
      source.checkout,
    ].filter(Boolean),
  };

  return <FeatureStyleContentPage config={page} routePath="/booking" />;
}
