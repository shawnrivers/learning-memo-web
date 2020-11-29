/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';

export const Container: React.FC<{
  fixedWidth?: boolean;
  fixedHeight?: boolean;
}> = (props) => {
  const {
    fixedWidth = true,
    fixedHeight = true,
    children,
    ...restProps
  } = props;

  return (
    <div
      css={css`
        width: ${fixedWidth ? '300px' : 'auto'};
        height: ${fixedHeight ? '400px' : 'auto'};
        background-color: #faf3cd;
      `}
      {...restProps}
    >
      {children}
    </div>
  );
};
