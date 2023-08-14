/*import {type LinksFunction, type LoaderArgs} from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import type {Shop} from '@shopify/hydrogen/storefront-api-types';
import appStyles from './styles/app.css';
import favicon from '../public/favicon.svg';

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: appStyles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
};

export async function loader({context}: LoaderArgs) {
  const layout = await context.storefront.query<{shop: Shop}>(LAYOUT_QUERY);
  return {layout};
}

export default function App() {
  const data = useLoaderData<typeof loader>();

  const {name} = data.layout.shop;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello, {name}</h1>
        <p>This is a custom storefront powered by Hydrogen</p>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layout {
    shop {
      name
      description
    }
  }
`;
*/
//import {cssBundleHref} from '@remix-run/css-bundle';
import {
  json,
  type DataFunctionArgs,
  type LinksFunction,
  type SerializeFrom,
} from '@shopify/remix-oxygen';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';

import appStyles from './styles/app.css';
import proseStyles from './styles/prose.css';
import tailwindStyles from './styles/tailwind.css';
import vendorStyles from './styles/vendors.css';
import {ThemeProvider, useTheme} from './utils/theme-provider';
import {getThemeSession} from './utils/theme.server';
import clsx from 'clsx';
import {Spacer} from './components/spacer';
import {Footer} from './components/footer';

export const links: LinksFunction = () => [
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/Matter-Medium.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/Matter-Regular.woff2',
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
  {rel: 'stylesheet', href: vendorStyles},
  {rel: 'stylesheet', href: tailwindStyles},
  {rel: 'stylesheet', href: proseStyles},
  {rel: 'stylesheet', href: appStyles},
  //...(cssBundleHref ? [{rel: 'stylesheet', href: cssBundleHref}] : []),
];

export type LoaderData = SerializeFrom<typeof loader>;

export async function loader({request}: DataFunctionArgs) {
  const [themeSession] = await Promise.all([getThemeSession(request)]);

  const data = {
    requestInfo: {
      session: {
        theme: themeSession.getTheme(),
      },
    },
  };

  return json(data);
}

function App() {
  const [theme] = useTheme();
  return (
    <html lang="en" className={clsx(theme, `set-color-team-current-blue`)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white transition duration-500 dark:bg-gray-900">
        <Outlet />
        <Spacer size="base" />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();
  return (
    <ThemeProvider specifiedTheme={data.requestInfo.session.theme}>
      <App />
    </ThemeProvider>
  );
}
