import { TFunction } from 'i18next';
import { Country } from './Country';

export const getSeoFriendlyName = (t: TFunction<['seo'], undefined>, country: Country): string => {
  return t(`seo:CountrySeoFriendlyName.${country}` as const);
};
