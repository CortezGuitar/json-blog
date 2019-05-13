const createCommentRequested = () => {
  return {
    type: 'CREATE_COMMENT_REQUEST'
  };
};

const createCommentLoaded = comment => {
  return {
    type: 'CREATE_COMMENT_SUCCESS',
    payload: comment
  };
};

const createCommentError = error => {
  return {
    type: 'CREATE_COMMENT_FAILURE',
    payload: error
  };
};

const createPost = jsonService => body => dispatch => {
  dispatch(createCommentRequested());
  jsonService
    .createComment(body)
    .then(data => dispatch(createCommentLoaded(data)))
    .catch(error => dispatch(createCommentError(error)));
};

export default createPost;
