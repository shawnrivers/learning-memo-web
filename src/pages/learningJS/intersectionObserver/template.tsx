/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { TopicPage } from '../../../components/templates/TopicPage';
import { BLUE_0, GRAY_0 } from '../../../constants/colors';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const IntersectionObserverPage: React.FC = () => {
  const cardOneRef = React.useRef<HTMLDivElement>(null);
  const [isCardOneIntersecting, setIsCardOneIntersecting] = React.useState(
    false
  );

  useIntersectionObserver({
    elementRef: cardOneRef,
    callbackOnIntersecting: () => setIsCardOneIntersecting(true),
    callbackOnNotIntersecting: () => setIsCardOneIntersecting(false),
  });

  return (
    <TopicPage heading='Intersection Observer API'>
      <h2>Scroll down ⬇️</h2>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 1600px;
        `}
      >
        <div
          ref={cardOneRef}
          css={css`
            width: 200px;
            height: 200px;
            border-radius: 16px;
            background-color: ${isCardOneIntersecting ? BLUE_0 : GRAY_0};
            transition: background-color 1s ease-in-out;
          `}
        ></div>
      </div>
    </TopicPage>
  );
};

export default IntersectionObserverPage;
