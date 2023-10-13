import {APP_MEDIA} from '~/utils/constants-util';

const Works: React.FC = () => {
  return (
    <div
      className="width-full display-flex justify-content-center"
      style={{height: '100%'}}
    >
      <img
        className="width-full"
        style={{objectFit: 'contain'}}
        alt="Works"
        src={APP_MEDIA.image.works}
        loading="lazy"
        width={730}
        height={460}
      />
    </div>
  );
};

export default Works;
