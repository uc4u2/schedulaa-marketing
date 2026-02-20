import { docsPage } from './config';
import { AppLocale } from '@/utils/locale';

export const getDocsSource = (_locale: AppLocale | string | null | undefined) => docsPage;
