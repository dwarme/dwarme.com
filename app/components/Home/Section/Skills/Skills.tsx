import React, {Fragment} from 'react';
import {APP_MEDIA} from '~/utils/constants-util';

const Skills: React.FC = () => {
  return (
    <Fragment>
      <h3 className="typography-headline-elevated" style={{marginBottom: 20}}>
        Skills
      </h3>
      <img
        className="width-full"
        alt="skills"
        src={APP_MEDIA.image.skills}
        decoding="async"
        width={320}
        height={195}
      />
    </Fragment>
  );
};

export default React.memo(Skills);
