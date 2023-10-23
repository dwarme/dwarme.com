import React, {ReactNode} from 'react';
import './Gallery.css';
import GalleryCard from './GalleryCard';

interface GalleryProps {
  children: ReactNode;
}

const Gallery: React.FC<GalleryProps> & {
  Card: typeof GalleryCard;
} = ({children}) => {
  return <div className="gallery">{children}</div>;
};

Gallery.Card = GalleryCard;
export default Gallery;
