import React from "react";

interface OpenTileProps{
    id?: string;
    className?: string;
    icon?: 'plus' | 'arrow';
    onClick?: (event: React.MouseEvent)=> void;
}

const OpenTile: React.FC<OpenTileProps> = ({id, className, icon, onClick})=>{
    return (
        <button 
            id={id}
            className={`icon-wrapper flip-tile-button open-tile ${className ?? ''}`}
            onClick={onClick} 
        >
            {icon === 'plus' &&
                <svg className="icon plus-icon icon-plussolid" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" width="36" height="36"><path fillRule="evenodd" fill={'#000000'} d="M16.503 16.497l.008-5.739c0-.828.672-1.498 1.589-1.498h.02c.721.001 1.391.672 1.391 1.5v.001l-.008 5.74 5.749.008c1.548.001 1.498.672 1.498 2.391v-.79c-.001.73.02 1.399-1.5 1.399h-.002l-5.75-.008-.008 5.739c-.001 1.45-.673 1.498-1.5 1.498h-.002c-.828-.001-1.498-.078-1.498-1.5v-.002l.008-5.739-5.75-.008a1.5 1.5 0 0 1-1.498-1.5v-.002a1.5 1.5 0 0 1 1.5-1.498h.002l5.751.008M17.999 0C8.58 0 0 8.58 0 18c0 9.941 8.58 17.999 17.999 17.999 9.942 0 18-8.058 18-17.999 0-9.42-8.058-18-18-18" ></path></svg>
            }

            {icon === 'arrow' && 
                <span className="icon arrow-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="36" width="36"><path fillRule="evenodd" d="M21.71 14.918l-6.999-6.999a1.523 1.523 0 0 0-2.156 0 1.523 1.523 0 0 0 0 2.156l5.92 5.921-5.92 5.92a1.525 1.525 0 1 0 2.156 2.157l6.981-6.981.006-.007.012-.011a1.523 1.523 0 0 0 0-2.156" fill="currentColor"></path></svg>
                </span>
                
            }
            <span className="visuallyhidden">Open to read more</span>
        </button>
    )
}

export default OpenTile;