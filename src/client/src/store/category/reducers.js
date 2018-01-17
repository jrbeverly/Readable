import * as Types from 'store/types';

function categories(state = {}, action) {
  switch (action.type) {
    case Types.CATEGORY.READ:
      return state;
    default:
      return state;
  }
}

export default categories;
