import * as React from 'react';
import { Post, Resource } from '../utils/fakeAPI';

export const PostsFetchAfterRender: React.FC<{
  resource: Resource<Post[]>;
}> = (props) => {
  const posts = props.resource.read();

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
};
