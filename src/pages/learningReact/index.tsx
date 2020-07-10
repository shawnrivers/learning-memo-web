import * as React from 'react';
import { HomeButton } from '../../components/atoms/buttons/HomeButton';
import { StyledLink } from '../../components/atoms/styled/StyledLink';
import { Layout } from '../../components/templates/Layout';
import { learningReactRoutes } from '../../constants/routes';

export const LearningReactPage: React.FC = () => {
  return (
    <Layout headerButton={<HomeButton />}>
      <h1>Learning React</h1>
      <ul>
        {learningReactRoutes.map(({ to, name }) => (
          <li key={name}>
            <StyledLink to={to} className='Page-link'>
              {name}
            </StyledLink>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
