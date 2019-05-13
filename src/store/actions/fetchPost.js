const postRequested = () => {
  return {
    type: 'FETCH_POST_REQUEST'
  };
};

const postLoaded = posts => {
  return {
    type: 'FETCH_POST_SUCCESS',
    payload: posts
  };
};

const postsError = error => {
  return {
    type: 'FETCH_POST_FAILURE',
    payload: error
  };
};

const fetchPosts = jsonService => id => dispatch => {
  dispatch(postRequested());
  jsonService
    .getPost(id)
    .then(data => dispatch(postLoaded(data)))
    .catch(error => dispatch(postsError(error)));
};

export default fetchPosts;
