import * as React from 'react';
/**@jsx jsx */
import { jsx, css } from '@emotion/core';
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
      <StyledLink to='/'>Go Home</StyledLink>
    </div>
  );
};
