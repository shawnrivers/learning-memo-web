/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import Link from 'next/link';
import { BLUE_0 } from '../../../constants/colors';

type LinkProps = React.ComponentProps<typeof Link>;

export const StyledLink: React.FC<React.PropsWithoutRef<
  LinkProps & React.RefAttributes<HTMLAnchorElement>
>> = (props) => {
  const { href, children, ...restProps } = props;

  return (
    <Link
      href={href}
      css={css`
        font-size: 1.5rem;
        color: ${BLUE_0};

        &:hover {
          text-decoration: underline;
        }
      `}
      {...restProps}
    >
      <a>{children}</a>
    </Link>
  );
};
