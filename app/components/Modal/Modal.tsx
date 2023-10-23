/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {
  Fragment,
  HTMLAttributeAnchorTarget,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import './Modal.css';

interface ModalProps {
  children: ReactNode;
  contentType?: 'post-media';
  triggerId: string;
  open?: boolean;
}

interface IModalAction {
  link: string;
  linkTarget?: HTMLAttributeAnchorTarget;
  icon?: ReactNode;
  title: string;
}

interface ModalContentActionsProps {
  actions: IModalAction[];
}

interface ModalContentPostProps {
  post: {
    photoUrl: string;
    accessibilityCaption?: string;
    link?: IModalAction;
  };
}

const Modal: React.FC<ModalProps> & {
  ContentPost: typeof ModalContentPost;
  ContentActions: typeof ModalContentActions;
} = ({contentType, triggerId, open = false, children}) => {
  const [isModalOpen, setOpen] = useState<boolean>(false);
  const handleModalClose = () => {
    setOpen(false);
    document.body.classList.remove('noscroll');
  };

  const handleModalOpen = () => {
    setOpen(true);
    document.body.classList.add('noscroll');
  };

  useEffect(() => {
    const triggerElement = document.getElementById(triggerId);
    if (!triggerElement) return;
    const handleTriggerClick = () => {
      handleModalOpen();
    };

    triggerElement.addEventListener('click', handleTriggerClick);
    return () =>
      triggerElement.removeEventListener('click', handleTriggerClick);
  }, [triggerId]);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  return (
    <div
      className={`dialog-modal ${contentType ?? ''} ${
        isModalOpen ? 'show' : ''
      }`}
    >
      <div className="dialog">
        <div className="dialog-backdrop" onClick={handleModalClose}></div>
        <div className="dialog-content">
          <div className="popup-close">
            <button type="button" onClick={handleModalClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-close"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <g
                  clipPath="url(#a)"
                  stroke="#2C3137"
                  strokeWidth="4.982"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M24.663 24.663L10.43 10.43M24.664 10.43L10.43 24.663" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(.467 .467)"
                      d="M0 0h34.16v34.16H0z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

function ModalContentPost({post}: ModalContentPostProps) {
  return (
    <Fragment>
      <div className="popup-media-container">
        <div className="popup-media-content">
          <img
            className="popup-media"
            alt={post.accessibilityCaption}
            src={post.photoUrl}
          />
          <div className="overlay"></div>
        </div>
      </div>
      {post.link && (
        <div className="popup-postlink-container">
          <Modal.ContentActions
            actions={[
              {
                link: '/',
                title: 'Visit work',
              },
            ]}
          />
        </div>
      )}
    </Fragment>
  );
}

function ModalContentActions({actions}: ModalContentActionsProps) {
  return (
    <Fragment>
      {actions.map((action) => (
        <a
          key={action.title}
          className="popup-action-container"
          href={action.link}
          target={action.linkTarget}
        >
          <div className="popup-action-content">
            <div className="popup-action-icon__container">{action.icon}</div>
            <div className="popup-action-title__container">
              <p className="popup-action-title">{action.title}</p>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              enableBackground="new 0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </a>
      ))}
    </Fragment>
  );
}

Modal.ContentPost = ModalContentPost;
Modal.ContentActions = ModalContentActions;
export default Modal;
