import * as React from 'react';
import { ProjectPage } from '../../components/templates/ProjectPage';
import { learningHTMLRoutes } from '../../constants/routes';

const LearningHTMLPage: React.FC = () => {
  return <ProjectPage heading='Learning HTML' routes={learningHTMLRoutes} />;
};

export default LearningHTMLPage;
