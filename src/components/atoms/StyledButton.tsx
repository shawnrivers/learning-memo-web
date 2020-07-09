/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { BLUE_0, BLUE_1 } from '../../constants/colors';

export const StyledButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { children, ...restProps } = props;
  return (
    <button
      css={css`
        color: ${BLUE_0};
        border: 1px ${BLUE_0} solid;
        border-radius: 8px;
        padding: 1.5ex;
        margin: 1ex;

        &:hover {
          background-color: ${BLUE_1};
        }
      `}
      {...restProps}
    >
      {children}
    </button>
  );
};
