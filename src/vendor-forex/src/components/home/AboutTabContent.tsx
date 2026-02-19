import aboutScheduling from '@public/images/marketing/employee-dashboard.png';
import aboutPayroll from '@public/images/marketing/payroll-dashboard.png';
import aboutCommerce from '@public/images/marketing/website-builder.png';
import aboutAutomation from '@public/images/marketing/my-shift.png';
import Image from 'next/image';
import LinkButton from '@/components/ui/button/LinkButton';
import TabContent from '@/components/ui/tab/TabContent';

const aboutTabsData = [
  {
    id: 'decentralization',
    badge: 'About',
    title: 'Booking and scheduling become',
    titleBreak: true,
    titleContinue: 'one connected',
    highlightedText: ' workflow.',
    description:
      'Publish services, availability, and provider slots once. Clients self-book, staff calendars update in real time, and operations stop duplicating data.',
    image: aboutScheduling,
    imageAlt: 'Schedulaa booking and availability dashboard',
    buttonText: 'Explore booking',
    buttonHref: '/booking',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Real-time availability',
        description: 'Staff and client views stay synchronized.',
      },
      {
        icon: 'ns-shape-46',
        title: 'Provider assignment',
        description: 'Control services, rooms, and calendars by role.',
      },
      {
        icon: 'ns-shape-47',
        title: 'Self-serve rescheduling',
        description: 'Reduce manual changes and admin overhead.',
      },
    ],
  },
  {
    id: 'blockchain',
    badge: 'About',
    title: 'Payroll and compliance are built for',
    titleBreak: false,
    highlightedText: ' service teams.',
    description:
      'Run payroll with overtime, tips, and holiday logic, then export W-2, T4, and ROE records with audit-ready reporting.',
    image: aboutPayroll,
    imageAlt: 'Schedulaa payroll and compliance dashboard',
    buttonText: 'Explore payroll',
    buttonHref: '/payroll',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Region-aware rules',
        description: 'US + Canada payroll scenarios supported.',
      },
      {
        icon: 'ns-shape-46',
        title: 'Audit-ready exports',
        description: 'Generate compliance artifacts with confidence.',
      },
      {
        icon: 'ns-shape-47',
        title: 'Employee self-service',
        description: 'Payslips and payroll transparency for staff.',
      },
    ],
  },
  {
    id: 'privacy',
    badge: 'About',
    title: 'Sell services and products from',
    titleBreak: false,
    highlightedText: ' one checkout.',
    description:
      'Combine bookings, add-ons, products, deposits, and tips in one cart with Stripe checkout and automated receipts.',
    image: aboutCommerce,
    imageAlt: 'Schedulaa commerce and checkout analytics',
    buttonText: 'Explore features',
    buttonHref: '/features',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Unified cart',
        description: 'Products and services in one purchase flow.',
      },
      {
        icon: 'ns-shape-46',
        title: 'Refund and tax support',
        description: 'Secure checkout with operational guardrails.',
      },
      {
        icon: 'ns-shape-47',
        title: 'Revenue analytics',
        description: 'Track utilization, churn, and top performers.',
      },
    ],
  },
  {
    id: 'exchanges',
    badge: 'About',
    title: 'Integrations and automations drive',
    titleBreak: false,
    highlightedText: ' operational scale.',
    description:
      'Connect Schedulaa to accounting tools, trigger re-engagement campaigns, and keep external systems in sync through API and webhooks.',
    image: aboutAutomation,
    imageAlt: 'Schedulaa integrations and workflow automation',
    buttonText: 'Explore docs',
    buttonHref: '/docs',
    features: [
      {
        icon: 'ns-shape-6',
        title: 'Zapier + webhooks',
        description: 'Trigger workflows without manual handoffs.',
      },
      {
        icon: 'ns-shape-46',
        title: 'Accounting sync',
        description: 'Connect payroll and invoicing data to finance tools.',
      },
      {
        icon: 'ns-shape-47',
        title: 'Campaign automation',
        description: 'Re-engage no-shows, VIP clients, and churn risks.',
      },
    ],
  },
];

const AboutTabContent = () => {
  return (
    <>
      {aboutTabsData.map((tab, index) => (
        <TabContent key={tab.id} index={index}>
          <div className="flex w-full flex-col items-start justify-between gap-x-24 gap-y-14 lg:flex-row">
            <div className="flex-1 sm:mx-auto sm:max-w-[500px] lg:max-w-full">
              <span className="badge badge-green mb-3.5 xl:mb-5">{tab.badge}</span>
              <h2 className={`${index === 0 ? 'lg:text-heading-2 text-heading-4' : ''} mb-3`}>
                {tab.title}
                {tab.titleBreak && <br className="hidden lg:block" />}
                {tab.titleContinue && ` ${tab.titleContinue}`}
                <span className={`text-primary-500 ${index === 1 ? 'inline-block' : ''}`}>{tab.highlightedText}</span>
              </h2>
              <p className={`${index === 0 ? 'mb-6 xl:mb-8' : 'mb-8'} lg:max-w-[478px]`}>{tab.description}</p>
              <ul className={`${index === 0 ? 'mb-7 xl:mb-14' : 'mb-7 md:mb-14'} space-y-1.5`}>
                {tab.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex list-none items-center gap-4 py-2">
                    <span className={`${feature.icon} text-secondary text-[36px] dark:text-white`}></span>
                    <div>
                      <strong className="text-tagline-1 text-secondary dark:text-accent font-medium">
                        {feature.title}
                      </strong>
                      <p className="text-secondary/60 text-tagline-2 dark:text-accent/60 font-normal">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div>
                <LinkButton
                  href={tab.buttonHref}
                  className="btn btn-white btn-lg md:btn-xl dark:btn-transparent hover:btn-primary w-full md:w-auto">
                  {tab.buttonText}
                </LinkButton>
              </div>
            </div>
            {/* About Image */}
            <div className="flex-1 sm:mx-auto sm:max-w-[500px] lg:max-w-full">
              <div className="flex items-center justify-center">
                <figure className={index === 0 ? 'lg:inline-block' : 'tab-item-image'}>
                  <Image src={tab.image} alt={tab.imageAlt} className={index === 0 ? 'w-fit object-cover' : ''} />
                </figure>
              </div>
            </div>
          </div>
        </TabContent>
      ))}
    </>
  );
};
AboutTabContent.displayName = 'AboutTabContent';
export default AboutTabContent;
