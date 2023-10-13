import React, { ReactNode } from "react";
import Half from "./Half";
import Full from "./Full";

interface TilesProps {
    children?: ReactNode;
}

const Tiles: React.FC<TilesProps> & {
    Half: typeof Half,
    Full: typeof Full
} = ({ children }) => {
    return (
        <section className="section section-tiles-grid">
            <div className="section-content">
                <div className="tiles-container">

                    <div className="tile-overlay"></div>
                    {children}

                </div>
            </div>
        </section>
    )
}

Tiles.Half = Half;
Tiles.Full = Full;
export default Tiles;