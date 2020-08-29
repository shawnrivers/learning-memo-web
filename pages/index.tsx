import * as React from 'react';
import { StyledLink } from '../components/atoms/styled/StyledLink';
import { Layout } from '../components/templates/Layout';
import { homeRoutes } from '../constants/routes';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <h1>Learning Memo</h1>
      <ul>
        {homeRoutes.map(({ to, name }) => (
          <li key={name}>
            <StyledLink href={to}>{name}</StyledLink>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default HomePage;
