import React, { ReactNode } from "react";

interface BoxTextProps{
    children?: ReactNode;
}

const BoxText: React.FC<BoxTextProps> = ({children})=>{
    return (
        <div className="modal-copy">
            {children}
        </div>
    )
}

export default BoxText;