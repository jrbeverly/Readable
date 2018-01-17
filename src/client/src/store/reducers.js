import { combineReducers } from 'redux'

import posts from 'store/post/reducers'
import categories from 'store/category/reducers'
import comments from 'store/comment/reducers'

export default combineReducers({
  posts,
  categories,
  comments
});