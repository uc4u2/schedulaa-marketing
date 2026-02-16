import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { payrollPages } from '@/legacy-content/payroll/config';

export default function PayrollRoePage() {
  return <LegacyConfigPage config={payrollPages.roe} />;
}
