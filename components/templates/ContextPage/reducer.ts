type State = {
  counter: number;
};

export const initialState: State = {
  counter: 0,
};

type Action = {
  type: 'COUNTER_INCREMENT' | 'COUNTER_DECREMENT' | 'COUNTER_RESET';
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'COUNTER_INCREMENT':
      return { counter: state.counter + 1 };
    case 'COUNTER_DECREMENT':
      return { counter: state.counter - 1 };
    case 'COUNTER_RESET':
      return { counter: 0 };
    default:
      return state;
  }
};
