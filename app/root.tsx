import {type LinksFunction} from '@shopify/remix-oxygen';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import {Seo} from '@shopify/hydrogen';
import appStyles from '~/styles/app.css';
import componentGalleryStyles from '~/components/Gallery/Gallery.css';
import componentNavbarStyles from '~/components/Navbar/Navbar.css';
import componentModalStyles from '~/components/Modal/Modal.css';
import componentSocialLinksStyles from '~/components/SocialsLink/SocialsLink.css';

export const links: LinksFunction = () => [
  {
    rel: 'preload',
    as: 'font',
    href: 'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/Matter-Medium.woff2?v=1692029811',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    as: 'font',
    href: 'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/Matter-Regular.woff2?v=1692029811',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicons/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicons/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicons/favicon-16x16.png',
  },
  {rel: 'manifest', href: '/site.webmanifest'},
  {rel: 'icon', href: '/favicon.ico'},
  {rel: 'stylesheet', href: appStyles},
  {rel: 'stylesheet', href: componentNavbarStyles},
  {rel: 'stylesheet', href: componentModalStyles},
  {rel: 'stylesheet', href: componentGalleryStyles},
  {rel: 'stylesheet', href: componentSocialLinksStyles},
];

function App() {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  return <App />;
}
