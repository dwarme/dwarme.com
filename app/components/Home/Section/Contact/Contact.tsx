import React, {Fragment} from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <Fragment>
      <div
        className="display-flex justify-content-center align-items-center"
        style={{height: '100%'}}
      >
        <div className="width-full" style={{maxWidth: 500}}>
          <p className="typography-tile-subhead">Contact me</p>
          <p className="typography-blockquote-copy">
            Let&apos;s Build <br />
            Something Amazing. <br />
            Contact me to get started.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(Contact);
