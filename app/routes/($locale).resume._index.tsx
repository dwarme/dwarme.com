import {LinksFunction} from '@shopify/remix-oxygen';
import Layout from '~/components/Layout';
import Resume from '~/components/Resume';
import componentResumeStyles from '~/components/Resume/Resume.css';

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
