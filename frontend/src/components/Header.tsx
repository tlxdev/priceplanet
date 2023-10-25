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
                { label: `🇩🇪 ${t('common:Country.DE')}`, href: '/country/germany' },
                { label: `🇫🇷 ${t('common:Country.FR')}`, href: '/country/france' },
                { label: `🇬🇧 ${t('common:Country.GB')}`, href: '/country/united-kingdom' },
                { label: `🇪🇸 ${t('common:Country.ES')}`, href: '/country/spain' },
                { label: `🇸🇪 ${t('common:Country.SE')}`, href: '/country/sweden' },
                { label: `🇮🇹 ${t('common:Country.IT')}`, href: '/country/italy' },
              ]}
            />
          </Dropdown>

          <Dropdown title={t('common:Region.Asia')}>
            <NestedMenu
              items={[
                { label: `🇯🇵 ${t('common:Country.JP')}`, href: '/country/japan' },
                { label: `🇹🇭 ${t('common:Country.TH')}`, href: '/country/thailand' },
                { label: `🇰🇷 ${t('common:Country.KR')}`, href: '/country/south-korea' },
                { label: `🇻🇳 ${t('common:Country.VN')}`, href: '/country/vietnam' },
                { label: `🇵🇭 ${t('common:Country.PH')}`, href: '/country/philippines' },
                { label: `🇮🇩 ${t('common:Country.ID')}`, href: '/country/indonesia' },
              ]}
            />
          </Dropdown>

          <Dropdown title={t('common:Region.Africa')}>
            <NestedMenu
              items={[
                { label: `🇳🇬 ${t('common:Country.NG')}`, href: '/country/nigeria' },
                { label: `🇿🇦 ${t('common:Country.ZA')}`, href: '/country/south-africa' },
              ]}
            />
          </Dropdown>

          <Dropdown title={t('common:Region.Americas')}>
            <NestedMenu
              items={[
                { label: `🇺🇸 ${t('common:Country.US')}`, href: '/country/usa' },
                { label: `🇨🇦 ${t('common:Country.CA')}`, href: '/country/canada' },
                { label: `🇧🇷 ${t('common:Country.BR')}`, href: '/country/brazil' },
              ]}
            />
          </Dropdown>

          <Dropdown title={t('common:Region.Oceania')}>
            <NestedMenu
              items={[
                { label: `🇦🇺 ${t('common:Country.AU')}`, href: '/country/australia' },
                { label: `🇳🇿 ${t('common:Country.NZ')}`, href: '/country/new-zealand' },
              ]}
            />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
