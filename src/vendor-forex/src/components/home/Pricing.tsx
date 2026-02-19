import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import pricingSource from '@/legacy-content/pricing/landing-pricing.json';
import gradient4Img from '@public/images/ns-img-496.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface Feature {
  label: string;
  value: string | boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  buttonText: string;
  planType: 'basic' | 'featured' | 'premium';
  features: Feature[];
}

const featureLabels = [
  'Website + booking',
  'Staff scheduling',
  'Payroll workflows',
  'Automation & campaigns',
  'Multi-location controls',
];

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: pricingSource.plans.table.list[0]?.name || 'Starter',
    price: pricingSource.plans.table.list[0]?.price || '$19.99/mo',
    description: pricingSource.plans.table.list[0]?.description || 'Launch your website and take bookings.',
    buttonText: pricingSource.plans.table.list[0]?.ctaLabel || 'Start free trial',
    planType: 'basic',
    features: [
      { label: 'Website + booking', value: true },
      { label: 'Staff scheduling', value: false },
      { label: 'Payroll workflows', value: false },
      { label: 'Automation & campaigns', value: false },
      { label: 'Multi-location controls', value: false },
    ],
  },
  {
    id: 'pro',
    name: pricingSource.plans.table.list[1]?.name || 'Pro',
    price: pricingSource.plans.table.list[1]?.price || '$49.99/mo',
    description:
      pricingSource.plans.table.list[1]?.description || 'For teams needing scheduling, automation, and analytics.',
    buttonText: pricingSource.plans.table.list[1]?.ctaLabel || 'Start free trial',
    planType: 'featured',
    features: [
      { label: 'Website + booking', value: true },
      { label: 'Staff scheduling', value: true },
      { label: 'Payroll workflows', value: true },
      { label: 'Automation & campaigns', value: true },
      { label: 'Multi-location controls', value: false },
    ],
  },
  {
    id: 'enterprise',
    name: pricingSource.plans.table.list[2]?.name || 'Business',
    price: pricingSource.plans.table.list[2]?.price || '$119.99/mo',
    description:
      pricingSource.plans.table.list[2]?.description ||
      'Built for compliance and multi-location operations.',
    buttonText: pricingSource.plans.table.list[2]?.ctaLabel || 'Start free trial',
    planType: 'premium',
    features: [
      { label: 'Website + booking', value: true },
      { label: 'Staff scheduling', value: true },
      { label: 'Payroll workflows', value: true },
      { label: 'Automation & campaigns', value: true },
      { label: 'Multi-location controls', value: true },
    ],
  },
];

const Pricing = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-background-2 dark:bg-background-5 py-16 md:py-20 lg:py-[100px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="space-y-10 px-6 py-[50px] sm:space-y-[70px] lg:px-16 lg:py-[100px]">
            {/* Header */}
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">{pricingSource.hero.eyebrow}</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="mx-auto max-w-[400px] lg:max-w-[678px]">
                  {Array.isArray(pricingSource.hero.title) ? pricingSource.hero.title[0] : 'Pricing that grows with you.'}
                </h2>
              </RevealAnimation>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-12 gap-y-6 md:gap-6 xl:gap-8">
              {/* Features Column */}
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <RevealAnimation delay={0.3}>
                  <div>
                    <div className="md:h-[195px] md:w-[290px]" />
                    <div className="space-y-2.5">
                      <h3 className="text-heading-6">What&apos;s included</h3>
                      <ul>
                        {featureLabels.map((feature, index) => (
                          <li
                            key={feature}
                            className={cn(
                              'text-secondary/60 dark:text-accent/60 text-tagline-1 py-4 pr-6 font-normal',
                              index < featureLabels.length - 1 && 'border-b-stroke-4 dark:border-b-stroke-8 border-b',
                            )}>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealAnimation>
              </div>

              {/* Pricing Plans */}
              {pricingPlans.map((plan, index) => (
                <div key={plan.id} className="col-span-12 md:col-span-6 xl:col-span-3">
                  <RevealAnimation delay={0.4 + index * 0.1}>
                    <div>
                      {/* Plan Header */}
                      <div
                        className={cn(
                          'space-y-8 rounded-t-[20px] px-6 py-8',
                          plan.planType === 'featured'
                            ? 'bg-secondary dark:bg-background-7 relative z-10 overflow-hidden'
                            : 'bg-background-3 dark:bg-background-7',
                        )}>
                        {/* Featured plan gradient background */}
                        {plan.planType === 'featured' && (
                          <div className="pointer-events-none absolute -top-28 -right-20 -z-1 h-full w-full">
                            <Image src={gradient4Img} alt="pricing bg" />
                          </div>
                        )}

                        <div>
                          <p
                            className={cn(
                              'text-tagline-1 mb-3 font-medium',
                              plan.planType === 'featured' ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60',
                            )}>
                            {plan.name}
                          </p>
                          <h3
                            className={cn('text-heading-5 font-normal', plan.planType === 'featured' && 'text-accent')}>
                            {plan.price}
                          </h3>
                          <p className={cn(plan.planType === 'featured' && 'text-accent/60')}>{plan.description}</p>
                        </div>

                        <Link
                          href="/contact-us"
                          className={cn(
                            'btn btn-md w-full first-letter:uppercase before:content-none',
                            plan.planType === 'featured'
                              ? 'btn-primary hover:btn-white border-0'
                              : 'btn-white dark:btn-white-dark hover:btn-primary',
                          )}>
                          {plan.buttonText}
                        </Link>
                      </div>

                      {/* Features List */}
                      <div className="rounded-b-[20px] bg-white dark:bg-black">
                        <ul>
                          {plan.features.map((feature, featureIndex) => (
                            <li
                              key={feature.label}
                              className={cn(
                                'flex h-14 items-center justify-center px-6 py-4 text-center',
                                featureIndex < plan.features.length - 1 &&
                                  'border-b-stroke-4 dark:border-b-stroke-8 border-b',
                              )}>
                              {typeof feature.value === 'string' ? (
                                <p className="text-secondary/60 dark:text-accent/60 font-medium">{feature.value}</p>
                              ) : feature.value ? (
                                <span className="bg-secondary dark:bg-accent flex size-[18px] shrink-0 items-center justify-center rounded-full">
                                  <CheckIcon className="dark:fill-secondary fill-white" />
                                </span>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </RevealAnimation>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Pricing;
