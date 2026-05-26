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
    badge: 'Tutorial queue',
    title: 'Workforce tutorials planned',
    summary:
      'This module will later cover shift planning, attendance exceptions, break rules, and manager approval checkpoints.',
    featuredKey: null,
    items: [
      {
        key: 'build_shift_plan',
        title: 'How to Build a Shift Plan and Spot Exceptions',
        purpose:
          'Planned topic for showing scheduling, overtime flags, and staffing visibility before payroll review.',
        youtubeUrl: null,
        durationLabel: null,
      },
    ],
  },
  payroll: {
    key: 'payroll',
    badge: 'Tutorial queue',
    title: 'Payroll tutorials planned',
    summary:
      'This module will later cover payroll preview, finalized runs, payslip PDFs, and payroll-ready handoff exports.',
    featuredKey: null,
    items: [
      {
        key: 'payroll_handoff',
        title: 'How Payroll-Ready Handoff Works in Schedulaa',
        purpose:
          'Planned topic for showing finalized payroll outputs, review controls, and export-ready handoff files.',
        youtubeUrl: null,
        durationLabel: null,
      },
    ],
  },
  website_builder: {
    key: 'website_builder',
    badge: 'Tutorial queue',
    title: 'Website Builder tutorials planned',
    summary:
      'This module will later cover branded pages, booking widgets, custom domains, and publishing workflows.',
    featuredKey: null,
    items: [
      {
        key: 'publish_booking_site',
        title: 'How to Publish Your Branded Booking Site',
        purpose:
          'Planned topic for showing page setup, booking widgets, and domain publishing in one short walkthrough.',
        youtubeUrl: null,
        durationLabel: null,
      },
    ],
  },
};

export function getTutorialModule(moduleKey: keyof typeof tutorialModules | string): TutorialModule | null {
  return tutorialModules[moduleKey] || null;
}
