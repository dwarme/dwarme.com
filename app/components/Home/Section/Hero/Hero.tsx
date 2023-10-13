import Section from '~/package/keepsimple-ui/components/layout/Section/Section';
import './Hero.css';
import {APP_MEDIA} from '~/utils/constants-util';

const Hero = () => {
  return (
    <div className="hero-container width-full">
      <picture className="overlay hero-bgimage">
        <img
          alt=""
          src={APP_MEDIA.image.homeHeroBackground}
          className="width-full height-full"
          decoding="async"
        />
      </picture>
      <Section className="section-hero">
        <Section.Content className="position-relative">
          <div
            className="hero-profile-image-container position-relative"
            style={{padding: 60}}
          >
            <img
              className="hero-profile-image"
              alt=""
              src={APP_MEDIA.image.profileAvatar}
              decoding="async"
              width={400}
              height={400}
            />
          </div>
          <div
            className="width-full display-flex justify-content-center position-relative"
            style={{top: -50}}
          >
            <img
              className="fade-in width-full"
              style={{height: 'auto', maxHeight: 120}}
              src={APP_MEDIA.image.fullstackDev}
              alt=""
              decoding="async"
              width={980}
              height={120}
            />
          </div>
          <div className="overlay"></div>
        </Section.Content>
      </Section>
    </div>
  );
};

export default Hero;
