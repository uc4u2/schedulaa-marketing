import PrivacyContent from '@/components/privacy/PrivacyContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Privacy | Schedulaa',
};

export default function PrivacyPage() {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <PrivacyContent />
    </main>
  );
}
