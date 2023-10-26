import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from './Dropdown';
import NestedMenu from './NestedMenu';

const Header = () => {
  const { t } = useTranslation(['common']);
  return (
    <div className="navbar z-50 relative">
      <div className="xl:navbar-start">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" className="h-14" width={64} height={64} />
        </Link>
        <Link href="/" className="btn btn-ghost normal-case text-xl px-0">
          PricePlanet
        </Link>
      </div>
      <div className="hidden md:block xl:navbar-center">
        <div className="lg:flex lg:ml-40">
          <Dropdown title={t('common:Region.Europe')}>
            <NestedMenu
              items={[
                { label: `🇩🇪 ${t('common:Country.DE')}`, href: `/${t('common:CountrySeoFriendlyName.DE')}` },
                { label: `🇫🇷 ${t('common:Country.FR')}`, href: `/${t('common:CountrySeoFriendlyName.FR')}` },
                { label: `🇬🇧 ${t('common:Country.GB')}`, href: `/${t('common:CountrySeoFriendlyName.GB')}` },
                { label: `🇪🇸 ${t('common:Country.ES')}`, href: `/${t('common:CountrySeoFriendlyName.ES')}` },
                { label: `🇸🇪 ${t('common:Country.SE')}`, href: `/${t('common:CountrySeoFriendlyName.SE')}` },
                { label: `🇮🇹 ${t('common:Country.IT')}`, href: `/${t('common:CountrySeoFriendlyName.IT')}` },
              ]}
            />
          </Dropdown>

          <Dropdown title={t('common:Region.Asia')}>
            <NestedMenu
              items={[
                { label: `🇯🇵 ${t('common:Country.JP')}`, href: `/${t('common:CountrySeoFriendlyName.JP')}` },
                { label: `🇹🇭 ${t('common:Country.TH')}`, href: `/${t('common:CountrySeoFriendlyName.TH')}` },
                { label: `🇰🇷 ${t('common:Country.KR')}`, href: `/${t('common:CountrySeoFriendlyName.KR')}` },
                { label: `🇻🇳 ${t('common:Country.VN')}`, href: `/${t('common:CountrySeoFriendlyName.VN')}` },
                { label: `🇵🇭 ${t('common:Country.PH')}`, href: `/${t('common:CountrySeoFriendlyName.PH')}` },
                { label: `🇮🇩 ${t('common:Country.ID')}`, href: `/${t('common:CountrySeoFriendlyName.ID')}` },
              ]}
            />
          </Dropdown>

          <Dropdown title={t('common:Region.Africa')}>
            <NestedMenu
              items={[
                { label: `🇳🇬 ${t('common:Country.NG')}`, href: `/${t('common:CountrySeoFriendlyName.NG')}` },
                { label: `🇿🇦 ${t('common:Country.ZA')}`, href: `/${t('common:CountrySeoFriendlyName.ZA')}` },
              ]}
            />
          </Dropdown>

          <Dropdown title={t('common:Region.Americas')}>
            <NestedMenu
              items={[
                { label: `🇺🇸 ${t('common:Country.US')}`, href: `/${t('common:CountrySeoFriendlyName.US')}` },
                { label: `🇨🇦 ${t('common:Country.CA')}`, href: `/${t('common:CountrySeoFriendlyName.CA')}` },
                { label: `🇧🇷 ${t('common:Country.BR')}`, href: `/${t('common:CountrySeoFriendlyName.BR')}` },
              ]}
            />
          </Dropdown>

          <Dropdown title={t('common:Region.Oceania')}>
            <NestedMenu
              items={[
                { label: `🇦🇺 ${t('common:Country.AU')}`, href: `/${t('common:CountrySeoFriendlyName.AU')}` },
                { label: `🇳🇿 ${t('common:Country.NZ')}`, href: `/${t('common:CountrySeoFriendlyName.NZ')}` },
              ]}
            />
          </Dropdown>

          <Link
            href="/disclaimer"
            className="mt- inline-flex justify-center w-full rounded-md border-none  px-4 py-2 bg-white text-sm font-bold text-black hover:bg-gray-50 "
          >
            {t('common:Disclaimer')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
