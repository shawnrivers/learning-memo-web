/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { BackButton } from '../atoms/buttons/BackButton';

export type LayoutProps = {
  headerButton?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div>
      <div
        css={css`
          position: absolute;
          top: 24px;
          left: 24px;
        `}
      >
        {props.headerButton ?? <BackButton />}
      </div>
      {props.children}
    </div>
  );
};
