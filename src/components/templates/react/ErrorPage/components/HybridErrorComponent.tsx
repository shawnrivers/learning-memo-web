import * as React from 'react';
import { fetchPostsReject } from '../../../../../utils/fakeAPI';

export const HybridErrorComponent: React.FC = () => {
  const [posts, setPosts] = React.useState<any>(null);

  React.useEffect(() => {
    fetchPostsReject().then((res) => setPosts(res));
  }, []);

  return <div>{posts.nonExist}</div>;
};
