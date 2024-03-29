import "../sass/styles.scss";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
