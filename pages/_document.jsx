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

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/icon-180x180.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/icon-167x167.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/icon-120x120.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/icon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/icon-16x16.png"
          />

          <link rel="manifest" href="/manifest.json" />

          <link rel="mask-icon" href="/icons/icon-32x32.png" color="#6a907f" />
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
