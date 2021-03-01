import * as React from 'react';
import { ProjectPage } from '../../components/templates/ProjectPage';
import { learningReactRoutes } from '../../routes';

const LearningReactPage: React.FC = () => {
  return <ProjectPage heading='Learning React' routes={learningReactRoutes} />;
};

export default LearningReactPage;
