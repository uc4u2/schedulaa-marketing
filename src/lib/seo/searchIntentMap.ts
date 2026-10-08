export type SearchIntentEntry = {
  key: string;
  label: string;
  intent: string;
  path: string;
  relatedPaths: string[];
};

export const SEARCH_INTENT_MAP: SearchIntentEntry[] = [
  {
    key: 'website-builder',
    label: 'Website builder for service businesses',
    intent: 'Build and publish a branded service-business website with booking and conversion paths.',
    path: '/website-builder',
    relatedPaths: ['/help/domains', '/booking'],
  },
  {
    key: 'online-booking',
    label: 'Online booking',
    intent: 'Let customers choose services, providers, dates, and available times online.',
    path: '/booking',
    relatedPaths: ['/booking/salon', '/booking/spa', '/booking/tutor', '/booking/doctor'],
  },
  {
    key: 'appointment-scheduling',
    label: 'Appointment scheduling',
    intent: 'Coordinate appointments, availability, rescheduling, cancellations, and team calendars.',
    path: '/booking',
    relatedPaths: ['/workforce'],
  },
  {
    key: 'customer-management',
    label: 'Customer and client management',
    intent: 'Use client profiles, booking history, campaign interactions, and retention context together.',
    path: '/marketing/clients-360',
    relatedPaths: ['/marketing', '/booking'],
  },
  {
    key: 'employee-scheduling',
    label: 'Employee scheduling',
    intent: 'Plan employee availability, shifts, coverage, time off, swaps, and approvals.',
    path: '/workforce',
    relatedPaths: ['/booking', '/payroll'],
  },
  {
    key: 'time-tracking',
    label: 'Shifts and clock-in/out',
    intent: 'Track scheduled shifts, clock-in/out, breaks, approvals, and payroll-ready hours.',
    path: '/workforce',
    relatedPaths: ['/payroll', '/payslips'],
  },
  {
    key: 'estimates-quotes',
    label: 'Estimates and quotes',
    intent: 'Move quote requests through estimates, customer decisions, work orders, and billing.',
    path: '/business-finance/invoices',
    relatedPaths: ['/industries/hvac'],
  },
  {
    key: 'invoices-payment-links',
    label: 'Invoices and payment links',
    intent: 'Create invoices, share hosted payment links, and track online or offline payment state.',
    path: '/business-finance/invoices',
    relatedPaths: ['/business-finance', '/commerce'],
  },
  {
    key: 'stripe-payments',
    label: 'Stripe-supported payments',
    intent: 'Use supported Stripe checkout, invoice-payment, refund, and card-on-file workflows.',
    path: '/commerce',
    relatedPaths: ['/booking', '/business-finance/invoices'],
  },
  {
    key: 'dispatch-work-orders',
    label: 'Dispatch and work orders',
    intent: 'Assign service work, track trip-scoped dispatch status, and connect field completion to billing.',
    path: '/industries/hvac',
    relatedPaths: ['/workforce', '/business-finance/invoices'],
  },
  {
    key: 'payroll-tax-reporting',
    label: 'Payroll tools and tax reporting',
    intent: 'Prepare supported payroll calculations, payslips, T4, ROE, W-2, and export workflows.',
    path: '/payroll',
    relatedPaths: ['/payroll/canada', '/payroll/usa', '/payslips'],
  },
  {
    key: 'marketing-attribution',
    label: 'Marketing attribution and rebooking',
    intent: 'Connect campaigns to bookings and rebookings with lifecycle segments and analytics.',
    path: '/marketing',
    relatedPaths: ['/marketing/analytics-dashboard', '/marketing/clients-360', '/marketing/email-campaigns'],
  },
  {
    key: 'service-industries',
    label: 'Service-business industries',
    intent: 'Explore workflows for salons, spas, clinics, tutors, HVAC teams, and other service businesses.',
    path: '/industries',
    relatedPaths: ['/booking/salon', '/booking/spa', '/booking/tutor', '/booking/doctor', '/industries/hvac'],
  },
];

export const getSearchIntent = (key: string) => SEARCH_INTENT_MAP.find((entry) => entry.key === key) || null;
