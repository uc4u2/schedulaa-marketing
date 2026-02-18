import IndustryBookingTemplate from '@/components/booking-template/IndustryBookingTemplate';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Tutor Booking Software | Schedulaa',
  description:
    'Run tutor scheduling, class booking, attendance tracking, and client communication from one platform for education teams.',
};

export default function TutorBookingPage() {
  return (
    <IndustryBookingTemplate
      overline="Tutor booking"
      title="Tutor booking software for private sessions, recurring classes, and instructor availability"
      intro="Education services need consistent scheduling across tutors, students, and guardians. This page explains how Schedulaa helps tutoring businesses run booking workflows, reduce admin overhead, and keep sessions on track."
      sections={[
        {
          heading: 'Turn session booking into a reliable academic workflow',
          paragraphs: [
            'Tutoring operations become chaotic when bookings are spread across messages, manual calendars, and separate attendance tools. Students miss updates, tutors lose context, and managers spend time verifying basic logistics instead of improving outcomes.',
            'Schedulaa centralizes session booking with clear availability, service types, and assignment rules. Whether you run one-on-one sessions or small group classes, teams can publish accurate time slots and avoid accidental overlaps.',
            'The practical value is consistency. Students and guardians receive a cleaner booking experience, tutors get reliable schedules, and coordinators can see upcoming demand without reconstructing data from multiple systems.',
          ],
        },
        {
          heading: 'Support recurring schedules and program continuity',
          paragraphs: [
            'Many tutoring programs depend on recurring weekly sessions. If recurring logic is manual, cancellations and reschedules quickly break the plan. Schedulaa allows teams to maintain structured booking flows while handling exceptions with visibility.',
            'This continuity is critical for student progress. Coordinators can identify missed sessions faster, rebook proactively, and maintain communication with families. With cleaner data, it is easier to understand retention patterns and capacity constraints.',
            'Program leaders also gain planning confidence. You can evaluate tutor utilization by subject or grade level and decide when to hire, rebalance, or open additional session windows.',
          ],
        },
        {
          heading: 'Integrate attendance and operational reporting',
          paragraphs: [
            'A booked session is only useful if it is delivered. Schedulaa helps teams align booking records with attendance and time tracking, so the operational picture reflects actual work performed. This closes the gap between planned and delivered services.',
            'For tutoring businesses with payroll or contractor payouts, this linkage reduces end-of-period reconciliation. Coordinators do not need to manually match calendar entries to timesheets. Teams can review exceptions instead of rebuilding entire datasets.',
            'It also improves accountability. If a student misses multiple sessions or a tutor has repeated scheduling conflicts, managers can identify patterns early and respond with clear evidence.',
          ],
        },
        {
          heading: 'Scale from small tutoring teams to multi-instructor programs',
          paragraphs: [
            'Small education teams usually begin with lightweight tools, but those tools break as student volume grows. Schedulaa is built to support growth without forcing a full platform replacement every quarter. Booking, scheduling, and reporting remain connected as complexity increases.',
            'If you expand into new subjects, locations, or service tiers, your booking layer can adapt while preserving historical data. That continuity makes long-term planning easier and protects institutional knowledge.',
            'Most importantly, teams spend less time on admin and more time on instruction quality. The platform is designed so operational discipline supports educational outcomes, not the other way around.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Can this handle recurring tutoring sessions?',
          answer:
            'Yes. Recurring schedules can be managed in a structured way, with support for rescheduling and cancellations when needed.',
        },
        {
          question: 'Does this work for group classes and private sessions?',
          answer:
            'Yes. Teams can configure different session types and manage tutor availability across both one-on-one and small group formats.',
        },
        {
          question: 'How does it reduce admin workload?',
          answer:
            'By keeping booking, attendance context, and operational reporting in one place, staff avoid repeated manual reconciliation.',
        },
        {
          question: 'Is it suitable for growing tutoring businesses?',
          answer:
            'Yes. It supports growth in tutor count, service categories, and scheduling complexity without fragmenting the workflow.',
        },
      ]}
      compareLinks={[
        { href: '/compare/schedulaa-vs-acuity-scheduling', label: 'Schedulaa vs Acuity Scheduling' },
        { href: '/compare/when-i-work', label: 'Schedulaa vs When I Work' },
      ]}
    />
  );
}
