/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { StyledButton } from '../../../atoms/styled/StyledButton';
import { TopicPage } from '../../TopicPage';
import { useDrawAnimationCanvas } from './hooks/useDrawAnimationCanvas';
import { useDrawBasicCanvas } from './hooks/useDrawBasicCanvas';
import { degToRad } from './utils/math';

export const CanvasPage: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const animationCanvasRef = React.useRef<HTMLCanvasElement>(null);

  useDrawBasicCanvas(canvasRef);

  const [clearAnimationCanvas] = useDrawAnimationCanvas(animationCanvasRef);

  return (
    <TopicPage heading='Canvas'>
      <section>
        <h2>
          <code>&lt;canvas&gt;</code> Basics
        </h2>
        <canvas ref={canvasRef} width='400' height='300'>
          <p>
            The browser doesn't support <code>canvas</code>
          </p>
        </canvas>
      </section>
      <section>
        <h2>Animations</h2>
        <StyledButton onClick={clearAnimationCanvas}>Clear canvas</StyledButton>
        <div
          css={css`
            margin-top: 1em;
          `}
        >
          <canvas ref={animationCanvasRef} width='400' height='300'>
            <p>
              The browser doesn't support <code>canvas</code>
            </p>
          </canvas>
        </div>
      </section>
    </TopicPage>
  );
};
