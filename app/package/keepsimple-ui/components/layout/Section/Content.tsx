import React, { ReactNode } from "react";

interface ContentProps{
    className?: string;
    children?: ReactNode
}

const Content: React.FC<ContentProps> = ({className, children})=>{
    return (
        <div className={`section-content ${className ?? ''}`}>
            {children}
        </div>
    )
}

export default Content;