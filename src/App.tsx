/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { allRoutes } from './constants/routes';
import HomePage from './pages/home/template';

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
          {allRoutes.map(({ to, name, PageComponent }) => (
            <Route key={name} path={to} exact>
              <PageComponent />
            </Route>
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
