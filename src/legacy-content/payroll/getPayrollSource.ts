import { payrollPages } from './config';
import { payrollPages as payrollPagesFa } from './config.fa';
import { payrollPages as payrollPagesRu } from './config.ru';
import { payrollPages as payrollPagesZh } from './config.zh';
import { AppLocale } from '@/utils/locale';

export const getPayrollSource = (locale: AppLocale | string | null | undefined) => {
  if (locale === 'fa') return payrollPagesFa;
  if (locale === 'ru') return payrollPagesRu;
  if (locale === 'zh') return payrollPagesZh;
  return payrollPages;
};
