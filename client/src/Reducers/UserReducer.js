import {
  IS_LOGGING_IN,
  LOGGED_IN,
  LOGGED_IN_ERROR,
  CREATING_ACCOUNT,
  CREATING_ACCOUNT_ERROR,
  ACCOUNT_CREATED,
  LOGOUT,
} from '../Actions/UserActions';

const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  userName: '',
  loginError: '',
  creatingAccount: false,
  accountCreated: false,
  creatingAccountError: '',
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGING_IN:
      return {
        ...state,
        isLoggingIn: true,
      };
    case LOGGED_IN:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        userName: action.user.username,
      };
    case LOGGED_IN_ERROR:
      console.log('here is the status ', action.status);
      return {
        ...state,
        isLoggingIn: false,
        loginError: action.payload,
      };
    case CREATING_ACCOUNT:
      return {
        ...state,
        creatingAccount: true,
      };
    case ACCOUNT_CREATED:
      return {
        ...state,
        creatingAccount: false,
        accountCreated: true,
        isLoggedIn: true,
        userName: action.user.username,
      };
    case CREATING_ACCOUNT_ERROR:
      return {
        ...state,
        creatingAccount: false,
        creatingAccountError: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userName: '',
      };
    default:
      return state;
  }
};

export default UserReducer;
