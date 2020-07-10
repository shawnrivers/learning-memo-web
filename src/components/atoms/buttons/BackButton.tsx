/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { BLUE_0 } from '../../../constants/colors';

export const BackButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { children, ...restProps } = props;
  const history = useHistory();

  return (
    <button
      css={css`
        font-size: 1.5rem;
        color: ${BLUE_0};

        &:hover {
          text-decoration: underline;
        }
      `}
      onClick={history.goBack}
      {...restProps}
    >
      {children ?? 'Back'}
    </button>
  );
};
