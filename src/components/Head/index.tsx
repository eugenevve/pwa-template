import { FC } from "react";
import { Helmet } from "react-helmet-async";

export const Head: FC = () => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <Helmet>
      {/* Basic data */}
      <title>PWA-Template</title>
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="description" content="PWA template standart description" />
      <meta name="keywords" content="pwa, template" />

      {/* Styling */}
      <meta name="theme-color" content={isDark ? "#000000" : "#FFFFFF"} />
      <meta name="msapplication-TileColor" content={isDark ? "#000000" : "#FFFFFF"} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />

      {/* Icons */}
      <link rel="icon" href="/favicons/favicon.ico" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
      <link rel="apple-touch-icon" href="/favicons/favicon-180-180.png" />
      <link rel="icon" type="image/png" sizes="32x32" href={isDark ? "/favicons/dark/favicon-32-32.png" : "/favicons/favicon-32-32.png"} />
      <link rel="icon" type="image/png" sizes="16x16" href={isDark ? "/favicons/dark/favicon-16-16.png" : "/favicons/favicon-16-16.png"} />

      {/* Data when sending a link to the site */}
      <meta property="og:url" content="/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="PWA-Template" />
      <meta property="og:title" content="PWA template title" />
      <meta property="og:description" content="PWA template og description" />
      <meta property="og:image" content="/favicons/favicon-512-512.png" />
    </Helmet>
  );
};
