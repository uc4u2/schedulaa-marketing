import { AppLocale } from '@/utils/locale';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const labelsByLocale: Record<string, string[]> = {
  en: ['Payroll', 'Booking', 'Commerce', 'Automation'],
  fa: ['\u062d\u0642\u0648\u0642', '\u0631\u0632\u0631\u0648', '\u062a\u062c\u0627\u0631\u062a', '\u0627\u062a\u0648\u0645\u0627\u0633\u06cc\u0648\u0646'],
  ru: ['\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430', '\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435', '\u041a\u043e\u043c\u043c\u0435\u0440\u0446\u0438\u044f', '\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f'],
  zh: ['\u85aa\u8d44', '\u9884\u7ea6', '\u5546\u4e1a', '\u81ea\u52a8\u5316'],
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
