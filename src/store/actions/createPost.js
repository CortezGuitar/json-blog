const createPostRequested = () => {
  return {
    type: 'CREATE_POST_REQUEST'
  };
};

const createPostLoaded = post => {
  return {
    type: 'CREATE_POST_SUCCESS',
    payload: post
  };
};

const createPostError = error => {
  return {
    type: 'CREATE_POST_FAILURE',
    payload: error
  };
};

const createPost = jsonService => body => dispatch => {
  dispatch(createPostRequested());
  jsonService
    .createPost(body)
    .then(data => dispatch(createPostLoaded(data)))
    .catch(error => dispatch(createPostError(error)));
};

export default createPost;
