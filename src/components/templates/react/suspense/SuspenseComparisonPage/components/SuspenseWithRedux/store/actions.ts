import { Post } from '../../../../../../../../utils/fakeAPI';

export type Action =
  | {
      type: 'START_LOADING_POSTS';
    }
  | {
      type: 'FINISH_LOADING_POSTS';
    }
  | {
      type: 'UPDATE_POSTS';
      payload: {
        posts: Post[];
      };
    };

export function startLoadingPosts(): Action {
  return { type: 'START_LOADING_POSTS' };
}

export function finishLoadingPosts(): Action {
  return { type: 'FINISH_LOADING_POSTS' };
}

export function updatePosts(posts: Post[]): Action {
  return { type: 'UPDATE_POSTS', payload: { posts } };
}
