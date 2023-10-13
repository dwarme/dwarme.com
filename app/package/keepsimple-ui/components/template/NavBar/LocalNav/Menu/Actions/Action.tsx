import React from "react";
import { ActionProps } from "../../../../../../types/localnav";

const Action: React.FC<ActionProps> = ({title, link, className}) => {
    return (
        <a
            className={`localnav-button button ${className ?? ''}`}
            
            href={link}
        >   
            {title}
            <span className="localnav-action-product">{title}</span>
        </a>
    )
}

export default Action;