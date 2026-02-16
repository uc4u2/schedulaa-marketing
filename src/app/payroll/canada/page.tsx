import LegacyConfigPage from '@/components/legacy/LegacyConfigPage';
import { payrollPages } from '@/legacy-content/payroll/config';

export default function PayrollCanadaPage() {
  return <LegacyConfigPage config={payrollPages.canada} />;
}
