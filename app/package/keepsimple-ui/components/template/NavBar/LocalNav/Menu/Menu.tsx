import React from "react"
import Items from "./Items/Items";
import { MenuProps } from "../../../../../types/localnav";
import Actions from "./Actions/Actions";

const Menu: React.FC<MenuProps> = ({items, actions}) => {
    return (
        <div className="localnav-menu">
            <a href="#localnav-menustate" className="localnav-menucta-anchor localnav-menucta-anchor-open" id="localnav-menustate-open" aria-hidden="false">
                <span className="localnav-menucta-anchor-label">Open Menu</span>
            </a>
            <a href="#" className="localnav-menucta-anchor localnav-menucta-anchor-close" id="localnav-menustate-close" aria-hidden="true">
                <span className="localnav-menucta-anchor-label">Close Menu</span>
            </a>

            <Items items={items} />
            {actions &&
                <Actions actions={actions} />
            }

        </div>
    )
}

export default  React.memo(Menu);