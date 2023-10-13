import React, {Fragment} from 'react';
import {CSSTypography} from '~/package/keepsimple-ui/types/theme.d';

interface BreveDetailsProps {
  icon: React.ImgHTMLAttributes<HTMLImageElement>;
  title: string;
  subTitle: string;
  description: string;
}

const BreveDetails: React.FC<BreveDetailsProps> = ({
  icon,
  title,
  subTitle,
  description,
}) => {
  return (
    <Fragment>
      <div className="width-full">
        <img
          alt={icon.alt}
          style={{height: 60, ...icon.style, borderRadius: 10}}
          width={60}
          height={60}
          loading="lazy"
          {...icon}
        />
      </div>
      <h3 className="typography-tile-headline-elevated">{title}</h3>
      <p className="typography-tile-subhead" style={{opacity: 0.6}}>
        {subTitle}
      </p>

      <p className={CSSTypography.intro}>{description}</p>
    </Fragment>
  );
};

export default React.memo(BreveDetails);
