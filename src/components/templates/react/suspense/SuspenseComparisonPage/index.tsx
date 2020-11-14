import * as React from 'react';
import { TopicPage } from '../../../TopicPage';
import { SuspenseWithFetch } from './components/SuspenseWithFetch';
import { SuspenseWithRedux } from './components/SuspenseWithRedux';
import { SuspenseWithSWR } from './components/SuspenseWithSWR';

export const SuspenseComparisonPage: React.FC = () => {
  return (
    <TopicPage heading='React Suspense Comparison'>
      <SuspenseWithFetch />
      <SuspenseWithRedux />
      <SuspenseWithSWR />
    </TopicPage>
  );
};
