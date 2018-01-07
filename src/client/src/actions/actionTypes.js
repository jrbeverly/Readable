/**
 * @description Represents the actions that can be performed on categories;
 */
export const CATEGORY = {
  READ: 'CATEGORY/READ',
};

/**
 * @description Represents the actions that can be performed on comments.
 */
export const COMMENT = {
  CREATE: 'COMMENT/CREATE',
  READ: 'COMMENT/READ',
  UPDATE: 'COMMENT/UPDATE',
  DELETE: 'COMMENT/DELETE',
  VOTE: 'COMMENT/VOTE',
};

/**
 * @description Represents the actions that can be performed on posts;
 */
export const POST = {
  CREATE: 'POST/CREATE',
  READ: 'POST/READ',
  UPDATE: 'POST/UPDATE',
  DELETE: 'POST/DELETE',
  VOTE: 'POST/VOTE',
  SORT: 'POST/SORT',
  BY_CATEGORY: 'POST/BY_CATEGORY',
};