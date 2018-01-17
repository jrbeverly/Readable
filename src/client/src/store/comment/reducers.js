import * as Types from 'store/types';

function comments(state = {}, action) {
  switch (action.type) {
    case Types.COMMENT.CREATE:
      return state;
    case Types.COMMENT.READ:
      return state;
    case Types.COMMENT.UPDATE:
      return state;
    case Types.COMMENT.DELETE:
      return state;
    case Types.COMMENT.VOTE:
      return state;
    default:
      return state;
  }
}

export default comments;
