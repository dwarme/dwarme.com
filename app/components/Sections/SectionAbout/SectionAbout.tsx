import useAppearAnimation from '~/hooks/use-appear-animation';
import './SectionAbout.css';

function SectionAbout() {
  const {refElement} = useAppearAnimation();

  return (
    <section ref={refElement} id="about" className="section section-about">
      <div className="section-content ">
        <p className="typography-about-copy about-copy">
          I&apos;ve long been fascinated by technology, the intricate interplay
          between algorithms, and user interaction. The evolution and deepening
          of this interest, fueled by curiosity, creativity, and passion, have
          ultimately led me to where I am now, building{' '}
          <a href="#work">web and mobile apps</a> and{' '}
          <a href="#work">services</a> to enhance user experiences, streamline
          processes, and bring innovative solutions to life.
        </p>
      </div>
    </section>
  );
}

export default SectionAbout;
