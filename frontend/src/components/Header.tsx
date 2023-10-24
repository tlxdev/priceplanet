import Image from 'next/image';
import Link from 'next/link';
import Dropdown from './Dropdown';
import NestedMenu from './NestedMenu';

const Header = () => (
  <div className="navbar">
    <div className="xl:navbar-start">
      <Link href="/">
        <Image src="/logo2.png" alt="Logo" className="h-14" width={64} height={64} />
      </Link>
      <Link href="/" className="btn btn-ghost normal-case text-lg">
        PricePlanet
      </Link>
    </div>
    <div className="hidden md:block xl:navbar-center">
      <div className="lg:flex lg:ml-40">
        <Dropdown title="Europe">
          <NestedMenu
            items={[
              { label: '🇩🇪 Germany', href: '/country/germany' },
              { label: '🇫🇷 France', href: '/country/france' },
              { label: '🇬🇧 UK', href: '/country/united-kingdom' },
              { label: '🇪🇸 Spain', href: '/country/spain' },
              { label: '🇸🇪 Sweden', href: '/country/sweden' },
              { label: '🇮🇹 Italy', href: '/country/italy' },
            ]}
          />
        </Dropdown>

        <Dropdown title="Asia">
          <NestedMenu
            items={[
              { label: '🇯🇵 Japan', href: '/country/japan' },
              { label: '🇹🇭 Thailand', href: '/country/thailand' },
              { label: '🇰🇷 South Korea', href: '/country/south-korea' },
              { label: '🇻🇳 Vietnam', href: '/country/vietnam' },
              { label: '🇵🇭 Philippines', href: '/country/philippines' },
              { label: '🇮🇩 Indonesia', href: '/country/indonesia' },
            ]}
          />
        </Dropdown>

        <Dropdown title="Africa">
          <NestedMenu
            items={[
              { label: '🇳🇬 Nigeria', href: '/country/nigeria' },
              { label: '🇿🇦 South Africa', href: '/country/south-africa' },
            ]}
          />
        </Dropdown>

        <Dropdown title="Americas">
          <NestedMenu
            items={[
              { label: '🇺🇸 USA', href: '/country/usa' },
              { label: '🇨🇦 Canada', href: '/country/canada' },
              { label: '🇧🇷 Brazil', href: '/country/brazil' },
            ]}
          />
        </Dropdown>

        <Dropdown title="Oceania">
          <NestedMenu
            items={[
              { label: '🇦🇺 Australia', href: '/country/australia' },
              { label: '🇳🇿 New Zealand', href: '/country/new-zealand' },
            ]}
          />
        </Dropdown>
      </div>
    </div>
  </div>
);

export default Header;
