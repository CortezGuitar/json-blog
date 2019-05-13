const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_COMMENTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_COMMENTS_SUCCESS':
      return {
        ...state,
        comments: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_COMMENTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'CREATE_COMMENT_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'CREATE_COMMENT_SUCCESS':
      return {
        ...state,
        comments: [action.payload, ...state.comments],
        loading: false,
        error: null
      };
    case 'CREATE_COMMENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default commentsReducer;
