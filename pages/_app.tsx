import React, { useEffect } from "react";
import Head from "next/head";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import { ContextGlobalProvider } from "../components/contexts/ContextGlobal";


import type { AppProps as NextAppProps } from "next/app";

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;


function MeuAppSw({ Component }) {
  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  return Component
}

export default function App({
  Component,
  pageProps,
}: AppProps) {
  const Layout = Component || (({ children }) => <>{children}</>);

  return (
    <ContextGlobalProvider>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Escola de Ferias</title>
        </Head>
        <Layout>
            <MeuAppSw Component={<Component {...pageProps} />}/>
        </Layout>
    </ContextGlobalProvider>
  );
}