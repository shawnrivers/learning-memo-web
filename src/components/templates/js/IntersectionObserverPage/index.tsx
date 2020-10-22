/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { TopicPage } from '../../TopicPage';
import { BLUE_0, GRAY_0 } from '../../../../constants/colors';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

export const IntersectionObserverPage: React.FC = () => {
  const cardOneRef = React.useRef<HTMLDivElement>(null);
  const [isCardOneIntersecting, setIsCardOneIntersecting] = React.useState(
    false
  );

  useIntersectionObserver({
    elementRef: cardOneRef,
    callbackOnEntry: (entry) => {
      console.log('Is intersecting:', entry.isIntersecting);

      if (entry.isIntersecting) {
        setIsCardOneIntersecting(true);
      } else {
        setIsCardOneIntersecting(false);
      }
    },
  });

  return (
    <TopicPage heading='Intersection Observer API'>
      <h2>Scroll down ⬇️</h2>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 1600px 0;
        `}
      >
        <div
          ref={cardOneRef}
          css={css`
            width: 200px;
            height: 400px;
            border-radius: 16px;
            background-color: ${isCardOneIntersecting ? BLUE_0 : GRAY_0};
            transition: background-color 1s ease-in-out;
          `}
        ></div>
      </div>
    </TopicPage>
  );
};
