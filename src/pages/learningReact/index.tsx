import * as React from 'react';
import { LearningProjectPage } from '../../components/templates/LearningProjectPage';
import { learningReactRoutes } from '../../constants/routes';

export const LearningReactPage: React.FC = () => {
  return (
    <LearningProjectPage
      heading='Learning React'
      routes={learningReactRoutes}
    />
  );
};
