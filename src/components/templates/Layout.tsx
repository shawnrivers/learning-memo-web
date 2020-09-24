/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { BackButton } from '../atoms/buttons/BackButton';

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
      <div>{props.headerButton ?? <BackButton />}</div>
      {props.children}
    </div>
  );
};
