import Link from 'next/link';

const Header = () => (
  <div className="navbar">
    <div className="navbar-start">
      <Link href="/">
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: 100,
            height: 100,
          }}
        />
      </Link>
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        PricePlanet
      </Link>
      <div className="hidden lg:flex ml-10">
        <ul className="menu menu-horizontal dropdown px-1">
          <li tabIndex={0}>
            <details>
              <summary>Europe</summary>
              <ul className="p-2">
                <li>
                  <Link href="/country/germany">Germany</Link>
                </li>
                <li>
                  <Link href="/country/sweden">Sweden</Link>
                </li>
                <li>
                  <Link href="/country/italy">Italy</Link>
                </li>
                <li>
                  <Link href="/country/france">France</Link>
                </li>
                <li>
                  <Link href="/country/united-kingdom">Britain</Link>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={1}>
            <details>
              <summary>Asia</summary>
              <ul className="p-2">
                <li>
                  <a>South Korea</a>
                </li>
                <li>
                  <a>Japan</a>
                </li>
                <li>
                  <a>Thailand</a>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={2}>
            <details>
              <summary>Americas</summary>
              <ul className="p-2">
                <li>
                  <a>USA</a>
                </li>
                <li>
                  <a>Canada</a>
                </li>
                <li>
                  <a>Brazil</a>
                </li>
                <li>
                  <a>Mexico</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
