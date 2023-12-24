import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import PageProfile from "../components/PageProfile";
import Head from "next/head";

export default function Profile() {
  return (
    <>
      <Head>
        <meta name="description" content="ClimateScoop user profile." />
        <link rel="canonical" href="https://climatescoop.app/profile" />
        <title>ClimateScoop | Profile</title>
      </Head>
      <PageProfile />
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
