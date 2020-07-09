import * as React from 'react';
import { StyledLink } from '../../components/atoms/StyledLink';
import { Routes } from '../../constants/routes';

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Learning React</h1>
      <ul>
        {Routes.map(({ to, name }) => (
          <li key={name}>
            <StyledLink to={to} className='Page-link'>
              {name}
            </StyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
