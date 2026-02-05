import { Html, Head, Main, NextScript } from 'next/document';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/favicon.png?v=2`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/favicon.png?v=2`} />
        <link rel="shortcut icon" type="image/png" href={`${basePath}/favicon.png?v=2`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/favicon.png?v=2`} />
        <meta name="msapplication-TileImage" content={`${basePath}/favicon.png?v=2`} />
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
