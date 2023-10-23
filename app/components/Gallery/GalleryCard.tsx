/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useEffect, useRef} from 'react';

interface GalleryCardProps {
  id?: string;
  type?: 'half' | 'full';
  animationAppearActive?: boolean;
  photo: {
    url: string;
    loading?: 'eager' | 'lazy' | undefined;
    sources?: {
      media: 'small-screen' | 'large-medium-screen';
      srcSet: string;
    }[];
  };
  onClick?: () => void;
}

function GalleryCard({
  id,
  type = 'half',
  animationAppearActive,
  photo,
  onClick,
}: GalleryCardProps) {
  const refCard = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!refCard.current || !animationAppearActive) return;
    const intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          refCard.current?.classList.add('appear');
          observer.disconnect();
        }
      },
      {threshold: 0.25},
    );
    intersectionObserver.observe(refCard.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [animationAppearActive]);

  return (
    <div
      id={id}
      ref={refCard}
      className={`gallery-card ${type} ${
        animationAppearActive ? 'animation-appear' : ''
      }`}
      onClick={onClick}
    >
      <div className="card-content">
        <div className="card-photo-container">
          <picture>
            {photo.sources?.map((sourceData, index) => (
              <source
                key={`gallery-card-${index}`}
                media={
                  sourceData.media === 'small-screen'
                    ? '(max-width: 679px)'
                    : '(min-width: 680px)'
                }
                srcSet={sourceData.srcSet}
              />
            ))}
            <img
              className="card-photo"
              src={photo.url}
              srcSet={photo.url}
              alt=""
              loading={photo.loading}
            />
          </picture>
        </div>
        <div className="card-iconplus-container">
          <svg
            className="icon plus-icon icon-plussolid"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
          >
            <path
              fillRule="evenodd"
              fill="#000000"
              d="M16.503 16.497l.008-5.739c0-.828.672-1.498 1.589-1.498h.02c.721.001 1.391.672 1.391 1.5v.001l-.008 5.74 5.749.008c1.548.001 1.498.672 1.498 2.391v-.79c-.001.73.02 1.399-1.5 1.399h-.002l-5.75-.008-.008 5.739c-.001 1.45-.673 1.498-1.5 1.498h-.002c-.828-.001-1.498-.078-1.498-1.5v-.002l.008-5.739-5.75-.008a1.5 1.5 0 0 1-1.498-1.5v-.002a1.5 1.5 0 0 1 1.5-1.498h.002l5.751.008M17.999 0C8.58 0 0 8.58 0 18c0 9.941 8.58 17.999 17.999 17.999 9.942 0 18-8.058 18-17.999 0-9.42-8.058-18-18-18"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default React.memo(GalleryCard);
