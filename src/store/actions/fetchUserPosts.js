const userPostsRequested = () => {
  return {
    type: 'FETCH_USERPOSTS_REQUEST'
  };
};

const userPostsLoaded = posts => {
  return {
    type: 'FETCH_USERPOSTS_SUCCESS',
    payload: posts
  };
};

const userPostsError = error => {
  return {
    type: 'FETCH_USERPOSTS_FAILURE',
    payload: error
  };
};

const fetchUserPosts = jsonService => id => dispatch => {
  dispatch(userPostsRequested());
  jsonService
    .getUserPosts(id)
    .then(data => dispatch(userPostsLoaded(data)))
    .catch(error => dispatch(userPostsError(error)));
};

export default fetchUserPosts;
