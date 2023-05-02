import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Header } from '@components/ui';

import '@styles/global.css';

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
