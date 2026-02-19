import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { payrollPages } from '@/legacy-content/payroll/config';

export default function PayrollCanadaPage() {
  return <FeatureStyleContentPage config={payrollPages.canada as any} routePath="/payroll/canada" />;
}
