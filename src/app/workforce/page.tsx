import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Workforce | Schedulaa',
};

export default function WorkforcePage() {
  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">Workforce</p>
          <h1 className="mt-5">All-in-one workforce command center</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">
            Schedulaa already unified online scheduling, payroll, and website pages. Now we’ve closed the loop on time tracking so hours, templates, policy audits, and payroll-ready approvals live in one dashboard—with IP/device hints captured automatically for every punch.
          </p>
        </div>
      </section>
    </main>
  );
}
