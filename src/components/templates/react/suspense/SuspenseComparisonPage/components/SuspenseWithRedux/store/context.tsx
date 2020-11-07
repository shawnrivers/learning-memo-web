import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer';

const store = createStore(reducer);

export const ReduxStoreProvider: React.FC = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
