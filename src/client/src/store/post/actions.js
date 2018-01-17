import * as Types from 'store/types';
import * as Client from 'api/readable';

export const fetchAllPosts = () => {
  return dispatch => {
    Client.fetchPosts().then(posts => {
      dispatch({type: Types.POST.READ, posts});
    });
  };
};

export const fetchPostsByCategory = category => {
  return dispatch => {
    Client.fetchPostsByCategory(category).then(posts => {
      dispatch({
        type: Types.POST.BY_CATEGORY,
        posts,
      });
    });
  };
};

export const createPost = (post, callback) => {
  return dispatch => {
    Client.addPost(post).then(() => callback());
    dispatch({
      type: Types.POST.CREATE,
      post,
    });
  };
};

export const updatePost = (postId, title, body, callback) => {
  return dispatch => {
    Client.updatePost(postId, title, body)
      .then(updatedPost => {
        dispatch({
          type: Types.POST.UPDATE,
          updatedPost,
          postId,
        });
      })
      .then(() => callback());
  };
};

export const deletePost = (postId, callback) => {
  return dispatch => {
    Client.deletePost(postId).then(() => callback());
    dispatch({
      type: Types.POST.DELETE,
      postId,
    });
  };
};

export const votePost = (postId, option) => {
  return dispatch => {
    Client.votePost(postId, option).then(post => {
      dispatch({
        type: Types.POST.VOTE,
        postId,
        option,
      });
    });
  };
};

export const sortPost = sortKey => {
  return dispatch => {
    dispatch({type: Types.POST.SORT, sortKey});
  };
};
