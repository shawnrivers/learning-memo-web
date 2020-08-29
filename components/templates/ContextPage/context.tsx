import * as React from 'react';
import { initialState, reducer } from './reducer';

type DemoContextType = {
  counter: number;
  incrementCounter(): void;
  decrementCounter(): void;
  resetCounter(): void;
};

export const DemoContext = React.createContext<DemoContextType>({
  counter: initialState.counter,
  incrementCounter: () => null,
  decrementCounter: () => null,
  resetCounter: () => null,
});

export const DemoContextProvider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const incrementCounter = React.useCallback(() => {
    dispatch({ type: 'COUNTER_INCREMENT' });
  }, [dispatch]);

  const decrementCounter = React.useCallback(() => {
    dispatch({ type: 'COUNTER_DECREMENT' });
  }, [dispatch]);

  const resetCounter = React.useCallback(() => {
    dispatch({ type: 'COUNTER_RESET' });
  }, [dispatch]);

  return (
    <DemoContext.Provider
      value={{
        counter: state.counter,
        incrementCounter,
        decrementCounter,
        resetCounter,
      }}
    >
      {props.children}
    </DemoContext.Provider>
  );
};
