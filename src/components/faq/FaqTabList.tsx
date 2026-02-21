import { Fragment } from 'react';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';
import { AppLocale } from '@/utils/locale';
import { getFaqCopy } from './localeCopy';

const FaqTabList = ({ locale }: { locale: AppLocale | string | null | undefined }) => {
  const copy = getFaqCopy(locale);
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          {copy.tabs.general}
        </Tab>
        <Tab index={1} variant="desktop">
          {copy.tabs.changelog}
        </Tab>
        <Tab index={2} variant="desktop">
          {copy.tabs.privacy}
        </Tab>
        <Tab index={3} variant="desktop">
          {copy.tabs.terms}
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          {copy.tabs.general}
        </Tab>
        <Tab index={1} variant="mobile">
          {copy.tabs.changelog}
        </Tab>
        <Tab index={2} variant="mobile">
          {copy.tabs.privacy}
        </Tab>
        <Tab index={3} variant="mobile" className="text-nowrap">
          {copy.tabs.terms}
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default FaqTabList;
