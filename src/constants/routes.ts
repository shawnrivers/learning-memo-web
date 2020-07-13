import * as React from 'react';
import LearningCssPage from '../pages/learningCSS';
import BoxModelPage from '../pages/learningCSS/boxModel/template';
import LearningJSPage from '../pages/learningJS';
import ReferencePage from '../pages/learningJS/reference/template';
import LearningReactPage from '../pages/learningReact';
import RenderingPage from '../pages/learningReact/rendering/template';
import UseEffectPage from '../pages/learningReact/useEffect/template';

const LearningCssPageLazy = React.lazy(() => import('../pages/learningCSS'));
const BoxModelPageLazy = React.lazy(() =>
  import('../pages/learningCSS/boxModel/template')
);
const LearningJSPageLazy = React.lazy(() => import('../pages/learningJS'));
const ReferencePageLazy = React.lazy(() =>
  import('../pages/learningJS/reference/template')
);
const LearningReactPageLazy = React.lazy(() =>
  import('../pages/learningReact')
);
const RenderingPageLazy = React.lazy(() =>
  import('../pages/learningReact/rendering/template')
);
const UseEffectPageLazy = React.lazy(() =>
  import('../pages/learningReact/useEffect/template')
);

export type RouteType = {
  to: string;
  name: string;
  PageComponent: React.FC;
  PageComponentLazy: React.LazyExoticComponent<React.FC>;
};

export const homeRoutes: RouteType[] = [
  {
    to: '/react',
    name: 'React',
    PageComponent: LearningReactPage,
    PageComponentLazy: LearningReactPageLazy,
  },
  {
    to: '/js',
    name: 'JavaScript',
    PageComponent: LearningJSPage,
    PageComponentLazy: LearningJSPageLazy,
  },
  {
    to: '/css',
    name: 'CSS',
    PageComponent: LearningCssPage,
    PageComponentLazy: LearningCssPageLazy,
  },
];

export const learningReactRoutes: RouteType[] = [
  {
    to: '/react/useEffect',
    name: 'useEffect',
    PageComponent: UseEffectPage,
    PageComponentLazy: UseEffectPageLazy,
  },
  {
    to: '/react/rendering',
    name: 'Rendering',
    PageComponent: RenderingPage,
    PageComponentLazy: RenderingPageLazy,
  },
];

export const learningJSRoutes: RouteType[] = [
  {
    to: '/js/reference',
    name: 'Reference',
    PageComponent: ReferencePage,
    PageComponentLazy: ReferencePageLazy,
  },
];

export const learningCssRoutes: RouteType[] = [
  {
    to: '/css/box-model',
    name: 'Box Model',
    PageComponent: BoxModelPage,
    PageComponentLazy: BoxModelPageLazy,
  },
];

export const allRoutes = [
  ...homeRoutes,
  ...learningReactRoutes,
  ...learningJSRoutes,
  ...learningCssRoutes,
];
