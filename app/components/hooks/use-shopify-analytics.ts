import {useEffect, useRef} from 'react';
import {usePageAnalytics} from './use-page-analytics';
import {useLocation} from '@remix-run/react';
import {
  sendShopifyAnalytics,
  useShopifyCookies,
  getClientBrowserParameters,
  AnalyticsEventName,
} from '@shopify/hydrogen';

const useShopifyAnalyctis = () => {
  const hasUserConsent = true;
  useShopifyCookies({hasUserConsent});

  const location = useLocation();
  const lastLocationKey = useRef('');
  const pageAnalytics = usePageAnalytics({hasUserConsent});

  useEffect(() => {
    // Filter out useEffect running twice
    if (lastLocationKey.current === location.key) return;

    lastLocationKey.current = location.key;

    // Send page view analytics
    const payload = {
      ...getClientBrowserParameters(),
      ...pageAnalytics,
    };

    sendShopifyAnalytics({
      eventName: AnalyticsEventName.PAGE_VIEW,
      payload,
    });
  }, [location, pageAnalytics]);
};

export default useShopifyAnalyctis;
