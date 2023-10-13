export const SERVER =
  process.env.NODE_ENV === 'development' ? '/' : 'https://www.dwarme.dev/';

export const SITE_MAP = {
  home: '/',
  works: '/works',
  resume: '/resume',
  contactMe: '/contact-me',
  legals: {
    privacy: '/legal/privacy',
    terms: '/legal/terms',
  },
};

export const APP_MEDIA = {
  image: {
    homeHeroBackground:
      'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/gray-background-08511157650368.jpg?v=1691507682',
    profileAvatar:
      'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/avatar.jpg?v=1691995193',
    fullstackDev:
      'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/fullstack-dev-0c5d08f2d4e7e3e8bc55711befad02f7.svg?v=1691507682',
    skills:
      'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/skills.png?v=1691507682',
    works:
      'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/works.png?v=1691507682',
    appsLogo: {
      cattown:
        'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/cattown_logo.jpg?v=1697211678',
      miniBzPay:
        'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/logo_minibzpay_350284224.jpg?v=1697211678',
      portfolio:
        'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/portfolio_logo.jpg?v=1697211678',
      trovads:
        'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/trovads_logo.jpg?v=1697211678',
      creativesIdea:
        'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/creatives_idea_logo.jpg?v=1697211678',
      github:
        'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/github-logo.png?v=1691507682',
    },
  },

  video: {},
};
