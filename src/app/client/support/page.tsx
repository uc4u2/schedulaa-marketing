import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { supportPage } from '@/legacy-content/batch2/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Client Support | Schedulaa',
};

export default function ClientSupportPage() {
  return <LegacyConfigPage config={supportPage} />;
}
