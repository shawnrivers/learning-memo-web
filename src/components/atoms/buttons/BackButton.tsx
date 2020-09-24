/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { useRouter } from 'next/router';

export const BackButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { children, ...restProps } = props;
  const router = useRouter();

  return (
    <button
      css={css`
        &:hover {
          text-decoration: underline;
        }
      `}
      onClick={router.back}
      {...restProps}
    >
      {children ?? 'Back'}
    </button>
  );
};
