import { cn } from '@/utils/cn';
import { AppLocale } from '@/utils/locale';
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

const serviceCardsFa: ServiceCard[] = [
  { id: 1, label: '\u067e\u0648\u0634\u0634 \u067e\u0644\u062a\u0641\u0631\u0645', value: 'US + CA', description: '\u067e\u0631\u062f\u0627\u062e\u062a \u062d\u0642\u0648\u0642 \u0648 \u0627\u0646\u0637\u0628\u0627\u0642 \u062f\u0631 \u06cc\u06a9 \u062c\u0631\u06cc\u0627\u0646 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f' },
  { id: 2, label: '\u0645\u0627\u0698\u0648\u0644\u200c\u0647\u0627\u06cc \u06a9\u0644\u06cc\u062f\u06cc', value: '5+', description: '\u0631\u0632\u0631\u0648\u060c \u062d\u0642\u0648\u0642\u060c \u0648\u0628\u200c\u0633\u0627\u06cc\u062a\u060c \u062a\u062c\u0627\u0631\u062a \u0627\u0644\u06a9\u062a\u0631\u0648\u0646\u06cc\u06a9 \u0648 \u062a\u062d\u0644\u06cc\u0644' },
  { id: 3, label: '\u0633\u0631\u0639\u062a \u0639\u0645\u0644\u06cc\u0627\u062a', value: '< 1 \u062f\u0642\u06cc\u0642\u0647', description: '\u0627\u0632 \u062a\u0627\u06cc\u06cc\u062f \u0631\u0632\u0631\u0648 \u062a\u0627 \u0646\u0645\u0627\u06cc\u0634 \u0628\u0631\u0627\u06cc \u062a\u06cc\u0645 \u062f\u0631 \u0644\u062d\u0638\u0647' },
  { id: 4, label: '\u06cc\u06a9\u067e\u0627\u0631\u0686\u06af\u06cc', value: 'API + Zapier', description: '\u0627\u062a\u0648\u0645\u0627\u0633\u06cc\u0648\u0646 \u0628\u0631\u0627\u06cc \u062d\u0633\u0627\u0628\u062f\u0627\u0631\u06cc \u0648 \u0628\u0627\u0632\u06af\u0634\u062a \u0645\u0634\u062a\u0631\u06cc' },
  { id: 5, label: '\u0645\u0642\u06cc\u0627\u0633\u200c\u067e\u0630\u06cc\u0631\u06cc', value: '\u0686\u0646\u062f \u0634\u0639\u0628\u0647', description: '\u0645\u062f\u06cc\u0631\u06cc\u062a \u0634\u0639\u0628 \u0648 \u0646\u0642\u0634\u200c\u0647\u0627 \u0628\u0647\u200c\u0635\u0648\u0631\u062a \u0622\u0645\u0627\u062f\u0647' },
];

const serviceCardsRu: ServiceCard[] = [
  { id: 1, label: '\u041e\u0445\u0432\u0430\u0442 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b', value: 'US + CA', description: '\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b \u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u043a\u043e\u043c\u043f\u043b\u0430\u0435\u043d\u0441\u0430' },
  { id: 2, label: '\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438', value: '5+', description: '\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430, \u0441\u0430\u0439\u0442\u044b, \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u043c\u0435\u0440\u0446\u0438\u044f, \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430' },
  { id: 3, label: '\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439', value: '< 1 \u043c\u0438\u043d', description: '\u041e\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0431\u0440\u043e\u043d\u0438 \u0434\u043e \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b' },
  { id: 4, label: '\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438', value: 'API + Zapier', description: '\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432 \u0438 \u0440\u0435\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438' },
  { id: 5, label: '\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435', value: '\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0444\u0438\u043b\u0438\u0430\u043b\u043e\u0432', description: '\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0438\u043b\u0438\u0430\u043b\u0430\u043c\u0438 \u0438 \u0440\u043e\u043b\u044f\u043c\u0438 \u0438\u0437 \u043a\u043e\u0440\u043e\u0431\u043a\u0438' },
];

const serviceCardsZh: ServiceCard[] = [
  { id: 1, label: '\u5e73\u53f0\u8986\u76d6', value: 'US + CA', description: '\u652f\u6301\u85aa\u8d44\u4e0e\u5408\u89c4\u5de5\u4f5c\u6d41' },
  { id: 2, label: '\u6838\u5fc3\u6a21\u5757', value: '5+', description: '\u9884\u7ea6\u3001\u85aa\u8d44\u3001\u7f51\u7ad9\u3001\u7535\u5546\u3001\u5206\u6790' },
  { id: 3, label: '\u8fd0\u8425\u901f\u5ea6', value: '< 1 \u5206\u949f', description: '\u4ece\u9884\u7ea6\u786e\u8ba4\u5230\u56e2\u961f\u53ef\u89c1\u53ea\u9700\u7247\u523b' },
  { id: 4, label: '\u96c6\u6210\u80fd\u529b', value: 'API + Zapier', description: '\u9762\u5411\u8d22\u52a1\u4e0e\u5ba2\u6237\u53ec\u56de\u7684\u81ea\u52a8\u5316' },
  { id: 5, label: '\u6269\u5c55\u6a21\u5f0f', value: '\u591a\u95e8\u5e97', description: '\u5f00\u7bb1\u5373\u7528\u7684\u591a\u95e8\u5e97\u4e0e\u89d2\u8272\u7ba1\u7406' },
];

const Services = ({ locale = 'en' }: { locale?: AppLocale }) => {
  const localizedCards =
    locale === 'fa' ? serviceCardsFa : locale === 'ru' ? serviceCardsRu : locale === 'zh' ? serviceCardsZh : serviceCards;
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-white py-24 md:py-[100px] xl:py-[200px] dark:bg-black">
        <div className="relative">
          {/* gradient  */}
          <div className="absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r from-white to-transparent md:w-[20%] dark:from-black" />
          <div className="absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l from-white to-transparent md:w-[20%] dark:from-black" />
          <Marquee>
            <div className="flex items-center justify-center gap-8 md:mb-14">
              {localizedCards.map((service, index) => (
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
