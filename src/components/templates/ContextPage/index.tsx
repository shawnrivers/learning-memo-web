import * as React from 'react';
import { TopicPage } from '../TopicPage';
import { CounterController } from './components/CounterController';
import { CounterDisplay } from './components/CounterDisplay';
import { DemoContextProvider } from './context';

export const ContextPage: React.FC = () => {
  return (
    <DemoContextProvider>
      <TopicPage heading='React Context and Reducer'>
        <CounterDisplay />
        <div>
          <CounterController type='increment' />
        </div>
        <div>
          <CounterController type='decrement' />
        </div>
        <div>
          <CounterController type='reset' />
        </div>
      </TopicPage>
    </DemoContextProvider>
  );
};
