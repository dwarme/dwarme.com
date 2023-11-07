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
            src="https://cdn.shopify.com/videos/c/o/v/aec53250511a47d492e77138d18c914c.mp4"
            width={200}
            height={200}
          ></video>
        </div>
        <div className="hero-metadata">
          <div className="hero-metadata__content">
            <h1 className="hero-headline__slogan">Daouda Warme</h1>
            <div className="cta">
              <span className="hero-metadata__copy">— Fullstack Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
