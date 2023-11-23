import Head from "next/head";
import Image from "next/image";
import bgImage from "../public/bg.jpg";
import Header from "./Header";
import PrivacyBanner from "./PrivacyBanner";

const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Welcome to ClimateScoop! We provide a hawk-eye view on climate change."
      />
      <title>ClimateScoop</title>
    </Head>
    <div className="bgImage">
      <Image src={bgImage} alt="Background" priority />
    </div>
    <Header className="header" />
    <main id="app" data-testid="layout">
      <div className="container">{children}</div>
    </main>
    <PrivacyBanner />
  </>
);

export default Layout;
