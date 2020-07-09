/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { StyledLink } from './StyledLink';

export const HomeButton: React.FC = () => {
  return (
    <div
      css={css`
        position: absolute;
        top: 2ex;
        left: 2em;
      `}
    >
      <StyledLink to='/'>Home</StyledLink>
    </div>
  );
};
