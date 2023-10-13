import {V2_MetaFunction} from '@shopify/remix-oxygen';
import {Fragment} from 'react';
import {getSeoMetas} from '~/utils/seo';
import GridTiles from '~/package/keepsimple-ui/components/template/Grid/Tiles/Tiles';
import Experience from '~/components/Home/Section/Experience/Experience';
import Skills from '~/components/Home/Section/Skills/Skills';
import Works from '~/components/Home/Section/Works/Works';
import Contact from '~/components/Home/Section/Contact/Contact';
import Hero from '~/components/Home/Section/Hero/Hero';
import ExperienceModal from '~/components/Home/Section/Experience/ExperienceModal';
import SkillsModal from '~/components/Home/Section/Skills/SkillsModal';
import {SITE_MAP} from '~/utils/constants-util';
import SectionAbout from '~/components/Home/Section/SectionAbout';

export const meta: V2_MetaFunction = () => {
  return getSeoMetas({
    title: 'Daouda Warme',
  });
};

function AboutIndex() {
  return (
    <Fragment>
      <ExperienceModal />
      <SkillsModal />
      <main>
        <Hero />
        <SectionAbout />
        <GridTiles>
          <GridTiles.Half
            button={{
              id: ExperienceModal.toggleId,
              icon: 'plus',
              onClick: (event) => {},
            }}
          >
            <Experience />
          </GridTiles.Half>

          <GridTiles.Half
            className="grid-tile-skills"
            button={{
              id: SkillsModal.toggleId,
              icon: 'plus',
              onClick: (event) => {},
            }}
          >
            <Skills />
          </GridTiles.Half>

          <GridTiles.Full
            button={{
              icon: 'arrow',
              onClick: () => {
                window.location.href = SITE_MAP.works;
              },
            }}
          >
            <Works />
          </GridTiles.Full>

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
export default AboutIndex;
