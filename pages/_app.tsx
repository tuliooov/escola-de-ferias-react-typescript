import type { NextPage } from 'next';
import type { AppProps as NextAppProps } from "next/app";
import Head from 'next/head';
import { ReactNode, useEffect } from 'react';
import React from 'react';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";
import { ContextGlobalProvider } from '../components/contexts/ContextGlobal';

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

type GetLayout = (page: ReactNode) => ReactNode;

// eslint-disable-next-line @typescript-eslint/ban-types
type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

const defaultGetLayout: GetLayout = (page: ReactNode): ReactNode => page;

export default function App({ Component, pageProps }: MyAppProps): JSX.Element {
  const getLayout = Component.getLayout ?? defaultGetLayout;

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
      {getLayout(<MeuAppSw Component={<Component {...pageProps} />}/>)}
    </ContextGlobalProvider>
  )
}