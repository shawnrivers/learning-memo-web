/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';

export const Spacer: React.FC<{
  size?: number | string;
}> = (props) => {
  const { size = 1 } = props;

  return (
    <div
      css={css`
        height: ${size}rem;
      `}
    ></div>
  );
};
