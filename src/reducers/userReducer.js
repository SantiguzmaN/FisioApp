/* eslint-disable no-undef */
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

    case 'SET_ALL_USERS':
      return {
        ...state,
        allUsers: action.payload,
      };

    case 'USER_TO_EDIT':
      return {
        ...state,
        userEdit: action.payload,
      };

    default:
      return state;
  }
};
