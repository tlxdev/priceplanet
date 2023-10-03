import { Country } from '@/constants/Country';
import { GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import i18n from 'i18next';
import Backend from 'i18next-fs-backend';
import { getSeoFriendlyName } from '@/constants/CountrySeoFriendlyName';

import fs from 'fs';
import path from 'path';
import NodeCache from 'node-cache';
import { useTranslation } from 'next-i18next';

const seoCache = new NodeCache();

const CountryPage = ({ country }: { country: Country }) => {
  const { t } = useTranslation(['common', 'seo', 'cost-of-living']);

  return (
    <>
      <title>
        {t('cost-of-living:title', {
          country: t(`common:Country.${country}` as const),
        })}
      </title>
      <div className="flex flex-col content">
        <h1 className="text-center text-3xl">{t(`common:Country.${country}` as const)}  </h1>
        <p className=" mt-5">
          Immerse in Germany's refined blend of tradition and modernity. As you traverse through its picturesque landscapes, the vibrant
          culture unfolds, narrating tales of a rich historical tapestry. Cities buzz with contemporary allure, hosting a plethora of
          events, while rural regions preserve the quaint charm of yesteryears. The Germans uphold punctuality and efficiency, mirrored in
          their pristine public transport and robust economy. Culinary delights range from hearty local dishes to avant-garde gastronomy,
          echoing the country's knack for excellence and innovation. Embrace the Gemütlichkeit (cozy friendliness) at a local beer garden, a
          microcosm of Germany's welcoming social fabric.
        </p>

        <p className="mt-10">Cost of Living</p>
        <p>Monthly rent: 600€</p>
        <p>Monthly groceries: 200€</p>
        <p>Monthly transportation: 100€</p>
        <p>Monthly health insurance: 100€</p>

        <p className="mt-10">Salaries</p>
        <p>Average (before taxes): 3000€</p>
        <p>Average (after taxes): 2500€</p>
        <p>Minimum wage: 1500€</p>

        <a href={`/country/${getSeoFriendlyName(t, country)}/add-details`}>
          <button className="btn btn-primary w-40 mt-10">Submit my COL</button>
        </a>
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

      console.log(country, seoFriendlyName);

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
      ...(await serverSideTranslations(locale, ['common', 'cost-of-living', 'seo'])),
      country: getCountryFromSeoFriendlyName({ seoFriendlyName: params.name, locale }),
    },
  };
}

export default CountryPage;
