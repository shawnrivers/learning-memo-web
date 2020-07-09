/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const StyledLink: React.FC<React.PropsWithoutRef<
  LinkProps & React.RefAttributes<HTMLAnchorElement>
>> = (props) => {
  const { to, children, ...restProps } = props;

  return (
    <Link
      to={to}
      css={css`
        font-size: 1.5rem;
        color: #61dafb;

        &:hover {
          text-decoration: underline;
        }
      `}
      {...restProps}
    >
      {children}
    </Link>
  );
};
