export const API = 'http://localhost:3001';
let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

export const headers = {
  Accept: 'application/json',
  Authorization: token,
  'Content-Type': 'application/json',
};

export const fetchCategories = () => {
  return fetch(`${API}/categories`, {headers}).then(res => res.json());
};

export const addComment = comment => {};
export const fetchComment = parentId => {};
export const updateComment = (commentId, timestamp, body) => {};
export const deleteComment = commentId => {};
export const voteComment = (commentId, option) => {};

export const addPost = post => {};
export const fetchPosts = () => {
  return fetch(`${API}/posts`, {headers}).then(res => res.json());
};
export const fetchPostsByCategory = category => {};
export const updatePost = (postId, title, body) => {};
export const deletePost = postId => {};
export const votePost = (postId, option) => {};
