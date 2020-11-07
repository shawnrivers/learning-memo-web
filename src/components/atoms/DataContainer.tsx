/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';

export const DataContainer: React.FC = (props) => (
  <div
    css={css`
      display: inline-block;
      padding: 1rem;
      background-color: #aaaaaa;
      border-radius: 16px;
    `}
  >
    {props.children}
  </div>
);
