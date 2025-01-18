import React from "react";
import { ContextProvider } from "../context/ContextProvider";
import Layout from "../components/Layout";
import "../styles/main.scss";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
