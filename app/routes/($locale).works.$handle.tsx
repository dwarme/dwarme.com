import {useLoaderData} from '@remix-run/react';
import {Fragment} from 'react';
import blogStyles from '~/styles/blog.css';
import Blog from '~/components/blog/blog';
import type {LinksFunction, LoaderArgs} from '@shopify/remix-oxygen';
import {json} from '@shopify/remix-oxygen';
import WORKS from '~/works';
import type {IWork} from '~/types';

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: blogStyles}];
};

export function loader({params}: LoaderArgs) {
  const {handle} = params;
  const work = WORKS.filter((item) => item.handle === handle)[0];
  return json({work});
}

const WorkPage: React.FC = () => {
  const data = useLoaderData<typeof loader>();
  const work: IWork = data.work!;
  return (
    <Fragment>
      <main>
        <Blog>
          <Blog.Header title={work.title} subtitle={work.summary} />
          {work.blogData.map((blog) => {
            if (blog.device === 'mobile') {
              return (
                <Fragment key={blog.id}>
                  <Blog.Gallery device="mobile" images={blog.imagePreviews} />
                  <Blog.Text
                    text={
                      <span
                        dangerouslySetInnerHTML={{__html: blog.htmlContent}}
                      ></span>
                    }
                  />
                </Fragment>
              );
            }

            return (
              <Fragment key={blog.id}>
                <Blog.Gallery device="desktop" images={blog.imagePreviews} />
                <Blog.Text
                  text={
                    <span
                      dangerouslySetInnerHTML={{__html: blog.htmlContent}}
                    ></span>
                  }
                />
              </Fragment>
            );
          })}
        </Blog>
      </main>
    </Fragment>
  );
};

export default WorkPage;
