import IndustryBookingLanding from '@/components/booking/IndustryBookingLanding';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Spa Booking Software | Schedulaa',
  description:
    'Coordinate spa appointments, treatment rooms, therapist schedules, reminders, and deposits in a single operations platform.',
};

export default function SpaBookingPage() {
  return (
    <IndustryBookingLanding
      overline="Spa booking"
      title="Spa booking software for therapists, rooms, and recurring treatment plans"
      intro="Spa teams need more than a generic calendar. They need room-level coordination, therapist utilization, package tracking, and reliable reminders. This page outlines how Schedulaa supports spa operations from intake to checkout."
      sections={[
        {
          heading: 'Coordinate therapist schedules with room availability',
          paragraphs: [
            'Spa workflows are constrained by both people and space. A booking can fail even when a therapist is free if the treatment room or equipment is not. Schedulaa helps teams manage appointment flow with resource-aware planning so front desk staff avoid accidental overlaps.',
            'This matters most during peak hours, weekends, and seasonal promotions. Without room-aware scheduling, teams overcommit and then manually reschedule clients, which hurts trust and revenue. With a unified booking view, planners can see capacity before confirming an appointment.',
            'The result is smoother service delivery: fewer surprises for guests, less stress for therapists, and a predictable daily schedule for managers.',
          ],
        },
        {
          heading: 'Run membership and package-friendly booking flows',
          paragraphs: [
            'Spa clients often buy treatment series or recurring wellness plans. If package logic lives outside booking, teams struggle to verify what was consumed, what remains, and which services were upgraded. Schedulaa keeps booking history tied to service records, making package usage transparent.',
            'That transparency improves both operations and client communication. Teams can answer questions quickly, avoid billing confusion, and propose next treatments based on real visit history instead of guesswork. Managers gain cleaner reporting on package performance and repeat behavior.',
            'The same dataset can feed retention campaigns. If a guest has not returned within an expected cycle, marketing outreach can be targeted using actual appointment intervals.',
          ],
        },
        {
          heading: 'Protect margin with deposits and proactive reminders',
          paragraphs: [
            'No-shows are expensive in spa businesses because premium time slots often involve long service durations and specialized staff. Schedulaa supports reminder workflows and deposit-aware booking experiences that reduce late cancellations and improve attendance rates.',
            'When cancellation rules are clear and consistently enforced, teams spend less time handling exceptions. Staff can focus on guest experience instead of back-office cleanup. This discipline is essential when businesses scale across multiple practitioners and service tiers.',
            'If teams still need flexibility for VIP clients or special cases, workflows can handle those policies without losing visibility in reporting.',
          ],
        },
        {
          heading: 'Connect booking outcomes to workforce and payroll decisions',
          paragraphs: [
            'Spa profitability depends on how well bookings translate into efficient staffing. Schedulaa links booking records with schedule and hours data, giving managers a clearer picture of demand, utilization, and payout implications. This helps prevent overstaffing on low-demand days and understaffing during promotions.',
            'As teams grow, this connection also supports cleaner review cycles. Managers can validate attendance, service volume, and incentive assumptions before payroll export. Even if finance is handled externally, your operational data remains structured and auditable.',
            'Over time, these habits create a stronger operating rhythm: forecast demand better, schedule with confidence, and protect quality standards without exhausting your team.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Can the system handle room-based constraints?',
          answer:
            'Yes. Spa pages and scheduling workflows can be managed with resource awareness so room conflicts are reduced before confirmation.',
        },
        {
          question: 'Is this suitable for treatment packages and memberships?',
          answer:
            'Yes. Teams can tie booking history to service/package workflows and use that data for retention and rebooking campaigns.',
        },
        {
          question: 'Does it help reduce no-shows?',
          answer:
            'Yes. Reminder and deposit-ready workflows help reduce missed appointments and protect high-value service blocks.',
        },
        {
          question: 'Can this support multi-therapist, multi-service spas?',
          answer:
            'Yes. The platform is built to coordinate multiple therapists, services, and calendars while keeping reporting unified.',
        },
      ]}
      compareLinks={[
        { href: '/compare/vagaro', label: 'Schedulaa vs Vagaro' },
        { href: '/compare/homebase', label: 'Schedulaa vs Homebase' },
      ]}
    />
  );
}
