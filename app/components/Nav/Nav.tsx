import React from 'react';
import LocalNav from '~/package/keepsimple-ui/components/template/NavBar/LocalNav/LocalNav';
import {SITE_MAP} from '~/utils/constants-util';

interface NavProps {
  active?: 'home' | 'works' | 'resume';
}

const Nav: React.FC<NavProps> = ({active}) => {
  return (
    <LocalNav
      title={{
        title: 'Daouda Warme',
        link: SITE_MAP.home,
      }}
      menu={{
        items: [
          {title: 'Overview', link: SITE_MAP.home, active: active === 'home'},
          {title: 'Works', link: SITE_MAP.works, active: active === 'works'},
          {title: 'Resume', link: SITE_MAP.resume, active: active === 'resume'},
        ],

        actions: [
          {
            title: 'Contact me',
            link: SITE_MAP.contactMe,
          },
        ],
      }}
    />
  );
};

export default React.memo(Nav);
