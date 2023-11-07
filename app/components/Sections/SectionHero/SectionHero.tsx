import './SectionHero.css';

function SectionHero() {
  return (
    <section className="section section-hero">
      <div className="hero-image">
        <div className="hero-image__container">
          <video
            className="hero-image__media"
            autoPlay
            loop
            muted
            playsInline
            src="https://cdn.shopify.com/videos/c/o/v/1a572780d56f434585e4e2a566bc6d38.mp4"
            width={300}
            height={300}
          ></video>
        </div>
        <div className="hero-metadata">
          <div className="hero-metadata__content">
            <h1 className="hero-headline__slogan">Daouda Warme</h1>
            <div className="cta">
              <span className="hero-metadata__copy">— Frontend Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
