import React, {Fragment} from 'react';

const Experience: React.FC = () => {
  return (
    <Fragment>
      <div
        className="width-full display-flex flex-direction-column justify-content-end"
        style={{height: '100%'}}
      >
        <h3 className="typography-headline-elevated" style={{fontWeight: 700}}>
          Over <br />5 Years Of <br />
          Experience <br />
          Building apps and services ...
        </h3>
      </div>
    </Fragment>
  );
};

export default React.memo(Experience);
