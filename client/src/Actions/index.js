export const IS_LOGGING_IN = 'IS_LOGGING_IN';

export const login = user => (dispatch) => {
  console.log(user);
  dispatch({ type: IS_LOGGING_IN });
};
