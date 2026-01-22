import { Html, Head, Main, NextScript } from 'next/document';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Buck & Beard Hunt Club - A modern hunting experience" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
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
