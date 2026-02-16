import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { payrollPages } from '@/legacy-content/payroll/config';

export default function PayrollW2Page() {
  return <LegacyConfigPage config={payrollPages.w2} />;
}
