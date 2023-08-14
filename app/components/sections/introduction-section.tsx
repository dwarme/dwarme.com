import {Link} from '@remix-run/react';
import {ArrowLink} from '../arrow-button';

import {Grid} from '../grid';
import {H2, H3} from '../typography';

function IntroductionSection() {
  return (
    <Grid>
      <div className="col-span-full lg:col-span-4">
        <p className="text-secondary text-xl">{`Introduction video (2:13)`}</p>
        <Link
          prefetch="intent"
          className="underlined"
          to="/about?autoplay"
        >{`or, watch the full video here (8:05)`}</Link>
      </div>
      <div className="col-span-full mt-12 lg:col-span-6 lg:col-start-6 lg:mt-0">
        <H2 id="intro">
          {`Hi, I'm Kent C. Dodds. I help people make the world better through quality software.`}
        </H2>
        <H3 variant="secondary" as="p" className="mt-12">
          {`
            I'm also a big extreme sports enthusiast. When I'm not hanging out
            with my family or at the computer you can find me cruising around on
            my onewheel or hitting the slopes on my snowboard when it's cold.
          `}
        </H3>
        <ArrowLink
          to="/about"
          direction="right"
          className="mt-20"
          prefetch="intent"
        >
          Learn more about me
        </ArrowLink>
      </div>
    </Grid>
  );
}

export {IntroductionSection};
