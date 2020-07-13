/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GRAY_0 } from './constants/colors';
import { allRoutes } from './constants/routes';
import HomePage from './pages/home/template';

const App: React.FC = () => {
  const [codeSplit, setCodeSplit] = React.useState(true);
  const handleCodeSplitSwitch = () => setCodeSplit(!codeSplit);

  return (
    <BrowserRouter>
      <div
        css={css`
          text-align: center;
          background-color: ${GRAY_0};
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
        `}
      >
        {codeSplit ? (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route path='/' exact>
                <HomePage
                  isCodeSplitOn={codeSplit}
                  onSwitchCodeSplit={handleCodeSplitSwitch}
                />
              </Route>
              {allRoutes.map(({ to, name, PageComponentLazy }) => (
                <Route key={name} path={to} exact>
                  <PageComponentLazy />
                </Route>
              ))}
            </Switch>
          </React.Suspense>
        ) : (
          <Switch>
            <Route path='/' exact>
              <HomePage
                isCodeSplitOn={codeSplit}
                onSwitchCodeSplit={handleCodeSplitSwitch}
              />
            </Route>
            {allRoutes.map(({ to, name, PageComponent }) => (
              <Route key={name} path={to} exact>
                <PageComponent />
              </Route>
            ))}
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
