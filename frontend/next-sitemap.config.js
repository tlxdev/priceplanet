/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://priceplanet.org',
  exclude: ['/country/*/add-details/done'], // <= exclude here
  generateRobotsTxt: false, // (optional)
  alternateRefs: [
    {
      href: 'https://priceplanet.org/it',
      hreflang: 'it',
    },
  ],
};
