import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import AutoComplete, { AutoCompleteOption } from '@/components/AutoComplete';
import { Country } from '@/constants/Country';
import { useRouter } from 'next/router';
import { DEFAULT_LOCALE } from '@/constants/Locale';
import { useState } from 'react';

const LanderAutoComplete = () => {
  const { t, i18n } = useTranslation(['common', 'lander', 'seo']);
  const router = useRouter();

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const countries = Object.values(Country).map((country) => {
    return {
      value: country,
      label: t(`common:Country.${country}` as const),
    };
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedCountryValue = selectedCountry as Country;

    const seoFriendlyCountryName = t(`seo:CountrySeoFriendlyName.${selectedCountryValue}` as const);

    if (i18n.language === DEFAULT_LOCALE) {
      return router.push(`/country/${seoFriendlyCountryName}`);
    }
    return router.push(`${i18n.language}/country/${seoFriendlyCountryName}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex space-x-4">
        <AutoComplete
          name="searchTerm"
          placeholder={t('lander:HeroInputPlaceholder')}
          values={countries}
          selectedValue={selectedCountry}
          onValueChange={setSelectedCountry}
        />
        <button className="btn btn-primary">{t('lander:HeroButtonCTA')}</button>
      </div>
    </form>
  );
};

export default function Home() {
  const { t } = useTranslation(['common', 'lander']);

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(/worldmap.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">{t('lander:HeroText')}</p>

            <LanderAutoComplete />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'lander', 'seo'])),
      // Will be passed to the page component as props
    },
  };
}
