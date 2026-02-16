import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { payrollPages } from '@/legacy-content/payroll/config';

export default function PayslipsPage() {
  return <LegacyConfigPage config={payrollPages.payslips} />;
}
