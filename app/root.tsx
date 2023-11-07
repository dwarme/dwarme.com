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

import themeStyles from '~/styles/theme.css';
import mainStyles from '~/styles/main.css';
import componentNavbarStyles from '~/components/Navigation/Navigation.css';

export const links: LinksFunction = () => [
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
  {rel: 'stylesheet', href: themeStyles},
  {rel: 'stylesheet', href: mainStyles},
  {rel: 'stylesheet', href: componentNavbarStyles},
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
