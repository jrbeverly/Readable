import {POST} from './types';
import sortBy from 'sort-by';

function posts(state = [], action) {
  const {posts, post, postId, updatedPost, sortKey} = action;
  switch (action.type) {
    case POST.CREATE:
      return state.concat([post]);
    case POST.READ:
      return action.posts.filter(post => !post.deleted);
    case POST.BY_CATEGORY:
      return posts.filter(post => !post.deleted);
    case POST.UPDATE:
      return state.map(post => {
        if (post.id === postId) {
          post = updatedPost;
        }
        return post;
      });
    case POST.DELETE:
      return state.filter(post => post.id !== postId);
    case POST.VOTE:
      return state.map(post => {
        if (post.id === action.postId) {
          if (action.option === 'upVote') {
            post.voteScore += 1;
          }
          if (action.option === 'downVote') {
            post.voteScore -= 1;
          }
        }
        return post;
      });
    case POST.SORT:
      return [].concat(state.sort(sortBy('-' + sortKey)));
    default:
      return state;
  }
}

export default posts;
