import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { payrollPages } from '@/legacy-content/payroll/config';

export default function PayrollT4Page() {
  return <LegacyConfigPage config={payrollPages.t4} />;
}
