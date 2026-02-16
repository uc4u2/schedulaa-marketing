import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Client Support | Schedulaa',
};

export default function ClientSupportPage() {
  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Help Center</p>
          <h1 className="mt-5">Support for clients and teams</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">Contact support for account, payroll, booking, and workflow assistance.</p>
        </div>
      </section>
    </main>
  );
}
