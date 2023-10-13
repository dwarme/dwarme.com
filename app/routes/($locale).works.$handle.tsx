import {useLoaderData} from '@remix-run/react';
import {Fragment} from 'react';
import type {LoaderArgs, V2_MetaFunction} from '@shopify/remix-oxygen';
import {json, redirect} from '@shopify/remix-oxygen';
import WORKS from '~/resources/resource-works';
import {getSeoMetas} from '~/utils/seo';
import Section from '~/package/keepsimple-ui/components/layout/Section/Section';

export const meta: V2_MetaFunction<typeof loader> = ({data}) => {
  return getSeoMetas({
    title: data?.work.title ?? 'Works',
  });
};

export function loader({params}: LoaderArgs) {
  const {handle} = params;
  const work = WORKS.filter((item) => item.handle === handle)[0];
  if (!work) {
    return redirect('/works');
  }
  return json({work});
}

const WorkPage: React.FC = () => {
  const data = useLoaderData<typeof loader>();
  const work = data.work;

  return (
    <Fragment>
      <main>
        <Section>
          <Section.Content>
            <h1>COMMING SOON</h1>
          </Section.Content>
        </Section>
      </main>
    </Fragment>
  );
};

export default WorkPage;
