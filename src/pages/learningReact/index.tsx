import * as React from 'react';
import { ProjectPage } from '../../components/templates/ProjectPage';
import { learningReactRoutes } from '../../constants/routes';

export const LearningReactPage: React.FC = () => {
  return (
    <ProjectPage
      heading='Learning React'
      routes={learningReactRoutes}
    />
  );
};
