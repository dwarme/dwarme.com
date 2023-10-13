import { useEffect, useRef, useState } from "react";

interface Props{
    open?: boolean;
    toggleId?: string;
}

const useModal = ({open, toggleId}: Props)=>{
    const modalContentOutsideRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setOpen] = useState(open ?? false)

    const openModal = ()=> {
        setOpen(true);
        document.body.classList.add('noscroll');
    }

    const closeModal = ()=>{
        setOpen(false);
        document.body.classList.remove('noscroll');
    }

    useEffect(()=>{
        if(isModalOpen) document.body.classList.add('noscroll');

        const modalToggleClickHandler = openModal;
        const clickOutSideHandler = (event: MouseEvent) => {
            // Check if the clicked element is outside the given ref.
            if (modalContentOutsideRef.current && !modalContentOutsideRef.current.contains(event.target as Node)) {
                closeModal();
            }
        };

        toggleId && document.getElementById(toggleId)?.addEventListener('click', modalToggleClickHandler);
        modalContentOutsideRef.current && document.addEventListener('mousedown', clickOutSideHandler);
        
        return ()=>{
            toggleId && document.getElementById(toggleId)?.removeEventListener('click', modalToggleClickHandler);
            document.removeEventListener('mousedown', clickOutSideHandler);
        }
        
    }, []);

    return {
        isModalOpen,
        modalContentOutsideRef,
        closeModal
    }
}

export default useModal;