import { IS_LOGGING_IN } from '../Actions';

const initialState = {
  isLogginIn: false,
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
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

export default reducer;
