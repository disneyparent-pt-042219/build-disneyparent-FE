import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import PostsReducer from './PostsReducer'

const rootReducer = combineReducers({
  login: UserReducer,
  posts: PostsReducer,
});

export default rootReducer;
