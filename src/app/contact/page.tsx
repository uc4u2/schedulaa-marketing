import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { contactPage } from '@/legacy-content/batch2/config';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: contactPage.meta?.title || 'Contact | Schedulaa',
  description: contactPage.meta?.description,
};

export default function ContactPage() {
  return <LegacyConfigPage config={contactPage} />;
}
