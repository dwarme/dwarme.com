import React from 'react';
import type {IBlogGalleryImage} from '~/types/blog';

interface GalleryCardProps {
  id: string;
  current?: boolean;
  device: 'desktop' | 'mobile';
  image: IBlogGalleryImage;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  id,
  current,
  device,
  image,
}) => {
  return (
    <div
      id={id}
      className={`gallery-item ${current ? 'current' : ''}`}
      aria-labelledby="gallery-dotnav-7455dfbbacfa67985fa4be669c361b74"
      data-gallery-item=""
      role="tabpanel"
      style={{visibility: current ? 'visible' : undefined}}
    >
      <figure role="presentation" className="image-shareheet-gallery">
        <div className="image-sharesheet">
          <div
            className={`${
              device === 'desktop'
                ? 'image-device-desktop'
                : 'image-device-mobile'
            } image-asset`}
          >
            <picture className="picture">
              <img
                className={`picture-image`}
                src={image.src}
                alt={image.alt ?? undefined}
              />
            </picture>
          </div>
        </div>
        {image.caption && Boolean(image.caption) && (
          <div className="gallery-caption">
            <div className="image-caption">{image.caption}</div>
          </div>
        )}
      </figure>
    </div>
  );
};

export default GalleryCard;
