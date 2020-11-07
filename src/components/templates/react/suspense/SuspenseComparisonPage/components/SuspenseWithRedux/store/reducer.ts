import { Post } from '../../../../../../../../utils/fakeAPI';
import { Action } from './actions';

export type State = {
  isLoading: boolean;
  posts: Post[];
};

const initialState: State = {
  isLoading: false,
  posts: [],
};

export const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'START_LOADING_POSTS':
      return {
        ...state,
        isLoading: true,
      };
    case 'FINISH_LOADING_POSTS':
      return {
        ...state,
        isLoading: false,
      };
    case 'UPDATE_POSTS':
      return {
        ...state,
        posts: action.payload.posts,
      };
    default:
      return state;
  }
};
