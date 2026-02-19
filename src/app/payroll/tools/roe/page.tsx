import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { payrollPages } from '@/legacy-content/payroll/config';

export default function PayrollRoePage() {
  return <FeatureStyleContentPage config={payrollPages.roe as any} routePath="/payroll/tools/roe" />;
}
