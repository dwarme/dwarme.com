import React, {useState} from 'react';
import GalleryCard from './gallery-card';
import GalleryPaddleNav from './gallery-paddlenav';
import type {IBlogGalleryImage} from '~/types/blog';

interface GalleryProps {
  device: 'mobile' | 'desktop';
  images: IBlogGalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({device, images}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handlePresentationPrevious = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
      return;
    }
    setCurrentImageIndex((prev) => prev - 1);
  };

  const handlePresentationNext = () => {
    if (currentImageIndex + 1 === images.length) {
      setCurrentImageIndex(0);
      return;
    }
    setCurrentImageIndex((prev) => prev + 1);
  };

  return (
    <div
      className={`gallery component ${
        device === 'desktop' ? 'gallery-hero' : ''
      } body-copy-wide`}
      role="group"
      aria-label="gallery"
    >
      <div className="component-content">
        <nav role="presentation" className="dotnav">
          <ul role="tablist">
            {images.map((image, tabIndex) => (
              <li
                key={`blog-gallery-dotnav-${image.id}`}
                role="presentation"
                className="current"
                onClick={() => setCurrentImageIndex(tabIndex)}
              >
                <span
                  className={`dotnav-item ${
                    currentImageIndex === tabIndex ? 'current' : ''
                  }`}
                  role="tab"
                  tabIndex={tabIndex}
                  aria-selected={currentImageIndex === tabIndex}
                  style={{cursor: 'pointer'}}
                >
                  <span className="visuallyhidden"></span>
                </span>
              </li>
            ))}
          </ul>
        </nav>
        <div className="gallery-images">
          {images.map((image, index) => (
            <GalleryCard
              device={device}
              key={image.id}
              id={image.id}
              current={currentImageIndex === index}
              image={image}
            />
          ))}
        </div>
        {images.length > 1 && (
          <GalleryPaddleNav
            onPrevious={handlePresentationPrevious}
            onNext={handlePresentationNext}
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
