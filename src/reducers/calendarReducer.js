/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export const calendarReducer = (state, action) => {
  //const cita = state.cita !== undefined ? state.cita : ;
  switch (action.type) {
  case 'ADD_APPOINTMENT':
    const myArray = state.cita || [];
    console.log(action.payload);
    myArray.push(action.payload);
    return {
      ...state,
      cita: myArray,
    };
  default:
    return state;
  }
};
  
