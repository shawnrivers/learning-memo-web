import { Post } from '../../../../../../data/posts';
import { GetPostsResponse } from '../../../../../../pages/api/post';

export async function fetchPosts(): Promise<GetPostsResponse['data']> {
  const response = await fetch('http://localhost:3000/api/post');
  const { data } = (await response.json()) as GetPostsResponse;

  return data;
}
