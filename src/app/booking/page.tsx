import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { getBookingSource } from '@/legacy-content/booking/getBookingSource';
import { getServerLocale } from '@/utils/serverLocale';

export default async function BookingPage() {
  const locale = await getServerLocale();
  const bookingPages = getBookingSource(locale);
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
