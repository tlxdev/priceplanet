import { TFunction } from 'i18next';
import { Country } from './Country';

type SeoNamespace = ['seo'] | ['seo', any] | [any, 'seo'];

export const getSeoFriendlyName = (t: TFunction<SeoNamespace, undefined>, country: Country): string => {
  return t(`seo:CountrySeoFriendlyName.${country}` as const);
};
