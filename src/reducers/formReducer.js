export const FormReducer = (state, action) => {
  switch (action.type) {
  case 'GET_APPOINTMENT':
    console.log(action.payload);
    return {
      ac: action.payload,
    };
  default:
    return state;
  }
};
