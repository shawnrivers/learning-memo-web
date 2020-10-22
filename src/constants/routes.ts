export type Route = {
  to: string;
  name: string;
};

export const homeRoutes: Route[] = [
  {
    to: '/html',
    name: 'HTML',
  },
  {
    to: '/css',
    name: 'CSS',
  },
  {
    to: '/js',
    name: 'JavaScript',
  },
  {
    to: '/react',
    name: 'React',
  },
  {
    to: '/next',
    name: 'Next.js',
  },
  {
    to: '/framer',
    name: 'Framer Motion',
  },
];

export const learningReactRoutes: Route[] = [
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
    to: '/react/error',
    name: 'Error Handling',
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

export const learningJSRoutes: Route[] = [
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
  {
    to: '/js/canvas',
    name: 'Canvas',
  },
];

export const learningCssRoutes: Route[] = [
  {
    to: '/css/box-model',
    name: 'Box Model',
  },
  {
    to: '/css/percentage',
    name: 'Percentage',
  },
  {
    to: '/css/float',
    name: 'Float',
  },
];

export const learningNextRoutes: Route[] = [
  {
    to: '/next/routes',
    name: 'Routes',
  },
  {
    to: '/next/data-fetching',
    name: 'Data Fetching',
  },
];

export const learningFramerMotionRoutes: Route[] = [
  {
    to: '/framer/drag',
    name: 'Drag',
  },
];

export const learningHTMLRoutes: Route[] = [
  {
    to: '/html/table',
    name: 'Table',
  },
];
