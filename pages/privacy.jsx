import PagePrivacy from "../components/PagePrivacy";
import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <meta name="description" content="ClimateScoop Privacy Policy." />
        <link rel="canonical" href="https://climatescoop.app/privacy" />
        <title>ClimateScoop | Privacy</title>
      </Head>
      <PagePrivacy />
    </>
  );
}
