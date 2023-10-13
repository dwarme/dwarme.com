import {V2_MetaFunction} from '@shopify/remix-oxygen';
import {Fragment} from 'react';
import {getSeoMetas} from '~/utils/seo';
import BreveDetails from '~/components/Works/BreveDetails';
import useTheme from '~/hooks/useTheme';
import {CSSTypography} from '~/package/keepsimple-ui/types/theme.d';
import Contact from '~/components/Home/Section/Contact/Contact';
import WORKS from '~/resources/resource-works';
import {SITE_MAP} from '~/utils/constants-util';
import Section from '~/package/keepsimple-ui/components/layout/Section/Section';
import GridTiles from '~/package/keepsimple-ui/components/template/Grid/Tiles/Tiles';

export const meta: V2_MetaFunction = () => {
  return getSeoMetas({
    title: 'Works',
  });
};

function WorksIndex() {
  useTheme('theme-dark');
  return (
    <Fragment>
      <main>
        <Section>
          <Section.Content>
            <div
              className="width-full text-center"
              style={{padding: '30px 0px'}}
            >
              <h2
                className={`text-center ${CSSTypography['headline-elevated']}`}
              >
                My Works
              </h2>
              <h3
                className={`${CSSTypography['headline-reduced']}`}
                style={{opacity: 0.6}}
              >
                Deliver resilient, scalable, performance and beauty to
                applications - that&apos;s what I do best.
              </h3>
            </div>
          </Section.Content>
        </Section>
        <GridTiles>
          {WORKS.map((work, index) => (
            <GridTiles.Half
              key={work.title}
              button={{
                icon: 'arrow',
                onClick: (event) => {
                  window.open(work.link.link, work.link.rel);
                },
              }}
            >
              <BreveDetails
                icon={{
                  src: work.logo,
                  decoding: index + 1 <= 2 ? 'async' : undefined,
                }}
                title={work.title}
                subTitle={work.subTitle}
                description={work.description}
              />
            </GridTiles.Half>
          ))}

          <GridTiles.Full
            className="grid-tile-contact-me"
            button={{
              icon: 'arrow',
              onClick: () => {
                window.location.href = SITE_MAP.contactMe;
              },
            }}
          >
            <Contact />
          </GridTiles.Full>
        </GridTiles>
      </main>
    </Fragment>
  );
}

export default WorksIndex;
