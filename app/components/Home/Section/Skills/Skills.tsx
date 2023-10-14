import React, {Fragment} from 'react';
import {APP_MEDIA} from '~/utils/constants-util';

const Skills: React.FC = () => {
  return (
    <Fragment>
      <img
        className="width-full"
        style={{height: 'auto'}}
        alt="skills"
        src={APP_MEDIA.image.skills}
        loading="lazy"
        width={680}
        height={680}
      />
    </Fragment>
  );
};

export default React.memo(Skills);
