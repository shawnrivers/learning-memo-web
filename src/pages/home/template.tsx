import * as React from 'react';
import { StyledLink } from '../../components/atoms/StyledLink';

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Learning React</h1>
      <ul>
        <li>
          <StyledLink to='/useRef' className='Page-link'>
            useRef
          </StyledLink>
        </li>
      </ul>
    </div>
  );
};
