/* eslint-disable import/prefer-default-export */
export const userReducer = (state, action) => {
  switch (action.type) {
  case 'USER_SIGN_IN':
    return {
      ...state,
      user: action.payload
    };
  case 'USER_SIGN_OUT':
    return {};
  default:
    return state;
  }
};
