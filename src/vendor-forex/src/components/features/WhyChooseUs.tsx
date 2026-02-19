import RevealAnimation from '@/components/animation/RevealAnimation';
import transactionChart from '@public/images/ns-img-235.svg';
import profitChart from '@public/images/ns-img-240.png';
import transactionRing from '@public/images/ns-img-74.png';
import transactionChartDark from '@public/images/ns-img-dark-157.svg';
import profitChartDark from '@public/images/ns-img-dark-161.png';
import transactionRingDark from '@public/images/ns-img-dark-50.png';
import Image from 'next/image';
import source from '@/legacy-content/features/landing-features.json';

const integrationPoints = Object.values(source.integrations.points || {});

const WhyChooseUs = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 overflow-hidden py-20 lg:py-[120px]">
      <div className="main-container flex flex-col items-center justify-between gap-12 lg:flex-row">
        <div>
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5">{source.integrations.title}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">{source.integrations.title}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="lg:max-w-[536px]">{source.integrations.subtitle}</p>
          </RevealAnimation>
          <ul className="mt-8 space-y-1 lg:mt-14">
            {integrationPoints.map((point, index) => (
              <RevealAnimation delay={0.4 + index * 0.1} key={point}>
                <li className="flex list-none items-center gap-4 py-2">
                  <span className="ns-shape-8 text-secondary dark:text-accent text-[36px]" />
                  <strong className="text-tagline-1 text-secondary dark:text-accent font-medium">{point}</strong>
                </li>
              </RevealAnimation>
            ))}
          </ul>
        </div>

        <div className="relative">
          <RevealAnimation delay={0.2} direction="up" offset={150}>
            <figure className="h-full w-full max-w-[735px] overflow-hidden rounded-[20px] object-cover">
              <Image src={transactionRing} alt={source.integrations.mediaAlt} className="block size-full object-cover dark:hidden" />
              <Image src={transactionRingDark} alt={source.integrations.mediaAlt} className="hidden size-full object-cover dark:block" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.5} direction="right" offset={100} useSpring={true} duration={2}>
            <figure className="absolute top-[12%] right-4 w-full max-w-[170px] overflow-hidden rounded-[20px] md:right-0 md:max-w-[220px] lg:max-w-[200px] xl:max-w-[240px]">
              <Image src={transactionChart} alt="Payments and payouts" className="inline-block h-full w-full object-cover dark:hidden" />
              <Image src={transactionChartDark} alt="Payments and payouts" className="hidden h-full w-full object-cover dark:block" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.7} direction="right" offset={100} useSpring={true} duration={2}>
            <figure className="shadow-3 absolute right-0 bottom-0 w-full max-w-[200px] overflow-hidden rounded-[20px] sm:bottom-10 sm:max-w-[320px] md:bottom-[10%] md:max-w-[395px]">
              <Image src={profitChart} alt="Compliance and exports" className="h-full w-full dark:hidden" />
              <Image src={profitChartDark} alt="Compliance and exports" className="hidden h-full w-full dark:block" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
