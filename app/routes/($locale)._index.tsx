import {ArrowLink} from '~/components/arrow-button';
import {Grid} from '~/components/grid';
import {HeroSection} from '~/components/sections/hero-section';
import {WorkSection} from '~/components/sections/work-section';
import {Spacer} from '~/components/spacer';
import {H2, H6, Paragraph} from '~/components/typography';
import {Image} from '@shopify/hydrogen';

function AboutIndex() {
  return (
    <>
      <HeroSection
        title="Hi, I'm Daouda Warme, I'm a full stack developer."
        subtitle="I make the world a better place by making quality software for people."
        imageProps={{
          src: 'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/avatar.jpg?v=1691995193',
          alt: 'Illustration of a snowboard',
          style: {borderRadius: '50%'},
          width: 400,
          height: 400,
        }}
        arrowUrl="#about-me"
        arrowLabel="Get to know more about me"
      />

      <Grid className="mb-24 mt-16 lg:mb-48" id="about-me">
        <div className="col-span-full mb-12 lg:col-span-4 lg:mb-0">
          <H6 as="h2">{`About and experience.`}</H6>
        </div>
        <div className="col-span-full mb-8 lg:col-span-8 lg:mb-20">
          <H2 as="p" className="mb-8">
            {`Curiosity is the catalyst for my rapid growth.`}
          </H2>
          <H2 className="mb-12" variant="secondary" as="p">
            {`
              I prioritize being a problem solver. I delve into specializations, maintaining an unwavering curiosity and active engagement to continuously learn, evolve, and elevate my skills..
            `}
          </H2>

          <div className="w-full lg:pr-12">
            <Image
              className="w-full rounded-lg object-cover"
              src="https://cdn.shopify.com/s/files/1/0770/5690/1456/files/dwarme-coding-73GW73.png?v=1691791397"
              alt="daouda-coding"
              width={997}
              height={1024}
            />
          </div>
        </div>

        <Paragraph className="lg:mb:0 col-span-full mb-4 lg:col-span-4 lg:col-start-5 lg:mr-12">
          {`
           Early in my career, I made the decision to become an expert in JavaScript. 
           So, I focused my efforts on mastering the world's most widely used programming language. 
           I invested countless hours constructing web applications with JavaScript, both as a freelancer and as the creator of "trovads," a marketing tool. 
           I also dedicated my evenings to working on various side projects utilizing JavaScript.
           I believe I have successfully achieved my goal of becoming a JavaScript expert. 
           However, like everyone else, I must continually stay updated, which presents an enjoyable challenge.
          `}
        </Paragraph>
        <Paragraph className="col-span-full lg:col-span-4 lg:col-start-9 lg:mr-12">
          {`
            I have always been enthusiastic about sharing my knowledge with others.
             During my school days, I volunteered as a tutor for my classmates. 
             On one occasion, I had the opportunity to lead a class above my own by teaching 
             them how to integrate solar panel data with a website that displays real-time information 
             from the solar panel situated atop the school building. This endeavor involved technologies 
             such as JavaScript, React, TypeScript, Node.js, GraphQL, Socket.IO, and more.
          `}
        </Paragraph>
      </Grid>

      <Grid className="mb-0 lg:mb-0">
        <div className="col-span-full lg:col-span-6 lg:col-start-7">
          <div className="mb-12 lg:mb-0">
            <Image
              className="rounded-lg object-cover"
              src="https://cdn.shopify.com/s/files/1/0770/5690/1456/files/alpis-18482994.jpg"
              alt="daouda-in-alpi"
              width={1200}
              height={1500}
            />
          </div>
        </div>

        <div className="col-span-full lg:col-span-5 lg:col-start-1 lg:row-start-1">
          <H2 className="mb-10">Here are some of the values I live by.</H2>

          <H6 as="h3" className="mb-4">
            {`Kindness`}
          </H6>
          <Paragraph className="mb-12">
            {`
              You can be the smartest and most skilled software engineer in the
              world, but if you're not kind to those with whom you interact,
              you'll never reach your full potential and you'll always be
              chasing the next thing to bring you happiness in life. Be kind.
            `}
          </Paragraph>
          <H6 as="h3" className="mb-4">
            {`Share knowledge`}
          </H6>
          <Paragraph className="mb-12">
            {`
              One of the biggest things that has helped me learn is by
              committing myself to sharing what I know with others. I force myself into
              situations where I have to be accountable to those I'm teaching
              to really know my stuff. And as a result, a lot of people have
              learned from me as well.
            `}
          </Paragraph>
          <H6 as="h3" className="mb-4">
            {`Collaborate with others`}
          </H6>
          <Paragraph className="mb-12">
            {`
              I've worked with a ton of people throughout my academic 
              years and participation in events like hackathons. 
              I've found it to be invaluable to collaborate well with
              others. I value giving credit where it is due and celebrating
              the successes of others with them. We can accomplish much more
              together than separately.
            `}
          </Paragraph>
        </div>
      </Grid>

      <WorkSection />

      <Spacer size="base" />

      <Grid className="mb-0 lg:mb-0">
        <div className="col-span-full mb-10 lg:col-span-6 lg:col-start-1 lg:mb-0">
          <Image
            className="rounded-lg object-contain"
            src="https://cdn.shopify.com/s/files/1/0770/5690/1456/files/869a98ea8eda24c603c06efcedee81b9-removebg.png?v=1692024291"
            alt="some-object"
            width={1504}
            height={1128}
          />
        </div>

        <div className="col-span-full lg:col-span-4 lg:col-start-8 lg:row-start-1">
          <H2 className="mb-10">{`Curious to know the stuff I use?`}</H2>
          <H2 variant="secondary" as="p" className="mb-14">
            {`I keep a "uses" page updated with the stuff I use.`}
          </H2>
          <ArrowLink to="/uses">{`Check out the uses page`}</ArrowLink>
        </div>
      </Grid>
    </>
  );
}
export default AboutIndex;
