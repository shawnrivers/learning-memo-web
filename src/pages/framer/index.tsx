import * as React from 'react';
import { ProjectPage } from '../../components/templates/ProjectPage';
import { learningFramerMotionRoutes } from '../../routes';

const LearningFramerMotionPage: React.FC = () => {
  return (
    <ProjectPage
      heading='Learning Framer Motion'
      routes={learningFramerMotionRoutes}
    />
  );
};

export default LearningFramerMotionPage;
