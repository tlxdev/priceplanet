import Header from '@/components/Header';
import '@/styles/globals.scss';
import { appWithTranslation, i18n } from 'next-i18next';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
  </>
);

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'development') {
    await i18n?.reloadResources();
  }
};

export default appWithTranslation(MyApp);
