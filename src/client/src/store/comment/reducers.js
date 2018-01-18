import {COMMENT} from './types';

function comments(state = {}, action) {
  const {comments, commentId, parentId, updatedComment} = action;
  switch (action.type) {
    case COMMENT.CREATE:
      return Object.assign({}, state, {[parentId]: comments});
    case COMMENT.READ:
      return Object.assign({}, state, {[parentId]: comments});
    case COMMENT.UPDATE:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if (comment.id === commentId) {
            comment = updatedComment;
          }
          return comment;
        }),
      };
    case COMMENT.DELETE:
      return state;
    case COMMENT.VOTE:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if (comment.id === commentId) {
            comment = updatedComment;
          }
          return comment;
        }),
      };
    default:
      return state;
  }
}

export default comments;
