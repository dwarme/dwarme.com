import React from "react";
import { ItemsProps } from "../../../../../../types/localnav";
import Item from "./Item";

const Items: React.FC<ItemsProps> = ({items}) => {
    return (
        <div className="localnav-menu-tray">
            <ul className="localnav-menu-items">
                {items.map((item, idex)=> 
                    <Item
                        key={`localnav-menu-item-${idex}`}
                        {...item} 
                    />    
                )}
            </ul>
        </div>
    )
}

export default React.memo(Items);