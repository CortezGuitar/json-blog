const postsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case 'FETCH_USERPOSTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_USERPOSTS_SUCCESS':
      return {
        ...state,
        userPosts: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_USERPOSTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'FETCH_POSTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: state.posts.concat(action.payload),
        loading: false,
        error: null
      };
    case 'FETCH_POSTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'FETCH_POST_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_POST_SUCCESS':
      return {
        ...state,
        post: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_POST_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'CREATE_POST_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'CREATE_POST_SUCCESS':
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
        error: null
      };
    case 'CREATE_POST_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default postsReducer;
