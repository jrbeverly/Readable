import * as Types from 'store/types';

function categories(state = [], action) {
  switch (action.type) {
    case Types.CATEGORY.READ:
      return action.categories;
    default:
      return state;
  }
}

export default categories;
