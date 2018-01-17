import * as Types from 'store/types';
import * as Client from 'api/readable';

export const fetchCategories = () => {
  return dispatch => {
    Client.fetchCategories().then(categories => {
      dispatch({
        type: Types.CATEGORY.READ,
        categories,
      });
    });
  };
};
