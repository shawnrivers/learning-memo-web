import * as React from 'react';
import { ProjectPage } from '../../components/templates/ProjectPage';
import { learningCssRoutes } from '../../constants/routes';

const LearningCssPage: React.FC = () => {
  return <ProjectPage heading='Learning CSS' routes={learningCssRoutes} />;
};

export default LearningCssPage;
