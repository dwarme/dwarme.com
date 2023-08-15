import {V2_MetaFunction} from '@shopify/remix-oxygen';
import {Grid} from '~/components/grid';
import {HeroSection} from '~/components/sections/hero-section';
import {WorkCard} from '~/components/work-card';
import {getSeoMetas} from '~/utils/seo';

export const meta: V2_MetaFunction = () => {
  return getSeoMetas({
    title: 'Works',
  });
};

function WorksHome() {
  return (
    <>
      <HeroSection
        title="Explore my works"
        subtitle="Embark on a Journey Through My Creations"
        imageProps={{
          src: 'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/72351db1ea1b4386aec2da04b2da68a1.png',
          alt: 'react-3d-logo',
          width: 666,
          height: 375,
        }}
      />

      <h2 className="sr-only" id="works">
        Works
      </h2>

      <Grid className="gap-y-4">
        <div className="col-span-full lg:col-span-6">
          <WorkCard
            title="MiniBz Pay"
            description="Mobile and Web payment app."
            imageProps={{
              src: 'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/minibank-logo.png?v=1691507682',
              alt: 'mini bz pay logo',
            }}
            workUrl="https://minibzpay.it"
            technologies={[
              'Javascript',
              'Typescript',
              'React',
              'React Native',
              'Redux ToolKit',
              'Node.js',
              'Express JS',
              'GraphQL',
              'EJS',
            ]}
          />
        </div>

        <div className="col-span-full mt-12 lg:col-span-6 lg:mt-0">
          <WorkCard
            title="Cattown"
            description="An educational, trilingual, and hybrid game."
            imageProps={{
              src: 'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/cattown-logo.png?v=1691507682',
              alt: '',
            }}
            workUrl="https://cattown.it"
            technologies={['Javascript', 'Typescript', 'React', 'PHP Laravel']}
          />
        </div>

        <div className="col-span-full lg:col-span-6">
          <WorkCard
            title="Portfolio"
            description="My personal web site."
            imageProps={{
              src: 'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/portfolio-logo.png?v=1691507682',
              alt: '',
            }}
            workUrl="/"
            technologies={[
              'Javascript',
              'Typescript',
              'React',
              'Tailwind CSS',
              'Node.js',
              'Remix.run',
            ]}
          />
        </div>

        <div className="col-span-full mt-12 lg:col-span-6 lg:mt-0">
          <WorkCard
            title="Trovads"
            description="Marketing tool to discover facebook success ads."
            imageProps={{
              src: 'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/trovads_logo.png',
              alt: '',
              style: {borderRadius: 20},
            }}
            workUrl="/works/"
            technologies={[
              'Javascript',
              'Typescript',
              'React',
              'Redux ToolKit',
              'Python',
              'Node.js',
              'Express JS',
              'GraphQL',
              'EJS',
              'Stripe',
            ]}
          />
        </div>
      </Grid>
    </>
  );
}

export default WorksHome;
