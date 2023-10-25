import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Disclaimer = () => {
  const { t } = useTranslation(['disclaimer']);

  return (
    <div className="text-center md:mt-20">
      <h5 className="text-3xl text-bold mb-4">{t('disclaimer:Disclaimer')}</h5>

      <p>{t('disclaimer:DisclaimerMainTitle')}</p>

      <h5 className="text-xl text-bold mt-10 mb-2">{t('disclaimer:DisclaimerTitle1')}</h5>

      <p className="w-1/3 mx-auto">{t('disclaimer:DisclaimerContent1')}</p>

      <h5 className="text-xl text-bold mt-10 mb-2">{t('disclaimer:DisclaimerTitle2')}</h5>

      <p className="w-1/3 mx-auto">{t('disclaimer:DisclaimerContent2')}</p>

      <h5 className="text-xl text-bold mt-10 mb-2">{t('disclaimer:DisclaimerTitle3')}</h5>

      <p className="w-1/3 mx-auto">{t('disclaimer:DisclaimerContent3')}</p>

      <h5 className="text-xl text-bold mt-10 mb-2">{t('disclaimer:DisclaimerTitle4')}</h5>

      <p className="w-1/3 mx-auto">{t('disclaimer:DisclaimerContent4')}</p>

      <h5 className="text-xl text-bold mt-10 mb-2">{t('disclaimer:DisclaimerTitle5')}</h5>

      <p className="w-1/3 mx-auto">{t('disclaimer:DisclaimerContent5')}</p>

      <p className="w-1/3 mx-auto mt-10">{t('disclaimer:DisclaimerAgree')}</p>

    </div>
  );
};

// Convert next line to arrow function:
export async function getStaticProps({ locale, params }: { locale: string; params: { name: string } }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'disclaimer'])),
    },
  };
}

export default Disclaimer;
