import Header from '@/components/Header';
import '@/styles/globals.scss';
import { Analytics } from '@vercel/analytics/react';
import { appWithTranslation, i18n } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div data-theme="light">
    <Header />
    <Head>
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div>
      <Component {...pageProps} />
      <Analytics />
    </div>
  </div>
);

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'development') {
    await i18n?.reloadResources();
  }
};

export default appWithTranslation(MyApp);
