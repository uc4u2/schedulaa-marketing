import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const AboutTabList = () => {
  return (
    <>
      {/* Desktop TabList */}
      <TabList variant="desktop">
        <Tab index={0} variant="desktop" className="text-white/60 data-[state=selected]:text-white">
          Payroll
        </Tab>
        <Tab index={1} variant="desktop" className="text-white/60 data-[state=selected]:text-white">
          Booking
        </Tab>
        <Tab index={2} variant="desktop" className="text-white/60 data-[state=selected]:text-white">
          Commerce
        </Tab>
        <Tab index={3} variant="desktop" className="text-white/60 data-[state=selected]:text-white">
          Automation
        </Tab>
      </TabList>
      {/* Mobile TabList */}
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          Payroll
        </Tab>
        <Tab index={1} variant="mobile">
          Booking
        </Tab>
        <Tab index={2} variant="mobile">
          Commerce
        </Tab>
        <Tab index={3} variant="mobile" className="text-nowrap">
          Automation
        </Tab>
      </TabList>
    </>
  );
};

AboutTabList.displayName = 'AboutTabList';
export default AboutTabList;
