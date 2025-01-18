import Head from "next/head";
import PagePrivacy from "../components/PagePrivacy";

export default function Privacy() {
  return (
    <>
      <Head>
        <meta name="description" content="ClimateScoop Privacy Policy." />
        <link
          rel="canonical"
          href="https://climatescoop.olicoding.dev/privacy"
        />
        <title>ClimateScoop | Privacy</title>
      </Head>
      <PagePrivacy />
    </>
  );
}
