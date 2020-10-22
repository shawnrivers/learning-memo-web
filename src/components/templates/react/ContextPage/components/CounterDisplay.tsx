import * as React from 'react';
import { DemoContext } from '../context';

export const CounterDisplay: React.FC = () => {
  const { counter } = React.useContext(DemoContext);

  return (
    <p>
      <code>counter: {counter}</code>
    </p>
  );
};
