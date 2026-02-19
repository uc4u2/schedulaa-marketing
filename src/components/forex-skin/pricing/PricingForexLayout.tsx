import Pricing from '@/components/pricing/Pricing';

// Pricing uses Schedulaa source-of-truth content and CTA/link contract.
export default function PricingForexLayout() {
  return (
    <main className="overflow-x-hidden bg-background-1 dark:bg-background-6">
      <Pricing />
    </main>
  );
}
