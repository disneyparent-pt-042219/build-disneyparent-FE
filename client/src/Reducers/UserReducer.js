import { IS_LOGGING_IN } from '../Actions/UserActions';

const initialState = {
  isLogginIn: false,
  isLoggedIn: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGING_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default UserReducer;
