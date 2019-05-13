const commentsRequested = () => {
  return {
    type: 'FETCH_COMMENTS_REQUEST'
  };
};

const commentsLoaded = comments => {
  return {
    type: 'FETCH_COMMENTS_SUCCESS',
    payload: comments
  };
};

const commentsError = error => {
  return {
    type: 'FETCH_COMMENTS_FAILURE',
    payload: error
  };
};

const fetchComments = jsonService => postId => dispatch => {
  dispatch(commentsRequested());
  jsonService
    .getComments(postId)
    .then(data => dispatch(commentsLoaded(data)))
    .catch(error => dispatch(commentsError(error)));
};

export default fetchComments;
