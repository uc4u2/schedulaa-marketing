import TabContent from '../ui/tab/TabContent';
import ChangelogTab from './ChangelogTab';
import GeneralTab from './GeneralTab';
import PrivacyTab from './PrivacyTab';
import TermsConditionsTab from './TermsConditionsTab';
import { AppLocale } from '@/utils/locale';

const FaqTabContent = ({ locale }: { locale: AppLocale | string | null | undefined }) => {
  const data = [
    {
      id: 1,
      tabContent: <GeneralTab locale={locale} />,
    },
    {
      id: 2,
      tabContent: <ChangelogTab locale={locale} />,
    },
    {
      id: 3,
      tabContent: <PrivacyTab locale={locale} />,
    },
    {
      id: 4,
      tabContent: <TermsConditionsTab locale={locale} />,
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <TabContent key={item.id} index={index}>
          {item.tabContent}
        </TabContent>
      ))}
    </>
  );
};

export default FaqTabContent;
