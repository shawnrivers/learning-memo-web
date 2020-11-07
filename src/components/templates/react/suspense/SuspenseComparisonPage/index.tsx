import * as React from 'react';
import { TopicPage } from '../../../TopicPage';
import { SuspenseWithFetch } from './components/SuspenseWithFetch';

export const SuspenseComparisonPage: React.FC = () => {
  return (
    <TopicPage heading='React Suspense Comparison'>
      <SuspenseWithFetch />
    </TopicPage>
  );
};
