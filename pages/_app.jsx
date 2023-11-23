import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Analytics } from "@vercel/analytics/react";
import { ContextProvider } from "../context/ContextProvider";
import Layout from "../components/Layout";
import "../styles/main.scss";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ContextProvider>
    </UserProvider>
  );
}
