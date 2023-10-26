import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Country } from '@/constants/Country';
import { getSeoFriendlyName } from '@/constants/CountrySeoFriendlyName';
import i18n from 'i18next';
import Backend from 'i18next-fs-backend';

const Done = () => {
  const { t } = useTranslation(['country-details-form']);
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{t('country-details-form:ThankYouForSubmission')}</h1>
          <p className="py-6">{t('country-details-form:FindOutHowYouCompareGlobally')}</p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = [];

  const languages = ['en'];
  const defaultLanguage = 'en';

  await i18n.use(Backend).init({
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    ns: ['common'],
    defaultNS: 'common',
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

// Convert next line to arrow function:
export async function getStaticProps({ locale, params }: { locale: string; params: { name: string } }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'country-details-form'])),
    },
  };
}

export default Done;
