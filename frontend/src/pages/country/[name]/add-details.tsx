import { Country } from '@/constants/Country';
import { GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import i18n from 'i18next';
import Backend from 'i18next-fs-backend';
import { getSeoFriendlyName } from '@/constants/CountrySeoFriendlyName';

import fs from 'fs';
import path from 'path';
import NodeCache from 'node-cache';
import AddCountryDetailsForm from '@/components/AddCountryDetailsForm';

const seoCache = new NodeCache();

const CountryPage = ({ country }: { country: Country }) => {
  console.log('country', country);

  return (
    <>
      <div className="lg:w-1/3 sm:w-1/2 xs:w-full container mx-auto">
        <AddCountryDetailsForm country={country} />
      </div>
    </>
  );
};

const SeoToCountryMap = Object.values(Country).reduce((map, country) => {
  const seoFriendlyName = getSeoFriendlyName(i18n.t, country);
  return {
    ...map,
    [seoFriendlyName]: country,
  };
}, {});

export async function getStaticPaths() {
  const paths = [];

  const languages = ['en'];
  const defaultLanguage = 'en';

  await i18n.use(Backend).init({
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    ns: ['seo'],
    defaultNS: 'seo',
    backend: {
      loadPath: './public/locales/{{lng}}/{{ns}}.json',
    },
  });

  const countryPaths = Object.values(Country).map((country) => {
    return {
      params: { name: getSeoFriendlyName(i18n.t, country) },
      locale: defaultLanguage,
    };
  });

  return {
    paths: countryPaths,
    fallback: false,
  };
}

const getCountryFromSeoFriendlyName = ({ seoFriendlyName, locale }: { seoFriendlyName: string; locale: string }): Country => {
  let SeoToCountryMap: any = seoCache.get(locale);

  if (locale !== 'en') {
    throw new Error('locale is not a valid locale');
  }

  if (!SeoToCountryMap) {
    const seoTranslationFilePath = path.join(process.cwd(), `./public/locales/${locale}/seo.json`);
    const seoTranslations: {
      CountrySeoFriendlyName: {
        [country: string]: string;
      };
    } = JSON.parse(fs.readFileSync(seoTranslationFilePath, 'utf8'));

    SeoToCountryMap = Object.keys(seoTranslations.CountrySeoFriendlyName).reduce((map, country: string) => {
      const seoFriendlyName = seoTranslations.CountrySeoFriendlyName[country];

      return {
        ...map,
        [seoFriendlyName]: country,
      };
    }, {});

    seoCache.set(locale, SeoToCountryMap);
  }

  const country = SeoToCountryMap[seoFriendlyName] as Country;

  return country;
};

// Convert next line to arrow function:
export async function getStaticProps({ locale, params }: { locale: string; params: { name: string; country: Country } }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'cost-of-living'])),
      country: getCountryFromSeoFriendlyName({ seoFriendlyName: params.name, locale }),
    },
  };
}

export default CountryPage;
