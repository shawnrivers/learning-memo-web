import * as React from 'react';
import { RouteType } from '../../constants/routes';
import { HomeButton } from '../atoms/buttons/HomeButton';
import { StyledLink } from '../atoms/styled/StyledLink';
import { Layout } from './Layout';

type LearningProjectLayoutProps = {
  heading: string;
  routes: RouteType[];
};

export const LearningProjectPage: React.FC<LearningProjectLayoutProps> = (
  props
) => {
  return (
    <Layout headerButton={<HomeButton />}>
      <h1>{props.heading}</h1>
      <ul>
        {props.routes.map(({ to, name }) => (
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
