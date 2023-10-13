
export function intersectionObserver(el: HTMLElement, onView: Function, percentageInViewport?: number) {

  if (percentageInViewport) {
    
    if (percentageInViewport > 100) percentageInViewport = 100;
    percentageInViewport /= 100;

  } else percentageInViewport = 0;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      onView();
      observer.disconnect();
    }
  }, { threshold: percentageInViewport });

  observer.observe(el)
}