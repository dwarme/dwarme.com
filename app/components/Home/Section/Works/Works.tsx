import {APP_MEDIA} from '~/utils/constants-util';

const Works: React.FC = () => {
  return (
    <div
      className="width-full display-flex justify-content-center align-items-center"
      style={{height: '100%'}}
    >
      <picture>
        <source
          media="(max-width: 734px)"
          srcSet={APP_MEDIA.image.worksSmall}
        />
        <source
          media="(min-width: 735px)"
          srcSet={APP_MEDIA.image.worksLarge}
        />
        <img
          className="width-full"
          style={{objectFit: 'contain'}}
          alt="built"
          loading="lazy"
          width={1046}
          height={406}
          src={APP_MEDIA.image.worksLarge}
        />
      </picture>
    </div>
  );
};

export default Works;
