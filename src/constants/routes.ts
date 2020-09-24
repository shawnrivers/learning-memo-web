export type RouteType = {
  to: string;
  name: string;
};

export const homeRoutes: RouteType[] = [
  {
    to: '/react',
    name: 'React',
  },
  {
    to: '/js',
    name: 'JavaScript',
  },
  {
    to: '/css',
    name: 'CSS',
  },
  {
    to: '/next',
    name: 'Next.js',
  },
];

export const learningReactRoutes: RouteType[] = [
  {
    to: '/react/useEffect',
    name: 'useEffect',
  },
  {
    to: '/react/rendering',
    name: 'Rendering',
  },
  {
    to: '/react/context',
    name: 'Context',
  },
  {
    to: '/react/suspense',
    name: 'Suspense',
  },
  {
    to: '/react/ref',
    name: 'Ref',
  },
  {
    to: '/react/hierarchy',
    name: 'Hierarchy',
  },
];

export const learningJSRoutes: RouteType[] = [
  {
    to: '/js/reference',
    name: 'Reference',
  },
  {
    to: '/js/intersection-observer',
    name: 'Intersection Observer',
  },
  {
    to: '/js/promise',
    name: 'Promise',
  },
  {
    to: '/js/generators',
    name: 'Generators',
  },
];

export const learningCssRoutes: RouteType[] = [
  {
    to: '/css/box-model',
    name: 'Box Model',
  },
];

export const learningNextRoutes: RouteType[] = [
  {
    to: '/next/routes',
    name: 'Routes',
  },
];
