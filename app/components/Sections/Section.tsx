import React, {ReactNode} from 'react';
import SectionHero from './SectionHero';
import SectionAbout from './SectionAbout';
import SectionWorks from './SectionWorks';

interface SectionProps {
  children?: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> & {
  Hero: typeof SectionHero;
  About: typeof SectionAbout;
  Works: typeof SectionWorks;
} = ({children, className}) => {
  return (
    <section className={`section ${className}`}>
      <div className="section-content">{children}</div>
    </section>
  );
};

Section.Hero = SectionHero;
Section.About = SectionAbout;
Section.Works = SectionWorks;

export default Section;
