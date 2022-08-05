import { Html, Main, Head, NextScript } from "next/document";

function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;600&display=swap"
        />
      </Head>
      <body className="font-comfortaa bg-gradient-to-bl from-gray-100 to-neutral-100 dark:from-gray-900 dark:to-neutral-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
