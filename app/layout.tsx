import "@/styles/globals.css";
import SplashScreen from "@/components/SplashScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>PWA-NTX</title>
      <head>
        {/* Website styling and pwa */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="PWA on NextJs template browser search" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />

        {/* Website icons */}
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/svg" href="/favicons/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicons/favicon-180-180.png" />

        {/* Share data */}
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PWA-NX" />
        <meta property="og:title" content="PWA on NextJs template link description" />
        <meta property="og:description" content="PWA on NextJs template additional description" />
        <meta property="og:image" content="/favicons/favicon-512-512.png" />
      </head>
      <body>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
