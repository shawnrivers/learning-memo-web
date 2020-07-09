/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UseRefPage } from './pages/useRef/template';
import { HomePage } from './pages/home/template';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div
        css={css`
          text-align: center;
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
        `}
      >
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/useRef' exact>
            <UseRefPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
