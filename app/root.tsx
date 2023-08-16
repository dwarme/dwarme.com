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
import tailwindStyles from './styles/tailwind.css';
import vendorStyles from './styles/vendors.css';
import {ThemeProvider, useTheme} from './utils/theme-provider';
import {getThemeSession} from './utils/theme.server';
import clsx from 'clsx';
import {Spacer} from './components/spacer';
import {Footer} from './components/footer';
import {Seo} from '@shopify/hydrogen';
import {Navbar} from './components/navbar';

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
  {rel: 'stylesheet', href: vendorStyles},
  {rel: 'stylesheet', href: tailwindStyles},
  {rel: 'stylesheet', href: appStyles},
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
        <Seo />
        <Meta />
        <Links />
      </head>
      <body className="bg-white transition duration-500 dark:bg-gray-900">
        <Navbar />
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
