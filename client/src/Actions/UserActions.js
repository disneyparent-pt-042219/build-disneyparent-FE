import axios from 'axios';

export const IS_LOGGING_IN = 'IS_LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_IN_ERROR = 'LOGGED_IN_ERROR';

export const CREATING_ACCOUNT = 'CREATING_ACCOUNT';
export const CREATING_ACCOUNT_ERROR = 'CREATING_ACCOUNT_ERROR';
export const ACCOUNT_CREATED = 'CREATING_ACCOUNT';

export const LOGOUT = 'LOGOUT';

const api = 'https://disney-parent-buildwk-42219.herokuapp.com';

// `${api}/login`
// `${api}/register`


// TODO Need to verify post url
export const login = user => (dispatch) => {
  dispatch({ type: IS_LOGGING_IN });
  return axios
    .post('http://localhost:9090/login', user)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', user.username);
      dispatch({ type: LOGGED_IN, payload: res.data, user });
    })
    .catch((err) => {
      dispatch({ type: LOGGED_IN_ERROR, payload: err });
    });
};

// TODO Need to verify post url
export const createUser = user => (dispatch) => {
  dispatch({ type: CREATING_ACCOUNT });
  return axios
    .post('http://localhost:9090/register', user)
    .then((res) => {
      dispatch({ type: ACCOUNT_CREATED, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: CREATING_ACCOUNT_ERROR, payload: err });
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  dispatch({ type: LOGOUT });
};
