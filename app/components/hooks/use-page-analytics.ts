import {useMatches} from '@remix-run/react';
import type {ShopifyPageViewPayload} from '@shopify/hydrogen';
import {useMemo} from 'react';

export function usePageAnalytics({hasUserConsent}: {hasUserConsent: boolean}) {
  const matches = useMatches();

  return useMemo(() => {
    const data: Record<string, unknown> = {};

    matches.forEach((event) => {
      const eventData = event?.data;
      if (eventData) {
        eventData['analytics'] && Object.assign(data, eventData['analytics']);
        console.log(eventData);
        const selectedLocale = eventData['selectedLocale']; //|| DEFAULT_LOCALE;
        /*Object.assign(data, {
          acceptedLanguage: selectedLocale.language,
        });*/
      }
    });

    return {
      hasUserConsent,
    } as unknown as ShopifyPageViewPayload;
  }, [matches]);
}
