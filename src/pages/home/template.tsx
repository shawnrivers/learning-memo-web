import * as React from 'react';
import { StyledLink } from '../../components/atoms/styled/StyledLink';
import { homeRoutes } from '../../constants/routes';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Learning Memo</h1>
      <ul>
        {homeRoutes.map(({ to, name }) => (
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

export default HomePage;
