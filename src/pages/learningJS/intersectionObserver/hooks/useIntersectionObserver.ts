import * as React from 'react';

type useIntersectionObserverParams = {
  elementRef: React.RefObject<HTMLElement>;
  options?: IntersectionObserverInit;
  callbackOnEntry(entry: IntersectionObserverEntry): void;
};

export const useIntersectionObserver = ({
  elementRef,
  options,
  callbackOnEntry,
}: useIntersectionObserverParams) => {
  React.useEffect(() => {
    const intersectionCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        callbackOnEntry(entry);
      });
    };

    const observer = new IntersectionObserver(intersectionCallback, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
  }, []);
};
