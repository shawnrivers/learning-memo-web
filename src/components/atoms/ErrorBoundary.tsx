/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';

type ErrorBoundaryProps = {
  fallback?: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = { hasError: false };

  static defaultProps = {
    fallback: (
      <p
        css={css`
          color: #ff5555;
        `}
      >
        Something went wrong!
      </p>
    ),
  };

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error) {
    console.error('[ErrorBoundary] Error caught:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
