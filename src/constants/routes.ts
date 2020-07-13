import * as React from 'react';
import LearningCssPage from '../pages/learningCSS';
import BoxModelPage from '../pages/learningCSS/boxModel/template';
import LearningJSPage from '../pages/learningJS';
import ReferencePage from '../pages/learningJS/reference/template';
import LearningReactPage from '../pages/learningReact';
import RenderingPage from '../pages/learningReact/rendering/template';
import UseEffectPage from '../pages/learningReact/useEffect/template';

export type RouteType = {
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
  {
    to: '/js',
    name: 'JavaScript',
    PageComponent: LearningJSPage,
  },
  {
    to: '/css',
    name: 'CSS',
    PageComponent: LearningCssPage,
  },
];

export const learningReactRoutes: RouteType[] = [
  {
    to: '/react/useEffect',
    name: 'useEffect',
    PageComponent: UseEffectPage,
  },
  {
    to: '/react/rendering',
    name: 'Rendering',
    PageComponent: RenderingPage,
  },
];

export const learningJSRoutes: RouteType[] = [
  {
    to: '/js/reference',
    name: 'Reference',
    PageComponent: ReferencePage,
  },
];

export const learningCssRoutes: RouteType[] = [
  {
    to: '/css/box-model',
    name: 'Box Model',
    PageComponent: BoxModelPage,
  },
];

export const allRoutes = [
  ...homeRoutes,
  ...learningReactRoutes,
  ...learningJSRoutes,
  ...learningCssRoutes,
];
