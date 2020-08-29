/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';

export const Divider: React.FC = () => (
  <hr
    css={css`
      border: 1px solid;
      margin: 32px 0;
    `}
  />
);
