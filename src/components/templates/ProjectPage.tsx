import * as React from 'react';
import { Route } from '../../routes';
import { HomeButton } from '../atoms/buttons/HomeButton';
import { StyledLink } from '../atoms/styled/StyledLink';
import { Layout } from './Layout';

type ProjectPageProps = {
  heading: string;
  routes: Route[];
};

export const ProjectPage: React.FC<ProjectPageProps> = (props) => {
  return (
    <Layout headerButton={<HomeButton />}>
      <h1>{props.heading}</h1>
      <ul>
        {props.routes.map(({ to, name }) => (
          <li key={name}>
            <StyledLink href={to}>{name}</StyledLink>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
