import React, { ReactNode, useEffect } from "react";
import App, { AppProps } from "next/app";
import Head from "next/head";


import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";
import { ContextGlobalProvider } from "../components/contexts/ContextGlobal";
import { NextPage } from "next";


function MeuAppSw({ Component }): JSX.Element {
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

const defaultGetLayout: Layout = (page: ReactNode): ReactNode => page;


type Layout = (page: ReactNode) => ReactNode;

// eslint-disable-next-line @typescript-eslint/ban-types
type Page<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: Layout;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props as AppProps & MyAppProps;
  
    const Layout = Component.layout || defaultGetLayout;

    return (
      <ContextGlobalProvider>
          <Head>
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Escola de Ferias</title>
            {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> */}
          </Head>
          <Layout>
              <MeuAppSw Component={<Component {...pageProps} />}/>
          </Layout>
      </ContextGlobalProvider>
    );
  }
}
