import { detectLocaleFromPath } from '@/utils/locale';
import { usePathname } from 'next/navigation';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const AboutTabList = () => {
  const pathname = usePathname() || '/';
  const isFa = detectLocaleFromPath(pathname) === 'fa';
  const labels = isFa
    ? ['حقوق', 'رزرو', 'تجارت', 'اتوماسیون']
    : ['Payroll', 'Booking', 'Commerce', 'Automation'];

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
