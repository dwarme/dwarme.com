import React, { ReactNode } from "react";
import useModal from "../../../hooks/useModal";

interface ModalProps{
    children: ReactNode;
    sizeClassName?: string;
    toggleId?: string;
    open?: boolean;
}

const Modal: React.FC<ModalProps> = ({children, sizeClassName = 'large-8 medium-10', open, toggleId}) => {
    
    const {
        isModalOpen, 
        modalContentOutsideRef, 
        closeModal
    } = useModal({open, toggleId});
    
    return (
        <div className={`modal modal-standard ${isModalOpen ? 'modal-open' : ''}`} role="dialog" tabIndex={-1}>
            <div className="content-table">
                <div className="content-cell">
                    <div className="content-wrapper">
                        <div ref={modalContentOutsideRef} className={`content-padding ${sizeClassName}`}>
                            
                            <div className="modal-content">
                                {children}
                            </div>

                            <button className="modal-close" onClick={closeModal}>
                                <svg className="svg-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" height="20px"> <path d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"> </path> </svg>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;