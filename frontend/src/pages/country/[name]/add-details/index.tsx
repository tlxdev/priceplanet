import AddCountryDetailsForm from '@/components/AddCountryDetailsForm';
import { Country } from '@/constants/Country';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

const AddCountryDetailsPage = ({ country }: { country: Country }) => {
  const { t } = useTranslation(['common', 'country-details-form']);

  return (
    <>
      <Head>
        <title>
          {t('country-details-form:Title', {
            country: t(`common:Country.${country}` as const),
          })}
        </title>
      </Head>
      <div className="lg:w-1/2 sm:w-1/2 container pl-6 sm:pl-0 sm:mx-auto">
        <AddCountryDetailsForm country={country} />
      </div>
    </>
  );
};

const getServerSideProps = async ({ locale, params }: { locale: string; params: { name: string } }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'cost-of-living', 'country-details-form'])),
      country: params.name.toUpperCase(),
    },
  };
};

export { getServerSideProps };
export default AddCountryDetailsPage;
