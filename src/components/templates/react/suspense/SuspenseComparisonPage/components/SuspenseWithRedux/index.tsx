import * as React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, Post } from '../../../../../../../utils/fakeAPI';
import { DataContainer } from '../../../../../../atoms/DataContainer';
import {
  finishLoadingPosts,
  startLoadingPosts,
  updatePosts,
} from './store/actions';
import { ReduxStoreProvider } from './store/context';
import { State } from './store/reducer';

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

export const SuspenseWithRedux: React.FC = () => {
  return (
    <ReduxStoreProvider>
      <section>
        <h2>Suspense with Redux</h2>
        <PostsContainer />
      </section>
    </ReduxStoreProvider>
  );
};

async function getPosts(dispatch: Dispatch): Promise<void> {
  dispatch(startLoadingPosts());
  const posts = await fetchPosts();
  dispatch(updatePosts(posts));
  dispatch(finishLoadingPosts());
}

function usePostsResource(): () => Post[] {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: State) => state.isLoading);
  const posts = useSelector((state: State) => state.posts);

  const promise = React.useMemo(() => {
    return getPosts(dispatch);
  }, [dispatch]);

  return React.useCallback(() => {
    if (isLoading) {
      throw promise;
    }

    return posts;
  }, [posts, isLoading, promise]);
}
