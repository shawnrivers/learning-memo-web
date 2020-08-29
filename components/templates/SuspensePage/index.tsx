import * as React from 'react';
import { Divider } from '../../../components/atoms/Divider';
import { StyledButton } from '../../../components/atoms/styled/StyledButton';
import { TopicPage } from '../../../components/templates/TopicPage';
import { PostsFetchAfterRender } from './components/PostsFetchAfterRender';
import { PostsFetchBeforeRender } from './components/PostsFetchBeforeRender';
import { ErrorBoundary } from './components/ErrorBoundary';
import {
  fetchPostsData,
  fetchPostsRejectData,
  Post,
  Resource,
} from './utils/fakeAPI';

const TextToLoadLazy = React.lazy(() => import('./components/TextToLoad'));

export const SuspensePage: React.FC = () => {
  const [shouldLoadText, loadText] = React.useState(false);

  const [postsOnMountResource, setPostsOnMountResource] = React.useState<
    Resource<Post[]>
  >();

  React.useEffect(() => {
    const resource = fetchPostsData();
    setPostsOnMountResource(resource);
  }, []);

  const [postsResource, setPostsResource] = React.useState<Resource<Post[]>>();
  const handleLoadData = React.useCallback(() => {
    const resource = fetchPostsData();
    setPostsResource(resource);
  }, [setPostsResource]);

  const [postsRejectResource, setPostsRejectResource] = React.useState<
    Resource<Post[]>
  >();
  const handleLoadRejectData = React.useCallback(() => {
    const resource = fetchPostsRejectData();
    setPostsRejectResource(resource);
  }, [setPostsRejectResource]);

  return (
    <TopicPage heading='Suspense with Data Fetching'>
      <h2>Code Splitting</h2>
      <React.Suspense fallback={<p>Loading text...</p>}>
        {shouldLoadText ? (
          <TextToLoadLazy />
        ) : (
          <StyledButton onClick={() => loadText(true)}>Load Text</StyledButton>
        )}
      </React.Suspense>
      <Divider />
      <h2>Data Fetching</h2>
      <h3>Fetch Before Render</h3>
      <React.Suspense fallback={<p>Loading data...</p>}>
        <PostsFetchBeforeRender />
      </React.Suspense>
      <h3>Fetch After Mounting</h3>
      <React.Suspense fallback={<p>Loading data...</p>}>
        {postsOnMountResource && (
          <PostsFetchAfterRender resource={postsOnMountResource} />
        )}
      </React.Suspense>
      <h3>Fetch After Interaction</h3>
      <React.Suspense fallback={<p>Loading data...</p>}>
        {postsResource && <PostsFetchAfterRender resource={postsResource} />}
      </React.Suspense>
      <StyledButton onClick={handleLoadData}>Load Data</StyledButton>
      <h3>Fetch After Interaction (reject)</h3>
      <ErrorBoundary fallback={<p>Data rejected</p>}>
        <React.Suspense fallback={<p>Loading data...</p>}>
          {postsRejectResource && (
            <PostsFetchAfterRender resource={postsRejectResource} />
          )}
        </React.Suspense>
      </ErrorBoundary>
      <StyledButton onClick={handleLoadRejectData}>
        Load Reject Data
      </StyledButton>
    </TopicPage>
  );
};
