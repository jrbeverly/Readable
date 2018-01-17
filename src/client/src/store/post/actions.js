import * as Types from 'store/types';
import * as Client from 'api/readable';

export const fetchAllPosts = () => {
  return dispatch => {
    Client.fetchPosts().then(posts => {
      dispatch({type: Types.POST.READ, posts});
    });
  };
};
