/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';

export const Layout: React.FC = (props) => {
  return (
    <div
      css={css`
        margin: 24px 24px 64px;
      `}
    >
      {props.children}
    </div>
  );
};
