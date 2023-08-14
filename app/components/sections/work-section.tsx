import {WorkCard} from '../work-card';
import {Grid} from '../grid';
import {HeaderSection} from './header-section';

function WorkSection() {
  return (
    <>
      <HeaderSection
        title="Some last works"
        subTitle="Checkout some of my works"
        cta="See all works"
        ctaUrl="/works"
        className="mb-16"
      />
      <Grid>
        <div className="col-span-full lg:col-span-6">
          <WorkCard
            title="MiniBz Pay"
            description="Mobile and Web payment app."
            imageProps={{
              src: 'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/minibank-logo.png?v=1691507682',
              alt: '',
            }}
            workUrl="https://minibzpay.it"
            technologies={[
              'Javascript',
              'Typescript',
              'React',
              'React Native',
              'Node.js',
              'Express JS',
              'GraphQL',
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
      </Grid>
    </>
  );
}

export {WorkSection};
