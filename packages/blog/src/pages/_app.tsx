import '@styles/global.css';
import type { AppProps } from 'next/app';
import { Header } from '@components/ui';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Daniel Sousa @TutoDS</title>
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
