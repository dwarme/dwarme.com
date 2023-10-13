import React, { ReactNode } from "react";

interface ContainerProps{
    children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({children})=>{
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

export default Container;