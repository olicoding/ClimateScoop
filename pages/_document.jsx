import Document, { Html, Head, Main, NextScript } from "next/document";

class HtmlDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="application-name" content="ClimateScoop" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="ClimateScoop" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#6a907f" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#6a907f" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/media/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default HtmlDocument;
