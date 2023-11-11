import useAppearAnimation from '~/hooks/use-appear-animation';
import './SectionWorks.css';

function SectionWorks() {
  const {refElement: refHeadline} = useAppearAnimation<HTMLHeadingElement>();
  const {refElement: refCopy} = useAppearAnimation<HTMLDivElement>();

  return (
    <section className="section section-works" id="work">
      <div className="section-content">
        <div ref={refHeadline}>
          <h2 className="typography-section-eyebrow">Work</h2>
          <h3 className="typography-section-headline">What I built</h3>
        </div>

        <div ref={refCopy} className="works-copy typography-description-copy">
          <p>
            <a href="https://piwiii.com" target="_blank" rel="noreferrer">
              Piwiii
            </a>{' '}
            - Co-Founder and Principal Engineer - Mobile Taxi App
            <br />
            <a href="http://minibzpay.com" target="_blank" rel="noreferrer">
              Mini Bz Pay
            </a>{' '}
            - Leading Bolzano Pay App, both Web and Mobile
            <br />
            <a href="https://cattown.it" target="_blank" rel="noreferrer">
              Cattown
            </a>{' '}
            - Principal Engineer - Interactive Game
            <br />
            <a href="https://dwarme.com" target="_blank" rel="noreferrer">
              Trovads
            </a>{' '}
            - Founder and Principal Engineer - Marketing Tool Service
            <br />
            <a href="https://dwarme.com" target="_blank" rel="noreferrer">
              Portfolio
            </a>{' '}
            - Personal Website
            <br />
            <a
              href="https://github.com/dwarme"
              target="_blank"
              rel="noreferrer"
            >
              Creative Ideas (Project)
            </a>{' '}
            - Led the Engineering - Marketing Tool
            <br />
            <a
              href="https://github.com/dwarme"
              target="_blank"
              rel="noreferrer"
            >
              Github Projects
            </a>{' '}
            - See my ongoing and completed projects
          </p>
          <div className="cta">
            <a href="/resume" className="cta-action typography-act-action">
              <span>See my resume</span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#000000"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{mixBlendMode: 'normal'}}
                >
                  <g transform="translate(256.04104,-0.00048) rotate(90) scale(8.53333,8.53333)">
                    <path d="M4.99023,3.99023c-0.28938,0.00006 -0.56454,0.12547 -0.75443,0.34382c-0.18989,0.21836 -0.2759,0.50826 -0.2358,0.79485v8.35547c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-6.07031l18.29297,18.29297c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-18.29297,-18.29297h6.07031c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-8.36719c-0.04207,-0.00595 -0.08447,-0.00921 -0.12695,-0.00977z"></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionWorks;
