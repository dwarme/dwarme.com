import {createCookieSessionStorage} from '@shopify/remix-oxygen';
import {Theme, isTheme} from './theme-provider';
import {SESSION_SECRET} from './constants-util';

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: 'DWARME_theme',
    secure: process.env.NODE_ENV === 'production',
    secrets: [SESSION_SECRET],
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
  },
});

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get('Cookie'));
  return {
    getTheme: () => {
      const themeValue = session.get('theme');
      return isTheme(themeValue) ? themeValue : Theme.DARK;
    },
    setTheme: (theme: Theme) => session.set('theme', theme),
    commit: () =>
      // no theme for you on my 100th birthday! 😂
      themeStorage.commitSession(session, {expires: new Date('2100-11-29')}),
  };
}

export {getThemeSession};
