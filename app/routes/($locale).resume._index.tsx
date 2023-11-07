import {LinksFunction, V2_MetaFunction} from '@shopify/remix-oxygen';
import Layout from '~/components/Layout';
import Resume from '~/components/Resume';
import componentResumeStyles from '~/components/Resume/Resume.css';
import Section from '~/components/Sections/Section';
import {getSeoMetas} from '~/utils/seo';

export const meta: V2_MetaFunction = () => {
  return getSeoMetas({
    title: 'Resume',
  });
};

export const links: LinksFunction = () => [
  {rel: 'stylesheet', href: componentResumeStyles},
];

function ResumePage() {
  return (
    <Layout>
      <Section>
        <Resume />
      </Section>
    </Layout>
  );
}

export default ResumePage;
