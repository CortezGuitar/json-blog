const userRequested = () => {
  return {
    type: 'FETCH_USER_REQUEST'
  };
};

const userLoaded = user => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: user
  };
};

const userError = error => {
  return {
    type: 'FETCH_USER_FAILURE',
    payload: error
  };
};

const fetchUser = jsonService => id => dispatch => {
  dispatch(userRequested());
  jsonService
    .getUser(id)
    .then(data => dispatch(userLoaded(data)))
    .catch(error => dispatch(userError(error)));
};

export default fetchUser;
