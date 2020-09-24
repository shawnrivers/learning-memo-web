/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { useRouter } from 'next/router';
import { BLUE_1 } from '../../../constants/colors';

export const BackButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { children, ...restProps } = props;
  const router = useRouter();

  return (
    <button
      css={css`
        background: none;
        box-shadow: none;
        border: none;
        outline: none;
        text-shadow: none;
        padding: 0;
        margin: 0;
        font-size: 1.2rem;
        color: ${BLUE_1};

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      `}
      onClick={router.back}
      {...restProps}
    >
      {children ?? 'Back'}
    </button>
  );
};
