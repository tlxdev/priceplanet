/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next';

import type common from './public/locales/en/common.json';
import type lander from './public/locales/en/lander.json';
import type costOfLiving from './public/locales/en/cost-of-living.json';
import seo from './public/locales/en/seo.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      lander: typeof lander;
      'cost-of-living': typeof costOfLiving;
      seo: typeof seo;
    };
    returnNull: false;
  }
}
