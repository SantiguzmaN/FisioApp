/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export const homeBoardReducer = (state, action) => {
  switch (action.type) {
  case 'SET_STATE':
    return {
      ...state,
      toOpen: action.payload
    };

  default:
    return state;
  }
};
