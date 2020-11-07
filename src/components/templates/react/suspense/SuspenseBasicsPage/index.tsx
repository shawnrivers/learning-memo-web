import * as React from 'react';
import { Divider } from '../../../../atoms/Divider';
import { StyledButton } from '../../../../atoms/styled/StyledButton';
import { TopicPage } from '../../../TopicPage';
import { PostsFetchOnRender } from './components/PostsFetchAfterRender';
import { PostsFetchBeforeRender } from './components/PostsFetchBeforeRender';
import { ErrorBoundary } from '../../../../atoms/ErrorBoundary';
import {
  fetchPostsResource,
  fetchPostsRejectResource,
  Post,
  Resource,
} from '../../../../../utils/fakeAPI';

const TextToLoadLazy = React.lazy(() => import('./components/TextToLoad'));

export const SuspenseBasicsPage: React.FC = () => {
  const [shouldLoadText, loadText] = React.useState(false);

  const [postsOnMountResource, setPostsOnMountResource] = React.useState<
    Resource<Post[]>
  >();

  React.useEffect(() => {
    const resource = fetchPostsResource();
    setPostsOnMountResource(resource);
  }, []);

  const postsOnRenderResource = React.useMemo(() => fetchPostsResource(), []);

  const [postsResource, setPostsResource] = React.useState<Resource<Post[]>>();
  const handleLoadData = React.useCallback(() => {
    const resource = fetchPostsResource();
    setPostsResource(resource);
  }, [setPostsResource]);

  const [postsRejectResource, setPostsRejectResource] = React.useState<
    Resource<Post[]>
  >();
  const handleLoadRejectData = React.useCallback(() => {
    const resource = fetchPostsRejectResource();
    setPostsRejectResource(resource);
  }, [setPostsRejectResource]);

  return (
    <TopicPage heading='Suspense with Data Fetching'>
      <section>
        <h2>Code Splitting</h2>
        <React.Suspense fallback={<p>Loading text...</p>}>
          {shouldLoadText ? (
            <TextToLoadLazy />
          ) : (
            <StyledButton onClick={() => loadText(true)}>
              Load Text
            </StyledButton>
          )}
        </React.Suspense>
      </section>

      <Divider />

      <section>
        <h2>Data Fetching</h2>

        <section>
          <h3>Fetch Before Render</h3>
          <React.Suspense fallback={<p>Loading data...</p>}>
            <PostsFetchBeforeRender />
          </React.Suspense>
        </section>

        <section>
          <h3>Fetch On Render</h3>
          <React.Suspense fallback={<p>Loading data...</p>}>
            <PostsFetchOnRender resource={postsOnRenderResource} />
          </React.Suspense>
        </section>

        <section>
          <h3>Fetch After Mounting</h3>
          <React.Suspense fallback={<p>Loading data...</p>}>
            {postsOnMountResource && (
              <PostsFetchOnRender resource={postsOnMountResource} />
            )}
          </React.Suspense>
        </section>

        <section>
          <h3>Fetch After Interaction</h3>
          <React.Suspense fallback={<p>Loading data...</p>}>
            {postsResource && (
              <PostsFetchOnRender resource={postsResource} />
            )}
          </React.Suspense>
          <StyledButton onClick={handleLoadData}>Load Data</StyledButton>
        </section>

        <section>
          <h3>Fetch After Interaction (reject)</h3>
          <ErrorBoundary fallback={<p>Data rejected</p>}>
            <React.Suspense fallback={<p>Loading data...</p>}>
              {postsRejectResource && (
                <PostsFetchOnRender resource={postsRejectResource} />
              )}
            </React.Suspense>
          </ErrorBoundary>
          <StyledButton onClick={handleLoadRejectData}>
            Load Reject Data
          </StyledButton>
        </section>
      </section>
    </TopicPage>
  );
};
