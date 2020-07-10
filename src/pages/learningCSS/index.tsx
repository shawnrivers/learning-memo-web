import * as React from 'react';
import { LearningProjectPage } from '../../components/templates/LearningProjectPage';
import { learningCssRoutes } from '../../constants/routes';

export const LearningCssPage: React.FC = () => {
  return (
    <LearningProjectPage heading='Learning CSS' routes={learningCssRoutes} />
  );
};
