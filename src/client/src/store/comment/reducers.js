import * as Types from 'store/types';

function comments(state = {}, action) {
  const { comments, commentId, parentId, updatedComment } = action;
  switch (action.type) {
    case Types.COMMENT.READ:
      return Object.assign({}, state, {[parentId]: comments});
    case Types.COMMENT.VOTE:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if (comment.id === commentId) {
            comment = updatedComment;
          }
          return comment;
        }),
      };
    case Types.COMMENT.UPDATE:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if (comment.id === commentId) {
            comment = updatedComment;
          }
          return comment;
        }),
      };
    case Types.COMMENT.CREATE:
      return Object.assign({}, state, {[parentId]: comments});
    case Types.COMMENT.DELETE:
      return state;
    default:
      return state;
  }
}

export default comments;
