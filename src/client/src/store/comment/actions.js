import {COMMENT} from './types';
import * as Client from 'api/readable';

export const fetchComments = parentId => {
  return dispatch => {
    Client.fetchComment(parentId).then(comments => {
      dispatch({
        type: COMMENT.READ,
        parentId,
        comments,
      });
    });
  };
};

export const createComment = (comment, parentId, callback) => {
  return dispatch => {
    Client.addComment(comment)
      .then(comment => {
        dispatch({
          type: COMMENT.CREATE,
          parentId,
          comment,
        });
      })
      .then(() => callback());
  };
};

export const deleteComment = (commentId, callback) => {
  return dispatch => {
    Client.deleteComment(commentId).then(() => callback());
    dispatch({
      type: COMMENT.DELETE,
      commentId,
    });
  };
};

export const voteComment = (commentId, parentId, option) => {
  return dispatch => {
    Client.voteComment(commentId, option).then(updatedComment => {
      dispatch({
        type: COMMENT.VOTE,
        updatedComment,
        commentId,
        parentId,
      });
    });
  };
};

export const updateComment = (
  commentId,
  parentId,
  timestamp,
  body,
  callback
) => {
  return dispatch => {
    Client.updateComment(commentId, timestamp, body)
      .then(updatedComment => {
        dispatch({
          type: COMMENT.UPDATE,
          updatedComment,
          commentId,
          parentId,
        });
      })
      .then(() => callback());
  };
};
