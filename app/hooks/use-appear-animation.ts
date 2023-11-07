import {useEffect, useRef} from 'react';

function useAppearAnimation<T>() {
  const refElement = useRef<HTMLElement & T>(null);

  useEffect(() => {
    if (!refElement.current) return;
    refElement.current.classList.add('appear-animate');
  }, []);

  useEffect(() => {
    if (!refElement.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            refElement.current?.classList.add('animated');
          } else {
            refElement.current?.classList.remove('animated');
          }
        });
      },
      {
        threshold: 0,
      },
    );

    observer.observe(refElement.current);
    return () => observer.disconnect();
  }, [refElement]);

  return {refElement};
}

export default useAppearAnimation;
