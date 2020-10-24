import * as React from 'react';
import { TopicPage } from '../../components/templates/TopicPage';
import { fetchPosts, Post } from '../../utils/fakeAPI';

const ReactDataFetchingPage: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    // Use IIFE if you want to use async in lifecycle callback.
    (async function () {
      const postsResponse = await fetchPosts();
      setPosts(postsResponse);
    })();

    // Or just use old fashion Promise.then
    // fetchPosts().then((res) => setPosts(res));
  }, []);

  return (
    <TopicPage heading='Data fetching'>
      <h2>Post data</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.text}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </TopicPage>
  );
};

export default ReactDataFetchingPage;
