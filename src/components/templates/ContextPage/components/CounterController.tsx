import * as React from 'react';
import { StyledButton } from '../../../atoms/styled/StyledButton';
import { DemoContext } from '../context';

export const CounterController: React.FC<{
  type: 'increment' | 'decrement' | 'reset';
}> = ({ type }) => {
  const { incrementCounter, decrementCounter, resetCounter } = React.useContext(
    DemoContext
  );

  const handleClick = React.useCallback(() => {
    switch (type) {
      case 'increment':
        incrementCounter();
        break;
      case 'decrement':
        decrementCounter();
        break;
      case 'reset':
        resetCounter();
        break;
      default:
        break;
    }
  }, [type, incrementCounter, decrementCounter, resetCounter]);

  return <StyledButton onClick={handleClick}>{type}</StyledButton>;
};
