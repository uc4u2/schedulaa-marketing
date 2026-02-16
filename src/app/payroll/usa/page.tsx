import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { payrollPages } from '@/legacy-content/payroll/config';

export default function PayrollUsaPage() {
  return <LegacyConfigPage config={payrollPages.usa} />;
}
