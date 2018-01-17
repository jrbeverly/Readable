import * as Types from 'store/types'
import sortBy from 'sort-by'

function posts(state=[], action) {
  const { posts, post, postId, updatedPost, sortKey } = action
  switch(action.type) {
    case Types.POST.READ:
      return action.posts.filter(post => !(post.deleted))
    case Types.POST.BY_CATEGORY:
      return posts.filter(post => !(post.deleted))
    case Types.POST.CREATE:
      return state.concat([post])
    case Types.POST.UPDATE:
      return state.map(post => {
        if(post.id === postId) {
          post = updatedPost
        }
        return post
      })
    case Types.POST.DELETE:
      return state.filter(post => post.id !== postId)
    case Types.POST.VOTE:
      return state.map(post => {
        if (post.id === action.postId) {
          if (action.option === "upVote") {
            post.voteScore += 1
          }
          if (action.option === "downVote") {
            post.voteScore -= 1
          }
        }
        return post
      })
    case Types.POST.SORT:
      return [].concat(state.sort(sortBy("-"+sortKey)))
    default:
      return state
  }
}

export default posts
