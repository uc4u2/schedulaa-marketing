import IndustryBookingLanding from '@/components/booking/IndustryBookingLanding';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Salon Booking Software | Schedulaa',
  description:
    'Run salon booking, staff scheduling, deposits, reminders, and checkout workflows in one platform built for service teams.',
};

export default function SalonBookingPage() {
  return (
    <IndustryBookingLanding
      overline="Salon booking"
      title="Salon booking software that keeps chairs full and schedules in sync"
      intro="Salon operations break when bookings, calendars, no-show controls, and payroll hours live in separate systems. This page explains how Schedulaa helps salon owners run appointment flow, team allocation, and follow-up campaigns from one workspace."
      sections={[
        {
          heading: 'Make booking the operational source of truth',
          paragraphs: [
            'Most salons start with a booking widget, then add spreadsheets for shift planning, manual SMS reminders, and separate payroll tools for timesheets. The result is inconsistent data: appointments do not match worked hours, service add-ons are missed at checkout, and managers spend evenings reconciling what happened.',
            'Schedulaa treats booking as the first record in an operational timeline. When a client books a service, the reservation is tied to service duration, assigned staff, and room or chair constraints. That same booking can feed availability decisions, staffing views, and payroll-ready summaries without manual copy/paste.',
            'Because appointments and staffing rules are connected, teams can avoid overbooking senior stylists while junior staff sit idle. This balance matters for revenue and retention. A full day with uneven assignment often looks good on paper but creates burnout and quality issues in practice.',
          ],
        },
        {
          heading: 'Control no-shows, deposits, and add-ons without patchwork',
          paragraphs: [
            'Salon margins are sensitive to no-shows and late cancellations. Schedulaa supports deposit-first flows and reminder automation so front desk teams are not manually chasing confirmations. Clear booking rules reduce disputes and make expectations visible to clients before checkout.',
            'Add-ons are another hidden leakage point. If color, treatment, extensions, or product upsells are tracked outside the booking flow, reporting becomes unreliable. Schedulaa lets teams attach add-ons to appointment records so service value, staff time, and revenue are measured in one view.',
            'That visibility is important for multi-location owners. You can compare service mix by branch, understand which packages actually lift ticket size, and identify where discounting is cutting margin. Decisions become data-backed instead of anecdotal.',
          ],
        },
        {
          heading: 'From booking to schedule to payroll',
          paragraphs: [
            'A salon does not just need an appointment calendar. It needs a complete loop from client booking to employee hours and final payout. Schedulaa connects approved time with payroll workflows so overtime, bonuses, or tip-related adjustments are reviewed in context.',
            'This does not mean you need to change every process in one day. Teams can adopt the booking and scheduling layer first, then phase in payroll exports and compliance documents as operations mature. The important part is that data structure stays consistent from the beginning.',
            'When disputes happen, managers can check the same timeline everyone else used: booking timestamp, assignment change, attendance logs, and pay period records. That audit trail reduces friction between front desk, managers, and finance.',
          ],
        },
        {
          heading: 'Designed for salons with growth plans',
          paragraphs: [
            'The platform works for single-location boutiques and expanding brands. If you open a second location, you can keep brand consistency while handling local staffing differences. If you add education classes or events, booking and customer history remain connected.',
            'Marketing teams can launch campaigns based on booking behavior instead of static lists. Re-engagement offers for inactive clients, reminders for recurring treatments, and follow-up sequences after premium services can all be driven from actual appointment data.',
            'This is where a salon booking page becomes more than a calendar. It becomes the system that ties client demand, staff capacity, and financial outcomes together so growth does not create operational chaos.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Can salon teams use this without replacing every tool immediately?',
          answer:
            'Yes. Many teams start with booking and scheduling first, then add payroll exports and deeper automation after baseline workflows are stable.',
        },
        {
          question: 'Does this support deposits and cancellation control?',
          answer:
            'Yes. You can run deposit-aware booking and reminder flows so no-show risk is reduced before it affects staffing and daily revenue.',
        },
        {
          question: 'Can I compare performance across locations?',
          answer:
            'Yes. Booking, add-on, and staffing metrics can be reviewed across branches so owners can spot demand trends and margin issues faster.',
        },
        {
          question: 'How does this help payroll accuracy?',
          answer:
            'Bookings, schedule assignments, and worked-time records stay aligned, reducing manual reconciliation before payroll review.',
        },
      ]}
      compareLinks={[
        { href: '/compare/vagaro', label: 'Schedulaa vs Vagaro' },
        { href: '/compare/square-appointments', label: 'Schedulaa vs Square Appointments' },
      ]}
    />
  );
}
