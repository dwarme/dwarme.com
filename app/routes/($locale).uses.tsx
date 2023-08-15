import {Fragment} from 'react';
import proseStyles from '~/styles/prose.css';
import blogStyles from '~/styles/blog.css';
import Blog from '~/components/blog/blog';
import type {LinksFunction, V2_MetaFunction} from '@shopify/remix-oxygen';
import {getSeoMetas} from '~/utils/seo';
import usesTools from '~/uses-tools';

export const meta: V2_MetaFunction = ({data}) => {
  return getSeoMetas({
    title: 'Uses',
  });
};

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: blogStyles},
    {rel: 'stylesheet', href: proseStyles},
  ];
};

const UsesPage: React.FC = () => {
  return (
    <Fragment>
      <main>
        <Blog>
          <Blog.Header
            title={'What Daouda Uses'}
            subtitle={'The tools Daouda Warme uses'}
          />

          <Blog.Gallery
            device="desktop"
            images={[
              {
                id: 'id-n47BSWYHSWB',
                src: 'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/GR63GS7366GW747274.jpg?v=1692091538',
                alt: 'laptop-coding',
                caption: '',
              },
            ]}
          />
          <div className="relative mx-10vw">
            <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl prose prose-light dark:prose-dark">
              {usesTools.map((use) => (
                <Fragment key={use.title}>
                  <h2 id="services">{use.title}</h2>
                  <ul>
                    {use.items.map((item) => (
                      <li key={item.title}>
                        <a href={item.link ?? '#'}>{item.title}</a>{item.subtitle ? ` - ${item.subtitle}` : ''}
                      </li>
                    ))}
                  </ul>
                </Fragment>
              ))}
            </div>
          </div>
        </Blog>
      </main>
    </Fragment>
  );
};

export default UsesPage;
