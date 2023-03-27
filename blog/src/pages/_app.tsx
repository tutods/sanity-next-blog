import "@styles/globals.scss";
import "@styles/global.css";
import type { AppProps } from "next/app";
import { Header } from "@components/ui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
