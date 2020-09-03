export const FormReducer = (state, action) => {
  switch (action.type) {
  case 'GET_APPOINTMENT':
    return {
      ac: action.payload,
    };
  default:
    return state;
  }
};
