import * as React from 'react';
import { TopicPage } from '../../../TopicPage';
import { SuspenseWithFetch } from './components/SuspenseWithFetch';
import { SuspenseWithRedux } from './components/SuspenseWithRedux';

export const SuspenseComparisonPage: React.FC = () => {
  return (
    <TopicPage heading='React Suspense Comparison'>
      <SuspenseWithFetch />
      <SuspenseWithRedux />
    </TopicPage>
  );
};
