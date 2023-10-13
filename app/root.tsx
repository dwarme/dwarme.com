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
import Nav from '~/components/Nav/Nav';
import Footer from '~/components/Footer/Footer';
import themeStyles from '~/package/keepsimple-ui/css/theme/theme.css';
import typographyStyles from '~/package/keepsimple-ui/css/theme/typography.css';
import animationStyles from '~/package/keepsimple-ui/css/theme/animation.css';
import navbarStyles from '~/package/keepsimple-ui/css/theme/nav/localnav.css';
import footerStyles from '~/package/keepsimple-ui/css/theme/footer.css';
import gridStyles from '~/package/keepsimple-ui/css/template/grid-tile.css';
import modalStyles from '~/package/keepsimple-ui/css/theme/modal.css';
import appStyles from '~/styles/app.css';
import componentHeroStyles from '~/components/Home/Section/Hero/Hero.css';
import componentSectionAboutStyles from '~/components/Home/Section/SectionAbout/SectionAbout.css';
import componentContactStyles from '~/components/Home/Section/Contact/Contact.css';
import componentModalStandardStyles from '~/components/Modal/ModalStandard.css';
import componentResumeStyles from '~/components/Resume/Resume.css';

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
  {rel: 'stylesheet', href: themeStyles},
  {rel: 'stylesheet', href: typographyStyles},
  {rel: 'stylesheet', href: animationStyles},
  {rel: 'stylesheet', href: navbarStyles},
  {rel: 'stylesheet', href: footerStyles},
  {rel: 'stylesheet', href: gridStyles},
  {rel: 'stylesheet', href: modalStyles},
  {rel: 'stylesheet', href: appStyles},
  {rel: 'stylesheet', href: componentHeroStyles},
  {rel: 'stylesheet', href: componentSectionAboutStyles},
  {rel: 'stylesheet', href: componentContactStyles},
  {rel: 'stylesheet', href: componentModalStandardStyles},
  {rel: 'stylesheet', href: componentResumeStyles},
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
        <Nav />
        <Outlet />
        <Footer />
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
