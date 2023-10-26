import { COUNTRY_DETAILS, Country, getCurrencySymbol } from '@/constants/Country';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getSeoFriendlyName } from '@/constants/CountrySeoFriendlyName';
import i18n from 'i18next';
import Backend from 'i18next-fs-backend';

import MoneyValue from '@/components/MoneyValue';
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
  const { t } = useTranslation(['common', 'cost-of-living']);

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
        <p className="mt-5">{t(`country-details:${country}` as any, {
          defaultValue: ''
        })}</p>

        <div className="alert mt-10 mb-10">
          <span>{t('cost-of-living:AreYouALocalAddMyDetails')}</span>
          <a href={`/country/${country.toLowerCase()}/add-details`}>
            <button className="btn btn-ghost mx-0 w-auto">
              {t('cost-of-living:AddMyDetails')} {countryCodeToEmoji(country)}
            </button>
          </a>
        </div>

        <div className="divider" />

        <p>{t('cost-of-living:CostOfLiving')}</p>
        <p>
          {t('cost-of-living:MonthlyRent')} <MoneyValue value={data.averageRent} /> {currencySymbol}
        </p>
        <p>
          {t('cost-of-living:MonthlyGroceries')} <MoneyValue value={data.averageMonthlyGroceriesPrice} /> {currencySymbol}
        </p>
        <p>
          {t('cost-of-living:MonthlyTransportation')} <MoneyValue value={data.averageMonthlyTransportPrice} /> {currencySymbol}
        </p>
        <p>
          {t('cost-of-living:LunchPrice')} <MoneyValue value={data.averageLunchPrice} /> {currencySymbol}
        </p>
        <div className="divider" />

        <p>{t('cost-of-living:Salaries')}</p>
        <p>
          {t('cost-of-living:AverageBeforeTaxes')} <MoneyValue value={data.averageSalaryBeforeTax} /> {currencySymbol}
        </p>
        <p>
          {t('cost-of-living:AverageAfterTaxes')} <MoneyValue value={data.averageSalaryAfterTax} /> {currencySymbol}
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

  const languages = ['en', 'it'];
  const defaultLanguage = 'en';

  // Loop over each language and generate paths for each one
  for (const language of languages) {
    await i18n.use(Backend).init({
      lng: language, // Set the current language
      fallbackLng: defaultLanguage,
      ns: ['common'],
      defaultNS: 'common',
      backend: {
        loadPath: './public/locales/{{lng}}/{{ns}}.json',
      },
    });

    const countryPathsForLanguage = Object.values(Country).map((country) => {
      return {
        params: { name: getSeoFriendlyName(i18n.t, country) },
        locale: language,
      };
    });

    paths.push(...countryPathsForLanguage);
  }

  return {
    paths: paths,
    fallback: false,
  };
}

const getCountryFromSeoFriendlyName = ({ seoFriendlyName, locale }: { seoFriendlyName: string; locale: string }): Country => {
  let SeoToCountryMap: any = seoCache.get(locale);

  if (!SeoToCountryMap) {
    const seoTranslationFilePath = path.join(process.cwd(), `./public/locales/${locale}/common.json`);
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
  const apiResponse = await typedFetch<PublicCostOfLivingData>(`${process.env.NEXT_PUBLIC_API_URL}/cost-of-living/country/${country}`);

  const data = apiResponse.data;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'cost-of-living', 'country-details'])),
      country,
      data,
    },
  };
}

export default CountryPage;
