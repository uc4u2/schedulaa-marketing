import Pricing from '@/components/pricing/Pricing';
import { AppLocale } from '@/utils/locale';

// Pricing uses Schedulaa source-of-truth content and CTA/link contract.
export default function PricingForexLayout({ locale }: { locale: AppLocale }) {
  return (
    <main className="overflow-x-hidden bg-background-1 dark:bg-background-6">
      <Pricing locale={locale} />
    </main>
  );
}
