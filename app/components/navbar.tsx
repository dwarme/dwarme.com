/* eslint-disable @typescript-eslint/naming-convention */
import {Link, useLocation} from '@remix-run/react';
import {clsx} from 'clsx';
import {
  AnimatePresence,
  motion,
  useAnimation,
  useReducedMotion,
} from 'framer-motion';
import * as React from 'react';
import {Theme, Themed, useTheme} from '~/utils/theme-provider';
import {useElementState} from './hooks/use-element-state';
import {MoonIcon, SunIcon} from './icons';
import {TeamCircle} from './team-circle';

const LINKS = [
  {name: 'Uses', to: '/uses'},
  {name: 'Works', to: '/works'},
  {name: 'About', to: '/'},
];

const MOBILE_LINKS = [{name: 'Home', to: '/'}, ...LINKS];

function NavLink({
  to,
  ...rest
}: Omit<Parameters<typeof Link>['0'], 'to'> & {to: string}) {
  const location = useLocation();
  const isSelected =
    to === location.pathname || location.pathname.startsWith(`${to}/`);

  return (
    <li className="px-5 py-2">
      <Link
        prefetch="intent"
        className={clsx(
          'underlined block whitespace-nowrap text-lg font-medium hover:text-team-current focus:text-team-current focus:outline-none',
          {
            'active text-team-current': isSelected,
            'text-secondary': !isSelected,
          },
        )}
        to={to}
        {...rest}
      />
    </li>
  );
}

const iconTransformOrigin = {transformOrigin: '50% 100px'};
function DarkModeToggle({variant = 'icon'}: {variant?: 'icon' | 'labelled'}) {
  const [, setTheme] = useTheme();
  return (
    <button
      onClick={() => {
        setTheme((previousTheme) =>
          previousTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK,
        );
      }}
      className={clsx(
        'border-secondary hover:border-primary focus:border-primary inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition focus:outline-none',
        {
          'w-14': variant === 'icon',
          'px-8': variant === 'labelled',
        },
      )}
    >
      {/* note that the duration is longer then the one on body, controlling the bg-color */}
      <div className="relative h-8 w-8">
        <span
          className="absolute inset-0 rotate-90 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white"
          style={iconTransformOrigin}
        >
          <MoonIcon />
        </span>
        <span
          className="absolute inset-0 rotate-0 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white"
          style={iconTransformOrigin}
        >
          <SunIcon />
        </span>
      </div>
      <span
        className={clsx('ml-4 text-black dark:text-white', {
          'sr-only': variant === 'icon',
        })}
      >
        <Themed dark="switch to light mode" light="switch to dark mode" />
      </span>
    </button>
  );
}

// Timing durations used to control the speed of the avatar ring in the profile button.
// Time is seconds per full rotation
const durations = {
  initial: 40,
  hover: 3,
  focus: 3,
  active: 0.25,
};

function ProfileButton({
  imageUrl,
  imageAlt,
}: {
  imageUrl: string;
  imageAlt: string;
}) {
  const controls = useAnimation();
  const [ref, state] = useElementState();
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    void controls.start((_, {rotate = 0}) => {
      const target =
        typeof rotate === 'number'
          ? state === 'initial'
            ? rotate - 360
            : rotate + 360
          : 360;

      return shouldReduceMotion
        ? {}
        : {
            rotate: [rotate, target],
            transition: {
              duration: durations[state],
              repeat: Infinity,
              ease: 'linear',
            },
          };
    });
  }, [state, controls, shouldReduceMotion]);

  return (
    <Link
      prefetch="intent"
      to={'/'}
      aria-label={'About'}
      className={clsx(
        'ml-4 inline-flex h-14 w-14 items-center justify-center rounded-full focus:outline-none',
      )}
      ref={ref}
    >
      <motion.div className="absolute" animate={controls}>
        <TeamCircle size={56} />
      </motion.div>
      <img
        className={clsx('inline w-10 select-none rounded-full')}
        src={imageUrl}
        alt={imageAlt}
        crossOrigin="anonymous"
      />
    </Link>
  );
}

function Navbar() {
  return (
    <div className="px-5vw py-9 lg:py-12">
      <nav className="text-primary mx-auto flex max-w-8xl items-center justify-between">
        <div className="flex justify-center gap-4 align-middle">
          <Link
            prefetch="intent"
            to="/"
            className="text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none"
          >
            <h1>Daouda Warme</h1>
          </Link>
        </div>

        <ul className="hidden lg:flex">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.name}
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center justify-center">
          {/* && (
            <div className="block lg:hidden">
              <MobileMenu />
            </div>
          )*/}
          <div className="noscript-hidden hidden lg:block">
            <DarkModeToggle />
          </div>

          <ProfileButton
            imageUrl={
              'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/GGF6FD45TF-8TGHH-N9YGB.webp?v=1691996713'
            }
            imageAlt={''}
          />
        </div>
      </nav>
    </div>
  );
}

export {Navbar};
