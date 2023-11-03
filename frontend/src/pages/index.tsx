import AutoComplete from '@/components/AutoComplete';
import PopupForm from '@/components/LanderPopupForm';
import { Country } from '@/constants/Country';
import { DEFAULT_LOCALE } from '@/constants/Locale';
import { countryCodeToEmoji } from '@/utils/CountryUtils';
import { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const LanderAutoComplete = () => {
  const { t, i18n } = useTranslation(['common', 'lander']);
  const router = useRouter();

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const countries = Object.values(Country).map((country) => {
    return {
      value: country,
      label: t(`common:Country.${country}` as const),
    };
  });

  const onSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (!selectedCountry) {
      return;
    }

    const selectedCountryValue = selectedCountry as Country;

    const seoFriendlyCountryName = t(`common:CountrySeoFriendlyName.${selectedCountryValue}` as const);

    if (i18n.language === DEFAULT_LOCALE) {
      return router.push(`/country/${seoFriendlyCountryName}`);
    }
    return router.push(`${i18n.language}/country/${seoFriendlyCountryName}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-2">
        <AutoComplete
          name="searchTerm"
          placeholder={t('lander:HeroInputPlaceholder')}
          values={countries}
          selectedValue={selectedCountry}
          onValueChange={setSelectedCountry}
          onEnterPress={onSubmit}
        />
        <button className="btn btn-ghost px-16 h-12 text-lg border-gray-400">{t('lander:HeroButtonCTA')}</button>
      </div>
    </form>
  );
};

interface GeoLocation {
  city: string;
  country: string;
}

const Lander = ({ location }: { location: GeoLocation }) => {
  const { t } = useTranslation(['common', 'lander']);

  const countryName = t(`common:Country.${location.country}` as any);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 100); // Change 10000 to X seconds you want (e.g., 5000 for 5 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>priceplanet.org</title>
        <meta name="description" content={t('lander:MetaDescription')} />
        <meta property="og:title" content="priceplanet.org" />
        <meta property="og:description" content={t('lander:MetaDescription')} />
        <meta property="og:image" content="/logo.png" />
      </Head>
      <div className="hero bg-slate-900 bg-center bg-cover" style={{ minHeight: 'calc(100vh - 72px)' }}>
        <div
          className="absolute w-full"
          style={{
            height: 'calc(100vh - 72px)',
            background: '#FFF',
          }}
        >
          <Image src="/lander.png" fill objectFit="cover" quality={100} priority={true} alt="Lander Image" />
        </div>
        <div className="hero-content text-center text-black">
          <div className="max-w-xl md:max-w-sm xl:max-w-xl hero-custom">
            <h1 className="text-xl xl:text-5xl font-bold">{t('lander:HeroTitle')}</h1>
            <h1 className="mb-2 text-4xl xl:text-8xl font-bold">{t('lander:HeroSubtitle')}</h1>
            <p className="mb-5">
              {t('lander:HeroText', {
                city: location.city,
                country: countryName || '?',
              })}
            </p>

            <LanderAutoComplete />

            <Link href={`/country/${location.country.toLowerCase()}/add-details`}>
              <button className="btn btn-primary px-8 mt-6 h-12 text-lg border-gray-400">
                <div className="space-x-2">
                  <span>{t('lander:SubmitMyDetails')}</span>
                  <span>{countryCodeToEmoji(location.country as Country)}</span>
                </div>
              </button>
            </Link>
          </div>
        </div>

        {showPopup && <PopupForm setIsVisible={setShowPopup} country={location.country} />}
      </div>
    </>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    const req = context.req;

    const city = req.headers['x-vercel-ip-city'];
    const country = req.headers['x-vercel-ip-country'];
    const location = {
      city: city || '?',
      country: country || Country.DE,
    };
    const locale = context.locale || DEFAULT_LOCALE;

    return {
      props: {
        location,
        ...(await serverSideTranslations(locale, ['common', 'lander', 'country-details-form'])),

        // Will be passed to the page component as props
      },
    };
  } catch (e) {
    console.error(e);
  }
};

export default Lander;
