import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { getBookingSource } from '@/legacy-content/booking/getBookingSource';
import { getServerLocale } from '@/utils/serverLocale';

export default async function BookingPage() {
  const locale = await getServerLocale();
  const bookingPages = getBookingSource(locale);
  const source = bookingPages.hub as any;
  const coreHighlights = (source.highlights || []).slice(0, 3);
  const growthHighlights = (source.highlights || []).slice(3);
  const page = {
    ...source,
    highlights: [],
    sections: [
      {
        overline: 'Core booking workflows',
        title: 'Run booking, provider choice, and team availability from one operational layer',
        body: 'Schedulaa connects client-side slot selection with provider matching, team calendar controls, and public booking links so the booking flow does not break when operations change.',
        items: coreHighlights,
      },
      {
        overline: 'Packages and capacity',
        title: 'Handle prepaid credits and shared-capacity sessions without extra tools',
        body: 'Prepaid packages and group classes sit inside the same booking flow, so teams can sell credits in advance, apply them cleanly at checkout, and protect seat limits.',
        items: growthHighlights,
      },
      {
        overline: 'Operations and checkout',
        title: 'Keep invitations, manager controls, and Stripe checkout tied to the booking record',
        body: 'Manager controls, intake forms, and payment collection stay connected to the live booking flow so staff and clients are always looking at the same source of truth.',
        items: [source.managerControls, source.invitations, source.checkout].filter(Boolean),
      },
    ],
  };

  return <FeatureStyleContentPage config={page} routePath="/booking" />;
}
