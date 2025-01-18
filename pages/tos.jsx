import Head from "next/head";
import PageToS from "../components/PageToS";

export default function ToS() {
  return (
    <>
      <Head>
        <meta name="description" content="ClimateScoop Terms of Service." />
        <link rel="canonical" href="https://climatescoop.olicoding.dev/tos" />
        <title>ClimateScoop | Terms of Service</title>
      </Head>
      <PageToS />
    </>
  );
}
