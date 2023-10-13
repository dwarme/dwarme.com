import {APP_MEDIA} from '~/utils/constants-util';

const WORKS: {
  handle: string;
  link: {
    rel?: '_blank';
    link: string;
  };
  logo: string;
  title: string;
  subTitle: string;
  description: string;
}[] = [
  {
    handle: 'minibzpay',
    link: {
      rel: '_blank',
      link: 'https://www.minibzpay.it',
    },
    logo: APP_MEDIA.image.appsLogo.miniBzPay,
    title: 'Mini Bz Pay',
    subTitle: 'Payment app',
    description: 'Comming soon ...',
  },
  {
    handle: 'cattown',
    link: {
      rel: '_blank',
      link: 'https://www.cattown.it',
    },
    logo: APP_MEDIA.image.appsLogo.cattown,
    title: 'Cattown',
    subTitle: 'Discover Top Facebook Success Ads',
    description: 'Comming soon ...',
  },
  {
    handle: 'creatives-idea',
    link: {
      rel: '_blank',
      link: '#', //'https://www.ishopty.it',
    },
    logo: APP_MEDIA.image.appsLogo.creativesIdea,
    title: 'Creatives Idea',
    subTitle: 'Marketing tool',
    description: 'Comming soon ...',
  },
  {
    handle: 'portfolio',
    link: {
      rel: undefined,
      link: '/',
    },
    logo: APP_MEDIA.image.appsLogo.portfolio,
    title: 'Portfolio',
    subTitle: 'Personal website',
    description: 'Comming soon ...',
  },
  {
    handle: 'projects',
    link: {
      rel: '_blank',
      link: 'https://github.com/dwarme',
    },
    logo: APP_MEDIA.image.appsLogo.github,
    title: 'Projects',
    subTitle: 'Some projects',
    description: 'Comming soon ...',
  },
];

export default WORKS;
