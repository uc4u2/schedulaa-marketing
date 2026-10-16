import {
  CLIENT_DOCUMENTS,
  DISPATCH_STATUS,
  FIELD_PHOTOS,
  LIVE_TRIP_GPS,
  ON_MY_WAY_EMAIL,
} from '@/components/dispatch/claims';

export const dispatchPage = {
  meta: {
    title: 'Dispatch and Work Orders for Service Teams | Schedulaa',
    description:
      'Assign work orders, track not started, on my way, and arrived, show the latest On my way location, and email the client an optional tracking link.',
  },
  hero: {
    badge: 'Dispatch',
    title: 'Dispatch and work orders for service teams',
    subtitle:
      'Keep the job, the technician, and the client on one work order. Status stays trip-scoped, live location is only the latest On my way point, and the client can get an optional email with the tracking link.',
    image: '/images/marketing/hvac-555.png',
    imageAlt: 'Schedulaa dispatch board and work order workflow',
    primaryCta: { label: 'Start free', href: '/register' },
    secondaryCta: { label: 'See Business Finance', href: '/business-finance' },
  },
  sections: [
    {
      overline: 'Work orders',
      title: 'One live job from assignment to close-out',
      intro: 'The office and the field share the same work order instead of rebuilding the job in texts and spreadsheets.',
      items: [
        {
          title: 'Trip-scoped status',
          body: DISPATCH_STATUS,
        },
        {
          title: 'Assignments and instructions',
          body: 'Managers create the work order, assign the employee, and keep the service address, instructions, and planned materials on that job.',
        },
        {
          title: 'Field reports',
          body: 'Employees submit field reports for manager review. Submitted reports do not automatically change inventory or accounting.',
        },
      ],
    },
    {
      overline: 'Live location',
      title: 'Latest point while the job is On my way',
      intro: 'Location sharing is limited to the active trip and to optional punch location.',
      items: [
        {
          title: 'Trip GPS',
          body: LIVE_TRIP_GPS,
        },
        {
          title: 'Client tracking link',
          body: 'The client opens a temporary tracking link for the current On my way location. The same latest point is on the manager dispatch board.',
        },
        {
          title: 'Clock-in and clock-out',
          body: 'If punch-location evidence is enabled, Schedulaa can collect device location when an employee clocks in or out. That is separate from trip GPS.',
        },
      ],
    },
    {
      overline: 'Client update',
      title: 'Optional On my way email',
      intro: 'The email is a setting, not an always-on alert for every status change.',
      items: [
        {
          title: 'Email to the client',
          body: ON_MY_WAY_EMAIL,
        },
        {
          title: 'What is not included',
          body: 'There is no arrival alert, no SMS notification, and no employer alert for these trip updates.',
        },
      ],
    },
    {
      overline: 'Records on the job',
      title: 'Documents and field photos stay with the work',
      intro: 'Files belong to the client, the employee, or the job. They are not a company-wide library.',
      items: [
        {
          title: 'Client and employee documents',
          body: CLIENT_DOCUMENTS,
        },
        {
          title: 'Field Photos add-on',
          body: FIELD_PHOTOS,
        },
      ],
    },
  ],
  faqHeading: 'Dispatch FAQ',
  faqTitle: 'What dispatch includes',
  faqIntro: 'Short answers for teams comparing Schedulaa with a separate dispatch tool.',
  faq: [
    {
      question: 'Does Schedulaa track technicians all day?',
      answer: LIVE_TRIP_GPS,
    },
    {
      question: 'Who gets the On my way message?',
      answer: ON_MY_WAY_EMAIL,
    },
    {
      question: 'Which statuses does the dispatch board show?',
      answer: DISPATCH_STATUS,
    },
    {
      question: 'Can customers upload documents?',
      answer: CLIENT_DOCUMENTS,
    },
  ],
  cta: {
    overline: 'Connected operations',
    title: 'Dispatch stays attached to estimates, invoices, and the client record.',
    body: 'Move from the work order into billing without retyping the job.',
    primary: { label: 'Start free', href: '/register' },
    secondary: { label: 'Estimates and invoices', href: '/business-finance/invoices' },
  },
};
