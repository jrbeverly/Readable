import * as Types from 'store/types';

function posts(state = [], action) {
  switch (action.type) {
    case Types.POST.READ:
    return action.posts.filter(post => !(post.deleted))
    case Types.POST.BY_CATEGORY:
      return state;
    case Types.POST.CREATE:
      return state;
    case Types.POST.UPDATE:
      return state;
    case Types.POST.DELETE:
      return state;
    case Types.POST.VOTE:
      return state;
    case Types.POST.SORT:
      return state;
    default:
      return state;
  }
}

export default posts;
