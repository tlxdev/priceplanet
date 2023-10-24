import { COUNTRY_DETAILS, Country, getCurrencySymbol } from '@/constants/Country';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getSeoFriendlyName } from '@/constants/CountrySeoFriendlyName';
import i18n from 'i18next';
import Backend from 'i18next-fs-backend';

import { countryCodeToEmoji } from '@/utils/CountryUtils';
import typedFetch from '@/utils/Fetch';
import fs from 'fs';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import NodeCache from 'node-cache';
import path from 'path';

const seoCache = new NodeCache();

interface PublicPriceData {
  averageRent: number;

  averageSalaryBeforeTax: number;
  averageSalaryAfterTax: number;

  averageMonthlyGroceriesPrice: number;
  averageMonthlyTransportPrice: number;

  averageLunchPrice: number;
}

const CountryPage = ({ country, data }: { country: Country; data: PublicPriceData }) => {
  const { t } = useTranslation(['common', 'seo', 'cost-of-living']);

  const currency = COUNTRY_DETAILS[country].currency;

  const currencySymbol = getCurrencySymbol(currency);

  return (
    <>
      <Head>
        <title>
          {t('cost-of-living:title', {
            country: t(`common:Country.${country}` as const),
          })}
        </title>
        <meta name="description" content={`${t(`common:Country.${country}`)} Cost of Living`} />
      </Head>
      <div className="flex flex-col content">
        <h1 className="text-center text-3xl mt-4 mb-4">{t(`common:Country.${country}` as const)} </h1>
        <p className="mt-5">{t(`country-details:${country}` as any)}</p>

        <div className="alert mt-10 mb-10">
          <span>Are you a local? Add your details to help others!</span>
          <a href={`/country/${getSeoFriendlyName(t, country)}/add-details`}>
            <button className="btn btn-ghost mx-0 px-">Add my details {countryCodeToEmoji(country)}</button>
          </a>
        </div>

        <div className="divider" />

        <p>Cost of Living</p>
        <p>
          Monthly rent: {data.averageRent} {currencySymbol}
        </p>
        <p>
          Monthly groceries: {data.averageMonthlyGroceriesPrice} {currencySymbol}
        </p>
        <p>
          Monthly transportation: {data.averageMonthlyTransportPrice} {currencySymbol}
        </p>
        <p>
          Lunch price: {data.averageLunchPrice} {currencySymbol}
        </p>
        <div className="divider" />

        <p>Salaries</p>
        <p>
          Average (before taxes): {data.averageSalaryBeforeTax} {currencySymbol}
        </p>
        <p>
          Average (after taxes): {data.averageSalaryAfterTax} {currencySymbol}
        </p>
        {/*<p>Minimum wage: 1500€</p>*/}
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
export async function getStaticProps({ locale, params }: { locale: string; params: { name: string } }) {
  const country = getCountryFromSeoFriendlyName({ seoFriendlyName: params.name, locale });
  console.log(`${process.env.NEXT_PUBLIC_API_URL}/cost-of-living/country/${country}`);
  const apiResponse = await typedFetch<PublicCostOfLivingData>(`${process.env.NEXT_PUBLIC_API_URL}/cost-of-living/country/${country}`);

  const data = apiResponse.data;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'cost-of-living', 'seo', 'country-details'])),
      country,
      data,
    },
  };
}

export default CountryPage;
