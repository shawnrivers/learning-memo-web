import * as React from 'react';

type useIntersectionObserverParams = {
  elementRef: React.RefObject<HTMLElement>;
  options?: IntersectionObserverInit;
  callbackOnIntersecting(): void;
  callbackOnNotIntersecting?(): void;
};

export const useIntersectionObserver = ({
  elementRef,
  options,
  callbackOnIntersecting,
  callbackOnNotIntersecting,
}: useIntersectionObserverParams) => {
  React.useEffect(() => {
    const intersectionCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        console.log('Is intersecting?', entry.isIntersecting);

        if (entry.isIntersecting) {
          callbackOnIntersecting();
        } else {
          if (callbackOnNotIntersecting) {
            callbackOnNotIntersecting();
          }
        }
      });
    };
    const observer = new IntersectionObserver(intersectionCallback, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
  }, []);
};
