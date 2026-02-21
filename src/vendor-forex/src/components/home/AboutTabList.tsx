import { AppLocale } from '@/utils/locale';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const labelsByLocale: Record<string, string[]> = {
  en: ['Payroll', 'Booking', 'Commerce', 'Automation'],
  fa: ['حقوق', 'رزرو', 'تجارت', 'اتوماسیون'],
  ru: ['Зарплата', 'Бронирование', 'Коммерция', 'Автоматизация'],
  zh: ['薪资', '预约', '电商', '自动化'],
};

const AboutTabList = ({ locale = 'en' }: { locale?: AppLocale }) => {
  const labels = labelsByLocale[locale] || labelsByLocale.en;

  return (
    <>
      {/* Desktop TabList */}
      <TabList variant="desktop">
        <Tab index={0} variant="desktop" className="text-white/60 data-[state=selected]:text-white">
          {labels[0]}
        </Tab>
        <Tab index={1} variant="desktop" className="text-white/60 data-[state=selected]:text-white">
          {labels[1]}
        </Tab>
        <Tab index={2} variant="desktop" className="text-white/60 data-[state=selected]:text-white">
          {labels[2]}
        </Tab>
        <Tab index={3} variant="desktop" className="text-white/60 data-[state=selected]:text-white">
          {labels[3]}
        </Tab>
      </TabList>
      {/* Mobile TabList */}
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          {labels[0]}
        </Tab>
        <Tab index={1} variant="mobile">
          {labels[1]}
        </Tab>
        <Tab index={2} variant="mobile">
          {labels[2]}
        </Tab>
        <Tab index={3} variant="mobile" className="text-nowrap">
          {labels[3]}
        </Tab>
      </TabList>
    </>
  );
};

AboutTabList.displayName = 'AboutTabList';
export default AboutTabList;
