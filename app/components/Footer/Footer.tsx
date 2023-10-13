import React from 'react';
import KSFooter from '~/package/keepsimple-ui/components/template/Footer/Footer';

const Footer: React.FC = () => {
  return (
    <KSFooter
      copyright="Copyright © 2023 Daouda Warme. All rights reserved."
      localeLink={{
        title: 'English',
        link: '/choose-language',
      }}
      legalLinks={[]}
    />
  );
};

export default React.memo(Footer);
