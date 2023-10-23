import {LinksFunction, V2_MetaFunction} from '@shopify/remix-oxygen';
import Layout from '~/components/Layout';
import Resume from '~/components/Resume';
import componentResumeStyles from '~/components/Resume/Resume.css';
import {getSeoMetas} from '~/utils/seo';

export const meta: V2_MetaFunction = () => {
  return getSeoMetas({
    title: 'Resume',
  });
};

export const links: LinksFunction = () => [
  {rel: 'stylesheet', href: componentResumeStyles},
];

function ResumeIndex() {
  return (
    <Layout sectionClassName="section-resume">
      <Resume />
    </Layout>
  );
}

export default ResumeIndex;
