import React from 'react';

interface GalleryPaddleNavProps {
  onPrevious: () => void;
  onNext: () => void;
}
const GalleryPaddleNav: React.FC<GalleryPaddleNavProps> = ({
  onNext,
  onPrevious,
}) => {
  return (
    <nav
      role="presentation"
      className="paddlenav nav-7455dfbbacfa67985fa4be669c361b74"
      style={{top: '44%'}}
    >
      <ul>
        <li>
          <button
            className="paddlenav-arrow paddlenav-arrow-previous"
            onClick={onPrevious}
          >
            <span className="vo-text">previous</span>
          </button>
        </li>
        <li>
          <button
            className="paddlenav-arrow paddlenav-arrow-next"
            onClick={onNext}
          >
            <span className="vo-text">next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default GalleryPaddleNav;
