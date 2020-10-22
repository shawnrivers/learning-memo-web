/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { TopicPage } from '../../TopicPage';
import { ErrorBoundary } from '../../../atoms/ErrorBoundary';
import { UIErrorComponent } from './components/UIErrorComponent';
import { AsyncErrorComponent } from './components/AsyncErrorComponent';
import { EventHandlerErrorComponent } from './components/EventHandlerErrorComponent';
import { HybridErrorComponent } from './components/HybridErrorComponent';
import { AsyncErrorWithFallbackUIComponent } from './components/AsyncErrorWithFallbackUIComponent';
import { NormalJSErrorComponent } from './components/NormalJSErrorComponent';
import { Divider } from '../../../atoms/Divider';

const BoundaryContainer: React.FC = (props) => (
  <div
    css={css`
      border: 1px solid #ff5555;
      border-radius: 8px;
      padding: 1rem;
    `}
  >
    {props.children}
  </div>
);

export const ReactErrorPage: React.FC = () => {
  return (
    <TopicPage heading='Error Handling'>
      <section>
        <h2>
          Errors <code>ErrorBoundary</code> can handle
        </h2>

        <p>These errors will crash the whole app.</p>

        <section>
          <h3>UI errors</h3>
          <p>
            UI errors will be caught by <code>ErrorBoundary</code>.
            <br />
            Without <code>ErrorBoundary</code>, the whole app will crash.
          </p>
          <BoundaryContainer>
            <ErrorBoundary>
              <UIErrorComponent />
            </ErrorBoundary>
          </BoundaryContainer>
        </section>

        <section>
          <h3>Normal JS errors</h3>
          <p>
            Normal JS errors will be caught by <code>ErrorBoundary</code>.
            <br />
            Without <code>ErrorBoundary</code>, the whole app will crash.
          </p>
          <BoundaryContainer>
            <ErrorBoundary>
              <NormalJSErrorComponent />
            </ErrorBoundary>
          </BoundaryContainer>
        </section>
      </section>

      <Divider />

      <section>
        <h2>
          Errors <code>ErrorBoundary</code> can not handle
        </h2>

        <p>These errors will not crash the whole app.</p>

        <section>
          <h3>Async JS errors</h3>
          <p>
            Async JS errors component will <b>not</b> be caught by{' '}
            <code>ErrorBoundary</code>.
            <br />
            Use <code>try</code>/<code>catch</code> to handle these errors.
          </p>
          <BoundaryContainer>
            <ErrorBoundary>
              <AsyncErrorComponent />
            </ErrorBoundary>
          </BoundaryContainer>
        </section>

        <section>
          <h3>Event handler errors</h3>
          <p>
            Event handlers errors will <b>not</b> be caught by{' '}
            <code>ErrorBoundary</code>.
            <br />
            Use <code>try</code>/<code>catch</code> to handle these errors.
          </p>
          <BoundaryContainer>
            <ErrorBoundary>
              <EventHandlerErrorComponent />
            </ErrorBoundary>
          </BoundaryContainer>
        </section>

        <section>
          <h3>UI + async JS errors</h3>
          <p>
            UI errors will be caught by <code>ErrorBoundary</code>, but async JS
            errors will not.
            <br />
            <code>ErrorBoundary</code> shows fallback UI for UI errors.
            <br />
            Use <code>try</code>/<code>catch</code> to handle async JS errors.
          </p>
          <BoundaryContainer>
            <ErrorBoundary>
              <HybridErrorComponent />
            </ErrorBoundary>
          </BoundaryContainer>
        </section>

        <section>
          <h3>Async JS errors with fallback UI</h3>
          <p>
            We can manually add custom fallback UI for async JS errors in{' '}
            <code>try</code>/<code>catch</code>.
          </p>
          <BoundaryContainer>
            <ErrorBoundary>
              <AsyncErrorWithFallbackUIComponent />
            </ErrorBoundary>
          </BoundaryContainer>
        </section>
      </section>
    </TopicPage>
  );
};
