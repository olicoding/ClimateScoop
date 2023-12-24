import React from "react";
import Head from "next/head";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Analytics } from "@vercel/analytics/react";
import { ContextProvider } from "../context/ContextProvider";
import Layout from "../components/Layout";
import "../styles/main.scss";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ContextProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="ClimateScoop" />
          <meta
            property="og:description"
            content="Visual Insights on Climate Change"
          />
          <meta property="og:site_name" content="ClimateScoop" />
          <meta property="og:url" content="https://climatescoop.app" />
          <meta
            property="og:image"
            content="https://climatescoop.app/media/logo.png"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ContextProvider>
    </UserProvider>
  );
}
