import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>WanderBook - Discover Your Next Adventure</title>
        <meta name="description" content="WanderBook - Your trusted companion for discovering amazing destinations and creating unforgettable travel memories." />
        <meta name="keywords" content="travel, booking, hotels, adventure, wanderbook, destinations" />
        <meta name="author" content="WanderBook" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
