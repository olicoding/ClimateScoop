import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Coming Soon! New project under construction."
      />
      <title>ClimateScoop</title>
    </Head>
    <Header />
    <main id="app" data-testid="layout">
      <div className="container">{children}</div>
    </main>
  </>
);

export default Layout;
