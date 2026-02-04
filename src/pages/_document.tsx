import { Html, Head, Main, NextScript } from 'next/document';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/favicon.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/favicon.png`} />
        <link rel="shortcut icon" href={`${basePath}/favicon.png`} />
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
