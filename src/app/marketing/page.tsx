import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { marketingPages } from '@/legacy-content/marketing/config';

export default function MarketingPage() {
  return <LegacyConfigPage config={marketingPages.hub} />;
}
