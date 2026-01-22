import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Buck & Beard Hunt Club - A modern hunting experience" />
        <link rel="icon" href="/specBB/favicon.ico" />
      </Head>
      <body>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
