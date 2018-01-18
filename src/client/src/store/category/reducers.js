import {CATEGORY} from './types';

function categories(state = [], action) {
  switch (action.type) {
    case CATEGORY.READ:
      return action.categories;
    default:
      return state;
  }
}

export default categories;
