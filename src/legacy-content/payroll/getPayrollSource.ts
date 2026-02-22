import { payrollPages } from './config';
import { payrollPages as payrollPagesFa } from './config.fa';
import { payrollPages as payrollPagesRu } from './config.ru';
import { payrollPages as payrollPagesZh } from './config.zh';
import { payrollPages as payrollPagesEs } from './config.es';
import { payrollPages as payrollPagesFr } from './config.fr';
import { payrollPages as payrollPagesDe } from './config.de';
import { payrollPages as payrollPagesAr } from './config.ar';
import { payrollPages as payrollPagesPt } from './config.pt';
import { AppLocale } from '@/utils/locale';

export const getPayrollSource = (locale: AppLocale | string | null | undefined) => {
  if (locale === 'fa') return payrollPagesFa;
  if (locale === 'ru') return payrollPagesRu;
  if (locale === 'zh') return payrollPagesZh;
  if (locale === 'es') return payrollPagesEs;
  if (locale === 'fr') return payrollPagesFr;
  if (locale === 'de') return payrollPagesDe;
  if (locale === 'ar') return payrollPagesAr;
  if (locale === 'pt') return payrollPagesPt;
  return payrollPages;
};
