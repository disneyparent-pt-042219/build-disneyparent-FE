import { combineReducers } from 'redux';

import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  login: UserReducer,
});

export default rootReducer;
