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
                { label: `🇩🇪 ${t('common:Country.DE')}`, href: '/germany' },
                { label: `🇫🇷 ${t('common:Country.FR')}`, href: '/france' },
                { label: `🇬🇧 ${t('common:Country.GB')}`, href: '/united-kingdom' },
                { label: `🇪🇸 ${t('common:Country.ES')}`, href: '/spain' },
                { label: `🇸🇪 ${t('common:Country.SE')}`, href: '/sweden' },
                { label: `🇮🇹 ${t('common:Country.IT')}`, href: '/italy' },
              ]}
            />
          </Dropdown>

          <Dropdown title={t('common:Region.Asia')}>
            <NestedMenu
              items={[
                { label: `🇯🇵 ${t('common:Country.JP')}`, href: '/japan' },
                { label: `🇹🇭 ${t('common:Country.TH')}`, href: '/thailand' },
                { label: `🇰🇷 ${t('common:Country.KR')}`, href: '/south-korea' },
                { label: `🇻🇳 ${t('common:Country.VN')}`, href: '/vietnam' },
                { label: `🇵🇭 ${t('common:Country.PH')}`, href: '/philippines' },
                { label: `🇮🇩 ${t('common:Country.ID')}`, href: '/indonesia' },
              ]}
            />
          </Dropdown>

          <Dropdown title={t('common:Region.Africa')}>
            <NestedMenu
              items={[
                { label: `🇳🇬 ${t('common:Country.NG')}`, href: '/nigeria' },
                { label: `🇿🇦 ${t('common:Country.ZA')}`, href: '/south-africa' },
              ]}
            />
          </Dropdown>

          <Dropdown title={t('common:Region.Americas')}>
            <NestedMenu
              items={[
                { label: `🇺🇸 ${t('common:Country.US')}`, href: '/usa' },
                { label: `🇨🇦 ${t('common:Country.CA')}`, href: '/canada' },
                { label: `🇧🇷 ${t('common:Country.BR')}`, href: '/brazil' },
              ]}
            />
          </Dropdown>

          <Dropdown title={t('common:Region.Oceania')}>
            <NestedMenu
              items={[
                { label: `🇦🇺 ${t('common:Country.AU')}`, href: '/australia' },
                { label: `🇳🇿 ${t('common:Country.NZ')}`, href: '/new-zealand' },
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
