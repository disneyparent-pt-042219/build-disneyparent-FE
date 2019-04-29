import axios from 'axios';

export const IS_LOGGING_IN = 'IS_LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_IN_ERROR = 'LOGGED_IN_ERROR';

// TODO Need to verify post url
export const login = user => (dispatch) => {
  dispatch({ type: IS_LOGGING_IN });
  return axios
    .post('/', user)
    .then((res) => {
      dispatch({ type: LOGGED_IN, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: LOGGED_IN_ERROR, payload: err });
    });
};

export const CREATING_ACCOUNT = 'CREATING_ACCOUNT';
export const CREATING_ACCOUNT_ERROR = 'CREATING_ACCOUNT_ERROR';
export const ACCOUNT_CREATED = 'CREATING_ACCOUNT';

// TODO Need to verify post url
export const createUser = user => (dispatch) => {
  dispatch({ type: CREATING_ACCOUNT });
  return axios
    .post('/register', user)
    .then((res) => {
      dispatch({ type: ACCOUNT_CREATED, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: CREATING_ACCOUNT_ERROR, payload: err });
    });
};
