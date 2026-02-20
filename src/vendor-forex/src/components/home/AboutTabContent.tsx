import aboutScheduling from '@public/images/marketing/employee-dashboard.png';
import aboutPayroll from '@public/images/marketing/payroll-dashboard.png';
import aboutCommerce from '@public/images/marketing/website-builder.png';
import aboutAutomation from '@public/images/marketing/my-shift.png';
import Image from 'next/image';
import LinkButton from '../ui/button/LinkButton';
import TabContent from '../ui/tab/TabContent';

const aboutTabsData = [
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
              <h2 className={`${index === 0 ? 'lg:text-heading-2 text-heading-4' : ''} mb-3 text-white`}>
                {tab.title}
                {tab.titleBreak && <br className="hidden lg:block" />}
                {tab.titleContinue && ` ${tab.titleContinue}`}
                <span className={`hero-text-gradient hero-text-color-2 ${index === 1 ? 'inline-block' : ''}`}>
                  {tab.highlightedText}
                </span>
              </h2>
              <p className={`${index === 0 ? 'mb-6 xl:mb-8' : 'mb-8'} text-white/70 lg:max-w-[478px]`}>
                {tab.description}
              </p>
              <ul className={`${index === 0 ? 'mb-7 xl:mb-14' : 'mb-7 md:mb-14'} space-y-1.5`}>
                {tab.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex list-none items-center gap-4 py-2">
                    <span className={`${feature.icon} text-white/85 text-[36px]`}></span>
                    <div>
                      <strong className="text-tagline-1 text-white font-medium">
                        {feature.title}
                      </strong>
                      <p className="text-tagline-2 text-white/65 font-normal">
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
                <div className="relative w-full max-w-[620px]" style={{ transform: 'perspective(1200px) rotateX(2.5deg)' }}>
                  <div className="pointer-events-none absolute -inset-3 rounded-[24px] bg-linear-[145deg,rgba(0,194,255,0.18)_0%,rgba(157,255,0,0.08)_45%,rgba(0,0,0,0.1)_100%] blur-lg" />
                  <div className="pointer-events-none absolute -inset-x-8 -bottom-6 h-14 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,180,255,0.28)_0%,rgba(0,0,0,0)_72%)]" />
                  <figure className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0b1220] p-2 shadow-[0_20px_56px_rgba(0,0,0,0.45)]">
                    <Image src={tab.image} alt={tab.imageAlt} className="h-full w-full rounded-[14px] object-cover" />
                  </figure>
                </div>
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
