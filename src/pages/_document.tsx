import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning className="dark">
      <Head>
        {/* Global Metadata */}
        <meta
          name="description"
          content="First fractionalized assets purchaser"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Fonts */}
        {/* <link rel="stylesheet" href="/path/to/fonts.css" /> */}

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
