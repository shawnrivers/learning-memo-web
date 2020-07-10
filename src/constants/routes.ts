import * as React from 'react';
import { LearningReactPage } from '../pages/learningReact';
import { UseEffectPage } from '../pages/learningReact/useEffect/template';

type RouteType = {
  to: string;
  name: string;
  PageComponent: React.FC;
};

export const homeRoutes: RouteType[] = [
  {
    to: '/react',
    name: 'React',
    PageComponent: LearningReactPage,
  },
];

export const learningReactRoutes: RouteType[] = [
  {
    to: '/react/useEffect',
    name: 'useEffect',
    PageComponent: UseEffectPage,
  },
];
