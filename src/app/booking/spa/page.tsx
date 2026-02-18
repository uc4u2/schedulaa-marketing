import IndustryBookingTemplate from '@/components/booking-template/IndustryBookingTemplate';
import { generateMetadata as buildPageMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...buildPageMetadata(
    'Spa Booking Software for Therapists & Rooms | Schedulaa',
    'Coordinate spa appointments, treatment rooms, therapist schedules, packages, reminders, and deposits in one operations platform—built for multi-staff spa teams.',
    'https://www.schedulaa.com/booking/spa',
  ),
  title: 'Spa Booking Software for Therapists & Rooms | Schedulaa',
  description:
    'Coordinate spa appointments, treatment rooms, therapist schedules, packages, reminders, and deposits in one operations platform—built for multi-staff spa teams.',
};

export default function SpaBookingPage() {
  return (
    <IndustryBookingTemplate
      overline="Spa booking"
      title="Spa booking software for therapists, rooms, and recurring treatment plans"
      intro="Spa teams do not run on a simple calendar. You are balancing therapist availability, treatment rooms, equipment, service durations, packages, memberships, and last-minute changes while still protecting revenue and guest experience. Schedulaa is spa booking software designed for service businesses that need more than pick-a-time-slot scheduling."
      sections={[
        {
          heading: 'Why spa booking breaks as you grow',
          paragraphs: [
            'When you are small, spreadsheets and generic schedulers can feel good enough. As soon as you add more therapists, room types, service tiers, and promotions, operations fragment quickly. A therapist can be free while the room is not. A room can be free while equipment is booked. Peak windows trigger double-booking risk and front-desk reschedule stress.',
            'Package usage is often tracked manually, cancellation rules are applied inconsistently, and reporting is completed after the fact. In spa operations, the cost of these workflow gaps is high because service blocks are long, staff are specialized, and peak inventory is limited. A missed premium slot is not easily recovered.',
            'Schedulaa addresses this by keeping booking, staffing context, and operational reporting connected in one workflow. Teams spend less time fixing conflicts and more time delivering predictable service quality.',
          ],
        },
        {
          heading: 'What Schedulaa supports for spa operations',
          paragraphs: [
            'Schedulaa brings spa scheduling, booking workflows, and operational visibility into one platform so front desk teams can confirm appointments with confidence and managers can run service days with fewer surprises.',
          ],
        },
        {
          heading: '1) Coordinate therapist schedules with room availability',
          paragraphs: [
            'Spa services are constrained by people and space. A booking is only valid when both therapist and room are available. Schedulaa supports resource-aware planning so teams reduce accidental overlaps, last-minute room swaps, and avoidable guest delays before they happen.',
            'This is especially important during weekends, holidays, and campaign-driven peaks. Instead of discovering conflicts after confirmation, staff can validate real capacity first. The result is smoother appointment flow and less manual intervention during high-pressure windows.',
            'Result: fewer front-desk emergencies, improved on-time starts, and more predictable day-to-day operations.',
          ],
        },
        {
          heading: '2) Run package and membership-friendly booking',
          paragraphs: [
            'Spa clients frequently purchase treatment series, wellness bundles, or recurring plans. When package logic sits outside the booking system, teams struggle to confirm what is included, what remains, and what was upgraded. Schedulaa keeps booking history connected to service records so package usage remains transparent.',
            'This reduces billing confusion and helps staff answer questions faster without manual lookups. Managers also gain clearer repeat-visit signals and retention patterns because history is organized and consistent.',
            'Result: cleaner operations, better client trust, and less reconciliation overhead.',
          ],
        },
        {
          heading: '3) Reduce no-shows with deposits and proactive reminders',
          paragraphs: [
            'No-shows are expensive in spa businesses because premium durations and prime slots are difficult to refill. Schedulaa supports booking workflows that help teams reduce missed appointments and protect high-value capacity.',
            'Teams can enforce consistent cancellation expectations, support deposit-ready booking experiences, and run proactive reminders that lower late-cancel risk.',
            'Result: better attendance and more predictable revenue from your highest-value service windows.',
          ],
        },
        {
          heading: '4) Keep booking outcomes connected to staffing and payroll',
          paragraphs: [
            'Spa profitability depends on how well bookings translate into efficient staffing. Schedulaa helps managers align service demand with therapist schedules so they can plan with better confidence and less guesswork.',
            'When operational data is structured, teams can validate attendance and service volume before payroll export and reporting. Even when filings remain external, your workforce and service records are consistent and auditable.',
            'Result: fewer disputes, better utilization, and stronger operational control across busy weeks.',
          ],
        },
        {
          heading: 'Who this spa booking software is built for',
          paragraphs: [
            'Schedulaa works best for service businesses that need operational control: spas and wellness studios with multiple therapists, clinics offering recurring bundles, and multi-location teams coordinating shifts and approvals.',
            'If your team has outgrown basic booking tools and spends too much time on manual cleanup, this is the category we are designed for.',
          ],
        },
        {
          heading: 'Spa booking vs generic scheduling tools',
          paragraphs: [
            'Many products can schedule a time slot. Spa operations need more than that. Generic booking tools often break down on room-level constraints, package usage workflows, and staffing/reporting continuity.',
            'As teams scale, exceptions become the system. Schedulaa is designed to run booking and operations end-to-end so appointment management does not become daily firefighting.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Can this handle room-based scheduling constraints?',
          answer:
            'Yes. Schedulaa supports resource-aware planning so spa teams can reduce room conflicts and avoid accidental overlaps before confirming appointments.',
        },
        {
          question: 'Is it suitable for packages and memberships?',
          answer:
            'Yes. Booking history can be tied to service records so package usage is transparent and staff can answer client questions quickly without manual tracking.',
        },
        {
          question: 'Does it help reduce no-shows?',
          answer:
            'Yes. Deposit-ready booking flows and proactive reminders help reduce missed appointments and protect high-value service time blocks.',
        },
        {
          question: 'Can it support multi-therapist, multi-service spas?',
          answer:
            'Yes. Schedulaa is built for multi-staff scheduling and can support multiple therapists, service tiers, and operational workflows as teams scale.',
        },
        {
          question: 'Do you replace payroll filing providers?',
          answer:
            'No. Schedulaa is an operations OS that keeps scheduling and time data structured and auditable so payroll exports and reporting are correct before they happen. Filing can still be handled by your payroll provider.',
        },
      ]}
      compareLinks={[
        { href: '/compare/vagaro', label: 'Schedulaa vs Vagaro' },
        { href: '/compare/square-appointments', label: 'Schedulaa vs Square Appointments' },
        { href: '/compare/homebase', label: 'Schedulaa vs Homebase' },
      ]}
      faqJsonLd={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can this handle room-based scheduling constraints?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Schedulaa supports resource-aware planning so spa teams can reduce room conflicts and avoid accidental overlaps before confirming appointments.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is it suitable for packages and memberships?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Booking history can be tied to service records so package usage is transparent and staff can answer client questions quickly without manual tracking.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does it help reduce no-shows?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Deposit-ready booking flows and proactive reminders help reduce missed appointments and protect high-value service time blocks.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can it support multi-therapist, multi-service spas?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Schedulaa is built for multi-staff scheduling and can support multiple therapists, service tiers, and operational workflows as teams scale.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you replace payroll filing providers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Schedulaa is an operations OS that keeps scheduling and time data structured and auditable so payroll exports and reporting are correct before they happen. Filing can still be handled by your payroll provider.',
            },
          },
        ],
      }}
    />
  );
}
