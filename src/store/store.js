import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { postsReducer, userReducer, commentsReducer } from './reducers';

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  comments: commentsReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
