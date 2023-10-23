import {LinksFunction, V2_MetaFunction} from '@shopify/remix-oxygen';
import Layout from '~/components/Layout';
import Gallery from '~/components/Gallery';
import Modal from '~/components/Modal';
import SocialsLink from '~/components/SocialsLink';
import {assets, externalsLink} from '~/utils/constants';
import {getSeoMetas} from '~/utils/seo';

export const meta: V2_MetaFunction = () => {
  return getSeoMetas({
    title: 'Works',
  });
};

const MODAL_TRIGGERS_ID = {
  minibzpay: 'modal-trigger-minibzpay',
  cattown: 'modal-trigger-cattown',
  creativeIdeas: 'modal-trigger-creativeIdeas',
  trovads: 'modal-trigger-trovads',
  portfolio: 'modal-trigger-portfolio',
  contact: 'modal-trigger-contact',
};

function WorksPage() {
  return (
    <Layout>
      <Gallery>
        <div className="gallery">
          <Gallery.Card
            id={MODAL_TRIGGERS_ID.minibzpay}
            animationAppearActive={true}
            photo={{
              url: assets.minibzpay,
            }}
          />
          <Gallery.Card
            id={MODAL_TRIGGERS_ID.cattown}
            animationAppearActive={true}
            photo={{
              url: assets.cattown,
            }}
          />
          <Gallery.Card
            id={MODAL_TRIGGERS_ID.trovads}
            animationAppearActive={true}
            photo={{
              url: assets.trovads,
              loading: 'lazy',
            }}
          />
          <Gallery.Card
            id={MODAL_TRIGGERS_ID.creativeIdeas}
            animationAppearActive={true}
            photo={{
              url: assets.creativeIdeas,
              loading: 'lazy',
            }}
          />
          <Gallery.Card
            id={MODAL_TRIGGERS_ID.portfolio}
            animationAppearActive={true}
            photo={{
              url: assets.portfolio,
              loading: 'lazy',
            }}
          />
          <Gallery.Card
            id={MODAL_TRIGGERS_ID.contact}
            animationAppearActive={true}
            type="full"
            photo={{
              url: assets.contact.default,
              loading: 'lazy',
              sources: [
                {
                  media: 'small-screen',
                  srcSet: assets.contact.small,
                },
                {
                  media: 'large-medium-screen',
                  srcSet: assets.contact.default,
                },
              ],
            }}
          />
        </div>
      </Gallery>
      <Modal triggerId={MODAL_TRIGGERS_ID.minibzpay} contentType="post-media">
        <Modal.ContentPost post={{photoUrl: '/assets/test3.jpeg'}} />
      </Modal>
      <Modal triggerId={MODAL_TRIGGERS_ID.cattown} contentType="post-media">
        <Modal.ContentPost post={{photoUrl: '/assets/test3.jpeg'}} />
      </Modal>
      <Modal triggerId={MODAL_TRIGGERS_ID.trovads} contentType="post-media">
        <Modal.ContentPost post={{photoUrl: '/assets/test3.jpeg'}} />
      </Modal>
      <Modal
        triggerId={MODAL_TRIGGERS_ID.creativeIdeas}
        contentType="post-media"
      >
        <Modal.ContentPost post={{photoUrl: '/assets/test3.jpeg'}} />
      </Modal>
      <Modal triggerId={MODAL_TRIGGERS_ID.portfolio} contentType="post-media">
        <Modal.ContentPost post={{photoUrl: '/assets/test3.jpeg'}} />
      </Modal>
      <Modal triggerId="modal-trigger-contact">
        <Modal.ContentActions
          actions={[
            {
              link: externalsLink.linkedIn,
              linkTarget: '_blank',
              title: 'LinkedIn',
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  data-testid="ShareIcon-linkedin"
                  enableBackground="new 0 0 24 24"
                >
                  <g clipPath="url(#clip0_657_585)">
                    <rect
                      y="0.000488281"
                      width="24"
                      height="24.0004"
                      rx="4"
                      fill="#0A66C2"
                    ></rect>
                    <path
                      d="M8.65574 10.1318H6.19672V18.0008H8.65574V10.1318ZM8.87705 7.42687C8.87835 7.24086 8.84299 7.05642 8.77301 6.88407C8.70302 6.71173 8.59977 6.55486 8.46916 6.42242C8.33855 6.28997 8.18313 6.18456 8.01178 6.11218C7.84043 6.03981 7.6565 6.0019 7.47049 6.00061H7.42623C7.04797 6.00061 6.6852 6.15088 6.41773 6.41835C6.15026 6.68583 6 7.0486 6 7.42687C6 7.80513 6.15026 8.16791 6.41773 8.43538C6.6852 8.70285 7.04797 8.85312 7.42623 8.85312C7.61225 8.8577 7.79734 8.82557 7.97094 8.75859C8.14454 8.69161 8.30324 8.59107 8.43797 8.46273C8.57271 8.33439 8.68083 8.18076 8.75617 8.01062C8.83151 7.84047 8.87258 7.65715 8.87705 7.47113V7.42687ZM18 13.2204C18 10.8548 16.4951 9.93511 15 9.93511C14.5105 9.91059 14.0231 10.0149 13.5864 10.2375C13.1498 10.4601 12.7791 10.7934 12.5115 11.204H12.4426V10.1318H10.1311V18.0008H12.5902V13.8155C12.5546 13.3869 12.6896 12.9615 12.9659 12.6318C13.2421 12.3022 13.6373 12.0948 14.0656 12.0548H14.159C14.941 12.0548 15.5213 12.5466 15.5213 13.786V18.0008H17.9803L18 13.2204Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_657_585">
                      <path
                        d="M0 4.00049C0 1.79135 1.79086 0.000488281 4 0.000488281H20C22.2091 0.000488281 24 1.79135 24 4.00049V20.0009C24 22.2101 22.2091 24.0009 20 24.0009H4C1.79086 24.0009 0 22.2101 0 20.0009V4.00049Z"
                        fill="white"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              ),
            },
          ]}
        />
      </Modal>
      <SocialsLink />
    </Layout>
  );
}

export default WorksPage;
