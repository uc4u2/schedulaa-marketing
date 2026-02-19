import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { payrollPages } from '@/legacy-content/payroll/config';

export default function PayrollW2Page() {
  return <FeatureStyleContentPage config={payrollPages.w2 as any} routePath="/payroll/tools/w2" />;
}
