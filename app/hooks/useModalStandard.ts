import {useEffect, useImperativeHandle, useState} from 'react';

interface HookeModalStandardProps {
  open?: boolean;
  toggleId?: string;
  onClose?: () => void;
  ref?: React.ForwardedRef<any>;
}

const useModalStandard = ({
  open,
  toggleId,
  onClose,
  ref,
}: HookeModalStandardProps) => {
  const [isOpen, setOpen] = useState<boolean>(Boolean(open));
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  const modalToggleClickHandler = () => {
    setOpen(true);
  };

  useImperativeHandle(ref, () => ({
    open: handleOpen,
    close: handleClose,
  }));

  useEffect(() => {
    if (!toggleId) return;

    document
      .getElementById(toggleId)
      ?.addEventListener('click', modalToggleClickHandler);

    return () => {
      document
        .getElementById(toggleId)
        ?.addEventListener('click', modalToggleClickHandler);
    };
  }, [toggleId]);

  return {handleOpen, handleClose, isOpen};
};

export default useModalStandard;
