import Layout from '~/components/Layout';
import Section from '~/components/Sections/Section';
import {LinksFunction, V2_MetaFunction} from '@shopify/remix-oxygen';
import componentSectionHeroStyles from '~/components/Sections/SectionHero/SectionHero.css';
import componentSectionWorkStyles from '~/components/Sections/SectionWorks/SectionWorks.css';
import componentSectionAboutStyles from '~/components/Sections/SectionAbout/SectionAbout.css';
import {getSeoMetas} from '~/utils/seo';

export const meta: V2_MetaFunction = () => {
  return getSeoMetas({
    title: 'About',
  });
};

export const links: LinksFunction = () => [
  {rel: 'stylesheet', href: componentSectionHeroStyles},
  {rel: 'stylesheet', href: componentSectionWorkStyles},
  {rel: 'stylesheet', href: componentSectionAboutStyles},
];

function IndexPage() {
  return (
    <Layout id="about-page">
      <Section.Hero />
      <Section.About />
      <Section.Works />
    </Layout>
  );
}

export default IndexPage;
