export type TutorialItem = {
  key: string;
  title: string;
  purpose: string;
  youtubeUrl?: string | null;
  durationLabel?: string | null;
};

export type TutorialModule = {
  key: string;
  badge: string;
  title: string;
  summary: string;
  featuredKey?: string | null;
  items: TutorialItem[];
};

export const tutorialModules: Record<string, TutorialModule> = {
  business_finance: {
    key: 'business_finance',
    badge: 'Quick walkthroughs',
    title: 'See the Business Finance workflow in short steps',
    summary:
      'Use short manager-facing tutorials to show how estimates, invoices, work orders, and review steps connect inside Schedulaa without leaving the operational flow.',
    featuredKey: 'estimate_to_paid_job',
    items: [
      {
        key: 'estimate_to_paid_job',
        title: 'How to Turn an Estimate Into a Paid Job in Schedulaa',
        purpose:
          'Show how a manager moves from approved pricing to invoice, payment link, and job execution in one connected workflow.',
        youtubeUrl: 'https://youtu.be/OPw9ntgACxg',
        durationLabel: 'Short tutorial',
      },
      {
        key: 'create_work_order_assign_team',
        title: 'How to Create a Work Order and Assign Your Team',
        purpose:
          'Walk through creating the job record, setting the planned schedule, and assigning the team before field work starts.',
        youtubeUrl: null,
        durationLabel: null,
      },
      {
        key: 'review_field_work_before_billing',
        title: 'How Managers Review Field Work Before Billing',
        purpose:
          'Explain how submitted field reports and manager reviews decide what becomes official for materials, billing, and close-out.',
        youtubeUrl: null,
        durationLabel: null,
      },
      {
        key: 'create_track_invoices',
        title: 'How to Create and Track Invoices',
        purpose:
          'Show how finance teams issue invoices, share payment links, and track what is still waiting for payment or follow-up.',
        youtubeUrl: null,
        durationLabel: null,
      },
    ],
  },
  workforce: {
    key: 'workforce',
    badge: 'Quick walkthroughs',
    title: 'See the workforce workflow in short steps',
    summary:
      'Use short manager-facing tutorials to show how shift planning, attendance review, leave coordination, and staffing decisions stay connected in one operational flow.',
    featuredKey: 'build_shift_plan',
    items: [
      {
        key: 'build_shift_plan',
        title: 'How to Build a Shift Plan and Spot Exceptions in Schedulaa',
        purpose:
          'Show how managers review staffing coverage, generate shift plans, and spot exceptions before payroll review starts.',
        youtubeUrl: 'https://youtu.be/OPw9ntgACxg',
        durationLabel: 'Short tutorial',
      },
    ],
  },
  payroll: {
    key: 'payroll',
    badge: 'Quick walkthroughs',
    title: 'See the payroll workflow in short steps',
    summary:
      'Use short manager-facing tutorials to show how payroll preview, finalized runs, payslip PDFs, and payroll-ready handoff files connect inside Schedulaa.',
    featuredKey: 'payroll_handoff',
    items: [
      {
        key: 'payroll_handoff',
        title: 'How Payroll-Ready Handoff Works in Schedulaa',
        purpose:
          'Show how managers move from approved time and payroll preview into payslips, finalized records, and export-ready handoff files.',
        youtubeUrl: 'https://youtu.be/OPw9ntgACxg',
        durationLabel: 'Short tutorial',
      },
    ],
  },
  website_builder: {
    key: 'website_builder',
    badge: 'Quick walkthroughs',
    title: 'See the Website Builder workflow in short steps',
    summary:
      'Use short manager-facing tutorials to show how branded pages, booking widgets, custom domains, and publishing workflows come together in one builder.',
    featuredKey: 'publish_booking_site',
    items: [
      {
        key: 'publish_booking_site',
        title: 'How to Publish Your Branded Booking Site',
        purpose:
          'Show how managers edit pages, review layout changes, and publish a branded booking site without leaving the builder workflow.',
        youtubeUrl: 'https://youtu.be/OPw9ntgACxg',
        durationLabel: 'Short tutorial',
      },
    ],
  },
};

export function getTutorialModule(moduleKey: keyof typeof tutorialModules | string): TutorialModule | null {
  return tutorialModules[moduleKey] || null;
}
