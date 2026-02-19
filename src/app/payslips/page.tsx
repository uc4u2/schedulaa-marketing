import FeatureStyleContentPage from '@/components/sections/FeatureStyleContentPage';
import { payrollPages } from '@/legacy-content/payroll/config';

export default function PayslipsPage() {
  return <FeatureStyleContentPage config={payrollPages.payslips as any} routePath="/payslips" />;
}
