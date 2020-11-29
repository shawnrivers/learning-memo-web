/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';

export const ExampleBlock: React.FC<{ caption?: React.ReactNode }> = (
  props
) => (
  <figure>
    {props.caption && (
      <figcaption
        css={css`
          margin-bottom: 1rem;
        `}
      >
        {props.caption}
      </figcaption>
    )}
    <div
      css={css`
        * {
          /* p {
            margin: 0;
          } */

          span,
          p,
          img {
            border: 3px solid #0082de;
          }
        }
      `}
    >
      {props.children}
    </div>
  </figure>
);
