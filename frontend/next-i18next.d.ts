/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next';

import type common from './public/locales/en/common.json';
import type costOfLiving from './public/locales/en/cost-of-living.json';
import type countryDetailsForm from './public/locales/en/country-details-form.json';
import type countryDetails from './public/locales/en/country-details.json';
import type disclaimer from './public/locales/en/disclaimer.json';
import type lander from './public/locales/en/lander.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      lander: typeof lander;
      'cost-of-living': typeof costOfLiving;
      'country-details': typeof countryDetails;
      'country-details-form': typeof countryDetailsForm;
      disclaimer: typeof disclaimer;
    };
    returnNull: false;
  }
}
