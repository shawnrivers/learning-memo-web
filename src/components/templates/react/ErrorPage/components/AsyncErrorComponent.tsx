import * as React from 'react';
import { fetchPostsReject } from '../../../../../utils/fakeAPI';

export const AsyncErrorComponent: React.FC = () => {
  React.useEffect(() => {
    fetchPostsReject();
  }, []);

  return null;
};
