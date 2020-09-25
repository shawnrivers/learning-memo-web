/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';

export type LayoutProps = {
  headerButton?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div
      css={css`
        margin: 24px 24px 64px;
      `}
    >
      {props.headerButton ? <nav>{props.headerButton}</nav> : null}
      {props.children}
    </div>
  );
};
