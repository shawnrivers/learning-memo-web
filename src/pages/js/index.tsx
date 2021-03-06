import * as React from 'react';
import { ProjectPage } from '../../components/templates/ProjectPage';
import { learningJSRoutes } from '../../constants/routes';

const LearningJSPage: React.FC = () => {
  return <ProjectPage heading='Learning JS' routes={learningJSRoutes} />;
};

export default LearningJSPage;
