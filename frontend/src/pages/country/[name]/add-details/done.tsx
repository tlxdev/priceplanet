import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


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

const getServerSideProps = async ({ locale, params }: { locale: string; params: { name: string } }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'country-details-form'])),
      country: params.name.toUpperCase(),
    },
  };
};

export { getServerSideProps };
export default Done;
