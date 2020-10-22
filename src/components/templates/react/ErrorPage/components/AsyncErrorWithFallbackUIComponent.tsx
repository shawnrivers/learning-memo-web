import * as React from 'react';
import { fetchPostsReject } from '../../../../../utils/fakeAPI';

export const AsyncErrorWithFallbackUIComponent: React.FC = () => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    fetchPostsReject().catch(() => {
      setHasError(true);
    });
  }, []);

  return hasError ? <p>Something went wrong! (custom fallback UI)</p> : null;
};
