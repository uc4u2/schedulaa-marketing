import IndustryBookingLanding from '@/components/booking/IndustryBookingLanding';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Doctor Booking Software | Schedulaa',
  description:
    'Coordinate clinic booking, provider schedules, patient communication, and operational visibility in one platform.',
};

export default function DoctorBookingPage() {
  return (
    <IndustryBookingLanding
      overline="Clinic booking"
      title="Doctor booking software for clinics that need clean scheduling and reliable follow-through"
      intro="Medical and wellness clinics rely on precise scheduling. Missed handoffs between booking, provider availability, and operational follow-up create costly delays. This page explains how Schedulaa helps clinics structure booking operations with less friction."
      sections={[
        {
          heading: 'Reduce scheduling errors in high-consequence workflows',
          paragraphs: [
            'Clinic scheduling has less tolerance for ambiguity than many service categories. A simple booking mismatch can affect intake flow, provider workload, and patient trust. Schedulaa helps teams standardize appointment setup so calendars, providers, and service slots stay aligned.',
            'Front-desk teams can publish clear availability and avoid double-booking risk, while managers keep visibility into day-level capacity. This reduces reactive schedule firefighting and gives clinicians a more predictable operating day.',
            'When exceptions happen, teams can resolve them with context rather than guesswork because booking changes are visible in a single operational timeline.',
          ],
        },
        {
          heading: 'Support communication and pre-visit readiness',
          paragraphs: [
            'Missed appointments and incomplete intake details disrupt both patient experience and clinic efficiency. Schedulaa supports reminder-oriented workflows and structured booking data so teams can improve attendance and pre-visit preparation.',
            'Clear communication before appointments helps clinics maintain schedule integrity. It also lowers administrative load because teams spend less time calling patients to confirm details already captured in the booking flow.',
            'As volumes grow, this consistency becomes a competitive advantage. Clinics that deliver predictable access and reduced wait friction see stronger retention and referral outcomes.',
          ],
        },
        {
          heading: 'Connect appointment demand with staffing reality',
          paragraphs: [
            'A clinic may appear fully booked while still underutilizing provider time due to fragmented scheduling logic. Schedulaa links booking demand to workforce views so managers can spot bottlenecks and make allocation changes earlier.',
            'This is especially useful for multi-provider practices where different visit types require different durations or prep windows. Capacity can be tuned based on real usage patterns rather than static assumptions.',
            'Over time, teams can optimize schedules with better evidence: which appointment types create backlog, which slots have higher no-show risk, and where staffing adjustments improve throughput.',
          ],
        },
        {
          heading: 'Build an operational layer that grows with the clinic',
          paragraphs: [
            'Many clinics start with lightweight tools and then struggle when volume increases. Schedulaa is designed to keep booking and operational data unified as teams add providers, open additional services, or expand locations.',
            'Because booking is connected to broader workflow signals, expansion does not require rebuilding process from scratch. Teams can preserve standards while adapting to new clinical realities.',
            'The goal is not just appointment capture. It is dependable operations: fewer preventable scheduling errors, more predictable patient flow, and better manager visibility across the day.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Can clinics use this for multiple providers?',
          answer:
            'Yes. Provider availability and appointment logic can be organized so teams coordinate calendars without overbooking conflicts.',
        },
        {
          question: 'Does this help reduce no-shows?',
          answer:
            'Yes. Reminder-friendly workflows and clearer booking data improve attendance and reduce avoidable schedule gaps.',
        },
        {
          question: 'Can we scale to multiple locations later?',
          answer:
            'Yes. The same booking model can support multi-site growth while preserving operational consistency.',
        },
        {
          question: 'Is this only for medical clinics?',
          answer:
            'No. The same model supports wellness and specialized service clinics that need structured scheduling discipline.',
        },
      ]}
      compareLinks={[
        { href: '/compare/hubspot-meetings', label: 'Schedulaa vs HubSpot Meetings' },
        { href: '/compare/quickbooks', label: 'Schedulaa vs QuickBooks' },
      ]}
    />
  );
}
