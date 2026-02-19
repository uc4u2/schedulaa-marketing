import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { payrollPages } from '@/legacy-content/payroll/config';

export default function PayrollUsaPage() {
  return <FeatureStyleContentPage config={payrollPages.usa as any} routePath="/payroll/usa" />;
}
