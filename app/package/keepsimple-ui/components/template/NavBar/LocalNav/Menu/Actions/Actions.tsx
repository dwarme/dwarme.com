import React from "react";
import { ActionsProps } from "../../../../../../types/localnav";
import Action from "./Action";

const Actions: React.FC<ActionsProps> = ({actions}) => {
    return (
        <div className="localnav-actions localnav-actions-center">
            <div className="localnav-action localnav-action-button">
                {actions.map((action, idex)=>
                    <Action 
                        key={`localnav-menu-action-item-${idex}`} 
                        {...action} 
                    />
                )}
            </div>
            <div className="localnav-action localnav-action-menucta" aria-hidden="true">
                <label htmlFor="localnav-menustate" className="localnav-menucta">
                    <span className="localnav-menucta-chevron"></span>
                </label>
            </div>
        </div>
    )
}

export default Actions;