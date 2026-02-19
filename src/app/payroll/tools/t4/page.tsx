import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { payrollPages } from '@/legacy-content/payroll/config';

export default function PayrollT4Page() {
  return <FeatureStyleContentPage config={payrollPages.t4 as any} routePath="/payroll/tools/t4" />;
}
