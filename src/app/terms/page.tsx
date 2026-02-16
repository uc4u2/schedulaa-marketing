import TermsConditionContent from '@/components/terms-conditions/TermsConditionContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Terms | Schedulaa',
};

export default function TermsPage() {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <TermsConditionContent />
    </main>
  );
}
