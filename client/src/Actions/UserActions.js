export const IS_LOGGING_IN = 'IS_LOGGING_IN';

export const login = user => (dispatch) => {
  
  dispatch({ type: IS_LOGGING_IN });
};


