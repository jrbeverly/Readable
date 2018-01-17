//TODO: Move to object model (e.g. Readable.API("localhost:3001") => object with params)
export const API = 'http://localhost:3001';
let token = localStorage.token;

if (!token) {
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);
}

function guid() {
  function random() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return random()
}

export const headers = {
  Accept: 'application/json',
  Authorization: token,
  'Content-Type': 'application/json',
};

export const routes = {
  categories: {
    fetch: api => `${api}/categories`,
  },
  comments: {
    add: api => `${api}/comments`,
    fetch: (api, parentId) => `${api}/posts/${parentId}/comments`,
    update: (api, commentId) => `${api}/comments/${commentId}`,
    delete: (api, commentId) => `${api}/comments/${commentId}`,
    vote: (api, commentId) => `${api}/comments/${commentId}`,
  },
  posts: {
    add: api => `${api}/posts`,
    fetch: api => `${api}/posts/`,
    fetchByCategory: (api, category) => `${api}/${category}/posts`,
    update: (api, postId) => `${api}/posts/${postId}`,
    delete: (api, postId) => `${api}/posts/${postId}`,
    vote: (api, postId) => `${api}/posts/${postId}`,
  },
};

/*
Categories
*/

export const fetchCategories = () => {
  return fetch(routes.categories.fetch(API), {headers}).then(res => res.json());
};

/*
Comments
*/

export const addComment = comment => {
  comment.id = guid();
  return fetch(routes.comments.add(API), {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(comment),
  }).then(res => res.json());
};

export const fetchComment = parentId => {
  return fetch(routes.comments.fetch(API, parentId), {headers}).then(res =>
    res.json()
  );
};

export const updateComment = (commentId, timestamp, body) => {
  return fetch(routes.comments.update(API, commentId), {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({timestamp: timestamp, body: body}),
  }).then(res => res.json());
};

export const deleteComment = commentId => {
  return fetch(routes.comments.delete(API, commentId), {
    method: 'DELETE',
    headers: headers,
  }).then(res => res.json());
};

export const voteComment = (commentId, option) => {
  return fetch(routes.comments.vote(API, commentId), {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({option}),
  }).then(res => res.json());
};

/*
Posts
*/

export const addPost = post => {
  post.id = guid();
  return fetch(routes.posts.add(API), {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(post),
  });
};

export const fetchPosts = () => {
  return fetch(routes.posts.fetch(API), {headers}).then(res => res.json());
};

export const fetchPostsByCategory = category => {
  return fetch(routes.posts.fetchByCategory(API, category), {headers}).then(
    res => res.json()
  );
};

export const updatePost = (postId, title, body) => {
  return fetch(routes.posts.update(API, postId), {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({title: title, body: body}),
  }).then(res => res.json());
};

export const deletePost = postId => {
  return fetch(routes.posts.delete(API, postId), {
    method: 'DELETE',
    headers: headers,
  }).then(res => res.json());
};

export const votePost = (postId, option) => {
  return fetch(routes.posts.vote(API, postId), {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({option}),
  }).then(res => res.json());
};
