import { cn } from '@/utils/cn';
import gradient28Img from '@public/images/ns-img-516.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface ServiceCard {
  id: number;
  label: string;
  value: string;
  description: string;
}

export const serviceCards: ServiceCard[] = [
  {
    id: 1,
    label: 'Platform coverage',
    value: 'US + CA',
    description: 'Payroll and compliance workflows supported',
  },
  {
    id: 2,
    label: 'Core modules',
    value: '5+',
    description: 'Booking, payroll, websites, eCommerce, analytics',
  },
  {
    id: 3,
    label: 'Operational speed',
    value: '< 1 min',
    description: 'From booking confirmation to staff visibility',
  },
  {
    id: 4,
    label: 'Integrations',
    value: 'API + Zapier',
    description: 'Automations for accounting and re-engagement',
  },
  {
    id: 5,
    label: 'Scale model',
    value: 'Multi-branch',
    description: 'Department and role-based management out of the box',
  },
];

const Services = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-white py-24 md:py-[100px] xl:py-[200px] dark:bg-black">
        <div className="relative">
          {/* gradient  */}
          <div className="absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r from-white to-transparent md:w-[20%] dark:from-black" />
          <div className="absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l from-white to-transparent md:w-[20%] dark:from-black" />
          <Marquee>
            <div className="flex items-center justify-center gap-8 md:mb-14">
              {serviceCards.map((service, index) => (
                <div
                  key={service.id}
                  className={cn(
                    'bg-secondary hover:bg-background-2 dark:bg-background-8 hover:dark:bg-background-5 group relative z-0 flex min-h-[270px] min-w-[360px] flex-col justify-between gap-y-8 overflow-hidden rounded-[20px] p-8 transition-all duration-700 ease-in-out',
                    index === 0 && 'ml-8',
                  )}>
                  <figure className="pointer-events-none absolute inset-0 -top-[210%] -right-[160%] -z-10 rotate-[-78deg] transform opacity-100 transition-all duration-1000 ease-in-out select-none group-hover:scale-110 group-hover:opacity-0">
                    <Image src={gradient28Img} alt="review-bg" className="h-full w-full object-cover" />
                  </figure>
                  <div className="transform transition-all duration-700 ease-in-out group-hover:translate-y-[4px]">
                    <p className="text-accent/70 dark:text-accent/70 mb-2 text-lg transition-colors duration-700 ease-in-out group-hover:text-secondary/60 group-hover:dark:text-accent/60">
                      {service.label}
                    </p>
                    <h3 className="text-ns-yellow transition-colors duration-700 ease-in-out group-hover:text-secondary group-hover:dark:text-accent">
                      {service.value}
                    </h3>
                  </div>
                  <p className="text-accent/70 dark:text-accent/70 transform transition-all duration-700 ease-in-out group-hover:translate-y-[-6px] group-hover:text-secondary/60 group-hover:dark:text-accent/60 group-hover:opacity-90">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Services;
