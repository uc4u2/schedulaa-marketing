import { AppLocale } from '@/utils/locale';

type HvacHero = {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  chips: string[];
  stats: Array<{ label: string; value: string }>;
};

type HvacCopy = {
  meta: {
    title: string;
    description: string;
  };
  hero: HvacHero;
  pain: {
    badge: string;
    title: string;
    description: string;
    cards: Array<{ title: string; body: string }>;
  };
  video: {
    badge: string;
    title: string;
    description: string;
  };
  journey: {
    badge: string;
    title: string;
    description: string;
    steps: Array<{ title: string; body: string }>;
  };
  platform: {
    badge: string;
    title: string;
    description: string;
    cards: Array<{ title: string; body: string }>;
  };
  closing: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

const en: HvacCopy = {
  meta: {
    title: 'Schedulaa for HVAC Companies | Dispatch, Work Orders, Invoices',
    description:
      'Run dispatch, technicians, work orders, estimates, invoices, payments, and On my way location sharing from one HVAC operations platform.',
  },
  hero: {
    badge: 'Schedulaa for HVAC Companies',
    title: 'Run your HVAC operation from one dashboard instead of five disconnected apps.',
    description:
      'Schedulaa gives HVAC owners and dispatchers one operating system for technicians, work orders, estimates, invoices, payments, employee management, and On my way location sharing. Stop stitching together CRM, dispatch, payroll, and website tools just to get through the day.',
    primaryCta: 'Book HVAC demo',
    secondaryCta: 'Start free',
    chips: [
      'Dispatch + work orders + On my way location',
      'Estimates, invoices, and online payments',
      'Employee management and time tracking',
      'Customer-ready booking and communication',
    ],
    stats: [
      { label: 'One source of truth', value: 'Dispatch to payment' },
      { label: 'Built for field ops', value: 'Techs + office + clients' },
      { label: 'Fewer tool switches', value: 'Website to payroll handoff' },
    ],
  },
  pain: {
    badge: 'Why owners pay attention',
    title: 'The problem is not missing software. The problem is too many disconnected workflows.',
    description:
      'HVAC owners do not need another generic booking widget. They need a faster way to see who is available, which technician is On my way, what the customer approved, which Field Photos were uploaded, and whether the invoice was sent and paid.',
    cards: [
      {
        title: 'Still dispatching technicians manually?',
        body: 'See every technician, customer, work order, invoice, and On my way status in one operations view instead of chasing updates across calls, texts, and separate tools.',
      },
      {
        title: 'Your office should not need five different apps',
        body: 'Schedulaa combines dispatching, work orders, estimates, payments, customer records, and employee operations in one platform built for service teams.',
      },
      {
        title: 'What if your dispatcher saved one hour every day?',
        body: 'The real win is less switching, less guessing, and faster decisions when customers ask where the technician is or the field needs an update.',
      },
    ],
  },
  video: {
    badge: '90-second walkthrough',
    title: 'Show the HVAC owner the workflow, not a feature list.',
    description:
      'This page is designed around the operating flow an HVAC business actually cares about: request, estimate, approval, dispatch, On my way tracking, invoice, payment.',
  },
  journey: {
    badge: 'What the owner should understand fast',
    title: 'From service request to paid invoice in one connected flow.',
    description:
      'An HVAC owner should understand the business outcome without reading a long page of generic modules. The product should read like one operational system.',
    steps: [
      {
        title: '1. Customer requests service',
        body: 'Capture the job, attach the client record, and keep the service address tied to the work order from the start.',
      },
      {
        title: '2. Estimate goes out and gets approved',
        body: 'Send the estimate, follow up, and move from quote to real work without recreating the customer or job details.',
      },
      {
        title: '3. Technician gets dispatched',
        body: 'Assign the employee, schedule the work, and track not started, on my way, and arrived on the same work order.',
      },
      {
        title: '4. Customer can open the tracking link',
        body: 'While the job is On my way, the client tracking link and the manager dispatch board show the latest location. An optional email can send that link to the client. There is no arrival alert, SMS, or employer alert.',
      },
      {
        title: '5. Technician adds notes and optional photos',
        body: 'Field reports stay on the work order. Photos on work orders and shifts use the Field Photos add-on.',
      },
      {
        title: '6. Invoice goes out and payment lands faster',
        body: 'Move from completed job to invoice and online payment without losing the operational history of the visit.',
      },
    ],
  },
  platform: {
    badge: 'What Schedulaa actually replaces',
    title: 'An operations platform for HVAC businesses, not just a website builder.',
    description:
      'Schedulaa is now much bigger than scheduling pages or booking widgets. The value is in how the office, technician, customer, and payment flow stay connected.',
    cards: [
      {
        title: 'Dispatch board with route context',
        body: 'The dispatch board shows trip status, activity, route preview, and the latest On my way location. It does not keep GPS history or geofencing.',
      },
      {
        title: 'Work orders that stay tied to the real job',
        body: 'Keep the customer, location, assignments, instructions, and trip status on one work order. Field photos are an add-on.',
      },
      {
        title: 'Estimates, invoices, and online payments',
        body: 'Stop rekeying approved work into a separate billing flow. Move the same customer and job through estimate, invoice, and payment steps.',
      },
      {
        title: 'Employee operations without separate tools',
        body: 'Handle technician schedules, time tracking, route preview, the Field Photos add-on, and field reports from the same system the office uses.',
      },
      {
        title: 'Customer communication that matches the job',
        body: 'Send an optional On my way email with the tracking link, plus one-click payment reminders and follow-up emails from templates. Client and employee document storage includes client upload requests. It is not a company-wide document library.',
      },
      {
        title: 'Website and booking only when they support operations',
        body: 'The public site matters, but only when it feeds the same operational workflow instead of living in a disconnected marketing tool.',
      },
    ],
  },
  closing: {
    badge: 'Built for serious field-service teams',
    title: 'Give HVAC owners a reason to spend 15 minutes on Schedulaa.',
    description:
      'Lead with the operational pain, then show the full workflow. That is stronger than offering a longer trial on a generic homepage that looks like another website builder.',
    primaryCta: 'Book HVAC walkthrough',
    secondaryCta: 'Open pricing',
  },
};

const copyByLocale: Partial<Record<AppLocale, HvacCopy>> = {
  en,
  fa: en,
  ru: en,
  zh: en,
  es: en,
  fr: en,
  de: en,
  ar: en,
  pt: en,
};

export const getHvacCopy = (locale: AppLocale): HvacCopy => copyByLocale[locale] || en;

