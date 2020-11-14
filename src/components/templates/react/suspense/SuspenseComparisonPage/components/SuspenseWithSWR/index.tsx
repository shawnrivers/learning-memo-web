import * as React from 'react';
import useSWR from 'swr';
import { fetchPosts, Post } from '../../../../../../../utils/fakeAPI';
import { DataContainer } from '../../../../../../atoms/DataContainer';

const Posts: React.FC<{
  getPosts: () => Post[];
}> = (props) => {
  const posts = props.getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
};

const PostsContainer: React.FC = () => {
  const getPosts = usePostsResource();

  return (
    <DataContainer>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Posts getPosts={getPosts} />
      </React.Suspense>
    </DataContainer>
  );
};

export const SuspenseWithSWR: React.FC = () => {
  return (
    <section>
      <h2>Suspense with SWR</h2>
      <PostsContainer />
    </section>
  );
};

const SWR_POSTS_API_KEY = 'api/posts';

function usePostsResource(): () => Post[] {
  useSWR(SWR_POSTS_API_KEY, fetchPosts);

  return React.useCallback(() => {
    const { data } = useSWR(SWR_POSTS_API_KEY, fetchPosts, { suspense: true });
    return data;
  }, []);
}
