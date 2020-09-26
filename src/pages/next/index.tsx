import * as React from 'react';
import { ProjectPage } from '../../components/templates/ProjectPage';
import { learningNextRoutes } from '../../constants/routes';

const LearningNextPage: React.FC = () => {
  return <ProjectPage heading='Learning Next.js' routes={learningNextRoutes} />;
};

export default LearningNextPage;