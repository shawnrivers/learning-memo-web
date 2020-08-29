/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';

export const StyledButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { children, ...restProps } = props;
  return (
    <button
      css={css`
        border-radius: 8px;
        padding: 1.5ex;
        margin: 1ex;
        pointer-events: auto;
      `}
      {...restProps}
    >
      {children}
    </button>
  );
};
