import * as React from 'react';
import { UseEffectPage } from '../pages/useRef/template';

export const Routes: {
  to: string;
  name: string;
  PageComponent: React.FC;
}[] = [
  {
    to: '/useEffect',
    name: 'useEffect',
    PageComponent: UseEffectPage,
  },
];
