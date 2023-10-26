import { TFunction } from 'i18next';
import { Country } from './Country';

type SeoNamespace = ['common'] | ['common', any] | [any, 'common'];

export const getSeoFriendlyName = (t: TFunction<SeoNamespace, undefined>, country: Country): string => {
  return t(`common:CountrySeoFriendlyName.${country}` as const);
};
