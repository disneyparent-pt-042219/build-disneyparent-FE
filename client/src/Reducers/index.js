import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import PostsReducer from './PostsReducer';
import commentsReducer from './CommentsReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  posts: PostsReducer,
  comments: commentsReducer,
});

export default rootReducer;
