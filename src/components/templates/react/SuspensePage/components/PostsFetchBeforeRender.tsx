import * as React from 'react';
import { fetchPostsData } from '../../../../../utils/fakeAPI';

const resource = fetchPostsData();

export const PostsFetchBeforeRender: React.FC = () => {
  const posts = resource.read();

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
};
