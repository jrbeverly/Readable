import {CATEGORY} from './types';
import * as Client from 'api/readable';

export const fetchCategories = () => {
  return dispatch => {
    Client.fetchCategories().then(res => {
      dispatch({
        type: CATEGORY.READ,
        categories: res.categories,
      });
    });
  };
};
